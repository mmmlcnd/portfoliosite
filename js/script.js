//JavaScript Document

// TOPページの画像入れ替え
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

// Designページの画像入れ替え
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
//---------------------


// h3アニメーション
document.addEventListener("DOMContentLoaded", function () {
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
	if (entry.isIntersecting) {
		entry.target.classList.add('visible');
	} else {
	entry.target.classList.remove('visible');
	}
	});
}, {
	threshold: 0.5
});

document.querySelectorAll('.animated-heading').forEach(el => {
	observer.observe(el);
});
});
//---------------------


// メニュー
$(function(){
	//drawer
	let checkArea=$("#drawer-checkbox");//チェック判断するラジオボタン
	let tap=$("#drawer-icon");//ドロワーメニュー
	let gNaviArea=$("#gNavi");//グローバルナビゲーションエリア
	let pageLink=$("#gNavi ul li a");//ページ内リンク
	let closeArea=$("#drawer-close");//クローズエリア
	
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

});
//---------------------