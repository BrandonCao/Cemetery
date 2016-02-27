function changemap(number){
	var array = ["map1","map2","map3","map4","map5","map6","map7"];
	var map = String(array[number]);
	var i;


	$("#"+map).css("display", "block");
	$("#"+map).css("z-index", "1");


	for(i=0;i<array.length;i++){
		if(i != number){
			$("#"+String(array[i])).css("display", "none");
			$("#"+String(array[i])).css("z-index", "0");

		}
	}
}