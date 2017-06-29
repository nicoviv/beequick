app.controller('cartCtrl',['$scope','shopcar','selectService','count',function($scope,shopcar,selectService,count){
	$scope.text = '购物车';
	$scope.state = false;
	$scope.countServer = count;
	$scope.car = shopcar.cardata;


	$scope.addcart = function(i,num){
		i.num += num;
		count.countFn();
	}


	$scope.selectAll = function(){
		selectService.selectAll($scope.state);
		count.countFn();
	}
	$scope.selectFn = function(){
		$scope.state = selectService.selectFn();
		count.countFn();
	}

	
	
}]);