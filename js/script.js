/*
Элементы:
1. Кошка;
2. Мышь;
3. Курсор;
4. Блок;
5. Таймер.

Задание:
1. Создать мышку;
2. Создать кошку;
3. Получить координаты курсора;
4. Передать п.3 мышке;
5. Передать п.3 кошке с задержкой 2с;
6. Рандомно создать точку:
    - рандомно создать ширину в пределах от 50 до 150;
    - рандомно создать высоту в пределах от 50 до 150;
7. Получить координаты п.6;
8. п.6 с интервалом 5с и оставлять на месте;
9. Суммировать коррдинаты в одно условие;
10. Создать условие:
    Если попали на п.9 координаты то п.4 не работает;
11. Создать условие:
    Сравнить координаты п.1 и п.2
    Если они равны то Игра окончена;
12. Создать таймер:
    Секундомер через объект Date();
13. Создать блок для конца игры
    В конце игры вывести блок с объявлением о окончании игры
    Вывести результат времени игрока взятый с п.12
*/

//функция генератор случайых чисел 
var start = new Date(); //засекаем время

function rnd(from, to) {
    return Math.floor(Math.random()*(to-from+1)+from);
}

//функция вывода Елементов на екран 
var arr = []; 
var kol = 0;

function getElems(e) {
    //создаем новый Элемент и добаляем в контейнер
    var newDiv = document.createElement('div');
    newDiv.className = "active";
    Elem.appendChild(newDiv);
    
    //создаем рандомно X, Y, Width, Heigh        
    var winWidth = window.innerWidth; //ширину экрана 
    var winHeight = window.innerHeight; //высоту экрана 
    
    //создаем массив из Элементов
    var elems = document.getElementsByClassName('active'); 
    
    //двумерый массив из X, Y, Width, Height
    arr[kol] = [];        
    for(;kol<elems.length; kol++){
        arr[kol][0] = rnd(0,winWidth);         //кордината Х 
        arr[kol][1] = rnd(0,winHeight);        //кордината Y 
        arr[kol][2] = rnd(50,150);             //ширина Width
        arr[kol][3] = rnd(50,150);             //высота Height
    }
    
    //выводим Елементы на экран
    for(var i=0; i<elems.length; i++){
        elems[i].style.left = arr[i][0] + 'px';     //X  
        elems[i].style.top = arr[i][1] + 'px';      //Y
        elems[i].style.width = arr[i][2] +'px';     //Width
        elems[i].style.height = arr[i][3] +'px';    //Height
        elems[i].style.background = 'black';
        elems[i].style.position = 'absolute';
    }
}//function getElems

setInterval('getElems()', 5000);

//функция проверки попадания мыши в ловушку
function moveAnimals(e) {

    e = e || window.event; 
    var x = e.clientX; 
    var y = e.clientY; 
    
    //движение Кота и Мишки за курсором
    mouse.style.left = x - 50 + 'px'; //50 center of mouse
    mouse.style.top = y - 50 + 'px'; //50 center of mouse
    cat.style.left = x - 50 + 'px' ; //50 центр кошки X
    cat.style.top =  y - 90 + 'px';
    
    //проверка попадания в область Элемента
    var elems = document.getElementsByClassName('active');
    for(var i=0; i<elems.length; i++){
        var x1 = arr[i][0];         // X Элемента
        var y1 = arr[i][1];         // Y Элемента
        var x2 = x1 + arr[i][2];    // X + Width Элемента
        var y2 = y1 + arr[i][3];    // Y + Height Элемента
             
        if ((x >= x1) && (x <= x2) && (y >= y1) && (y <= y2)) {
            
            var finish = new Date(); 
            var hour = finish.getHours() - start.getHours();
            var min = finish.getMinutes() - start.getMinutes();
            var sec = finish.getSeconds() - start.getSeconds();
            alert ('Она боролась до конца... '+hour+':'+min+':'+sec);
            
        }
        
    }
}//function moveAnimals(e)


document.body.onmousemove=moveAnimals;
