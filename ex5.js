function f(){
    var v1 = document.getElementsByTagName('input')[0].value;
    var li = document.createElement('li');
    li.textContent = v1;

    var ul = document.getElementById("pre");

    var ul2 = document.getElementById("lon");
    var lp = ul2.getElementsByTagName('li');

    for(var i = 0; i < lp.length; i++){
        if(lp[i].textContent == v1){
            ul2.removeChild(lp[i]);
            ul.appendChild(li);
            break;
        }
    }
}
function f2(){
    var v1 = document.getElementsByTagName('input')[0].value;
    var ul = document.getElementById("pre");
    var lp = u1.getElementsByTagName('li');
    for(var i = 0; i < lp.length; i++){
        if(lp[i].textContent == v1){
            ul.removeChild(lp[i]);
            break;
        }
    }
}