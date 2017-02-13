// document onload function
$(document).ready(function(){
	$("button").click(function(){
		$.get("http://localhost/jqueryExamples/index.php", function(data, status){
			//alert("Status: " + status);
			//document.write("Hello World!"+data);
			//var jsonData = eval ("(" + txt + ")");
			var jsonData = JSON.parse(data);
			for (var i = 0; i < jsonData.names.length; i++) {
				var names = jsonData.names[i];
				console.log(names.first_name);
				document.write("<table border=1><tr>");
				document.write("<td> "+names.first_name+"</td>");				
				document.write("</tr></table>");
			}
		});
	});
});
// document onload function called
$( document ).ready(function() {
	console.log( "document loaded" );
	$.get("http://localhost/jqueryExamples/index.php", function(data, status){
			//alert("Status: " + status);
			//document.write("Hello World!"+data);
			//var jsonData = eval ("(" + txt + ")");
			var jsonData = JSON.parse(data);
			for (var i = 0; i < jsonData.names.length; i++) {
				var names = jsonData.names[i];
				console.log(names.first_name);
				document.write("<b>"+names.first_name+"</b></br>");	
			}
		});
});

$( window ).on( "load", function() {
	console.log( "window loaded" );
});