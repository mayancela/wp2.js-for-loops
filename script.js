window.onload = function() { // using event hooking to prevent innerHTML null error
    forLoops();
    function forLoops() {
        var text = "";
        for(var i = 1; i < 101; i++){
            text += "The number is " + i + "<br>";
        }
        document.getElementById("loop1").innerHTML = text;

        text = "";
        for(var i = 50; i < 101; i++){
            text += "The number is " + i + "<br>";
        }
        document.getElementById("loop2").innerHTML = text;

        text = "";
        for(var i = 1; i < 101; i++) {
            if(i % 2 == 0)
                text += "The number is " + i + "<br>";
        }
        document.getElementById("loop3").innerHTML = text;

        text = "";
        for(var i = 25; i < 101; i++) {
            if(i % 2 != 0)
                text += "The number is " + i + "<br>";
        }
        document.getElementById("loop4").innerHTML = text;
    }
}
