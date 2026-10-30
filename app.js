
const T={};[["あいうえお",""],["かきくけこ","k"],["さしすせそ","s"],["たちつてと","t"],["なにぬねの","n"],["はひふへほ","h"],["まみむめも","m"],["らりるれろ","r"],["がぎぐげご","g"],["ざじずぜぞ","z"],["だぢづでど","d"],["ばびぶべぼ","b"],["ぱぴぷぺぽ","p"]].forEach(([s,c])=>[..."aiueo"].forEach((v,j)=>T[s[j]]=c+v));
Object.assign(T,{し:"shi",ち:"chi",つ:"tsu",ふ:"fu",じ:"ji",ぢ:"ji",づ:"zu",や:"ya",ゆ:"yu",よ:"yo",わ:"wa",を:"o",ん:"n"});
function ro(s){if(s=="—")return"";s=s.replace(/[\u30A1-\u30F6]/g,c=>String.fromCharCode(c.charCodeAt(0)-96));let o="",g=false;const a=[...s];
for(let i=0;i<a.length;i++){const c=a[i];if(c=="・"){if(g){o+="Q";g=false}o+=" / ";continue}if(c=="っ"){g=true;continue}if(c=="ー"){o+=o.slice(-1);continue}
let r=T[c];if(!r){o+=c;continue}const n=a[i+1],y={ゃ:"a",ゅ:"u",ょ:"o"}[n];
if(y){const b=r.slice(0,-1);r=/(sh|ch|j)$/.test(b)?b+y:b+"y"+y;i++}
if(g){r=(r[0]=="c"?"t":r[0])+r;g=false}o+=r}if(g)o+="Q";return o}
const ALL=DATA.map(a=>({n:a[0],k:a[1],on:a[2],kun:a[3],ar:a[4],ex:a[5],w:a[5].replace(/\(.*\)/,""),exa:a[6]}));
const ranges=[["Semua (1–370)",1,370],["Part 1 (1–60)",1,60],["Part 2 (61–120)",61,120],["Part 3 (121–170)",121,170],["Part 4 (171–260)",171,260],["Part 5 (261–370)",261,370]];
for(let a=1;a<=361;a+=10){if(a>=41&&a<=50)continue;ranges.push([a+"–"+(a+9),a,a+9])}
let rng=ranges[0],deck=[],i=0,rev=false,onlyUnk=false,flip=false,known={};
try{known=JSON.parse(localStorage.getItem("kn3all")||"{}")}catch(e){}
const $=id=>document.getElementById(id);
function save(){try{localStorage.setItem("kn3all",JSON.stringify(known))}catch(e){}}
function build(shuffle){deck=ALL.filter(c=>c.n>=rng[1]&&c.n<=rng[2]&&(!onlyUnk||!known[c.n]));
 if(shuffle)deck.sort(()=>Math.random()-.5);i=0;flip=false;render()}
function render(){
 $("card").classList.toggle("flip",flip);
 const done=ALL.filter(c=>known[c.n]).length;
 $("pg").style.width=done/ALL.length*100+"%";$("st").textContent=`Hafal: ${done} / ${ALL.length} kanji`;
 if(!deck.length){$("front").innerHTML="<div class=pic>🎉</div><div class=v>Tidak ada kartu di sini. Semua sudah hafal!</div>";$("back").innerHTML="";$("cnt").textContent="0/0";return}
 const c=deck[i],rd=c.ex.match(/\((.*)\)/)[1];$("cnt").textContent=`${i+1} / ${deck.length}`;
 $("know").textContent=known[c.n]?"↩︎ Tandai belum hafal":"✅ Sudah hafal";
 const kanji=`<span class=num>${c.n}</span><div class=k style="font-size:${c.w.length>2?80:100}px">${c.w}</div><img class=im src="${"img/"+c.n+".jpg"}"><div class=hint>Ketuk untuk melihat arti</div>`;
 const meaning=`<span class=num>${c.n}</span><img class=im src="${"img/"+c.n+".jpg"}"><div class=v style="font-size:22px;margin-top:12px;font-weight:700">${c.exa}</div><div class=hint>Ingat kanjinya? Ketuk untuk cek</div>`;
 $("front").innerHTML=rev?meaning:kanji;
 $("back").innerHTML=`<div class=bk><span class="k2 k" style="font-size:${c.w.length>2?40:54}px">${c.w}</span><img class=im2 src="${"img/"+c.n+".jpg"}"></div>
 <span class=lbl>Cara baca</span><div class=v>${rd}<br><small>${ro(rd)}</small></div>
 <span class=lbl>Arti</span><div class=v>${c.exa}</div>
 <span class=lbl>Kanji ${c.k}</span><div class=v>On: ${c.on} <small>${ro(c.on)}</small><br>Kun: ${c.kun} <small>${ro(c.kun)}</small><br>Arti: ${c.ar}</div>`}
$("sets").innerHTML='<optgroup label="Per bagian">'+ranges.slice(0,6).map((r,x)=>`<option value=${x}>${r[0]}</option>`).join("")+'</optgroup><optgroup label="Per 10 kanji">'+ranges.slice(6).map((r,x)=>`<option value=${x+6}>${r[0]}</option>`).join("")+"</optgroup>";
$("sets").onchange=e=>{rng=ranges[e.target.value];build(false)};
$("scene").onclick=()=>{flip=!flip;render()};
const go=d=>{if(!deck.length)return;i=(i+d+deck.length)%deck.length;flip=false;render()};
$("next").onclick=()=>go(1);$("prev").onclick=()=>go(-1);
$("shuf").onclick=()=>build(true);
$("rev").onclick=()=>{rev=!rev;$("rev").textContent=rev?"🔁 Mode: Arti → Kanji":"🔁 Mode: Kanji → Arti";flip=false;render()};
$("unk").onclick=()=>{onlyUnk=!onlyUnk;$("unk").classList.toggle("on",onlyUnk);build(false)};
$("know").onclick=()=>{const c=deck[i];if(!c)return;known[c.n]=!known[c.n];save();render()};
document.onkeydown=e=>{if(e.key=="ArrowRight")go(1);if(e.key=="ArrowLeft")go(-1);if(e.key==" "){e.preventDefault();flip=!flip;render()}};
build(false);
