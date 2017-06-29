var app = angular.module('app',['ui.router','angularCSS']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	
	//home的路由配置
	.state('home',{
		url:'/home',
		views:{	
			'view':{
				templateUrl: 'template/home/home.html',
				controller: 'homeCtrl',
				css: 'template/home/home.css'
			}
		}
	})
	
	//闪送超市的路由配置
	.state('market',{
		url:'/market',
		views:{	
			'view':{
				templateUrl: 'template/market/market.html',
				controller: 'marketCtrl',
				css: 'template/market/market.css'
			}	
		}
	})
	
	//购物车的路由配置
	.state('cart',{
		url:'/cart',
		views:{
			'view':{
				templateUrl: 'template/cart/cart.html',
				controller: 'cartCtrl',
				css: 'template/cart/cart.css'
			}	
		}
	})
	
	//我的路由配置
	.state('mine',{
		url:'/mine',
		views:{	
			'view':{
				templateUrl: 'template/mine/mine.html',
				controller: 'mineCtrl',
				css: 'template/mine/mine.css'
			}
			
		}
	})
	//疯狂秒杀
	.state('1',{
		url:'/second',
		views:{	
			'second':{
				templateUrl: 'template/second/second.html',
				controller: 'secondCtrl',
				css: 'template/second/second.css'	
			}
			
		}
	})
	//积分商城
	.state('jifenstore',{
		url:'/jifenstore',
		views:{	
			'second':{
				templateUrl: 'template/mine/jifenstore/jifen.html',
				//controller: 'jifenCtrl',
				css: 'template/mine/jifenstore/jifen.css'	
			}
			
		}
	})
	//登录页面
	.state('load',{
		url:'/load',
		views:{	
			'second':{
				templateUrl: 'template/mine/load/load.html',
				//controller: 'loadCtrl',
				css: 'template/mine/load/load.css'	
			}
			
		}
	})
	
	//默认加载home页面
	$urlRouterProvider.otherwise('/home')
	//.otherwise('/home');
}])


.controller('ctrl',['$scope','count',function($scope,count){
	$scope.countNum = count;
}]);
