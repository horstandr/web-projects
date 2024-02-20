function saveData() {
    i = localStorage.getItem("data");
    if (i == '') {
        i=0;
    }
    i++;
    localStorage.setItem("data", i);
    document.getElementById("amount").innerHTML = "(" + i + ")" + " HorstAndr portfolio";
}