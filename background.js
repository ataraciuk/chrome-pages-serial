updateData();
setInterval(updateData, 200);
var arr = {};

function getData(){
	return arr;
}

function updateData(){
  chrome.tabs.query({active: true}, function(tab) {
      var curr = tab[0].url;
      console.log('getting tabs');
	  $.getJSON('processing/data.json', function(d){
	  	console.log('got tabs');
	  	if(d.length > 0) {
	  		var val = d[0];
	  		var nextAm = 1;
	  		var oldData = arr[curr];
	  		if(oldData) {
	  			var prevAm = oldData.cases;
	  			nextAm = prevAm + 1;
	  			val = (val + oldData.avg * prevAm) / nextAm;
	  		}
	  		arr[curr] = {avg: val, cases: nextAm};
	  	}
	  });
  });
}