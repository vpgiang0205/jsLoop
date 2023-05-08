// Default Show Array as outPut, Result as outPutCal 
const outPut = document.getElementById('output')
const outPutCal = document.getElementById('outputCal')

// Default Array:
let numbers = [2, 3, 4, 5];
outPut.textContent = numbers
let numbers2 = [];
outPut2.textContent = numbers2

// FUNCTION:
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

    outPutCal2.textContent = `Integer Count: ` + number
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

/** 1. Tổng các số dương trong mảng. */
function SumPositive() {
    let sum = 0;
    var posNumber = FindPositiveNumber()
    for (let j = 0; j < posNumber.length; j++) {
        sum += parseFloat(posNumber[j])
    }

    outPutCal.textContent = `Sum Of Positive Numbers: ` + sum;

}

/** 2. Đếm có bao nhiêu số dương trong mảng. */
function CountPositive() {
    let total = 0;
    var posNumber = FindPositiveNumber()
    total = posNumber.length;
    outPutCal.textContent = `Total Positive Numbers: ` + total;
}

/** 3. Tìm số nhỏ nhất trong mảng */
function MinNumbers() {
    const minNum = Math.min(...numbers)
    outPutCal.textContent = `Min Numbers: ` + minNum;
    console.log(minNum)
}

/** 4. Tìm số dương nhỏ nhất trong mảng */
function MinPosNumber() {
    var posNumber = FindPositiveNumber();
    for (let i = 0; i < posNumber.length; i++) {
        let minPos = Math.min(...posNumber)

        outPutCal.textContent = `Min Positive: ` + minPos;
        console.log(minPos)
    }
}

/** 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1. */
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

/** 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị). */
function swapValues() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    // Thực hiện hoán đổi giá trị của 2 vị trí trong mảng
    if (input1 < 0 || input1 >= numbers.length || input2 < 0 || input2 >= numbers.length) {
        alert("Invalid position or the Array now is empty!");
        return
    }

    [numbers[input1], numbers[input2]] = [numbers[input2], numbers[input1]];

    outPutCal.textContent = `New Array: ` + numbers;
}

/** 7. Sắp xếp mảng theo thứ tự tăng dần */
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

/** 10 */
function CountPositiveNegative() {
    var countPositive = 0;
    var countNegative = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            countPositive++;
        } else if (numbers[i] < 0) {
            countNegative++;
        }
    }
    if (countPositive > countNegative) {
        outPutCal.textContent = countPositive + " positive numbers, which is more than " + countNegative + " negative numbers";
    } else if (countPositive < countNegative) {
        outPutCal.textContent = countNegative + " negative numbers, which is more than " + countPositive + " positive numbers";
    } else {
        outPutCal.textContent = "The number of positive and negative numbers is equal";
    }
}