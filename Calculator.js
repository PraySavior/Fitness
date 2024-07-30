let age = document.querySelector(".age");
let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let bmiBox = document.querySelector('.bmi');
let desc = document.createElement('p');
let bmr = document.querySelector('.bri');

let a = '';
let b = '';
let c = '';

function check() {
    if (isNaN(b) || isNaN(c) || a === '' || bmiBox.innerHTML == 'Infinity') { // Check if any input is empty or NaN
        desc.innerHTML = '';
        bmiBox.innerHTML = '';
        bmr.innerHTML = ''; // Clear bmr innerHTML if any input is empty
    }
}

function bmii() {
    let bmia = (b / (c ** 2)*10000);
    let bmi = bmia.toFixed(4);
    if (isFinite(bmia)) {
        bmiBox.innerHTML = bmi;
        bmiBox.style.textAlign = 'center'
        if (bmi < 18.5) {
            desc.innerHTML = "Your BMI is quite low!";
        } else if (bmi >= 18.5 && bmi <= 25) {
            desc.innerHTML = "You have the perfect BMI!";
        } else if (bmi > 25 && bmi <= 30) {
            desc.innerHTML = "Your BMI is higher than usual.";
        } else if (bmi > 30) {
            desc.innerHTML = 'Your BMI is at critical rates!';
        }
        bmiBox.append(desc);
    } else {
        bmiBox.innerHTML = '';
        desc.innerHTML = '';
    }
}


function calculateBMR() {
    if (a !== '' && b !== '' && c !== '') {
        if (document.querySelector('.male').checked) {
            return 66 + (13.7 * b) + (5 * c) - (6.8 * a);
        } else if (document.querySelector('.female').checked) {
            return 655 + (9.6 * b) + (1.8 * c) - (4.7 * a);
        }
    }
    return undefined;
}

function updateBMR() {
    let bmra = calculateBMR();
    if (bmra !== undefined && !isNaN(bmra)) {
        bmr.innerHTML = bmra.toFixed(2);
        bmr.style.textAlign = 'center'
    } else {
        bmr.innerHTML = '';
    }
}


let male = document.querySelector('.male');
let female = document.querySelector('.female');

male.addEventListener('change', updateBMR);
female.addEventListener('change', updateBMR);

age.addEventListener('input', (event1) => {
    a = parseFloat(event1.target.value);
    check()
    updateBMR();
});

weight.addEventListener('input', (event2) => {
    b = parseFloat(event2.target.value);
    bmii();
    check();
    updateBMR();
});

height.addEventListener('input', (event3) => {
    c = parseFloat(event3.target.value);
    bmii();
    check();
    updateBMR();
});
