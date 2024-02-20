
function Calculate() {
    var n1 = document.querySelector('#id1').value;
    var n2 = document.querySelector('#id2').value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    var result = n1 + n2;
    result = result / 2;
    document.querySelector("#result").innerHTML = result;
}