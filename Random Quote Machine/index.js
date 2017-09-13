$(document).ready(function() {
	// var content = '';
	// var author = '';
	var url = "https://sslapi.hitokoto.cn/?encode=json";
	var getQuote = function() {
		$.ajaxSettings.async = false;
		$.getJSON(url, function(json) {
			var content = json['hitokoto'];
			var author = json["from"];
			$('#quote-p').text(content);
			$('#author').text(author);
			$('#weibo').off();
			$('#weibo').on('click', function() {
				window.open('http://service.weibo.com/share/share.php?url=""&title=' + content)
			});
		});
	};
	getQuote();
	$('#change').on('click', function() {
		getQuote();
	});
	console.log("%cWANG"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
	console.log("联系方式："+"wangsen9108@gmail.com");
});
