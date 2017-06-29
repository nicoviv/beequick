app.controller('secondCtrl',['$scope','$http',function($scope,$http){
	$scope.second = [];
	var arr1 = [];//定义两个空数组拼接数据
	var arr2 = [];
	$http({
		method: "get",
		url:'http://h5.yztctech.net/api/axf/apimiaosha.php'
	})
	.success(function(res){
		arr1 = res.product.slice(0,4);
		//console.log(arr1)
		arr2 = res.product.slice(6,res.product.length);
		$scope.second = arr1.concat(arr2)
		//console.log($scope.second);
	})
}]);