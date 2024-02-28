let arr = [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
console.log(arr)
let parentDiv = document.getElementsByName('parentDiv');
let btn = document.getElementsByClassName('startbtn');
let i = 0;
arr.forEach((e) => {
    let innerDiv = document.createElement('innerDiv');
    innerDiv.style.height = (e * 6 + 'px');
    innerDiv.style.width = ("55px")
    innerDiv.setAttribute('id', 'elem' + i);
    // console.log(`#` + ((1 << 24) * Math.random() | 1).toString(16))
    innerDiv.style.backgroundColor = `#` + ((1 << 24) * Math.random() | 1).toString(16)
    // innerDiv.style.backgroundColor = '#ced4da'
    i++;
    innerDiv.classList.add("innerDiv")
    document.getElementById("pd").appendChild(innerDiv);

});


btn[0].addEventListener("click", () => bubbleSort(arr));
// btn1[0].addEventListener("click", () => SelectionSort(arr));
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

async function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            await sleep(500);
            if (arr[j] > arr[j + 1]) {
                swapNumber(arr, j);
                swap(j)

            }
        }
    }
}



function swapNumber(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

function swap(j) {
    let a = 'elem' + j;
    let b = 'elem' + (j + 1);
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;
    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
    var audio = new Audio("swipe.mp3");
    audio.play()

}