let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let hour = document.getElementById('hr');
let minutes = document.getElementById('minutes');
let day = document.getElementById('day');


function displayTime() {

    let date = new Date();
    
    

    //getting hour ,mins ,secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    var dd = "AM";

    let h = hh;
    if (h >= 12) {
      h = hh - 12;
      var dd = "PM";
      
    }
    if (h == 0) {
      h = 12;
    }
 

    let hRotation = 30*h + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    console.log(dd);

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    hour.innerHTML = h ;
    minutes.innerHTML = mm;
    day.innerText = dd;

}


setInterval(displayTime, 1000);