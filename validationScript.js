document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const inputValue = inputField.value;
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;

        if (alphanumericPattern.test(inputValue)) {
            feedback.textContent = 'Input is valid and form is submitted!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Error: Input must be alphanumeric!';
            feedback.style.color = 'red';
        }
    });
});
