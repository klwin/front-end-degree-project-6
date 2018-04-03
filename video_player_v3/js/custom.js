$('video').mediaelementplayer({
			features: ['playpause', 'progress', 'volume', 'fullscreen'],
			startLanguage: 'en'
		});
		const vid = document.getElementById("main-video");
		let timeNow = () => {
			setInterval(() => {
				if(vid.currentTime >= 0.240 && vid.currentTime < 4.130) {
					$('.one').css('color','orange');
				}
				else if(vid.currentTime >= 4.130 && vid.currentTime < 7.535) {
					$('span').css('color','black');
					$('.two').css('color','orange');
				}
				else if(vid.currentTime >= 7.535 && vid.currentTime < 11.270) {
					$('span').css('color','black');
					$('.three').css('color','orange');
				}
				else if(vid.currentTime >= 11.270 && vid.currentTime < 13.960) {
					$('span').css('color','black');
					$('.four').css('color','orange');
				}
				else if(vid.currentTime >= 13.960 && vid.currentTime < 17.940) {
					$('span').css('color','black');
					$('.five').css('color','orange');
				}
				else if(vid.currentTime >= 17.940 && vid.currentTime < 22.370) {
					$('span').css('color','black');
					$('.six').css('color','orange');
				}
				else if(vid.currentTime >= 22.370 && vid.currentTime < 26.880) {
					$('span').css('color','black');
					$('.seven').css('color','orange');
				}
				else if(vid.currentTime >= 26.880 && vid.currentTime < 30.920) {
					$('span').css('color','black');
					$('.eight').css('color','orange');
				}
				else if(vid.currentTime >= 32.100 && vid.currentTime < 34.730) {
					$('span').css('color','black');
					$('.nine').css('color','orange');
				}
				else if(vid.currentTime >= 34.730 && vid.currentTime < 39.430) {
					$('span').css('color','black');
					$('.ten').css('color','orange');
				}
				else if(vid.currentTime >= 39.430 && vid.currentTime < 41.190) {
					$('span').css('color','black');
					$('.eleven').css('color','orange');
				}
				else if(vid.currentTime >= 41.190 && vid.currentTime < 46.300) {
					$('span').css('color','black');
					$('.twelve').css('color','orange');
				}
				else if(vid.currentTime >= 46.300 && vid.currentTime < 49.270) {
					$('span').css('color','black');
					$('.thirteen').css('color','orange');
				}
				else if(vid.currentTime >= 49.270 && vid.currentTime < 53.760) {
					$('span').css('color','black');
					$('.fourteen').css('color','orange');
				}
				else if(vid.currentTime >= 53.760 && vid.currentTime < 57.780) {
					$('span').css('color','black');
					$('.fifteen').css('color','orange');
				}
				else if(vid.currentTime >= 57.780) {
					$('span').css('color','black');
					$('.sixteen').css('color','orange');
				}
				else {
					$('span').css('color','black');
				}
			}, 100)
		}
		timeNow();