async function sendToTelegram(message) {
    const botToken = '8194466205:AAGJ48FK9d3OMJ07J3HHDYdk28lUgBIoX_A'; // Ваш токен
    const chatId = '-1002259497759'; // Ваш ID чату
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();
        console.log('Response from Telegram:', data); // Додаємо лог

        if (data.ok) {
            showMessage('Дані надіслані успішно!', 'success');
        } else {
            showMessage('Сталася помилка: ' + data.description, 'error');
        }
    } catch (error) {
        console.error('Error sending message:', error); // Лог помилки
        showMessage('Помилка при надсиланні даних', 'error');
    }
}

function showMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.textContent = message;
    messageContainer.className = type === 'success' ? 'message success' : 'message error';
    document.body.appendChild(messageContainer);

    // Прибираємо повідомлення через 3 секунди
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector("#searchForm");
    const becomeForm = document.querySelector("#becomeForm");

    searchForm.onsubmit = function(event) {
        event.preventDefault();

        const name = document.getElementById('searchName').value;
        const phone = document.getElementById('searchPhone').value;
        const age = document.getElementById('searchAge').value;
        const level = document.getElementById('level').value; // Змінив на правильний ID
        const subject = document.getElementById('subject').value; // Змінив на правильний ID
        const message = `<b>Шукаю Репетитора:</b>\n<b>Ім'я:</b> ${name}\n<b>Телефон:</b> ${phone}\n<b>Вік:</b> ${age}\n<b>Рівень:</b> ${level}\n<b>Вивчення:</b> ${subject}`;

        sendToTelegram(message);
        searchForm.reset(); // Очищаємо форму
        document.getElementById('searchModal').style.display = 'none'; // Закриваємо модальне вікно
    };

    becomeForm.onsubmit = function(event) {
        event.preventDefault();

        const name = document.getElementById('becomeName').value;
        const phone = document.getElementById('becomePhone').value;
        const subject = document.getElementById('becomeSubject').value;
        const message = `<b>Хочу стати Репетитором:</b>\n<b>Ім'я:</b> ${name}\n<b>Телефон:</b> ${phone}\n<b>Предмет:</b> ${subject}`;

        sendToTelegram(message);
        becomeForm.reset(); // Очищаємо форму
        document.getElementById('becomeModal').style.display = 'none'; // Закриваємо модальне вікно
    };
});