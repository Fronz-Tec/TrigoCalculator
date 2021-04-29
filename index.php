<?php
/**
 * Created by PhpStorm.
 * User: kfronzeck
 * Date: 10.01.2018
 * Time: 07:43
 */

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trigonometrie</title>
    <meta name = "author" content = "K.A.Fronzeck" />

    <script src="scr.js"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
<div class="contain">
    <h1>Trigo-Rechner</h1>
    <form>
        <span class="tag">A</span><input class="check" id="a" name="A" type="checkbox" onclick="check(this)" value="1"><br>
        <span class="tag">B</span><input class="check" id="b" name="B" type="checkbox" onclick="check(this)" value="2"><br>
        <span class="tag">C</span><input class="check" id="c" name="C" type="checkbox" onclick="check(this)" value="4"><br>
        <span class="tag">⍺</span><input class="check" id="alpha" name="Alpha" type="checkbox" onclick="check(this)" value="8"><br>
        <span class="tag">β</span><input class="check" id="beta" name="Beta" type="checkbox" onclick="check(this)" value="16"><br>

        <p id="inputfields"></p>
    </form>
    <hr>
    <p id="output"></p>
    <hr>
    <p id="calc"></p>
    <canvas id="canvas" width="600px" height="400px"></canvas>
    <br>
    <button type="reset" onclick="reset()" class="reset">Reset</button>
</div>

<div class="containBreak">
</div>

<div class="contain2">
    <h2>Credits:</h2>
    <h3>©2018 K.A.Fronzeck</h3>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-google"></a>
    <a href="https://www.youtube.com/c/Fronz-Tec" target="_blank" class="fa fa-youtube"></a>
    <a href="#" class="fa fa-instagram"></a>
</div>
</body>

