const outPut = document.getElementById('output')

// Default Array:
const numbers = [];

// Thêm phần tử vào mảng
const addBtn = document.getElementById('addBtn').onclick = function () {
    Add();
}

// Tong cac so duong: 
const sumPositiveBtn = document.getElementById('sumPositiveBtn').onclick = function () {
    SumPositive()
}

const countPositiveBtn = document.getElementById('countPositiveBtn').onclick = function () {
// Dem tong cac so duong:
    CountPositive()
}

//tim so nho nhat trong mang
const minBtn = document.getElementById('minBtn').onclick = function(){
    MinNumbers();
}

// tìm số dương nhỏ nhất trong mảng
const minPosBtn = document.getElementById('minPositiveBtn').onclick = function() {
    MinPosNumber();
}


// FUNCTION:
function Add() {
    const input = document.getElementById('inputNumber').value;
    numbers.push(input);
    inputNumber.value = "";
    outPut.textContent = numbers;
}

function SumPositive() {
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > 0) {
            sum += parseInt(numbers[j]);
        }
    }
    console.log(sum)
}

function CountPositive() {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        let posNum = numbers[i];
        if (posNum > 0) {
            total++
        }
    }
    console.log(total)
}


function MinNumbers() {
    const minNum = Math.min(...numbers)
    console.log(minNum)
}

function MinPosNumber(){
    let minPos = 0;
    for (let i = 0; i < numbers.length; i++) {
        let posNum = numbers[i];
        // Mảng số dương 
        let arrPos = []
        if (posNum > 0) {
            arrPos.push(posNum)
            minPos = Math.min(arrPos)
        }
    }
    console.log(minPos)
}
