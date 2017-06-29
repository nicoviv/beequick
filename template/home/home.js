app.controller('homeCtrl',['$scope','$http','shopcar','count',function($scope,$http,shopcar,count){
	//请求轮播图数据部分
	$scope.loops = [];//轮播图的数据
	$scope.navs = [];//菜单栏的数据
	$scope.fruit = [];//优选水果数据
	$scope.bread = [];//牛奶面包数据
	//请求轮播图的数据
	$http({
		method:'get',
		url:'http://h5.yztctech.net/api/axf/apihome.php'
	})
	.success(function(res){
		$scope.loops = res.data.slide.slice(1,5);
		//截取高度尺寸固定的图片进行渲染
		$scope.navs = res.data.menu;
		//console.log($scope.loops)
		setTimeout(function(){
			go();
		},500)
	});
	
	//请求优选水果的数据
	$http({
		method:'get',
		params:{
        	category:'优选水果',
       },
		url:'http://h5.yztctech.net/api/axf/apicategory.php?'
	})
	.success(function(res){
		//console.log(res.data)
		$scope.fruit = res.data.slice(0,3);
	});
	//请求牛奶面包的数据
	$http({
		method:'get',
		params:{
        	'category':'牛奶面包',
       },
		url:'http://h5.yztctech.net/api/axf/apicategory.php?'
	})
	.success(function(res){
		//console.log(res.data)
		$scope.bread = res.data.slice(0,3);
	})

	//首页优选水果添加到购物车的
	$scope.addcart = function(i,num){
		if(i.num){
			i.num += num;
		}else{
			i.num = 1;
		}
		shopcar.addcar(i,'优选水果');
		count.countFn();
	}
	
	//首页牛奶面包添加到购物车的
	$scope.addcart1 = function(i,num){
		if(i.num){
			i.num += num;
		}else{
			i.num = 1;
		}
		shopcar.addcar(i,'牛奶面包');
		count.countFn();
	}
	
	//封装轮播图方法
	function go(){
		var mySwiper = new Swiper ('.swiper-container', {
		autoplay: 2000,
		initialSlide:0,
	    loop: true,
	    autoplayDisableOnInteraction:false,
	    grabCursor:true,   
	    autoplayStopOnLast:false,
		preventClicks : true,
		pagination: '.swiper-pagination',
		paginationClickable:true
		})
	}
}])
