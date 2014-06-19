// JavaScript Document
/* 上方選單 */
	$(function(){
		// 預設顯示第 N 個選項
		var _open = 1;
		// 幫 #menu li 加上 hover 事件
		$('#menu>li').mouseover(function(){
			// 先找到 li 中的子選單
			var _this = $(this),
				_subnav = _this.children('ul');
				
				// 變更兄弟元素的背景顏色及隱藏其子選單
				_this.siblings().css('backgroundColor', '').children('ul').css('display', 'none');

			// 變更目前母選項的背景顏色
			// 同時顯示子選單(如果有的話)
			_this.css('backgroundColor', '#06c');
			_subnav.css('display', 'block');
		}).eq(_open).mouseover();
		
		// 取消超連結的虛線框
		$('a').focus(function(){
			this.blur();
		});
	});