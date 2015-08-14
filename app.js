var thumbContainers = document.querySelectorAll('.thumbz');
Array.prototype.forEach.call(thumbContainers, function(el) {
	var imgs = el.dataset.imgs.split(',');
	var preload = el.dataset.preload;

	if (!el.src)
		el.src = imgs[0];

	if (preload) {
		imgs.forEach(function(img) {
			var newImage = new Image();
			newImage.src = img;
		});
	}

});

document.addEventListener('mousemove', changeSource, false);
document.addEventListener('touchstart', changeSource, false);
document.addEventListener('touchmove', changeSource, false);

function changeSource(e) {
	var el = e.target;
	if (!el.dataset.imgs)
		return;
	var imgs = el.dataset.imgs.split(',');

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
