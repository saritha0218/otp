const otpDisplay = document.getElementById('otp');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    let otp = '';
    otp = Math.floor(Math.random() * 100000+143353);
    otpDisplay.textContent = otp;
});