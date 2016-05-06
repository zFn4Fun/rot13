document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("input-js").value = "";
    rot13();
    document.getElementById("input-js").addEventListener("input", rot13, false);
});

function rot13() {
    var str = document.getElementById("input-js").value;
    var output = "";

    for (var i = 0; i < str.length; i++) {
        var charPosition = str.charCodeAt(i);

        if (charPosition < 65 || charPosition > 90 && charPosition < 97 || charPosition > 122) {
            output += String.fromCharCode(charPosition);
        } else if (charPosition < 78 || charPosition > 96 && charPosition < 110) {
            output += String.fromCharCode(charPosition + 13);
        } else {
            output += String.fromCharCode(charPosition - 13);
        }
    }

    if (output.length < 1) {
        document.getElementById("output-js").innerHTML = "Output goes here";
        return;
    }
     document.getElementById("output-js").innerHTML = output;
}
