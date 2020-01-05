$("#mock").click(function() {
  $('html, body').animate({
      scrollTop: $("#mockups").offset().top
  }, 1000);
});

var preload = document.getElementById('loading');

function myFunction()
{
    preload.style.delay = '100000';
    preload.style.display = 'inheret';
}

// popovers initialization - on hover
$('[data-toggle="popover-hover"]').popover({
  html: true,
  trigger: 'hover',
  placement: 'bottom',
  content: function () { return '<img src="' + $(this).data('img') + '" />'; }
});

var lab = document.querySelector('#active');
function t1(){
  lab.src='images/row/Clay-iPad-9.7-Mockup.jpg';
}

function t2(){
  lab.src='images/row/mockup ipad.jpg';
}

function t3(){
  lab.src='images/row/Free-iPad-Mockup-Top-View-1000x750.jpg';
}

function t4(){
  lab.src='images/row/mockup ipad.jpg';
}

var btnt1 = document.querySelector('#t1');
var btnt2 = document.querySelector('#t2');
var btnt3 = document.querySelector('#t3');
var btnt4 = document.querySelector('#t4');

btnt1.addEventListener('click', t1);
btnt2.addEventListener('click', t2);
btnt3.addEventListener('click', t3);
btnt4.addEventListener('click', t4);

function screenshot(){
  var system = require('system');

  // Web Address (URL) of the page to capture
  var url  = system.args[document.getElementById("url2").value];
  alert(url);
  // File name of the captured image
  var file = system.args[capture]  + ".png";

  var page = require('webpage').create();

  // Browser size - height and width in pixels
  // Change the viewport to 480x320 to emulate the iPhone
  page.viewportSize = { width: 1200, height : 800 };

  // Set the User Agent String 
  // You can change it to iPad or Android for mobile screenshots
  page.settings.userAgent = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.56 Safari/536.5";

  // Render the screenshot image
  page.open ( url, function ( status ) {
    if ( status !== "success") {
        console.log("Could not open web page : " + url);
        phantom.exit();
    } else {
        window.setTimeout ( function() {
            page.render(file);
            console.log("Download the screenshot : " + file);
            phantom.exit();
        }, 1000);
    }
  });
}