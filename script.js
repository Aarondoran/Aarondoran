function checkPassword() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    
    // Replace 'your_password' with the actual password stored in your JSON file.
    const storedPassword = 'Doorhandle';

    if (passwordInput.value === storedPassword) {
        // Password is correct, redirect or display content.
        window.location.href = 'content.html'; // Replace with the actual content page.
    } else {
        // Password is incorrect, display an error message.
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
