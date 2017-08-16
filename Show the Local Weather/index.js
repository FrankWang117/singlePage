$(document).ready(function() {
	var localCity;
	var nation;
	var localTime;
	var weacherDecrip;
	var nowDegree;
	var suggestion;
	var userip = '';
	var url = '';
	var oneDate;
	var oneDescription;
	var oneMax;
	var oneMin;
	var twoDate;
	var twoDescription;
	var twoMax;
	var twoMin;
	var threeDate;
	var threeDescription;
	var threeMax;
	var threeMin;
	//获取用户ip
	$.getJSON("https://weixin.jirengu.com/weather/ip", function(useIp) {
		userip = useIp.data;
		url = 'https://free-api.heweather.com/v5/weather?city=' + userip + '&key=24f75f285e1946289fe5b8af7d2abf64';
		//进行当前天气状况输出
		$.getJSON(url, function(weathers) {

			localCity = weathers['HeWeather5'][0]["basic"]["city"];

			nation = weathers['HeWeather5'][0]["basic"]["cnty"];

			weacherDecrip = weathers['HeWeather5'][0]["now"]["cond"]["txt"];

			nowDegree = weathers['HeWeather5'][0]["now"]["tmp"];

			suggestion = weathers['HeWeather5'][0]["suggestion"]["comf"]['txt'];
			// 当天晚些时候预测
			oneDate = weathers['HeWeather5'][0]["daily_forecast"][0]['date'];

			oneDescription = weathers['HeWeather5'][0]["daily_forecast"][0]["cond"]["txt_n"];

			oneMax = weathers['HeWeather5'][0]["daily_forecast"][0]['tmp']["max"];
			oneMin = weathers['HeWeather5'][0]["daily_forecast"][0]['tmp']["min"];
			// 第二天天气预测
			twoDate = weathers['HeWeather5'][0]["daily_forecast"][1]['date'];

			twoDescription = weathers['HeWeather5'][0]["daily_forecast"][1]["cond"]["txt_d"];

			twoMax = weathers['HeWeather5'][0]["daily_forecast"][1]['tmp']["max"];
			twoMin = weathers['HeWeather5'][0]["daily_forecast"][1]['tmp']["min"];
			// 第三天天气预测
			threeDate = weathers['HeWeather5'][0]["daily_forecast"][2]['date'];

			threeDescription = weathers['HeWeather5'][0]["daily_forecast"][2]["cond"]["txt_d"];

			threeMax = weathers['HeWeather5'][0]["daily_forecast"][2]['tmp']["max"];
			threeMin = weathers['HeWeather5'][0]["daily_forecast"][2]['tmp']["min"];
			// 当前城市
			$('.local-city').text(localCity);
			// 当前国家
			$('.nation').text(nation);
			// 当前时间
			$('.local-time').text((new Date()).toLocaleString());
			//天气描述
			$('.weather-description').text(weacherDecrip);
			//当前温度
			$('.now-degree').text(nowDegree);
			//天气建议
			$('.suggestion').text(suggestion);
			//未来预报
			//当晚日期
			// $('.one-date').text(oneDate);
			//夜间天气
			$('.one-description').text(oneDescription);
			//夜间温度max~min
			$('.one-max').text(oneMax);
			$('.one-min').text(oneMin);
			//明日日期
			$('.two-date').text(twoDate);
			//明日天气
			$('.two-description').text(twoDescription);
			//明日温度max~min
			$('.two-max').text(twoMax);
			$('.two-min').text(twoMin);
			// 后天天气预测
			//后日日期
			$('.three-date').text(threeDate);
			//后日天气
			$('.three-description').text(threeDescription);
			//明日温度max~min
			$('.three-max').text(threeMax);
			$('.three-min').text(threeMin);
			console.log(weathers['HeWeather5'][0]["daily_forecast"][1]["cond"]["txt_d"]);
			console.log(suggestion);

		});

	});

})
