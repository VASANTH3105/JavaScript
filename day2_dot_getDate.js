<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <script>

        //date and time
        function printdate() {
            var all = new Date();
            var hrs = all.getHours();
            var min = all.getMinutes();
            var sec = all.getSeconds();
            var mill = all.getMilliseconds();
            var is;
            if(hrs<12) {
                is = 'am';
            } else {
                is = 'pm';
            }
            document.body.innerHTML = hrs+':'+min+":"+sec+':'+mill+' '+is;

        }
        setInterval(printdate,1);

        // objects in Js

        var person = {
            // property: value
            name: "John",
            age: 18,
            favcolor: black
        };

        var personvalue = person.name;
        console.log(personvalue.age);
        console.log(personvalue.favcolor);

    </script>
</body>
</html>
