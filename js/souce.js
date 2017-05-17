//ajax请求
$.ajax({
		type:"GET",
		dataType:"jsonp",
		url:"https://api.weibo.com/2/statuses/public_timeline.json?access_token=2.00QqwSGB0Hdbpd45a3d8771d3krMhC&count=10",
		success:function(json){
			var data = json.data.statuses;
			console.log(data);
		},
		failed:function(error){
			console.log("网络链接超时");
		},

		timeout:30000
	});

//点击回到底部
$(window).scroll(function(){
	var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器
    if($scrollTop >150){//滚动高度可调，也可以为某个div的scrollTop，需要的可以自行修改
    	console.log($scrollTop);
        $("div").show();
    }else{ $("div").hide();};	
});
$(function(){
  $("div").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  }); 
})
