var boxes = ["\u25B3", "\u25B2","\u25B6","\u25BC","\u25BD","\u25C0","\u25C1","\u25E2","\u25E3","\u25E4","\u25E5"];
var max = 5000;
var count = 0;

function writeNext(){
    document.getElementById('ten').innerHTML +=
    boxes[Math.round(Math.random() * (boxes.length-1))];
}

function run() {
    writeNext();
    if(count++ < max) {
        setTimeout(run,2);
    }
}

run();   
