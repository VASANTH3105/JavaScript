<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .img {
            max-width: 100px;
            max-height: 100px;
        }

        button {
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
            border: 1px solid #000000;
            border-radius: 20px;
            background-color: rgb(85, 114, 138);
            color: #ffffff;
        }

        input {
            border: 1px solid #000000;
            border-radius: 20px;
            padding: 5px;
            margin: 5px;
            display: block;
        }

        label {
            font-size: large;
            font-weight: lighter;

        }
    </style>
</head>

<body>
    <h1>Hi this is pratice page!</h1>


    <button onclick='alert("Hey there!");'>
        hi there
    </button>
    <button onclick="console.log(2+3);">
        addition
    </button>
    <br>
    <img class="img"
        src="https://w7.pngwing.com/pngs/255/617/png-transparent-red-button-click-here-button-s-text-logo-sign.png"
        alt="img not found" onclick="alert('You have been caught!...');" />
    <img class="img"
        src="data:image/jpeg;base64,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"
        onclick='src="https://m.media-amazon.com/images/I/61ZVFPR0JRL.jpg" ' alt="">
    <br>
    <img id="imgsrc" class="img"
        src="data:image/png;base64,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"
        alt="">
    <button
        onclick='imgsrc.src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg'>Apple</button>
    <button
        onclick='imgsrc.src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-icon.png'>Android</button>
    <p onclick='alert("Hi there!...")'>paragraph with hidden notification!</p>
    <h2 id="heading2">This is level 2 heading</h2>

    <button onclick="funccall()">
        onclick function
    </button>

    <button onclick='funpro()'>
        using prompt
    </button>
    <br>
    <form action="">
        <label for="t1">Enter City:</label>
        <input type="text" id="t1" name="city" placeholder="Tirupur">
        <label for="t2">Enter Country:</label>
        <input type="text" id="t2" name="country" placeholder="India">

        <input onclick="confirmation()" type="submit">
    </form>


    <form action="" id="check">
        <label for="c1">Check this </label>
        <input type="checkbox" id="c1">
        <input type="button" onclick="checkclick()" value="ischeckedornot">
    </form>

    <h2 id="cge">This content gonna be change by JS!...</h2>

    <p>Perform boolean</p>
    <form onsubmit="performAndOperation(event)">
        <input type="checkbox" id="input1" name="input1">
        <label for="input1">Input 1</label><br>

        <input type="checkbox" id="input2" name="input2">
        <label for="input2">Input 2</label><br></br>

        <input type="button" onclick="performAndOperation()" value="Submit">
    </form>

    <br>
    <br>
    <h3>Price : $<span id="price">180</span>/-</h3>
    <form action="" onsubmit="applyoffer(event)">
        <label for="offer">Apply coupon</label>
        <input type="checkbox" id="offer" name="offer">

        <label for="checkage">Enter your age: </label>
        <input type="text" id="checkage" placeholder="eg.18">
        <input type="submit">
    </form>



    <!-- day2 -->
    <form action="" onsubmit="calculateBirth(event)">
        <label for="namenow">Enter name:</label>
        <input type="text" id="namenow" placeholder="name">
        <label for="dobnow">Date of Birth:</label>
        <input type="number" id="dobnow" placeholder="2004">
        <input type="submit">

    </form>


    <script>

        let x = document.getElementById('cge');
        x.textContent = "This content is changed by JavaScript!...";

        var namenow = document.getElementById('namenow').textContent;
        var dobnow = document.getElementById('dobnow'),textContent;
    
        function calculateBirth(namenow, dobnow) {
            this.namenow = namenow;
            this.dobnow = dobnow;
            this.age = calcage;
        }
        function calcage() {
            return 2024 - dobnow;
        }

        function applyoffer(event) {
            event.preventDefault(); // Prevents the default form submission behavior

            let offer = document.getElementById('offer').checked;
            let price = document.getElementById('price');

            if (offer) {
                console.log("Offer applied");
                price.textContent = "120"
            } else {
                console.log("No offer applied");
            }
        }



        let area = "Erode";
        let population = 123456543;
        console.log("Erode is a type of :" + typeof area);
        console.log("population is a type of :" + typeof population);
        let typeocon = "55";
        let y = Number(typocon);
        console.log(y);

        function performAndOperation() {
            let input1 = document.getElementById('input1').checked;
            let input2 = document.getElementById('input2').checked;

            let result = input1 || input2;
            alert("Result of OR operation: " + result);
        }


        let temp = document.getElementById("heading2").textContent;
        console.log(temp);
        temp.style.color = "red";
        temp.style.border = "black";

        function funccall() {
            alert("Function call activated!");
        }

        function funpro() {
            let iptstr = prompt("Enter any value:");
            console.log(iptstr);
        }

        let city = document.getElementById('t1');
        console.log(city);

        function confirmation() {
            let deci = confirm("Proceed to payment=>");
            console.log(deci);
        }

        function checkclick() {
            let box = document.getElementById('c1');
            console.log(box.checked);
        }



    </script>

</body>

</html>
