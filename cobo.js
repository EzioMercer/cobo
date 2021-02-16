export default ({hoverMode = false} = {}) => {

	if(typeof hoverMode !== 'boolean') throw new TypeError('hoverMode must be boolean type');
	if(event.target.tagName !== 'IMG') throw new Error('Element is not IMG');

	const img = event.target;
	const div = document.createElement('div');
	const img_bg = img.cloneNode(true);

	img.replaceWith(div);
	div.appendChild(img);

	if(hoverMode){
		img.onmouseover = () => img_bg.style.filter = 'blur(8px)';
		img.onmouseout = () => img_bg.style.filter = 'blur(0px)';
	} else {
		img_bg.style.filter = 'blur(8px)';
	}

	div.appendChild(img_bg);
	img.style.position = 'absolute';
	img.style.zIndex = '1';
};
