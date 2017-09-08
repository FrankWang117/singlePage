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
						document.getElementById('nowImg').innerHTML = "<img src='images/" + codeImg + ".png'>"
							//获取风力
						document.getElementById('wind').innerHTML = weatherInfo.now.wind.dir + ' ' + weatherInfo.now.wind.sc + "级";
						document.getElementById('hum').innerHTML = "相对湿度:" + weatherInfo.now.hum + '%';
						// PM2.5
						document.getElementById('pm25').innerHTML = "PM2.5:" + " " + weatherInfo.aqi.city.pm25;
						// 空气质量
						document.getElementById('qlty').innerHTML = "空气质量:" + " " + weatherInfo.aqi.city.qlty;
						// 生活建议
						document.getElementById('liftNote-p').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + weatherInfo["suggestion"]["comf"]['txt'];
						//体感温度
						document.getElementById('bodytmp-p').innerHTML = "体感温度：" +
							weatherInfo.now.fl + "℃";

						// 未来几天天气预报
						// 当日晚间时候
						//天气图标
						var forecastInfo = weatherInfo.daily_forecast;
						var fcOneImg = forecastInfo[0].cond.code_n;
						document.getElementById('one-img').innerHTML = "<img src='images/" + fcOneImg + ".png'>";
						// 高低温度
						document.getElementById('one-tmp').innerHTML = forecastInfo[0].tmp.max + '℃';
						// 降水概率
						document.getElementById('one-rain').innerHTML = "降水概率:" +
							forecastInfo[0].pop;
						//风力
						document.getElementById('one-wind').innerHTML = forecastInfo[0].wind.dir +
							"-" + forecastInfo[0].wind.sc;

						// 明日天气
						//天气图标
						var fcTwoImg = forecastInfo[1].cond.code_n;
						document.getElementById('two-date').innerHTML = forecastInfo[1].date;

						document.getElementById('two-img').innerHTML = "<img src='images/" + fcTwoImg + ".png'>";
						// 高低温度
						document.getElementById('two-tmp').innerHTML = forecastInfo[1].tmp.max + '℃' + "~" + forecastInfo[1].tmp.min + "℃";
						// 降水概率
						document.getElementById('two-rain').innerHTML = "降水概率:" +
							forecastInfo[1].pop;
						//风力
						document.getElementById('two-wind').innerHTML = forecastInfo[1].wind.dir +
							"-" + forecastInfo[1].wind.sc;

						// 后天天气
						//天气图标
						var fcThreeImg = forecastInfo[2].cond.code_n;
						document.getElementById('three-date').innerHTML = forecastInfo[2].date;
						document.getElementById('three-img').innerHTML = "<img src='images/" + fcThreeImg + ".png'>";
						// 高低温度
						document.getElementById('three-tmp').innerHTML = forecastInfo[2].tmp.max + '℃' + "~" + forecastInfo[2].tmp.min + "℃";
						// 降水概率
						document.getElementById('three-rain').innerHTML = "降水概率:" +
							forecastInfo[2].pop;
						//风力
						document.getElementById('three-wind').innerHTML = forecastInfo[2].wind.dir +
							"-" + forecastInfo[2].wind.sc;


						//手机上天气预告
						// 未来几天天气预报
						// 当日晚间时候
						//天气图标
						var fcOneImg = forecastInfo[0].cond.code_n;
						document.getElementById('phone-one-img').innerHTML = "<img src='images/" + fcOneImg + ".png'>";
						// 高低温度
						document.getElementById('phone-one-tmp').innerHTML = forecastInfo[0].tmp.max + '℃';
						// 降水概率
						document.getElementById('phone-one-rain').innerHTML = "降水概率:" +
							forecastInfo[0].pop;
						//风力
						document.getElementById('phone-one-wind').innerHTML = forecastInfo[0].wind.dir +
							"-" + forecastInfo[0].wind.sc;

						// 明日天气
						//天气图标
						var fcTwoImg = forecastInfo[1].cond.code_n;
						document.getElementById('phone-two-date').innerHTML = forecastInfo[1].date;

						document.getElementById('phone-two-img').innerHTML = "<img src='images/" + fcTwoImg + ".png'>";
						// 高低温度
						document.getElementById('phone-two-tmp').innerHTML = forecastInfo[1].tmp.max + '℃' + "~" + forecastInfo[1].tmp.min + "℃";
						// 降水概率
						document.getElementById('phone-two-rain').innerHTML = "降水概率:" +
							forecastInfo[1].pop;
						//风力
						document.getElementById('phone-two-wind').innerHTML = forecastInfo[1].wind.dir +
							"-" + forecastInfo[1].wind.sc;

						// 后天天气
						//天气图标
						var fcThreeImg = forecastInfo[2].cond.code_n;
						document.getElementById('phone-three-date').innerHTML = forecastInfo[2].date;
						document.getElementById('phone-three-img').innerHTML = "<img src='images/" + fcThreeImg + ".png'>";
						// 高低温度
						document.getElementById('phone-three-tmp').innerHTML = forecastInfo[2].tmp.max + '℃' + "~" + forecastInfo[2].tmp.min + "℃";
						// 降水概率
						document.getElementById('phone-three-rain').innerHTML = "降水概率:" +
							forecastInfo[2].pop;
						//风力
						document.getElementById('phone-three-wind').innerHTML = forecastInfo[2].wind.dir +
							"-" + forecastInfo[2].wind.sc;

						// 手机端生活指数各项数据
						document.getElementById('life-cw').innerText = weatherInfo["suggestion"]["cw"]['txt'];
						document.getElementById('life-drsg').innerText = weatherInfo["suggestion"]["drsg"]['txt'];
						document.getElementById('life-sport').innerText = weatherInfo["suggestion"]["sport"]['txt'];
						document.getElementById('life-uv').innerText = weatherInfo["suggestion"]["uv"]['txt'];



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
window.onload = function() {

	var lifeNoteP = document.getElementById('liftNote-p');
	var bodyTmpP = document.getElementById('bodytmp-p');
	// 生活建议hover
	document.getElementById('w-suggestion').onmouseover = function() {
		lifeNoteP.style.display = "block";
	}
	document.getElementById('w-suggestion').onmouseout = function() {
			lifeNoteP.style.display = "none";

		}
		// 体感温度hover
	document.getElementById('w-bodytmp').onmouseover = function() {
		bodyTmpP.style.display = "block";
	}
	document.getElementById('w-bodytmp').onmouseout = function() {
		bodyTmpP.style.display = "none";
	}
	console.log('%cwang sen ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
}
