
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("Nav")
    let home = document.getElementById("home");
    let scrollNav = window.scrollY;
    let homeHeight = home.scrollHeight;
    
    let toggeler = document.getElementById("toggler");


    if (scrollNav >= homeHeight) {
        navbar.style.backgroundColor = "#000";
        toggeler.style.backgroundColor = "#fff"
    }
    else {
        navbar.style.backgroundColor = "transparent";
    }

})


// ----------------------counter section-----------

// window.addEventListener("scroll",function(){
//     let numberSction=document.getElementById("number");
//     let numberSectionHeight=numberSction.scrollTop;

//     console.log(numberSectionHeight)

    // if(window.body.scrollTop>numberSectionHeight){
    //     console.log("hi")
    // }
    



    
// })


let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
function countCustomer() {

    let happy_customer = document.getElementById("happy");
    counter++;
    happy_customer.innerHTML = counter;
    if (counter == 850) {
        clearInterval(customerHappy)
    }
}

let customerHappy = setInterval(() => {
    countCustomer()
}, 3);

function completePro() {

    let complete = document.getElementById("complete");
    counter1++;
    complete.innerHTML = counter1;
    if (counter1 == 230) {
        clearInterval(completproject)
    }
}

let completproject = setInterval(() => {
    completePro()
}, 15);

function linesOfCodes() {
    let lines = document.getElementById("lines");
    counter2++;
    lines.innerHTML = counter2;
    if (counter2 == 945) {
        clearInterval(linesCode)
    }
}

let linesCode = setInterval(() => {
    linesOfCodes()
}, 3);

function downloadFiles() {
    let download = document.getElementById("download")
    counter3++;
    download.innerHTML = counter3
    if (counter3 == 780) {
        clearInterval(down)
    }
}

let down = setInterval(() => {
    downloadFiles()
}, 3);