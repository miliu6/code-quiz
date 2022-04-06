var startBtn = document.getElementById("start");
var questionEl = document.getElementById("questions");
var firstChoice = document.getElementById("answer1");
var secondChoice = document.getElementById("answer2");
var thirdChoice = document.getElementById("answer3");
var fourthChoice = document.getElementById("answer4");
var timerEl = document.getElementById("timer");

var codeQs = ["What is a JavaScript function?", "How many data types are in JavaScript?", "How many different types of objects are in JavaScript?", "Which of these data types cannot contain values?", "Which HTML element do we put the JavaScript in?"];
var a1 = ["A JavaScript party.", "A block of code designed to perform a task.", "An array", "A standalone entity, with properties and type."];
var a2 = [10, 15, 5, 7];
var a3 = [5, 11, 3, 6];
var a4 = ["null", "boolean", "string", "array"];
var a5 = ["<head>", "<body>", "<script>", "<section>"];

var countdown = 60;

