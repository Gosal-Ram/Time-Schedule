var data = [
    { start: 0, duration: 15, title: "Exercise" },
    { start: 25, duration: 30, title: "Travel to work" },
    { start: 30, duration: 30, title: "Plan day" },
    { start: 60, duration: 15, title: "Review yesterday's commits" },
    { start: 100, duration: 15, title: "Code review" },
    { start: 180, duration: 90, title: "Have lunch with John" },
    { start: 360, duration: 30, title: "Skype call" },
    { start: 370, duration: 45, title: "Follow up with designer" },
    { start: 400, duration: 30, title: "Push up branch" }
];
// sort
for (let j = 0; j < data.length; j++) {
    for (let k = 0; k < data.length - 1 - j; k++) {
        if (data[k].start > data[k + 1].start) {
            let temp = data[k]
            data[k] = data[k + 1]
            data[k + 1] = temp
        }
    }

}
// console.log(data);
var calender = document.getElementById('calender');
var timeChart = document.createElement('div');
timeChart.className = 'time-chart';
calender.appendChild(timeChart);
let overlapping_arr = []
let overlapped_arr = []

for (let i = 0; i < data.length - 1; i++) {
    var eventCont = document.createElement('div');
    eventCont.innerText = data[i].title;
    eventCont.className='event-cont';

    //checking for overlap
    if ((data[i].start + data[i].duration) > (data[i + 1].start)) {
        overlapped_arr.push(i)
        overlapping_arr.push(i + 1)

        // width 50% for both i& i+1
        // i+1 margin-left 50%
    }
}
// console.log(overlapped_arr)
// console.log(overlapping_arr)
let flag=1
for (let i = 0; i < data.length; i++) {
    var eventCont = document.createElement('div');

    if (overlapped_arr.includes(i) || overlapping_arr.includes(i)) {
        if(i%2==0){
            flag=1
        }
        else{
            flag=0
        }
        if(flag==1){
            eventCont.style.marginLeft = '51%';
            eventCont.style.width = '50%';
        }
        else{
            eventCont.style.width = '50%';
        }
        
        eventCont.innerText = data[i].title;
        eventCont.style.top = data[i].start + 'px';
        eventCont.style.height = data[i].duration + 'px';
        eventCont.style.fontSize = '10px';
        eventCont.style.borderLeft = '2px solid #7AA9D2';
        eventCont.style.background = '#E9EAEA';
        eventCont.style.position = 'absolute';
        timeChart.appendChild(eventCont);
    }
    
    else{
        eventCont.innerText = data[i].title;
        eventCont.style.top = data[i].start + 'px';
        eventCont.style.height = data[i].duration + 'px';
        eventCont.style.fontSize = '10px';
        eventCont.style.width = '100%'
        eventCont.style.borderLeft = '2px solid #7AA9D2';
        eventCont.style.background = '#E9EAEA';
        eventCont.style.position = 'absolute';
        timeChart.appendChild(eventCont);

    }


}