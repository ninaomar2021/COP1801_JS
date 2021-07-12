function problemOne(event) {

  const target = event.target;
  // code here:

   target.parentNode.removeChild(target);
}

// reference the elment "#remove-me" and add an eventlistener for the click event:
// your code here:
let elementOne = document.querySelector('#remove-me')

elementOne.addEventListener('click', problemOne);

function problemTwo(event) {

    const target = event.target;

    if (target.classList.contains("child")) {

        target.parentNode.removeChild(target);
    }

}

let elementTwo = document.querySelector('#remove-my-children')

elementTwo.addEventListener('click', problemTwo)

function problemThree(event) {

    const target = event.target;

    if (target.children.length === 0) {

        target.parentNode.removeChild(target);
    }
}

let elementThree = document.querySelector("#remove-my-children-then-me");

elementThree.addEventListener('click', problemThree);

function problemFour(event) {
/* code goes here */
    //create div element
    var div = document.createElement('div');
    //set class name to that div
    div.className = "child";
    //set text to div
    div.innerHTML = "This is exmple 4";
    //append div
    event.target.appendChild(div);
}

let elementFour = document.querySelector("#add-children");
elementFour.addEventListener("click", problemFour);
//elementFour.addEventListener('EVENT TYPE', problemFour)

function problemFive(event) {

/* code goes here */
    //find the elemtnt selector
    let elementFour = document.querySelector("#to-the-back");
    //apend the selected div
    elementFour.append(event.target);
}

let elementFive = document.querySelector("#to-the-back");
elementFive.addEventListener("click", problemFive);
//elementFive.addEventListener('EVENT TYPE', problemFive)

function problemSix(event) {
    //get the current value
    var ival = parseInt(event.target.innerHTML);
    //increament the value by 1 with current value
    event.target.innerHTML = ival + 1;
    /* code goes here */

}

let elementSix = document.querySelector("#increment-child")

elementSix.addEventListener('click', problemSix)

function problemSeven(event) {
    //get the current value
    var ival = parseInt(event.target.innerHTML);
    //check shift key with click event pressed or withought shift key
    if (event.shiftKey) {
        event.target.innerHTML = ival - 1;
    }
    else {
        event.target.innerHTML = ival + 1;
    }
    /* code goes here */

}

let elementSeven = document.querySelector("#increment-decrement")

elementSeven.addEventListener('click', problemSeven)
