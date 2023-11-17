document
  .getElementById("html-checker")
  .setAttribute("href", "https://validator.w3.org/nu/?doc=" + location.href);
document
  .getElementById("css-checker")
  .setAttribute(
    "href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href
  );

/* 
Deliverable: Create a web page that uses JavaScript to determine the current hour, and presents a different image, custom message, and color based on each of the following times of day:
Morning (5am to 12 noon)
Afternoon (12 noon to 6pm)
Evening (6pm to 11pm)
Night (11pm to 5am)
*/

let myDate = new Date();
let myHour = myDate.getHours();
let day = myDate.getDay();
let myGreeting = "";
let myColor = "";
let myPic = "";
let todayIs = day;

if (myHour >= 5 && myHour < 12) {
  myGreeting = "Good Morning!";
  myColor = "LightYellow";
  myPic = "morning.jpg";
} else if (myHour >= 12 && myHour < 18) {
  myGreeting = "Good Afternoon!";
  myColor = "LightBlue";
  myPic = "afternoon.jpg";
} else if (myHour >= 18 && myHour < 23) {
  myGreeting = "Good Evening!";
  myColor = "Blue";
  myPic = "evening.jpg";
} else {
  myGreeting = "Good Night!";
  myColor = "Black";
  myPic = "night.jpg";
}

//Can also use switch statement for each number
if (day == 0) {
  todayIs = "Today is Sunday";
} else if (day == 1) {
  todayIs = "Today is Monday";
} else if (day == 2) {
  todayIs = "Today is Tuesday";
} else if (day == 3) {
  todayIs = "Today is Wednesday";
} else if (day == 4) {
  todayIs = "Today is Thursday";
} else if (day == 5) {
  todayIs = "Today is Friday";
} else {
  todayIs = "Today is Saturday";
}

myPic = "images/" + myPic;

// Custom Message
document.getElementById("my-greeting").innerHTML = myGreeting;
document.querySelector("html").style.backgroundColor = myColor;
document.getElementById("my-pic").src = myPic;
document.getElementById("today").innerHTML = todayIs;
