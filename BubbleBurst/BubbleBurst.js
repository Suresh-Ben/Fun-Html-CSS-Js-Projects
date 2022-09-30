function yar() {
    document.getElementById("bbtt").remove();
    document.getElementById("head").remove();
    document.getElementById("hh").remove();

    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext('2d');




    var sound = document.getElementById("king");

    var l = 1;
    var m = 1;
    var score = -1;

    //uyfyg
    //iguygyg

    var mouse = {
        x: undefined,
        y: undefined
    }

    document.addEventListener("click",
        function(event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        }, false);



    function yBB() {
        while (l % 40 === 0) {
            var x = (Math.random() * innerWidth);

            var radius = 70;
            if (x > innerWidth - radius) { x = x - radius; } else if (x < radius) { x = x + radius; }
            var y = (Math.random() * innerHeight);

            if (y > innerHeight - radius) { y = y - radius; } else if (y - radius < 70) { y = y + radius + 70; }
            var dx = Math.random() - 0.5;
            var dy = Math.random() - 0.5;


            circlearray.push(new Circle(x, y, radius, dx, dy));

            l = 1;
        }

    }



    function Circle(x, y, radius, dx, dy) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;

        this.my_gradient = c.createLinearGradient(0, 0, 0, innerHeight);

        this.my_gradient.addColorStop(0, "#2B60DE");
        this.my_gradient.addColorStop(0.2, "#CCFFFF");
        this.my_gradient.addColorStop(0.4, "#57FEFF");
        this.my_gradient.addColorStop(0.6, "#00FFFF");
        this.my_gradient.addColorStop(0.8, "#82CAFF");
        this.my_gradient.addColorStop(1, "#2B65EC");


        this.color = this.my_gradient;

        this.circle11 = function() {

            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

            c.fillStyle = this.color;

            c.fill();
            c.strokeStyle = '#C6DEFF';
            c.stroke();

            yBB();
            ffra();



        }

        this.circleupdate = function(j) {
            this.j = j;


            if (this.x + this.radius > innerWidth || this.x - this.radius < 50) {
                this.dx = (-this.dx);
            }
            //y
            if (this.y + this.radius > innerHeight || this.y - this.radius < 50) {
                this.dy = (-this.dy);
            }

            this.x += this.dx;
            this.y += this.dy;
            if ((this.x + this.radius > mouse.x && this.x - this.radius < mouse.x) && (this.y + this.radius > mouse.y && this.y - this.radius < mouse.y)) {
                circlearray.splice(j, 1);
                score++;
                sound.play(3);
                mouse.x = undefined;
                mouse.y = undefined;
            }
            //bbliuhinli

            //iygoyguh
            this.circle11();
        }


    }



    var circlearray = [];
    for (var i = 1; i <= 20; i++) {
        var x = (Math.random() * innerWidth);

        var radius = 70;
        if (x > innerWidth - radius) { x = x - radius; } else if (x < radius) { x = x + radius; }
        var y = (Math.random() * innerHeight);

        if (y > innerHeight - radius) { y = y - radius; } else if (y - radius < 70) { y = y + radius + 70; }
        var dx = Math.random() - 0.5;
        var dy = Math.random() - 0.5;


        circlearray.push(new Circle(x, y, radius, dx, dy));
    }





    var tarea = (innerWidth) * (innerHeight - 100);

    var barea = Math.PI * radius * radius;

    var nB = Math.floor(0.75 * (tarea / barea));
    var nBB = 0;


    function ffun() {
        while ((nBB) > nB) {


            c.fillStyle = "red";
            c.font = "200px Comic Sans MS";
            c.fillText("OUT!", 500, innerHeight / 2);
            c.font = "40px Comic Sans MS";
            c.fillText("score=" + score, 700, innerHeight / 2 + 50);

            nBB = 0;

        }
    }

    var time = {
        min: 0,
        sec: 0
    };

    function ffra() {
        while (m % 60 === 0) {
            time.sec++;
            while (time.sec === 60) { time.sec = 0;
                time.min++; }
            m = 1;
        }
    }

    function ffkk() {
        c.fillStyle = "red";
        c.font = "200px Comic Sans MS";
        c.fillText("your hands are too fast", 600, innerHeight / 2 + 50);
    }


    function animate() {
        requestAnimationFrame(animate);


        c.clearRect(0, 0, innerWidth, innerHeight);
        c.drawImage(document.getElementById("gg"), 0, 0, innerWidth, innerHeight);
        c.fillStyle = "yellow";
        c.fillRect(150, 0, 170, 50);

        c.fillStyle = "red";
        c.font = "30px Comic Sans MS";
        c.fillText("Time=>" + time.min + ":" + time.sec, 155, 40);


        l++;
        m++;
        c.fillStyle = "red";
        c.font = "50px Comic Sans MS";

        c.fillText("Bubble blast", innerWidth / 3 + 100, 50);

        if (circlearray.length === 0) { ffkk(); }

        nBB = (circlearray.length);
        ffun();

        if (nBB !== 0 && circlearray.length !== 0) {
            for (var j = 1; j <= circlearray.length; j++) {
                circlearray[j].circleupdate(j);
            }
        }



    }

    animate();


}