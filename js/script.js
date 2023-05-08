const outPut = document.getElementById('output')
const outPutCal = document.getElementById('outputCal')
// Default Array:
let numbers = [4, 6, 8, 9];
outPut.textContent = numbers

let numbers2 = [];
outPut2.textContent = numbers2
// FUNCTION:
/** Add Button */
function Add() {
    const input = document.getElementById('inputNumber').value;
    numbers.push(input);
    inputNumber.value = "";
    outPut.textContent = numbers;
}

function Add2() {
    var number = Number(document.getElementById("inputNumber2").value);
    numbers2.push(number);
    outPut2.textContent = numbers2;
    inputNumber2.value = "";
}

function Count() {
    var number = 0;
    for (var i = 0; i < numbers2.length; i++) {
        Number.isInteger(numbers2[i]) && number++;
    }

    outPutCal2.textContent= `Integer Count: ` + number
}

/** Hàm tìm số Dương */
function FindPositiveNumber() {
    var positive_numbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positive_numbers.push(numbers[i]);
        }
    }
    console.log(positive_numbers)
    return positive_numbers;
}

/** Tổng các số dương */
function SumPositive() {
    let sum = 0;

    // nhap mang so duong vao posNumber
    var posNumber = FindPositiveNumber()

    // Duyet lay cac phan tu trong mang roi cong lai
    for (let j = 0; j < posNumber.length; j++) {
        sum += parseFloat(posNumber[j])
    }

    outPutCal.textContent = `Sum Of Positive Numbers: ` + sum;

}

/** Đếm các số dương */
function CountPositive() {
    let total = 0;
    var posNumber = FindPositiveNumber()
    total = posNumber.length;
    outPutCal.textContent = `Total Positive Numbers: ` + total;
}

/** Tìm số nhỏ nhất trong mảng */
function MinNumbers() {
    const minNum = Math.min(...numbers)
    outPutCal.textContent = `Min Numbers: ` + minNum;
    console.log(minNum)
}

/** Tìm số chẵn nhỏ nhất */
function MinPosNumber() {
    var posNumber = FindPositiveNumber();
    for (let i = 0; i < posNumber.length; i++) {
        let minPos = Math.min(...posNumber)

        outPutCal.textContent = `Min Positive: ` + minPos;
        console.log(minPos)
    }
}

/** Tìm số chẵn cuối cùng trong mảng */
function findLastEven() {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            return numbers[i];
        }
    }
    return -1;
}

function evenLastest() {
    const lasteven = findLastEven(numbers)
    console.log(lasteven)
    outPutCal.textContent = `Lastest even Number: ` + lasteven;
}

/** Clear Button */
function ClearInput() {
    numbers = []
    console.log(numbers)
    outPut.textContent = numbers;
}

function ClearInput2() {
    numbers2 = []
    console.log(numbers2)
    outPutCal2.textContent = "";
    outPut2.textContent = numbers2;
}

/** Sắp xếp các thứ tự tăng dần
* dùng hàm sort()
*/
function AscendSort() {
    console.log(numbers.sort())
    outPutCal.textContent = `Ascend of array: ` + numbers.sort();
}

/** 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1 */
function FirstPrimeNumber() {
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            outPutCal.textContent = numbers[i];
            return numbers[i];
        }
    }
    outPutCal.textContent = `None of them is Prime number return:` + -1;
}

// Hàm check số nguyên tố
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

/** SWAP */
function swapValues() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var temp = input1.value;
    var value1 = parseInt(input1.value);
    var value2 = parseInt(input2.value);
    // check giá trị trong input có trong mảng không
    if (isNaN(value1) || isNaN(value2) || !numbers.includes(value1) || !numbers.includes(value2)) {
        alert("Invalid input values. Please enter valid numbers from the array.");
        return;
    }
    var index1 = numbers.indexOf(value1);
    var index2 = numbers.indexOf(value2);
    var temp = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temp;
    input1.value = value2;
    input2.value = value1;
    outPutCal.textContent = `New Array: ` + numbers;
}

/**  */