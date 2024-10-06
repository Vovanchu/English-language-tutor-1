window.addEventListener('scroll', () => {
    const header = document.querySelector('header'); // Знайдіть заголовок
    const scrollPosition = window.scrollY; // Отримати позицію прокрутки

    if (scrollPosition > 0) {
        header.classList.add('transparent'); // Додати клас при прокручуванні
    } else {
        header.classList.remove('transparent'); // Видалити клас, коли на верхній позиції
    }
})

// Функція для перемикання видимості навігаційного меню
function toggleMenu() {
    const nav = document.querySelector('nav'); // Знайти навігаційне меню
    const hamburger = document.getElementById('hamburger'); // Знайти гамбургер

    nav.classList.toggle('active'); // Додати або видалити клас 'active' для навігації
    hamburger.classList.toggle('active'); // Додати або видалити клас 'active' для гамбургера
}

// Отримуємо всі кнопки для зміни мови
const languageButtons = document.querySelectorAll('.button_language');

// Додаємо обробник подій для натискання на кнопки
languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active'); // Додаємо клас 'active' до натиснутої кнопки

        // Прибираємо клас 'active' через 2 секунди
        setTimeout(() => {
            button.classList.remove('active');
        }, 2000); // Затримка 2 секунди
    });
});

// Закриваємо модальне вікно при натисканні поза ним
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none"; // Закрити модальне вікно
    }
}

// Функція для відкриття модального вікна
function openModal(modalType) {
    if (modalType === 'search') {
        document.getElementById('searchModal').style.display = 'flex'; // Відкриваємо модальне вікно пошуку
    } else if (modalType === 'become') {
        document.getElementById('becomeModal').style.display = 'flex'; // Відкриваємо модальне вікно 'стати'
    }
}
