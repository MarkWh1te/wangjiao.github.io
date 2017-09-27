function greetMe(yourName) {
    alert('Hello ' + yourName);
}
greetMe('World');

var fn = x => x * x;
var fn_object = (x, y) => ({
    'test': x + y
})
var age = 20;
if (age >= 18) { // 如果age >= 18为true，则执行if语句块
    dd = fn(age)
    test12 = fn_object(1, 2)
    alert(test12['test']);
} else { // 否则执行else语句块
    alert('teenager');
}
document.title = 'Vivi学习JavaScript!';
var i, s, menu, drinks;

menu = document.getElementById('drink-menu');
menu.tagName; // 'DL'

drinks = document.getElementsByTagName('dt');
var i, s, menu, drinks;

menu = document.getElementById('drink-menu');
alert(menu.tagName); // 'DL'

drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i = 0; i < drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
alert(s);
s = '提供的饮料有:';
for (i = 0; i < drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
alert(s);

var p = document.getElementById('drink-menu');
// p.innerHTML = '<h1>test111</h1>';
// p.innerText='test';
// p.style.color = '#ff0000';
// p.style.fontSize = '20px';
// p.style.paddingTop = '2em'

function success(text) {
    var textarea = document.getElementById('drink-menu');
    textarea.innerHTML = '<img src=' + text['image'] + '>' + '<br>' + '<h1>' + text['auther'] + '</h1>';
    // textarea.innerText = "sssss";
}

function fail(code) {
    var textarea = document.getElementById('drink-menu');
    textarea.innerText = 'Error code: ' + code;
}

var douban_apiurl = 'https://api.douban.com/v2/book/1220562'
    // var douban_apiurl = 'http://stock.markwh1te.org/'

var responseHandler; // 定义一个全局作用域的函数

function getJSONP(url, cb) {
    if (url.indexOf('?') === -1) {
        url += '?callback=responseHandler';
    } else {
        url += '&callback=responseHandler';
    }

    // 创建script 标签
    var script = document.createElement('script');


    // 在函数内部实现包裹函数，因为要用到cb
    responseHandler = function(json) {
        try {
            cb(json)
        } finally {
            // 函数调用之后不管发生什么都要移除对应的标签，留着也没用
            script.parentNode.removeChild(script);
        }
    }

    script.setAttribute('src', url)
    document.body.appendChild(script);
}
getJSONP("https://api.douban.com/v2/book/1220562", (e) => { success(e) })