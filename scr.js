var a;
var b;
var c;
var alpha;
var beta;
var gamma = 90;
var checkit = 0;
var rad2deg = 180/Math.PI;
var deg2rad = Math.PI/180;
var rotate;
var q; //hypotenusenabschnitt q
var p; //hypotenusenabschnitt p
var h; //höhe
var multi; //muktiplikator für die grösse

/*
q = a²/c
p = c - q
h = sqrt(p·q)
*/

function check(cbox) {
    if (cbox.checked) {

        var input = document.createElement("input");
        input.type = "number";
        var div = document.createElement("div");

        div.onchange = function () {

            document.getElementById(div.id).remove();
            var output = document.createElement("div");
            output.name = cbox.name;
            output.id = cbox.name;
            output.value = input.value;

            output.innerHTML = output.name + ":" + input.value;
            document.getElementById("output").appendChild(output);

            var calculator = document.createElement("div");
            document.getElementById("calc").appendChild(calculator);
            checkit += Number(cbox.value);
            switch(checkit){
                case 3:
                    a = Number(A.value);
                    b = Number(B.value);
                    c = Math.sqrt(Math.round((a*a) + (b*b)));

                    alpha = a/b;
                    alpha = Math.atan(alpha) * rad2deg;
                    beta = 90 - alpha;
                    break;

                case 5:
                    a = Number(A.value);
                    c = Number(C.value);
                    b = Math.sqrt(Math.round(-(a*a) + (c*c)));

                    alpha = a/b;
                    alpha = Math.atan(alpha) * rad2deg;
                    beta = 90 - alpha;
                    break;

                case 6:
                    b = Number(B.value);
                    c = Number(C.value);
                    a = Math.sqrt(Math.round(-(b*b) + (c*c)));

                    alpha = a/b;
                    alpha = Math.atan(alpha) * rad2deg;
                    beta = 90 - alpha;
                    break;

                case 9:
                    a = Number(A.value);
                    alpha = Number(Alpha.value);
                    beta = 90 - alpha;

                    b = (a * Math.sin(beta*deg2rad))/Math.sin(alpha*deg2rad);
                    c = Math.sqrt(Math.round((a*a) + (b*b)));
                    break;

                case 10:
                    b = Number(B.value);
                    alpha = Number(Alpha.value);
                    beta = 90 - alpha;

                    a = b / Math.tan(beta*deg2rad);
                    c = Math.sqrt(Math.round((a*a) + (b*b)));
                    break;

                case 12:
                    c = Number(C.value);
                    alpha = Number(Alpha.value);
                    beta = 90 - alpha;

                    a = c * Math.sin(alpha*deg2rad);
                    b = c * Math.cos(alpha*deg2rad);
                    break;

                case 17:
                    a = Number(A.value);
                    beta = Number(Beta.value);
                    alpha = 90 - beta;

                    b = (a * Math.sin(beta*deg2rad))/Math.sin(alpha*deg2rad);
                    c = Math.sqrt(Math.round((a*a) + (b*b)));
                    break;

                case 18:
                    b = Number(B.value);
                    beta = Number(Beta.value);
                    alpha = 90 - beta;

                    a = b / Math.tan(beta*deg2rad);
                    c = b / Math.sin(beta*deg2rad);
                    break;

                case 20:
                    c = Number(C.value);
                    beta = Number(Beta.value);
                    alpha = 90 - beta;

                    a = c * Math.cos(beta*deg2rad);
                    b = (a * Math.sin(beta*deg2rad))/Math.sin(alpha*deg2rad);
                    break;

                default:
                    //alert(checkit);
            }

            //Output
            if(a!=undefined && b!=undefined && c!= undefined && alpha!= undefined && beta!= undefined
                && gamma!= undefined) {
                q = Math.pow(a, 2) / c;
                p = c - q;
                h = Math.sqrt(p * q);

                q = Math.round(q * 1000) / 1000;
                p = Math.round(p * 1000) / 1000;
                h = Math.round(h * 1000) / 1000;
                a = Math.round(a * 1000) / 1000;
                b = Math.round(b * 1000) / 1000;
                c = Math.round(c * 1000) / 1000;
                alpha = Math.round(alpha * 1000) / 1000;
                beta = Math.round(beta * 1000) / 1000;

                calculator.innerHTML = "A: " + a + "<br>B: " + b + "<br>C: " + c + "<br>⍺: " + alpha + "°<br>β: " + beta
                    + "°<br>𝛾: " + gamma + "°<br>q: " + q + "<br>p: " + p + "<br>h: " + h;


                //Zeichnen

                var canvas = document.getElementById('canvas');
                if (canvas.getContext) {
                    var ctx = canvas.getContext('2d');
                    var shapeHeight = 300;
                    var shapeStart = 75;
                    if(c>80) {
                        multi = 1;
                    }else if(c<80 && c>40) {
                        multi = 4;
                    }else if(c<40 && c>20) {
                        multi = 8;
                    }else if(c<20 && c>10) {
                        multi = 16;
                    }else if(c<10) {
                        multi = 32;
                    }

                    ctx.beginPath();
                    ctx.moveTo(shapeStart, shapeHeight);
                    ctx.lineTo(shapeStart + (c * multi), shapeHeight);

                    ctx.lineTo((shapeStart + (c * multi)) - (q * multi), shapeHeight - (h * multi));

                    ctx.fillStyle = "#FBA90A";
                    ctx.fill();
                    ctx.closePath();
                    ctx.stroke();

                    //h linie
                    ctx.moveTo(shapeStart + (p * multi), shapeHeight);
                    ctx.lineTo(shapeStart + (p * multi), shapeHeight - (h * multi));
                    ctx.stroke();

                    //teilung mit anderer farbe
                    ctx.beginPath();
                    ctx.moveTo(shapeStart, shapeHeight);
                    ctx.lineTo(shapeStart + (p * multi), shapeHeight);

                    ctx.lineTo(shapeStart + (p * multi), shapeHeight - (h * multi));
                    ctx.fillStyle = "#1430B8";
                    ctx.fill();
                    ctx.closePath();
                    ctx.stroke();

                    //p linie
                    ctx.moveTo(shapeStart, shapeHeight + 10);
                    ctx.lineTo(shapeStart + (p * multi), shapeHeight + 10);
                    ctx.stroke();

                    //p strich links
                    ctx.moveTo(shapeStart, shapeHeight + 5);
                    ctx.lineTo(shapeStart, shapeHeight + 15);
                    ctx.stroke();

                    //p strich rechts
                    ctx.moveTo(shapeStart + (p * multi), shapeHeight + 5);
                    ctx.lineTo(shapeStart + (p * multi), shapeHeight + 15);
                    ctx.stroke();

                    //q linie
                    ctx.moveTo(shapeStart + (p * multi), shapeHeight + 10);
                    ctx.lineTo(shapeStart + (c * multi), shapeHeight + 10);
                    ctx.stroke();

                    //q strich links
                    ctx.moveTo(shapeStart + (p * multi) + 2, shapeHeight + 5);
                    ctx.lineTo(shapeStart + (p * multi) + 2, shapeHeight + 15);
                    ctx.stroke();

                    //q strich rechts
                    ctx.moveTo(shapeStart + (c * multi), shapeHeight + 5);
                    ctx.lineTo(shapeStart + (c * multi), shapeHeight + 15);
                    ctx.stroke();

                    //c linie
                    ctx.moveTo(shapeStart, shapeHeight + 30);
                    ctx.lineTo(shapeStart + (c * multi), shapeHeight + 30);
                    ctx.stroke();

                    //c strich links
                    ctx.moveTo(shapeStart, shapeHeight + 25);
                    ctx.lineTo(shapeStart, shapeHeight + 35);
                    ctx.stroke();

                    //c strich rechts
                    ctx.moveTo(shapeStart + (c * multi), shapeHeight + 25);
                    ctx.lineTo(shapeStart + (c * multi), shapeHeight + 35);
                    ctx.stroke();

                    //bezeichnungen
                    ctx.fillStyle = "#1d1c1b";
                    ctx.font = "15px Arial";
                    ctx.fillText("h", shapeStart + (p * multi) + 5, shapeHeight - ((h * multi) / 2));
                    ctx.fillText("C", shapeStart + ((c * multi) / 2), shapeHeight + 50);

                    ctx.fillText("B", shapeStart - 15, shapeHeight - ((h * multi) / 2));
                    ctx.fillText("A", (shapeStart + (c * multi)) + 5, shapeHeight - ((h * multi) / 2));

                    ctx.fillText("𝛾", shapeStart + (p * multi), shapeHeight - ((h * multi) + 10));
                    ctx.fillText("⍺", shapeStart - 15, shapeHeight);
                    ctx.fillText("β", shapeStart + (c * multi) + 10, shapeHeight);

                    //p bezeichnung, andere farbe
                    ctx.fillStyle = "#1430B8";
                    ctx.fillText("p", shapeStart + ((p * multi) / 2), shapeHeight + 25);

                    //q bezeichnung, andere farbe
                    ctx.fillStyle = "#FBA90A";
                    ctx.fillText("q", shapeStart + (p * multi) + ((q * multi) / 2), shapeHeight + 25);
                }
            }

        };

        div.id = cbox.name;
        div.innerHTML = cbox.name;
        div.appendChild(input);
        document.getElementById("inputfields").appendChild(div);

    } else {
        document.getElementById(cbox.name).remove();
    }
}

function reset() {
    location.reload();
}

var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function (e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {
        konamiCodePosition++;

        if (konamiCodePosition == konamiCode.length){
            activateCheats();
        }

    } else{
        konamiCodePosition = 0;
    }

});

function activateCheats() {
    document.body.style.backgroundImage = "url('popcornparrot.gif')";
}
