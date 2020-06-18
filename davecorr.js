d = document;
d.addEventListener("DOMContentLoaded", ready);

function ready()
{
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

    // if (ratio < 1.51) {
    //     //Reformat for 4:3 Screen - A 16:9 or 10 is default
    //     tmp = d.getElementById("body");
    //     tmp.style.width = "90%";
    // }
}

