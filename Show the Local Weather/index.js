var localTime = new Date();
document.getElementById('local-time').innerHTML = localTime.toLocaleDateString();
var xmlhttp;
if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
} else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
};

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		myAdress = JSON.parse(this.responseText);
		var ipAd = myAdress.data;
		// document.getElementById('ipadress').innerHTML = myAdress.data;
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myWeather = JSON.parse(this.responseText);
				var weatherInfo = myWeather.HeWeather5[0];
				// 获取城市信息
				document.getElementById('local-p').innerHTML = weatherInfo.basic.city;
				//获取温度
				document.getElementById('nowDegree').innerHTML = weatherInfo.now.tmp + '℃';
				//获取天气描述
				document.getElementById('cond').innerHTML = weatherInfo.now.cond.txt;
				// 插入天气图片
				var codeImg = weatherInfo.now.cond.code;
				document.getElementById('nowImg').innerHTML = "<img src='https://cdn.heweather.com/cond_icon/" + codeImg + ".png'>"
					//获取风力
				document.getElementById('wind').innerHTML = weatherInfo.now.wind.dir + ' ' + weatherInfo.now.wind.sc + "级";
				document.getElementById('hum').innerHTML = "相对湿度:" + weatherInfo.now.hum + '%';
				// PM2.5
				document.getElementById('pm25').innerHTML = "PM2.5:" + " " + weatherInfo.aqi.city.pm25;
				// 空气质量
				document.getElementById('qlty').innerHTML = "空气质量:" + " " + weatherInfo.aqi.city.qlty;
				// 生活建议
				document.getElementById('liftNote-p').innerHTML = weatherInfo["suggestion"]["comf"]['txt'];

			}
		}
		//获取天气url
		var weatherUrl = 'https://free-api.heweather.com/v5/weather?city=' + ipAd + '&key=24f75f285e1946289fe5b8af7d2abf64';
		xmlhttp.open("GET", weatherUrl, true);
		xmlhttp.send();
	}
}
// 获取ipyrl
var ipUrl = "https://weixin.jirengu.com/weather/ip";
xmlhttp.open("GET", ipUrl, true);
xmlhttp.send();

//鼠标hover事件
// window.onload = function() {
// 	var lifeNoteP = document.getElementById('liftNote-p');
// 	console.log(document.getElementsByClassName('glyphicon-heart'))
// 	document.getElementsByClassName('glyphicon-heart').onClick = function(e) {
// 		// lifeNoteP.style.display = "block"
// 		alert(e);
// 	}
// }
