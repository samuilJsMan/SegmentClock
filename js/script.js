"use strict";

const DateElems=[
		document.querySelectorAll(`.hours .ten`),
		document.querySelectorAll(`.hours .one`),
		document.querySelectorAll(`.minutes .ten`),
		document.querySelectorAll(`.minutes .one`),
		document.querySelectorAll(`.seconds .ten`),
		document.querySelectorAll(`.seconds .one`)
	] 

let store=window.localStorage
store.chosen?null:store.chosen=`-3`
document.querySelector(`option[value='${store.chosen}']`).setAttribute(`selected`,``)

startWatch()

function changeStore(){
	store.chosen=document.querySelector(`.chose`).value
	for(let i of document.querySelector(`.chose`)){i.removeAttribute(`selected`)}
	document.querySelector(`option[value='${store.chosen}']`).setAttribute(`selected`,``)
	return store.chosen
}

function startWatch(){
	let rawData=(new Date).toLocaleTimeString().split(`:`)
	let midData=+rawData[0]+ +changeStore()
	if(midData>23){midData-=24}
	if(midData<0){midData+=24}
	if(midData<10){midData=`0`+midData}
	rawData[0]=midData
	rawData=rawData.join(``)

	for(let itt=0; itt<6;itt++){
		let pos
		if(rawData[itt]==0){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([3])}
		if(rawData[itt]==1){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([0,1,3,4,6])}
		if(rawData[itt]==2){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([1,5])}
		if(rawData[itt]==3){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([1,4])}
		if(rawData[itt]==4){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([0,4,6])}
		if(rawData[itt]==5){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([2,4])}
		if(rawData[itt]==6){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([2])}
		if(rawData[itt]==7){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([1,3,4,6])}
		if(rawData[itt]==8){for(pos of DateElems[itt]){pos.style.background=`black`}}
		if(rawData[itt]==9){for(pos of DateElems[itt]){pos.style.background=`black`}changingFunc([4])}

		if(rawData[0]==0){if(itt==0){for(pos of DateElems[itt]){pos.style.background=``}}}

		function changingFunc(x){for(let position of x){DateElems[itt][position].style.background=``}}
	}

	setTimeout(startWatch,1000)
};
