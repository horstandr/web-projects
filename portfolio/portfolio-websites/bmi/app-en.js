// Grabs all the needed inputs and outputs from bmi.html

// Inputs:
const form = document.querySelector('form');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
// Outputs:
const bmiOut = document.getElementById('bmi');
const bmiText = document.getElementById('bmi-text');

form.addEventListener("submit", function(e) {
    // Prevents page from reloading after submitting form.
    e.preventDefault();

    // Makes inputs ready for calculation.
    h = parseInt(height.value);
    w = parseInt(weight.value);
    w*=10000; // Converts kgs to grams

    // Clears input fields
    height.value = '';
    weight.value = '';

    // Output and calculation BMI
    bmi = w / (h * h);
    console.log('Exact: ' + bmi); // Logs exact BMI
    bmi = Math.round(bmi * 10) / 10; // Rounds BMI
    console.log('Rounded: ' + bmi); // Logs rounded BMI
    bmiOut.innerHTML = bmi; // Sets BMI header to value


    // Sets messages for BMI and makes text a different color by making a new span element
    if (bmi <= 24.9 && bmi >= 18.5) {
        bmiText.innerHTML = `You have a <span style="color:green">&nbsp;healthy&nbsp;</span> weight.`
        bmiOut.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiText.innerHTML = `You are <span style="color:red">&nbsp;overweight</span>.`
        bmiOut.style.color = "red";
    } else if (bmi >= 30) {
        bmiText.innerHTML = `You are <span style="color:maroon">&nbsp;obese</span>.`
        bmiOut.style.color = "maroon";
    } else if (bmi <= 18.4) {
        bmiText.innerHTML = `You are <span style="color:yellow">&nbsp;underweight</span>.`
        bmiOut.style.color = "yellow";
    }
});