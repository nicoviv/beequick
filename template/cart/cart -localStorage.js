app.controller('cartCtrl',['$scope',function($scope){
	$scope.text = '购物车';
	
	$scope.carData = JSON.parse(window.localStorage.car);

	var obj = {};
	$scope.addNum = function(i,count){
		// 先判断当前对象当中有没有被加入购物车
		// 如果有，则将数值加1
		// 否则直接赋值为1
		console.log(i)
		if(count>0){
			i.num++;
		}else{
			i.num--;
		}
		
		
		// 判断有没有将数据存入本地存储当中
		// 如果有则将数据替换为obj
		if(window.localStorage.car){
			obj = JSON.parse(window.localStorage.car);
		}
		// 将操作的数据保存在本地
		obj[i.selected+i.id] = i;
		window.localStorage.setItem("car",JSON.stringify(obj));
	}
}]);