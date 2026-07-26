// =================================
// Queue Hub Pro
// GitHub Frontend
// =================================


// 🟢 Google Apps Script URL

const API_URL =
"https://script.google.com/macros/s/AKfycbyOf3Ca0vXnSGXZpSv9i26BA_yn_ibAggrp1LYART51w11DEeJE-3veyGlFYyhBysGl0w/exec";




// =================================
// ลูกค้ารับคิว
// =================================

async function getQueue(){


const service =
document.getElementById("service").value;



const customer =
document.getElementById("customer").value;



const url =

API_URL +

"?action=createQueue" +

"&service=" +
encodeURIComponent(service) +

"&customer=" +
encodeURIComponent(customer);



try{


const response =
await fetch(url);



const data =
await response.json();



if(data.success){



document.getElementById("result")
.innerHTML = `

<div class="ticket">

🎫 คิวของคุณ

<h2>

${data.queue}

</h2>


<p>

กรุณารอเรียกคิว

</p>


</div>

`;



localStorage.setItem(
"myQueue",
data.queue
);



setTimeout(()=>{


window.location.href =
"waiting.html";


},2500);



}else{


alert("รับคิวไม่สำเร็จ");

}


}catch(error){


alert(
"เชื่อมต่อระบบไม่ได้"
);


console.log(error);


}


}
