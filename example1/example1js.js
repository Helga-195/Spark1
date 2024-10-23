document.addEventListener("DOMContentLoaded", function () {
    function createParagraph() {
      let para = document.createElement("p");
      para.textContent = "You clicked the button!";
      document.body.appendChild(para);
    }
  
    const buttons = document.querySelectorAll("button");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", createParagraph);
    }
  });
  const apiKey = '017fa7cb-668a-4b38-b6bd-125bd3752bf6'; // Вставьте сюда ваш API-ключ
const apiUrl = 'https://nutrapush.com/api/v2/campaign?cid=f8c39038-7df9-469b-a2d2-0a80d612e51d'; // Замените на нужный вам эндпоинт

fetch(apiUrl, {
    method: 'GET', // или 'POST', если нужно
    headers: {
        'Authorization': `Bearer ${apiKey}`, // Используйте API-ключ для аутентификации
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Сеть ответила с ошибкой: ' + response.status);
    }
    return response.json();
})
.then(data => {
    console.log(data); // Обработка полученных данных
})
.catch(error => {
    console.error('Ошибка:', error);
});