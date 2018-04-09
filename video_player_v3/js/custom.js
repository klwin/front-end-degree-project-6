$('video').mediaelementplayer({
			features: ['playpause', 'progress', 'volume', 'fullscreen'],
			startLanguage: 'en'
		});
		const vid = document.getElementById("main-video");

		function setTimes(start, end=59) {
			$('span').css('color','black');
			return (vid.currentTime >= start && vid.currentTime < end);
		}

		function changeColor(id) {
			$(id).css('color','orange');
		}

		let timeNow = () => {
			setInterval(() => {
				if(setTimes(0.240, 4.130)) {
					changeColor('.one');
				}
				else if(setTimes(4.130, 7.535)) {
					changeColor('.two');
				}
				else if(setTimes(7.535, 11.270)) {
					changeColor('.three');
				}
				else if(setTimes(11.270, 13.960)) {
					changeColor('.four');
				}
				else if(setTimes(13.960, 17.940)) {
					changeColor('.five');
				}
				else if(setTimes(17.940, 22.370)) {
					changeColor('.six');
				}
				else if(setTimes(22.370, 26.880)) {
					changeColor('.seven');
				}
				else if(setTimes(26.880, 30.920)) {
					changeColor('.eight');
				}
				else if(setTimes(32.100, 34.730)) {
					changeColor('.nine');
				}
				else if(setTimes(34.730, 39.430)) {
					changeColor('.ten');
				}
				else if(setTimes(39.430, 41.190)) {
					changeColor('.eleven');
				}
				else if(setTimes(41.190, 46.300)) {
					changeColor('.twelve');
				}
				else if(setTimes(46.300, 49.270)) {
					changeColor('.thirteen');
				}
				else if(setTimes(49.270, 53.760)) {
					changeColor('.fourteen');
				}
				else if(setTimes(53.760, 57.780)) {
					changeColor('.fifteen');
				}
				else if(setTimes(57.780)) {
					changeColor('.sixteen');
				}
			}, 100)
		}
		timeNow();