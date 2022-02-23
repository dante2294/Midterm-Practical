
let list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];



for (let i=0; i<list.length; i++){
    let ele=document.createElement("div");
    let nameEle=document.createElement("h1")
    let soundEle=document.createElement("h2")
    nameEle.innerHTML=list[i].name;
    soundEle.innerHTML=list[i].sound;
    ele.appendChild(nameEle)
    ele.appendChild(soundEle)
    document.body.appendChild(ele)
    if (list[i].sound>5)
        soundEle.style.color="blue";

}

let counter=10
let button=document.createElement("button")
button.innerHTML=counter;
button.addEventListener("click",function() {
    if (counter < 15) {
        counter = counter + 1
        button.innerHTML = counter

    } else if (counter === 15) {
        //button.addEventListener("click", function () {
        displayMessage("Cool we hit a number")
        //})
    } else {}

})



function displayMessage(mess){
    let ele=document.createElement("div")
    let nameEle=document.createElement("h1")
    nameEle.innerHTML=mess;
    ele.appendChild(nameEle)
    document.body.appendChild(ele)
}




document.body.appendChild(button);