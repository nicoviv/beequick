app.factory("shopcar",[function(){
	var obj = {};
	obj.cardata = {};
	
	obj.addcar = function(i,text){
		i.state = false;
		obj.cardata[text+""+i.id] = i;
	}
	obj.removecar = function(i,text){
		delete obj.cardata[text+""+i.id];
	}
	return obj;
}])

.factory("selectService",['shopcar',function(shopcar){
	var obj = {};

	obj.selectAll = function(state){
		for(var i in shopcar.cardata){
			shopcar.cardata[i].state = state;
		}
	}
	
	obj.selectFn = function(){
		var _state = true;
		for(var i in shopcar.cardata){
			if(!shopcar.cardata[i].state){
				_state = false;
			}
		}
		return _state;
	}

	return obj;
}])

.factory('count',['shopcar',function(shopcar){
	var obj = {};
	obj.count = 0;
	obj.total = 0;
	
	obj.countFn = function(){
		var count = 0;
		var total = 0;
		console.log('this is count')
		for(var i in shopcar.cardata){
			count += shopcar.cardata[i].num;
			if(shopcar.cardata[i].state){
				total += ((shopcar.cardata[i].price*100)*shopcar.cardata[i].num)/100;
			}
		}
		obj.count = count;
		obj.total = total;
	}
	
	
	return obj;
}])

