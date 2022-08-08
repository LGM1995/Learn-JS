function makeCounterFuction(initval){
	var count = initval;
	function Increase(){
		count++;
		console.log(count);
	}
	return Increase;
}

var counter1 = makeCounterFuction(0);
var counter2 = makeCounterFuction(10);

counter1();
counter1();
counter2();
counter2();