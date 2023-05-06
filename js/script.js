const outPut = document.getElementById('output')
const outPutCal = document.getElementById('outputCal')
// Default Array:
let numbers = [];

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

// So chan dau tien trong mang
const evenLastestBtn = document.getElementById('evenLastestBtn').onclick = function () {
    evenLastest()
}

// Sap xep phan tu tang dan
const ascendSortBtn = document.getElementById('ascendSortBtn').onclick = function () {

}

// Clear
const clearBtn = document.getElementById('clearBtn').onclick = function () {
    ClearInput();
}

// FUNCTION:
// Add to array
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
    outPutCal.textContent = `sum: ` + sum;

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
    outPutCal.textContent = total;

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

function findLastEven() {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            return numbers[i];
        }
    }
    return -1;
}

function evenLastest () {
    const lasteven = findLastEven(numbers)
    console.log(lasteven)
}

function ClearInput() {
    numbers = []
    console.log(numbers)
    outPut.textContent = numbers;
}