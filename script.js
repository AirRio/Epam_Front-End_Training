//проверка нажатой кнопки в radiobutton
function getCheckedRadioValue(name) {
    var elements = document.getElementsByName(name);

    for (var i=0, len=elements.length; i<len; ++i)
        if (elements[i].checked) return elements[i].value;
}
//вывод стиля таблицы
function checkType()
{
    let type = getCheckedRadioValue('review_type');
    if(type == "first")
    {
        First()
    }else if(type == "second")
    {
        Second()
    }else {
        Third()
    }
}

//проверка число меньше 10 если да то добавить ноль
function ifzero(value)
{
    if(value < 10)
    {
        value = '0' + value
    }
    return value
}

//выборка текущей даты (в часности день, месяц, год)
function data()
{
    var currentDate = new Date();
    var day = ifzero(currentDate.getDate());
    var month = ifzero(currentDate.getMonth()+1);
    var year = currentDate.getFullYear();
    return day+"."+month+"."+year
}

//отправить в блок html по id
var dataTime = data()
document.getElementById('DataTime').innerHTML = dataTime

//проверка на мобильную, компьютерную версию по OC
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('version').innerHTML = "Mobile version"
} else document.getElementById('version').innerHTML = "PC version"


//инициализация объектов для таблиц
let samsung = {
    name: 'Samsung Galaxy Flip 3',
    price: 1250,
    year: 2021,
    color: 'black'
}
let google = {
    name: 'Google Pixel 5',
    price: 850,
    year: 2020,
    color: 'green'
}
let huawei = {
    name: 'Huawei P50 Pro',
    price: 1560,
    year: 2021,
    color: 'grey'
}
let iphone = {
    name: 'Iphone 13 Pro',
    price: 1390,
    year: 2021,
    color: 'white'
}

function writeTable(){
    document.getElementById("table").innerHTML = '<table cellpadding="4" cellspacing="4"> <tr> <th> Название </th> <th> Цвет </th> <th>Дата выхода на рынок</th> <th>Цена $ (USD)</th> </tr>'
                                                + `<tr> <td> ${samsung.name} </td> <td> ${samsung.color} </td> <td> ${samsung.year} </td> <td> ${samsung.price} </td> </tr>`
                                                + `<tr> <td> ${google.name} </td> <td> ${google.color} </td> <td> ${google.year} </td> <td> ${google.price} </td> </tr>`
                                                + `<tr> <td> ${huawei.name} </td> <td> ${huawei.color} </td> <td> ${huawei.year} </td> <td> ${huawei.price} </td> </tr>`
                                                + `<tr> <td> ${iphone.name} </td> <td> ${iphone.color} </td> <td> ${iphone.year} </td> <td> ${iphone.price} </td> </tr> </table>`
}

writeTable()

//стили таблицы
function First()
{
    let newStyles = document.createElement('style')
    document.head.append(newStyles)
    newStyles.innerHTML = "table {" + 
                          "background: maroon;" +
                          "color: white;" + 
                          "}" +
                          "td {" +
                          "background: navy;"
                          + "}"
}

function Second()
{
    let newStyles = document.createElement('style')
    document.head.append(newStyles)
    newStyles.innerHTML = "table {" + 
                          "background: #dc0;"  +
                          "border: 5px double #000;" + 
                          "}" +
                          "td, th {" +
                          "padding: 5px;" +
                          "border: 1px solid #fff;"
                          + "}"
}

function Third()
{
    let newStyles = document.createElement('style')
    document.head.append(newStyles)
    newStyles.innerHTML = "table {" + 
                          "background: green;" +
                          "color: white;" + 
                          "}" +
                          "td {" +
                          "background: blue;"
                          + "}"
}




