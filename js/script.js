document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve form data
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate form data
    if (isNaN(weight) || isNaN(height) || !gender) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);

    // Determine BMI category and suggestions
    let category = '';
    let suggestion = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        suggestion = 'You are underweight. It is recommended to gain some weight by consuming a balanced diet and consulting a healthcare provider.';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        suggestion = 'You have a normal weight. Maintain a healthy lifestyle and balanced diet to keep up the good work!';
    } else if (bmi < 29.9) {
        category = 'Overweight';
        suggestion = 'You are overweight. Consider adopting a healthier diet and increasing physical activity to lose some weight.';
    } else {
        category = 'Obesity';
        suggestion = 'You are in the obesity range. It is recommended to seek medical advice and adopt significant lifestyle changes to improve your health.';
    }

    // Display result
    const resultText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    document.getElementById('result-text').innerText = resultText;
    document.getElementById('suggestion-text').innerText = suggestion;

    // Update result container class based on category
    const resultContainer = document.getElementById('bmi-result');
    resultContainer.classList.remove('hidden', 'underweight', 'normal', 'overweight', 'obesity');
    resultContainer.classList.add(category.toLowerCase());

    document.getElementById('bmi-result').classList.remove('hidden');
});