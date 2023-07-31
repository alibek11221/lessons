В CSS свойство `display` используется для определения типа элемента и его поведения при отображении на веб-странице. Значение `block` делает элемент блочным, что означает, что он занимает всю доступную ширину и начинает отображаться с новой строки.

Примеры блочных элементов:
- `<div>`
- `<p>`
- `<h1>`, `<h2>`, `<h3>` и т.д.

Применение свойства `display: block` позволяет создавать вертикальные блоки на веб-странице.

   ```css
   .block-example {
     display: block;
     width: 200px;
     height: 100px;
     background-color: #f36;
     color: #fff;
     text-align: center;
     line-height: 100px;
   }
   ```

   ```html
   <div class="block-example">This is a block element</div>
   ```

В данном примере создан блочный элемент с классом `.block-example`. Ему применено свойство `display: block`, что делает его блочным. Установлены ширина, высота, цвет фона и цвет текста. Свойства `text-align: center` и `line-height: 100px` центрируют текст внутри блока по горизонтали и вертикали.


**Свойство display: flex**

Свойство `display: flex` позволяет создавать гибкие контейнеры (flex контейнеры) для распределения элементов внутри них. Flex контейнер может иметь два направления: строки или колонки.

Основные свойства flex контейнера:
- `flex-direction`: определяет направление элементов внутри контейнера (row или column).
- `justify-content`: выравнивание элементов вдоль главной оси.
- `align-items`: выравнивание элементов вдоль поперечной оси.
- `flex-wrap`: указывает, переносить ли элементы на новую строку или колонку, если не помещаются в одной линии.
- `flex-flow`: сокращенное свойство для `flex-direction` и `flex-wrap`.

**Использование свойства display: flex**

Пример использования свойства display: flex для создания гибкого макета.

   ```css
   .flex-container {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
   }

   .flex-item {
     width: 100px;
     height: 100px;
     background-color: #f36;
     color: #fff;
     text-align: center;
     line-height: 100px;
   }
   ```

   ```html
   <div class="flex-container">
     <div class="flex-item">Item 1</div>
     <div class="flex-item">Item 2</div>
     <div class="flex-item">Item 3</div>
   </div>
   ```

В данном примере создан flex контейнер с классом `.flex-container`, а внутри него три дочерних элемента с классом `.flex-item`. Контейнеру применено свойство `display: flex`, что превращает его дочерние элементы в flex элементы. Свойство `flex-direction: row` определяет, что элементы будут расположены в строку (горизонтально). С помощью `justify-content: space-between` элементы равномерно распределяются по краям контейнера. Свойство `align-items: center` выравнивает элементы по центру по вертикали.
