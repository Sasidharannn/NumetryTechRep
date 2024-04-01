document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / ((height / 100) * (height / 100));
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  
    // Display diet plan based on BMI
    const dietPlansElement = document.getElementById('dietPlans');
    dietPlansElement.innerHTML = '';
  
    if (bmi < 18.5) {
      dietPlansElement.innerHTML = `<p>Underweight: Eat a balanced diet with plenty of protein, carbohydrates, and healthy fats.</p>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      dietPlansElement.innerHTML = `<p>Normal weight: Maintain a balanced diet and exercise regularly.</p>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      dietPlansElement.innerHTML = `<p>Overweight: Focus on portion control, eat plenty of fruits and vegetables, and exercise regularly.</p>`;
    } else {
      dietPlansElement.innerHTML = `<p>Obese: Consult with a healthcare professional for personalized diet and exercise recommendations.</p>`;
    }
  });
  