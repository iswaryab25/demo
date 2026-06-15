console.log("CONDITIONAL STATEMENT");

var light = "green";

if (light == "red") {
    console.log("Stop");
}
else if (light == "white") {
    console.log("Wait");
}
else if (light == "green") {
    console.log("Go");
}
else {
    console.log("Invalid signal");
} 

var signal = "White"
switch(signal){
case 1: "green";
    console.log("Go!");
    break;
case 2: "yellow";
    console .log("Wait");
case 3: "red";
    console.log("Stop");
default:
    console.log("Invaild Signal Color")
}