function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightinfoot = parseFloat(document.getElementById('height').value) * 0.3048;
    console.log("height is", heightinfoot);

    if (weight && heightinfoot) {
        let bmi = (weight / (heightinfoot * heightinfoot));

        bmi = bmi.toFixed(1);
        let category = '';

        if (bmi < 16) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerText = `Your BMI is ${bmi} (${category}).`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid weight and height.';
    }
}
