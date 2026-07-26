const API =
"https://script.google.com/macros/s/AKfycbyOf3Ca0vXnSGXZpSv9i26BA_yn_ibAggrp1LYART51w11DEeJE-3veyGlFYyhBysGl0w/exec";async function createQueue(){

    const service =
    document.getElementById("type").value;

    const url =
    API +
    "?action=createQueue" +
    "&service=" + service +
    "&customer=ลูกค้า";

    const res =
    await fetch(url);

    const data =
    await res.json();

    document.getElementById("queueResult").innerHTML=`

        <div class="ticket">

        🎫 บัตรคิวของคุณ

        <br><br>

        <strong>${data.queue}</strong>

        <br><br>

        กรุณารอเรียกคิว

        </div>

    `;

    localStorage.setItem(
        "myQueue",
        data.queue
    );

    setTimeout(()=>{

        location.href="waiting.html";

    },2000);

}
