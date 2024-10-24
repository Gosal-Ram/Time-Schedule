var data = [ 
    {start: 0,  duration: 15, title: "Exercise"}, 
    {start: 20, duration: 30, title: "Travel to work"},
    {start: 30, duration: 30, title: "Plan day"},
    {start: 60, duration: 15, title: "Review yesterday's commits" },
    {start: 100,duration: 15, title: "Code review"}, 
    {start: 180,duration: 90, title: "Have lunch with John"}, 
    {start: 360,duration: 30, title: "Skype call"}, 
    {start: 370,duration: 45, title: "Follow up with designer"}, 
    {start: 400,duration: 30, title: "Push up branch"}
    ];

    var calender = document.getElementById('calender');
    var hours = 11;     


for (let i = 0; i < hours; i++) {
    var duration = document.createElement('div');
    duration.className = 'duration';
    duration.style.fontSize = '14px';
    duration.style.borderTop = '1px solid #ddd';
    if(i>4){    
        duration.innerText = (i-12) + 8 +':00';
    }
    else{
        duration.innerText = i + 8 +':00';
    }
    
    calender.appendChild(duration);
}


var timeChart = document.createElement('div');
timeChart.className = 'time-chart';
calender.appendChild(timeChart);

for(let j = 0 ; j<data.length ; j++){
    var eventCont = document.createElement('div');
    eventCont.className = 'eventCont'+(j+1);
    
  if((j<data.length-1 && (data[j+1].start - data[j].start) < data[j].duration)){
        eventCont.style.marginLeft = '50%';
    }
 

    eventCont.innerText = data[j].title;
 
    eventCont.style.top = data[j].start + 'px';

    eventCont.style.height = data[j].duration + 'px';
    eventCont.style.fontSize = '10px';
    eventCont.style.borderLeft = '2px solid #7AA9D2';
    eventCont.style.background = '#E9EAEA';
    eventCont.style.width = '100%';
    eventCont.classList.add(eventContChild);

    eventCont.style.position = 'absolute';
    timeChart.appendChild(eventCont);

}

