$(function(){
	var bg = chrome.extension.getBackgroundPage();
	var data = bg.getData();
	var ul = $('ul');
	for(var elem in data) {
		ul.append('<li>'+elem+'<br/>average: '+data[elem].avg.toFixed(2)+' - data amount: '+data[elem].cases+'</li>');
	}
});