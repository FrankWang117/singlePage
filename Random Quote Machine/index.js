$(document).ready(function() {
	var content = '我从来都不是什么天才，只是一个普通人，是一个连一个小女孩都保护不了的普通的、渺小的人类啊。';
	var author = '钢之炼金术师';
	var url = "https://sslapi.hitokoto.cn/?encode=json";
	var getQuote = function() {
		$.getJSON(url, function(json) {
			content = json['hitokoto'];
			author = json["from"];
		});

		$('#quote-p').text(content);
		$('#author').text(author);
	}
	$('#change').on('click', function() {
		getQuote();
	});
	$('#weibo').on('click', function() {
		window.open('http://service.weibo.com/share/share.php?url=""&title=' + content)
	})
})
