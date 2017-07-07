//tab切换效果的实现,如首页的商品列表tab和商品详情的晒单分享，往期成交，竞拍规则。
//结合common.css里面定义的类和html里的结构来实现
//<ul class="list_top_ul">
//	<li class="cur">正在热拍
//		<span class="list_top_ul_line curShow"></span>
//	</li>
//	<li>十元专区
//		<span class="list_top_ul_line"></span>
//	</li>
//</ul>
function tabSwitch(domTab){
	 //首页切换商品
	 //domTab为传入的参数，就是要点击的dom元素。
//	domTab.click(function (e) {
//	    $(this).addClass('cur').siblings().removeClass('cur');
//	    $(this).children().addClass('curShow').parent().siblings().children().removeClass('curShow');
//	});
	domTab.on('click',function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	    $(this).children().addClass('curShow').parent().siblings().children().removeClass('curShow');
	})
}
