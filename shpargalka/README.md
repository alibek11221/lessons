1. `<div>`: Контейнер-блок без семантического значения.
   Примеры:
   ```html
   <div class="container">Содержимое</div>
   <div class="sidebar">Боковая панель</div>
   ```

2. `<span>`: Контейнер-строка без семантического значения.
   Примеры:
   ```html
   <span style="color: blue;">Синий текст</span>
   <p>Это <span style="font-weight: bold;">полужирный текст</span></p>
   ```

3. `<a>`: Ссылка.
   Примеры:
   ```html
   <a href="https://www.example.com">Ссылка на пример</a>
   <p>Посетите наш <a href="https://www.example.com">веб-сайт</a> для получения дополнительной информации.</p>
   ```

4. `<img>`: Изображение.
   Примеры:
   ```html
   <img src="image.jpg" alt="Описание изображения">
   <div>
     <img src="icon.png" alt="Иконка">
     <span>Иконка пользователя</span>
   </div>
   ```

5. `<ul>` и `<li>`: Неупорядоченный список.
   Примеры:
   ```html
   <ul>
     <li>Пункт 1</li>
     <li>Пункт 2</li>
   </ul>
   <ul>
     <li>Яблоко</li>
     <li>Груша</li>
     <li>Апельсин</li>
   </ul>
   ```

6. `<table>`, `<tr>`, `<td>`: Теги для создания таблиц.
   Пример:
    ```html
    <table>
      <tr>
        <td>Ячейка 1</td>
        <td>Ячейка 2</td>
      </tr>
      <tr>
        <td>Ячейка 3</td>
        <td>Ячейка 4</td>
      </tr>
    </table>
    ```

7. `<form>`, `<label>`, `<input>`, `<button>`: Теги для создания формы и её элементов.
   Пример:
    ```html
    <form>
      <label for="username">Имя пользователя:</label>
      <input type="text" id="username" name="username">
      <button type="submit">Отправить</button>
    </form>
    ```

## CSS селекторы:

1. Тег селектор: Выбирает элемент по его имени тега.
   Примеры:
   ```css
   p { color: blue; }
   h1 { font-size: 24px; }
   ```

2. Классовый селектор: Выбирает элементы с определенным классом.
   Примеры:
   ```css
   .container { width: 100%; }
   .highlight { background-color: yellow; }
   ```

3. Идентификаторный селектор: Выбирает элемент с определенным id.
   Примеры:
   ```css
   #header { background-color: gray; }
   #menu { float: left; }
   ```

4. Селектор по атрибуту: Выбирает элементы с определенным значением атрибута.
   Примеры:
   ```css
   input[type="text"] { border: 1px solid black; }
   a[target="_blank"] { color: red; }
   ```

5. Селектор потомка: Выбирает элемент, который является потомком другого элемента.
   Примеры:
   ```css
   ul li { list-style-type: disc; }
   .container p { font-weight: bold; }
   ```

6. Селектор дочернего элемента: Выбирает элементы, которые являются прямыми детьми другого элемента.
   Примеры:
   ```css
   ul > li { font-weight: bold; }
   .menu > li { display: inline-block; }
   ```

7. Группировка селекторов: Применяет одни и те же стили к нескольким селекторам.
   Примеры:
   ```css
   h1, h2, h3 { color: #333; }
   .primary, .secondary { font-family: "Arial", sans-serif; }
   ```

## Псевдоклассы:

1. `:hover`: Применяется, когда курсор находится над элементом.
   Примеры:
   ```css
   a:hover { color: red; }
   button:hover { background-color: lightgray; }
   ```

2. `:active`: Применяется, когда элемент активен (при нажатии на ссылку, кнопку и т.д.).
   Примеры:
   ```css
   button:active { background-color: green; }
   input:active { border: 2px solid orange; }
   ```

3. `:focus`: Применяется, когда элемент получает фокус ввода (например, при клике на текстовое поле).
   Примеры:
   ```css
   input:focus { border: 2px solid blue; }
   textarea:focus { background-color: #f0f0f0; }
   ```

## Псевдоэлементы:

1. `::before`: Вставляет контент перед содержимым элемента.
   Примеры:
   ```css
   p::before {
     content: ">> ";
   }
   .icon::before {
     content: url("icon.png");
   }
   ```

2. `::after`: Вставляет контент после содержимого элемента.
   Примеры:
   ```css
   p::after {
     content: " <<";
   }
   .tooltip::after {
     content: attr(data-tooltip);
   }
   ```

## Частые CSS свойства:

1. `color`: Задает цвет текста.

   Примеры:
   ```css
   p {
     color: red;
   }
   h1 {
     color: #337ab7;
   }
   ```

2. `font-size`: Задает размер шрифта.

   Примеры:
   ```css
   h1 {
     font-size: 24px;
   }
   .small-text {
     font-size: 12px;
   }
   ```

3. `width`: Задает ширину элемента.

   Примеры:
   ```css
   img {
     width: 100px;
   }
   .container {
     width: 80%;
   }
   ```

4. `height`: Задает высоту элемента.

   Примеры:
   ```css
   div {
     height: 200px;
   }
   .header {
     height: 60px;
   }
   ```

5. `margin`: Задает отступы вокруг элемента.

   Примеры:
   ```css
   div {
     margin: 10px;
   }
   .box {
     margin: 20px 10px;
   }
   ```

6. `padding`: Задает внутренние отступы для элемента.

   Примеры:
   ```css
   p {
     padding: 5px;
   }
   .content {
     padding: 20px 30px;
   }
   ```

7. `background-color`: Задает цвет фона элемента.

   Примеры:
   ```css
   body {
     background-color: #f0f0f0;
   }
   .highlight {
     background-color: yellow;
   }
   ```

8. `border`: Задает стиль, ширину и цвет границы элемента.

   Примеры:
   ```css
   div {
     border: 1px solid black;
   }
   .box {
     border: 2px dashed #ccc;
   }
   ```

9. `text-align`: Выравнивание текста внутри элемента.

   Примеры:
   ```css
   p {
     text-align: center;
   }
   .left-align {
     text-align: left;
   }
   ```

10. `float`: Плавающее позиционирование элемента.

    Примеры:
    ```css
    img {
      float: left;
    }
    .sidebar {
      float: right;
    }
    ```

11. `position`: Задает тип позиционирования элемента.

    Примеры:
    ```css
    div {
      position: absolute;
      top: 0;
      left: 0;
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
    }
    ```

12. `box-shadow`: Создает тень для элемента.

    Примеры:
    ```css
    div {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
    .card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    ```

13. `border-radius`: Задает радиус закругления углов элемента.

    Примеры:
    ```css
    div {
      border-radius: 5px;
    }
    .rounded-button {
      border-radius: 20px;
    }
    ```
