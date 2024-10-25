var num = 8;

let a;

// const b; //'const' declarations must be initialized.

function display() {
    var num = 10;
    console.log("inside num", num, a);

}

display();
console.log("outside num", num);

var http = require('http');

const testToSpeak = "hello there"

const uttrence = new SpeechSynthesisUtterance(testToSpeak);

window.speechSynthesis.speak(uttrence);


//create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080
