$(function () {

    "use strict";

    $(".jen").funnyText({

      speed: 700,
      borderColor: '#000',
      activeColor: '#f1c40f',
      color: '#FFF',
      fontSize: '25px',
      direction: 'both'

    });

});

/* Start Slider */

$(function () {

    "use strict";

     $(".box_skitter_large").skitter({
        auto_play:true,
        focus:false,
        interval:3000,
        label:false,
        dots:true,
     });
});

/* End Slider */


/* Start Scroll */

$(".one").click(function() {
$('html, body').animate({
scrollTop: $("#menu-food").offset().top
}, 925);
});


$(".two").click(function() {
$('html, body').animate({
scrollTop: $("#snacks").offset().top
}, 925);
});


$(".tree").click(function() {
$('html, body').animate({
scrollTop: $("#drinks").offset().top
}, 925);
});

$(".four").click(function() {
$('html, body').animate({
scrollTop: $("#gallery").offset().top
}, 925);
});

$(".five").click(function() {
$('html, body').animate({
scrollTop: $("#schedule").offset().top
}, 925);
});

$(".six").click(function() {
$('html, body').animate({
scrollTop: $("#about-us").offset().top
}, 925);
});


/* End Scroll */

/* Start Scroll Botton */

$(window).scroll(function () {
if ($(this).scrollTop() > 900) {
$('.top').css("transform","translate(0)");
} else {
$('.top').css("transform","translate(0,100px)");
}
});

/* End Scroll Botton */


/* Start Scroll Botton Top */

$('.top').click(function () {
$("html, body").animate({
scrollTop: 0
}, 1000);
return false;
});

/* End Scroll Botton Top */

/* Start Write Text */

var TxtType = function (el, toRotate, period) {
        "use strict";
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 500; // Time Text
        this.txt = '';
        this.tick();
    };

TxtType.prototype.tick = function () {

    "use strict";

    var i = this.loopNum % this.toRotate.length,
        fullTxt = this.toRotate[i];

    if (this.isDeleting) {

        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {

        this.txt = fullTxt.substring(0, this.txt.length + 1);

    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'; // Weite Here

    var that = this,
        delta = 200 - Math.random() * 100; // Speed Or Slow Write Text

    if (this.isDeleting) {

        delta /= 2; // Speed / Slow Delating Text
    }

    if (!this.isDeleting && this.txt === fullTxt) { // Active Dleteing Text

        delta = this.period;
        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === '') {

        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () { // Repate Text In Evry Time

        that.tick();

    }, delta);

};

window.onload = function () {
    "use strict";

    var elements = document.getElementsByClassName('typewrite'),
        i;

    for (i = 0; i < elements.length; i = i + 1) {

        var toRotate = elements[i].getAttribute('data-type');
        
        if (toRotate) {

            new TxtType(elements[i], JSON.parse(toRotate));

        }
    }
};

/* End Write Text */

/******* Start Clock ******/
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = '#F1C40F';
  ctx.fill();
  ctx.strokeStyle = '#F8F8F8';
  ctx.lineWidth = radius * 0.03;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#000';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

setInterval(drawClock,1000);

/******* End Clock ******/


$(function() {
  $('.day1').hover(function() {
    $('h2.c-day1').css('color', '#222222'),
       $('.day1').css('background-color', '#F1C40F') ;
  }, function() {
    // on mouseout, reset the background colour
    $("h2.c-day1").css("color", "#F1C40F"),
       $('.day1').css('background-color', '#222222') ;
  });
});

$(function() {
  $('.day2').hover(function() {
    $('h2.c-day2').css('color', '#222222'),
       $('.day2').css('background-color', '#F1C40F') ;
  }, function() {
    // on mouseout, reset the background colour
    $("h2.c-day2").css("color", "#F1C40F"),
       $('.day2').css('background-color', '#222222') ;
  });
});

$(function() {
  $('.day3').hover(function() {
    $('h2.c-day3').css('color', '#222222'),
       $('.day3').css('background-color', '#F1C40F') ;
  }, function() {
    // on mouseout, reset the background colour
    $("h2.c-day3").css("color", "#F1C40F"),
       $('.day3').css('background-color', '#222222') ;
  });
});

$(function() {
  $('.day4').hover(function() {
    $('h2.c-day4').css('color', '#222222'),
       $('.day4').css('background-color', '#F1C40F') ;
  }, function() {
    // on mouseout, reset the background colour
    $("h2.c-day4").css("color", "#F1C40F"),
       $('.day4').css('background-color', '#222222') ;
  });
});

$(function() {
  $('.day5').hover(function() {
    $('h2.c-day5').css('color', '#222222'),
       $('.day5').css('background-color', '#F1C40F') ;
  }, function() {
    // on mouseout, reset the background colour
    $("h2.c-day5").css("color", "#F1C40F"),
       $('.day5').css('background-color', '#222222') ;
  });
});

$(function() {
  $('.day6').hover(function() {
    $('h2.c-day6').css('color', '#222222'),
       $('.day6').css('background-color', '#F1C40F') ;
  }, function() {
    // on mouseout, reset the background colour
    $("h2.c-day6").css("color", "#F1C40F"),
       $('.day6').css('background-color', '#222222') ;
  });
});