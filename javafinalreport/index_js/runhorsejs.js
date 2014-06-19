// JavaScript Document
/* 跑馬燈 */
	$(function(){
		// 先取得 div#abgne_marquee ul
		// 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
		// 再來取得 div#abgne_marquee 的高來決定每次跑馬燈移動的距離
		// 設定跑馬燈移動的速度及輪播的速度
		var $marqueeUl = $('div#abgne_marquee ul'),
			_marqueeUlHtml = $marqueeUl.html(),
			_height = $('div#abgne_marquee').height() * -1,
			scrollSpeed = 600,
			timer,
			speed = 3000 + scrollSpeed,
			direction = 0,	// 0 表示往上, 1 表示往下
			_lock = false,
			_showItems = 3, // 一次顯示幾個
			_moveItems = 3; // 一次移動幾個
			
 		$("div#abgne_marquee").css("height", _showItems * _height * -1); // 重新設定div的高度
		if(_showItems >= $marqueeUl.children('li').length) return;
		var $marqueeli = $marqueeUl.append(_marqueeUlHtml+_marqueeUlHtml).children();
		// 先把 $marqueeli 移動到第二組
		$marqueeUl.css('top', $marqueeli.length / 3 * _height);
		// 幫左邊 $marqueeli 加上 hover 事件
		// 當滑鼠移入時停止計時器；反之則啟動
		$marqueeli.hover(function(){
			clearTimeout(timer);
		}, function(){
			timer = setTimeout(showad, speed);
		});
		// 控制跑馬燈上下移動的處理函式
		function showad(){
			_lock = !_lock;
			var _now = $marqueeUl.position().top / _height;
			_now = (direction ? _now - _moveItems + $marqueeli.length : _now + _moveItems)  % $marqueeli.length;
			// $marqueeUl 移動

			$marqueeUl.animate({
				top: _now * _height
			}, scrollSpeed, function(){
				// 如果已經移動到第二組時...則馬上把 top 設回到第一組的最後一筆
				// 藉此產生不間斷的輪播

				if(_now + _moveItems >= $marqueeli.length / 3 * 2){
					$marqueeUl.css('top', $marqueeli.length / 3 * _height - _height * ($marqueeli.length / 3 * 2 - _now));
				}else if(_now < $marqueeli.length / 3 ){
				
					$marqueeUl.css('top', $marqueeli.length / 3 * _height + (_height* _now));
				}
				_lock = !_lock;
			});
			
			// 再啟動計時器
			timer = setTimeout(showad, speed);
		}
		
		// 啟動計時器
		timer = setTimeout(showad, speed);
 
		$('a').focus(function(){
			this.blur();
		});
	});
