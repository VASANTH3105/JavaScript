<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #container {
            height: 200px;
            width: 200px;
            background-color: #ff0000;
            position: relative;
        }

        #box {
            width: 50px;
            height: 50px;
            background-color: #000000;
            position: absolute;
        }
        img {
            max-width: 200px;
            max-height: 200px;
        }
    </style>
</head>

<body>

    <h1 id="h1"></h1>
    <h2 id="datetime"></h2>
    <a href="www.wiki.bitsathy.ac.in">bitsathy page</a>

    <div id="demo">
        <p id="p1">This is final price: $200/-</p>
        <p id="p2">Price with festival offer: $150/-</p>
    </div>

    <div id="container">
        <div id="box"> </div>
    </div>

    <h3 id="showdate"></h3>
    <button id="showdatebtn" onclick="dateshow()">ShowDate</button>
    <br>
    <button onclick="prev()">Prev</button>
    <img id="slider" src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg" alt="">
    <button onclick="next()">Next</button>

    <script>

        //Animation in JS
        window.onload = function () {
            var pos = 0;
            var box = document.getElementById('box');
            var t = setInterval(move, 10);

            function move() {
                if (pos >= 150) {
                    clearInterval(t);
                } else {
                    pos += 1;
                    box.style.left = pos + 'px';
                }
            }
        };

        //
        var showdate = document.getElementById('showdate');
        var showdatebtn = document.getElementById('showdatebtn');

        function dateshow() {
            var datenow = new Date();
            showdate.innerHTML = datenow;
        }

        //image slider
        var images = [
            "https://i.gadgets360cdn.com/large/Oneplus_newlogo_main_1584369675960.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCrEwk2nXOcG1eOckIRLngVhkEcA7HTyoQw&usqp=CAU",
            "data:image/jpeg;base64,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"
        ]

        var num = 0;
        function next() {
            var slider = document.getElementById('slider');
            num++;
            if(num>= images.length) {
                num = 0;
            }
            slider.src = images[num];
        }

        function prev() {
            var slider = document.getElementById('slider');
            num--;
            if(num<0) {
                num = images.length-1;
            }
            slider.src = images[num];
        }

        //date and time
        var dt = document.getElementById('datetime')
        function printdate() {
            var all = new Date();
            var hrs = all.getHours();
            var min = all.getMinutes();
            var sec = all.getSeconds();
            var mill = all.getMilliseconds();
            var is;
            if (hrs < 12) {
                is = 'am';
            } else {
                is = 'pm';
            }
            datetime.innerHTML = hrs + ':' + min + ":" + sec + ':' + mill + ' ' + is;

        }
        setInterval(printdate, 1);

        //DOM
        var domhere = document.getElementById('h1');
        domhere.innerHTML = "This is level 1 Heading";

        var links = document.getElementsByTagName('a');
        links[0].href = 'moodle.bitsathy.ac.in';
        //links.style.color = "ff0000";

        var parent = document.getElementById('demo');
        var child = document.getElementById('p2');
        parent.removeChild(child);

        // objects in Js

        var person = {
            // property: value
            name: "John",
            age: 18,
            favcolor: "black"
        };

        var personvalue = person.name;
        console.log(personvalue.age);
        console.log(personvalue.favcolor);

    </script>
</body>

</html>
