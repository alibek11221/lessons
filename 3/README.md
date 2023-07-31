**Трансформации**

- Примеры применения трансформаций:
   ```css
   .translate-example {
     transform: translate(50px, 20px);
   }
   
   .scale-example {
     transform: scale(1.5);
   }
   
   .rotate-example {
     transform: rotate(45deg);
   }
   
   .skew-example {
     transform: skewX(30deg);
   }
   ```

2.2 Комбинирование трансформаций
- Пример комбинирования трансформаций:
   ```css
   .combination-example {
     transform: translate(50px, 20px) rotate(45deg) scale(1.2);
   }
   ```

**Позиционирование**

- Примеры использования позиционирования:
   ```css
   .relative-example {
     position: relative;
     top: 20px;
     left: 30px;
   }
   
   .absolute-example {
     position: absolute;
     top: 50px;
     right: 20px;
   }
   
   .fixed-example {
     position: fixed;
     bottom: 0;
     right: 0;
   }
   ```
**Анимации в CSS**

- Введение ключевых анимационных свойств:
    - `animation-name`
    - `animation-duration`
    - `animation-timing-function`
    - `animation-delay`
    - `animation-iteration-count`
    - `animation-direction`
    - `animation-fill-mode`
- Пример применения анимации к элементу:
   ```css
   .box {
     width: 100px;
     height: 100px;
     background-color: red;
     animation-name: changeColor;
     animation-duration: 2s;
     animation-timing-function: ease-in-out;
     animation-delay: 1s;
     animation-iteration-count: 3;
   }
   ```

**Практика трансформаций, позиционирования и анимаций**

- Задание: создать кнопку, которая будет летать при наведении мыши и менять свою тень.
   ```html
   <button class="flying-button">Летающая кнопка</button>
   ```
   ```css
   .flying-button {
     padding: 10px 20px;
     background-color: #4CAF50;
     color: white;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     animation-name: fly;
     animation-duration: 2s;
     animation-timing-function: ease-in-out;
   }

   @keyframes fly {
     0% {
       transform: translateY(0);
       box-shadow: none;
     }
     50% {
       transform: translateY(-30px);
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
     }
     100% {
       transform: translateY(0);
       box-shadow: none;
     }
   }
   ```

Комбинирование трансформаций и позиционирования
- Задание: создать элемент и применить к нему комбинацию трансформаций и позиционирования.