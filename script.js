function timeDisplay(){
    const dateTime = new Date()
    const hours = dateTime.getHours()
    const minutes = dateTime.getMinutes()
    const seconds = dateTime.getSeconds()
    const session = document.getElementById("sessions")

    if(hours >= 12) {
        session.innerHTML = "PM"
    }else{
        session.innerHTML = "AM"
    }

    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
}
setInterval(timeDisplay, 1000)