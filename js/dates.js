//STEP 1
// function daysInMonth (month, year) { 
//     return new Date(year, month, 0).getDate();
//   }
//   console.log(daysInMonth(1, 2021)); //31

//STEP 2

// let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let d = new Date();
// console.log('The current month is ' + monthNames[d.getMonth()]);

//STEP 3
// let is_weekend =  function(date1){
//     let dt = new Date(date1);
     
//     if(dt.getDay() == 6 || dt.getDay() == 0) {
//         return 'Weekend';
//     } else {
//         return 'It\'s not a weekend.';
//     }
// }

// console.log(is_weekend('Sep 25, 1995'));




//STEP 4
// let yesterday = {
//     'Monday': 'Sunday',
//     'Tuesday': 'Monday',
//     'Wednesday': 'Tuesday',
//     'Thursday': 'Wednesday',
//     'Friday': 'Thursday',
//     'Saturday': 'Friday',
//     'Sunday': 'Saturday',
//   }
  
//   console.log(yesterday['Monday']);
//STEP 5

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// let d = new Date();
// let day = console.log(days[d.getDay()].charAt(0));
