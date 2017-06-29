app.controller('marketCtrl',['$scope','$http','shopcar','count',function($scope,$http,shopcar,count){
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

	$scope.addcart = function(i,num){
		if(i.num){
			i.num += num;
		}else{
			i.num = 1;
		}
		shopcar.addcar(i,$scope.selected);
		count.countFn();
	}
	
}]);