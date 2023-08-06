//тип данных int - число
// 21332123123
//тип данных string - строка обозначается кавычками "" '' 
// "hello"
//тип данных float - число с плалвющей точкой - 1.2312
// 1.23123


let even = 1 >= 1
console.log(even)


const burger = document.querySelector("#burger");
const closer = document.querySelector("#close");

const menu  = document.querySelector('#mob_menu');

burger.addEventListener('click', function(){
    menu.style.left = 0
})
closer.addEventListener('click', function(){
    menu.style.left = "100%"
})