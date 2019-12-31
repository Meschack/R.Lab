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
