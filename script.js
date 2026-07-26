// =================================
// QUEUE HUB PRO SYSTEM
// PART 3
// =================================


let queueNumber = 
localStorage.getItem("queueNumber") || 0;



function createQueue(){


    const type = 
    document.getElementById("type").value;


    queueNumber++;


    localStorage.setItem(
        "queueNumber",
        queueNumber
    );


    let number =
    queueNumber.toString().padStart(3,"0");


    let queueID =
    type + number;



    // บันทึกคิวลูกค้า

    localStorage.setItem(
        "myQueue",
        queueID
    );



    // แสดงผล

    document.getElementById("queueResult").innerHTML = `

    <div class="ticket">

    🎫 บัตรคิวของคุณ

    <br>

    <strong>${queueID}</strong>

    <br>

    กรุณารอเรียกคิว

    </div>

    `;



    // ไปหน้ารอคิว

    setTimeout(()=>{


        window.location.href =
        "waiting.html";


    },2000);



}
// ===============================
// WAITING PAGE
// ===============================


window.addEventListener("load",()=>{


const queue = 
localStorage.getItem("myQueue");


const box =
document.getElementById("myQueue");



if(queue && box){

box.innerHTML = queue;

}


});



function showPopup(){


document.body.classList.add("shake");


document.getElementById("popup")
.style.display="flex";


}



function closePopup(){


document.getElementById("popup")
.style.display="none";


}
// ===============================
// ADMIN SYSTEM
// ===============================


const ADMIN_PASSWORD = "130956";



function adminLogin(){


const pass =
document.getElementById("adminPass").value;



if(pass === ADMIN_PASSWORD){


document.getElementById("loginBox")
.style.display="none";


document.getElementById("controlBox")
.style.display="block";



}else{


alert("❌ รหัสผ่านไม่ถูกต้อง");


}


}




function nextQueue(){


let current =

Number(
localStorage.getItem("serveQueue") || 0
);



current++;


localStorage.setItem(
"serveQueue",
current
);



let queue =

"A" + 
current.toString().padStart(3,"0");



document.getElementById("currentQueue")
.innerHTML = queue;



localStorage.setItem(
"callingQueue",
queue
);



}




function resetQueue(){


localStorage.clear();


location.reload();


}
