var date = new Date();
console.log(date);

//output => Tue Oct 29 2024 22:53:04 GMT+0530 (India Standard Time)

var year = date.getFullYear()
console.log('year: ',year);

var month = date.getMonth()
console.log('month: ', month);

var hr = date.getHours()
var sec = date.getSeconds()
console.log("hours = "+hr+"\tseconds = "+sec);

var currDay = date.getDay()
var currDate = date.getDate()
console.log('date is: '+currDate)