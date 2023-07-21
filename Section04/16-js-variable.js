<!DOCTYPE html>
<html lang="en">
    <body>
        
        <p id="demo-x"></p>
        <p id="demo-y"></p>
        
        <script>
            let x = "10" + 10 + 10;
            let y = 10 + 10 + "10"

            document.getElementById("demo-x").innerHTML = "let x = " + x;
            document.getElementById("demo-y").innerHTML = "let y = " + y;
        </script>
    </body>
</html>
