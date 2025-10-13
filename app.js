// Переход с splash на регистрацию
function showRegistration() {
    const splash = document.getElementById('splash');
    const registration = document.getElementById('registration');

    splash.style.opacity = 1;
    splash.style.transition = "opacity 0.5s";
    splash.style.opacity = 0;

    setTimeout(() => {
        splash.classList.add('hidden');
        registration.classList.remove('hidden');
        registration.style.opacity = 0;
        registration.style.transition = "opacity 0.5s";
        registration.style.opacity = 1;
    }, 500);
}

// Форма регистрации
const regForm = document.getElementById('regForm');
regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const photoInput = document.getElementById('photoUpload');
    if(photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const registration = document.getElementById('registration');
            const mainApp = document.getElementById('mainApp');

            registration.style.opacity = 1;
            registration.style.transition = "opacity 0.5s";
            registration.style.opacity = 0;

            setTimeout(() => {
                registration.classList.add('hidden');
                mainApp.classList.remove('hidden');
                mainApp.style.opacity = 0;
                mainApp.style.transition = "opacity 0.5s";
                mainApp.style.opacity = 1;

                // Создаём аватар с фото
                const avatarDisplay = document.getElementById('avatarDisplay');
                avatarDisplay.innerHTML = `<div class="avatar-container">
                    <img src="${e.target.result}" alt="Avatar" class="avatar-photo">
                    <img src="" alt="Clothes" class="avatar-clothes" id="avatarClothes">
                </div>`;
            }, 500);
        }
        reader.readAsDataURL(photoInput.files[0]);
    }
});

// Маппинг всех PNG по категориям
const clothesMapping = {
    tops: ['avatar_tops1.png', 'avatar_tops2.png'],
    bottoms: ['avatar_bottoms1.png', 'avatar_bottoms2.png'],
    dresses: ['avatar_dress1.png', 'avatar_dress2.png'],
    outerwear: ['avatar_outerwear1.png', 'avatar_outerwear2.png']
};

// Функция примерки одежды с конкретным вариантом
function wearClothes(category, index) {
    const clothesImg = document.getElementById('avatarClothes');
    if(clothesMapping[category] && clothesMapping[category][index]){
        const file = clothesMapping[category][index];
        clothesImg.src = `assets/images/clothes/${file}`;
        clothesImg.style.opacity = 0;
        clothesImg.style.animation = 'fadeInClothes 0.5s forwards';
    }
}





