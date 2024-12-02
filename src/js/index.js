function validateForm() {
    const inputs = document.getElementsByTagName('input');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById("errorMessage"); 
    var successMessage = document.getElementById("successMessage");

    errorMessage.style.display = 'none'; 
    errorMessage.textContent = ''; 
    successMessage.style.display = 'none';

    Array.from(inputs).forEach((inputando) => {
        if(inputando.value.trim() === "" || password !== confirmPassword) {
            inputando.classList.remove('input');
            inputando.classList.remove('input-preenchido');
            inputando.classList.add('input-vazio');
            errorMessage.textContent = 'Check that the fields are filled in and that the passwords match.'; 
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            inputando.classList.remove('input');
            inputando.classList.remove('input-vazio');
            inputando.classList.add('input-preenchido');

            successMessage.textContent = 'Successfully registered.'; 
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        }
    })
}