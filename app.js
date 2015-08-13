var thumbContainers = document.querySelectorAll('.thumbz');
Array.prototype.forEach.call(thumbContainers, function(el) {
	if(!el.src)
		el.src = el.dataset.imgs.split(',')[0];
	 	//kick things off by loading the first img in the data attr
	el.addEventListener('mousemove', changeSource, false);
	el.addEventListener('touchmove', changeSource, false);
	el.addEventListener('touchstart', changeSource, false);
});

function changeSource(e) {
	var el = e.target;
	var imgs = el.dataset.imgs.split(',');
	imgs.forEach(function(src, i) {
		var img = new Image();
		img.src = src;
	});
	var active = 0;
	var width = el.offsetWidth;
	var section = width / imgs.length;
	var position = e.clientX - el.offsetLeft;
	if (e.type === 'touchmove' || e.type === 'touchstart') {
		position = e.touches[0].clientX;
	}

	for (var i = 0; i < imgs.length; i++) {
		if (position > section * i && active != i) {
			active = i;
		}
	}
	var file = imgs[active].split('/')[1];
	if (el.src.indexOf(file) < 0)
		el.src = imgs[active];
}
