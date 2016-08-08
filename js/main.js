(function(){

var doc = document;
var accordionBlock = doc.getElementById('accordion');
var accordionBlocks = document.querySelectorAll('#accordion > div');

var accordion = function(e){
	eventsObj.preventDefault(e);
	
	var elem = eventsObj.getTarget(e),
		elemType = elem.getAttribute('data-type');
		
	if(elemType)
	{
		if(elem.parentNode.className !== 'act')
		{
			for(var i = 0; i < accordionBlocks.length; ++i)
				accordionBlocks[i].className = '';
			elem.parentNode.className = 'act';
		}
		else
			elem.parentNode.className = '';
	}
}

eventsObj.addEvent(accordionBlock, 'click', accordion);

})();