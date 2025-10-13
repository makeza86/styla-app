// Переход с splash на регистрацию
function showRegistration() {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('registration').classList.remove('hidden');
}

// Форма регистрации
const regForm = document.getElementById('regForm');
regForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем данные пользователя
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const photoInput = document.getElementById('photoUpload');

    if(photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Показываем основной экран
            document.getElementById('registration').classList.add('hidden');
            document.getElementById('mainApp').classList.remove('hidden');

            // Отображаем аватар
            const avatarDisplay = document.getElementById('avatarDisplay');
            avatarDisplay.innerHTML = `<img src="${e.target.result}" alt="Avatar" style="width:100%; border-radius:10px;">`;
        }
        reader.readAsDataURL(photoInput.files[0]);
    }
});



