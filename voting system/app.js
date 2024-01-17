//CREATE LI TAG IN JS
let nameList = document.getElementById("nameList");

function add() {
    let input = document.getElementById("inputName");

    let li = document.createElement("li");
    let liText = document.createTextNode(input.value);
    //CREATE BTN TAG
    let btn = document.createElement("button")
    let num2 = document.getElementsByClassName("num2")
    for (j = 0; j < num2.length; j++) {
        num2[j].addEventListener("click", function() {
                let numSpan = this.querySelector("button");
                let currentNum = parseInt(numSpan.innerText);
                let newNum = currentNum + 1;
                numSpan.innerText = newNum;

            })
            // console.log(j)
    }
    let btnText = document.createTextNode(j)
    li.appendChild(liText);
    nameList.appendChild(li);
    li.appendChild(btn);
    btn.appendChild(btnText)
    input.value = "";
    // console.log(li);
}
//CREATE VOTER
let num = document.getElementsByClassName("num");
for (i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function() {
        let numSpan = this.querySelector("button");
        let currentNum = parseInt(numSpan.innerText);
        let newNum = currentNum + 1;
        numSpan.innerText = newNum;
    });
}