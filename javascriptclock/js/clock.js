let nameInput = prompt("Adinizi Giriniz:")
let myName = document.querySelector("#myName")


myName.innerHTML =`${nameInput}`


var weekday=new Array(7);
weekday[1]=" Pazartesi";
weekday[2]=" Sali";
weekday[3]=" Carsamba";
weekday[4]=" Persembe";
weekday[5]=" Cuma";
weekday[6]=" Cumartesi";
weekday[7]=" Pazar";

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayName = weekday[date.getDay()];

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = counter(hours) + ":" + counter(minutes) + ":" + counter(seconds) + (dayName);

    function counter(standIn) {
        if(standIn < 10) {
            standIn = "0" + standIn
        }
        return standIn;
    }
}
setInterval(clock, 1000);