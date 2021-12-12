let out = [];

let roll = (d) => {
out.push(Math.floor(Math.random()*d)+1);
  if (out.length>5) {
    out.shift();
  }
 if (out.length>=1){
   document.getElementById("output").innerHTML="Roll History:<br>";
 document.getElementById("recentdie").innerHTML="D"+d+"    ";  document.getElementById("recentnum").innerHTML=out[out.length-1];
 for (let i=1; i<=out.length; i++) {
   document.getElementById("output").innerHTML+=out[out.length-i] + "<br>";
}
}
}
let clearr = () => {
  out.splice(0, out.length);
  document.getElementById("output").innerHTML="";
  document.getElementById("rec").innerHTML='<h2 id="recentnum"></h2><h2 id="recentdie"></h2>';
}
document.getElementById('reset').addEventListener("click", clearr);