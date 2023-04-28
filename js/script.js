"use strict";

let color=`rgba(0,0,0,1)`,mess=[],itt,pos,num,element,rawData,midData,rawArray,position,
	chose=document.querySelector(`.chose`),
 	dots=document.querySelectorAll(`.dot`),
	hoursTen=document.querySelectorAll(`.hours .ten`),
	hoursOne=document.querySelectorAll(`.hours .one`),
	minutesTen=document.querySelectorAll(`.minutes .ten`),
	minutesOne=document.querySelectorAll(`.minutes .one`),
	secondsTen=document.querySelectorAll(`.seconds .ten`),
	secondsOne=document.querySelectorAll(`.seconds .one`);
	mess.push(hoursTen,hoursOne,minutesTen,minutesOne,secondsTen,secondsOne);

startWatch()

function startWatch(){
	rawArray=[],itt=0,rawData=Date();
	rawData=rawData.split(` `);
	rawData=rawData[4];
	rawData=rawData.split(`:`)
	midData=rawData[0]
	midData=Number(midData)+Number(chose.value);
	if(midData>23){midData=midData-24;};
	if(midData<10){midData=`0`+midData};
	rawData[0]=midData;
	rawData=rawData.join(``);
	for(num of rawData){rawArray.push(num)};

	function changingFunc(x){for(position of x){mess[itt][position].style.background=``}};

	while(itt<6){;

	if(rawArray[itt]==0){for(pos of mess[itt]){pos.style.background=color}changingFunc([3])};
	if(rawArray[itt]==1){for(pos of mess[itt]){pos.style.background=color}changingFunc([0,1,3,4,6])};
	if(rawArray[itt]==2){for(pos of mess[itt]){pos.style.background=color}changingFunc([1,5])};
	if(rawArray[itt]==3){for(pos of mess[itt]){pos.style.background=color}changingFunc([1,4])};
	if(rawArray[itt]==4){for(pos of mess[itt]){pos.style.background=color}changingFunc([0,4,6])};
	if(rawArray[itt]==5){for(pos of mess[itt]){pos.style.background=color}changingFunc([2,4])};
	if(rawArray[itt]==6){for(pos of mess[itt]){pos.style.background=color}changingFunc([2])};
	if(rawArray[itt]==7){for(pos of mess[itt]){pos.style.background=color}changingFunc([1,3,4,6])};
	if(rawArray[itt]==8){for(pos of mess[itt]){pos.style.background=color}};
	if(rawArray[itt]==9){for(pos of mess[itt]){pos.style.background=color}changingFunc([4])};

	if(rawData[0]==0){if(itt==0){for(pos of mess[itt]){pos.style.background=``}}};

	itt++};

	for(element of dots){element.style.background=color}

	setTimeout(startWatch,100)};


