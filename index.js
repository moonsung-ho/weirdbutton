var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

var imgs = document.getElementById("easteregg");
for( var x=0; x < imgs.length; x++ ) {
 imgs[x].onclick = function(){
 alert(`오늘은 ${year}년 ${month}월 ${day}일 입니다.`);
 };
}