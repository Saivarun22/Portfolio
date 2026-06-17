
const words=['Java Developer','Spring Boot Developer','Backend Developer','Full Stack Developer'];
let i=0,j=0,del=false;
const el=document.getElementById('typing');
setInterval(()=>{
const w=words[i];
el.textContent=w.slice(0,j);
if(!del){j++;if(j>w.length){del=true;}}
else{j--;if(j===0){del=false;i=(i+1)%words.length;}}
},120);
