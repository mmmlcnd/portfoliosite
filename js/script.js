//JavaScript Document

$(function(){

	$(".miniImage01").mouseover(function(){
		$("#showArea img").attr({src:"images/mewandithumbnail500.png"});
	});
	
	$(".miniImage02").mouseover(function(){
		$("#showArea img").attr({src:"images/shopcard600.png"});
	});
	
	$(".miniImage03").mouseover(function(){
		$("#showArea img").attr({src:"images/logo200.png"});
	});

});


$(function(){
	
	$(".gminiImage01").mouseover(function(){
		$("#gshowArea img").attr({src:"images/shopcard600.png"});
	});
	
	$(".gminiImage02").mouseover(function(){
		$("#gshowArea img").attr({src:"images/banner600.png"});
	});
	
	$(".gminiImage03").mouseover(function(){
		$("#gshowArea img").attr({src:"images/aikirin600.png"});
	});
	
});

$(function(){
	$(".js-menu__item__link").each(function(){
		$(this).on("click",function(){
			$(this).toggleClass("on");
			$("+.submenu",this).slideToggle()
			return false;
		});
	});
});

jQuery(function ($) {
$('.js-accordion-title').on('click', function () {
  /*クリックでコンテンツを開閉*/
  $(this).next().slideToggle(200);
  /*矢印の向きを変更*/
  $(this).toggleClass('open', 200);
});

});

$(function(){
	//drawer
	var checkArea=$("#drawer-checkbox");//チェック判断するラジオボタン
	var tap=$("#drawer-icon");//ドロワーメニュー
	var gNaviArea=$("#gNavi");//グローバルナビゲーションエリア
	var pageLink=$("#gNavi ul li a");//ページ内リンク
	var closeArea=$("#drawer-close");//クローズエリア
	
	//タップをしたらクラスをつけたりはずしたりする
	$(tap).on("click",function(){
		$(tap).toggleClass('active');
		$(gNaviArea).toggleClass('tap');
		$(closeArea).toggleClass('tap');
	});
	
	//ページ内リンクをクリックしたときのクラス管理
	$(pageLink).on("click",function(){
		if($(gNaviArea).hasClass('tap')){
			$(gNaviArea).removeClass('tap');
			$(tap).removeClass('active');
			$(closeArea).removeClass('tap');
			$(checkArea).prop('checked',false);
		}
	});
	
	//クローズエリアをクリックしたときのクラス管理
	$(closeArea).on("click",function(){
		if($(gNaviArea).hasClass('tap')){
			$(gNaviArea).removeClass('tap');
			$(tap).removeClass('active');
			$(closeArea).removeClass('tap');
			$(checkArea).prop('checked',false);
			return false;
		}
	});
	
	//pagetop(に戻る部分)
	$('[href="#top"]').click(function(){
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$("#pageTop").fadeIn();
		}else{
			$("#pageTop").fadeOut();
		}
	});
	
	//smoothrollover(画像変わる部分)
	$('a img').hover(function(){
			$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
		}, function(){
			if (!$(this).hasClass('currentPage')) {
			$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
	});
});