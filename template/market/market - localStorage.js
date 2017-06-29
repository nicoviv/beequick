app.controller('marketCtrl',['$scope','$http',function($scope,$http){
	$scope.details = [];
	$scope.index = 0;
	$scope.selected = "";
	$scope.menulist = ["热销榜","天天特价","优选水果","牛奶面包","牛奶面包","冰镇饮料","进口食品",
	"冰激凌","饮料酒水","休闲熟食","方便速食","粮油调味","生活用品"];
	$scope.oli = function(i,text){
		$scope.index = i;//这里的i是$index
		resque(text);
	}

	function resque(text){
		$http({
			method: "GET",
			url: "http://h5.yztctech.net/api/axf/apicategory.php",
			params: {
				category: text || "热销榜"
			}
		}).success(function(res){
			$scope.details = res.data;
			$scope.selected = text || "热销榜";
		})
	}
	resque();



	// 先声明一个变量来存储加入购物车的数据
	var obj = {};
	$scope.addCar = function(i,count){
		// 先判断当前对象当中有没有被加入购物车
		// 如果有，则将数值加1
		// 否则直接赋值为1
		console.log(i)
		if(i.num){
			i.num += count;
		}else{
			i.num = 1;
		}

		// 判断有没有将数据存入本地存储当中
		// 如果有则将数据替换为obj
		if(window.localStorage.car){
			obj = JSON.parse(window.localStorage.car);
		}
		// 将操作的数据保存在本地
		obj[$scope.selected+''+i.id] = i;
		window.localStorage.setItem("car",JSON.stringify(obj));
	}
}]);