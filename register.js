document.addEventListener('DOMContentLoaded', function () {
    const showLoginFormButton = document.getElementById('show-login-form');
    const showRegisterFormButton = document.getElementById('show-register-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Show login form and hide register form
    showLoginFormButton.addEventListener('click', function (event) {
        event.preventDefault();
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    // Show register form and hide login form
    showRegisterFormButton.addEventListener('click', function (event) {
        event.preventDefault();
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Function to toggle password visibility
    function togglePasswordVisibility(inputField, showHideButton) {
        const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
        inputField.setAttribute('type', type);
        showHideButton.textContent = type === 'password' ? 'Show' : 'Hide';
    }

    // Event listener for show/hide password button in login form
    const loginPasswordInput = document.getElementById('login-password');
    const loginPasswordToggle = loginForm.querySelector('.show-hide-btn');
    loginPasswordToggle.addEventListener('click', function () {
        togglePasswordVisibility(loginPasswordInput, loginPasswordToggle);
    });

    // Event listener for show/hide password button in register form
    const registerPasswordInput = document.getElementById('register-password');
    const registerPasswordToggle = registerForm.querySelector('.show-hide-btn');
    registerPasswordToggle.addEventListener('click', function () {
        togglePasswordVisibility(registerPasswordInput, registerPasswordToggle);
    });
});
