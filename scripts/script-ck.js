/**
* @author Emily Anderson
*/
$(document).ready(function(){function t(){$("header h1").append(" made it")}

var e=$("header h1").get();TweenLite.to(e,5,{left:600});TweenLite.to(e,5,{left:30,delay:6,onComplete:t});

$("nav a").click(function(e){var t=$(this).html().toLowerCase();

$.get("content/"+t+".html",function(e){$("#content").html(e)})

	})
});