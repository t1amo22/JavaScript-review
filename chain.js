<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <div id="box">
        hello world;
    </div>
    <script>
    function Base() {
        this.eles = [];
        this.getId = function(id) {
            this.eles.push(document.getElementById(id));
            return this;
        }
    }

    Base.protoType.css = function(attr, val) {
        this.eles.forEach(function(x) {
            x.style[attr] = val;
        })
        return this;
    }

    Base.protoType.html = function(text) {
        if (arguments.length === 0) {
            return this.eles[0];
        } else {
            this.eles.forEach(function(x) {
                x.innerHTML = text;
            })
            return this;
        }

    }

    var $ = new Base();

   var html= $.getId("box").css("color","red").html();
   console.log(html)
    </script>
</body>

</html>
