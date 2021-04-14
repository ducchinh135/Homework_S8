function clock() {
    const days = document.getElementById('day');
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');

    const d = new Date().getDay();
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();

    let day;
    switch (d) {
        case 0:
            day = "Su";
            break;
        case 1:
            day = "Mo";
            break;
        case 2:
            day = "Tu";
            break;
        case 3:
            day = "We";
            break;
        case 4:
            day = "Th";
            break;
        case 5:
            day = "Fr";
            break;
        case 6:
            day = "Sa";
            break;
    }

    days.innerText = day;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;


}

const interval = setInterval(clock, 1000);