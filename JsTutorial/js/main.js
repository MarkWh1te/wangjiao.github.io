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