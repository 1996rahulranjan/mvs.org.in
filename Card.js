function generateCard(){

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let address=document.getElementById("address").value;
let district=document.getElementById("district").value;
let state=document.getElementById("state").value;

let membershipId =
"MVS-" +
new Date().getFullYear() +
"-" +
Math.floor(1000 + Math.random()*9000);

document.getElementById("cname").innerText=name;
document.getElementById("cmobile").innerText=mobile;
document.getElementById("caddress").innerText=address;
document.getElementById("cdistrict").innerText=district;
document.getElementById("cstate").innerText=state;
document.getElementById("cid").innerText=membershipId;

let today=new Date();

document.getElementById("cdate").innerText=
today.toLocaleDateString();

let qr=document.getElementById("qrcode");
qr.innerHTML="";

new QRCode(qr,{
text:membershipId,
width:160,
height:160
});

let file=document.getElementById("photo").files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

document.getElementById("memberPhoto").src=e.target.result;

}

reader.readAsDataURL(file);

}

}

function downloadCard(){

html2canvas(document.getElementById("card")).then(canvas=>{

let link=document.createElement("a");

link.download="membership-card.png";

link.href=canvas.toDataURL();

link.click();

});

}