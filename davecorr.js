d = document;
d.addEventListener("DOMContentLoaded", ready);

//headerText is the layout for all page headers
var headerText = ''
headerText += '<h4 id="titleIntro">Welcome to</h4>'
headerText += '<h1>Davecorr\'s<br />Javascript Playground</h1>'
headerText += '<p id="credit">Copyright &copy;2020 Dave Correia <a href="HTTP://www.davecorreia.com">davecorreia.com</a></p>'


function ready()
{
    d.getElementById("headerContent").innerHTML = headerText;
    d.getElementById("back").style.left = screen.width * .17;
    doFormat();
}

function doFormat()
{
    /*
    discover the screen aspect of the device
    4:3 screen is ~ 1.33
    16:10 screen is ~ 1.60
    16:9 screen is ~ 1.78 
    18:9 screen is ~ 2.0 
    */
    var ratio = screen.height/screen.width;
    var tmp;

    if (ratio > 1.8) {
        //reformat for 18:9
        tmp = d.getElementById("page");
        tmp.style.marginTop= "120px";

        tmp = d.getElementsByTagName("h3");
        if (tmp.length > 0) {
            for (i=0; i < tmp.length; i++) {
                // tmp[i].style.fontSize = "45px";
                tmp[i].style.marginTop = "70px";
                tmp[i].style.marginBottom = "40px";
            }
        }
    }

    if (ratio < 1.51) {
        //Reformat for 4:3 Screen - 16:9 or 10 is default
        tmp = d.getElementById("credit");
        tmp.style.fontSize = "22px";
        tmp.style.marginTop = "0px";

        d.getElementById("back").style.left = screen.width * .11;

    }
}

