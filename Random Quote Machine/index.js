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
});
