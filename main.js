
var timerIda;

/* function Get Hundrieds value*/
function getHundr(time) {
    return (time > 99) ? Math.floor(time / 100) : 0;
}

/* function Get Decimal value*/
function getDec(time) {
    return (time > 9) ? Math.floor(time / 10) : 0;
}

/* function Get Item value*/
function getItem(time){
    return (time > 9) ? time % 10 : time;
}

/* function get actual date from DateArray */
function get_date(array) {

    var today = new Date();

    for(var i = 0; i < array.length; i++)
    {
        var date = new Date(array[i][0], array[i][1], array[i][2]);

        if (today.getTime() < date.getTime())
        {
            return array[i];
            break;
        }
    }
}

/* function getback current Time_Items */
function count(arr){

    var today = new Date();
    var date = new Date(arr[0], arr[1], arr[2]);

    var days = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    var days_float = (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    var hours_float = (days_float - days) * 24;
    var hours = Math.floor(hours_float);                       //hour

    var minutes_float = (hours_float - hours) * 60;
    var minutes = Math.floor(minutes_float);                   //min

    var seconds_float = (minutes_float - minutes) * 60;
    var seconds = Math.floor(seconds_float);                   //sec

    var timearr = {
        title: arr[3],
        days: days,
        days_dec: getDec(days),
        days_item: getItem(days),
        days_hund: getHundr(days),
        hours: hours,
        hours_dec: getDec(hours),
        hours_item: getItem(hours),
        minutes: minutes,
        minutes_dec: getDec(minutes),
        minutes_item: getItem(minutes),
        seconds: seconds,
        sec_dec: getDec(seconds),
        sec_item: getItem(seconds)
    };

    return timearr;
}

/* function getback simple TimeLeft image */
function render(tarr) {

    var title = document.getElementById('title');
    var days_s = document.getElementById('days');
    var hours_s = document.getElementById('hours');
    var minutes_s = document.getElementById('minutes');
    var seconds_s = document.getElementById('seconds');
    // insert Values
    title.innerHTML = tarr.title;
    days_s.innerHTML = tarr.days;
    hours_s.innerHTML = tarr.hours;
    minutes_s.innerHTML = tarr.minutes;
    seconds_s.innerHTML = tarr.seconds;
}

/* function getback Grafic Style TimeLeft image */
function render_sprite(ar, tarr){

    //Time Properties
    var hours_dec_div = document.getElementById('hours_dec');
    hours_dec_div.className = ar[tarr.hours_dec];

    var hours_item_div = document.getElementById('hours_item');
    hours_item_div.className = ar[tarr.hours_item];

    var minutes_dec_div = document.getElementById('minutes_dec');
    minutes_dec_div.className = ar[tarr.minutes_dec];

    var minutes_item_div = document.getElementById('minutes_item');
    minutes_item_div.className = ar[tarr.minutes_item];

    var sec_dec_div = document.getElementById('sec_dec');
    sec_dec_div.className = ar[tarr.sec_dec];

    var sec_item_div = document.getElementById('sec_item');
    sec_item_div.className = ar[tarr.sec_item];
}

/* Date Array */

var datar = [
    [2017, 11, 30, 'HolyDay'],
    [2020, 0, 1, 'New Year'],
    [2020, 0, 9, 'Family Day'],
    [2020, 1, 3, 'My son Day'],
    [2020, 4, 8, 'day of mourning'],
    [2020, 5, 19, 'Usual Day']
];

/* Grafic Style Array for CSS */

var arr = [
    'pic0',
    'pic1',
    'pic2',
    'pic3',
    'pic4',
    'pic5',
    'pic6',
    'pic7',
    'pic8',
    'pic9'
];

/* main Function */

function maincount(){

    var curdate = get_date(datar);

    var timestore = count(curdate);

    render(timestore);

    render_sprite(arr, timestore);

    timerIda = setTimeout(maincount, 1000);
}

maincount();

