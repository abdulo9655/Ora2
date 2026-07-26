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
