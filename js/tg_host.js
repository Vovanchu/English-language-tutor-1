const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

// Замість цього значення вставте свій токен бота та ID чату
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// Middleware для обробки POST-запитів
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обробка форми з сайту
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    // Текст повідомлення для Telegram
    const text = `Заявка від клієнта:\nІм'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`;

    try {
        // Запит до API Telegram для відправки повідомлення
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text: text
        });

        // Відправляємо відповідь назад на фронтенд
        res.status(200).send('Заявка успішно надіслана!');
    } catch (error) {
        console.error('Помилка при відправці до Telegram', error);
        res.status(500).send('Виникла помилка. Спробуйте ще раз пізніше.');
    }
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
