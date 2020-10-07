window.onload = function() { // using event hooking to prevent innerHTML null error
    forLoops();
    function forLoops() {
        var text = "";
        for(var i = 1; i < 101; i++){
            text += "The number is " + i + "<br>";
        }
        document.getElementById("loop1").innerHTML = text;
    }
}
