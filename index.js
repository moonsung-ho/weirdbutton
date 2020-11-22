var redbutton = document.getElementById("redbutton");
for( var x=0; x < redbutton.length; x++ )
 redbutton[x].onclick = function(){
    lack = setInterval(function() {
        window.open('explode.html', '_blank')
     }, 3000);
 };