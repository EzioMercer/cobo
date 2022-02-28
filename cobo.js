/**
 * @param {HTMLImageElement} img
 * @param {boolean} [hoverMode]
 * @param {number} [borderSize]
 */
export default ({
	img,
	hoverMode = false,
	borderSize = 8
}) => {

	if(typeof hoverMode !== 'boolean') throw new TypeError('hoverMode must be boolean type');
	if(!img || img.tagName !== 'IMG') throw new Error('Element is not IMG');

	const div = document.createElement('div');
	const img_bg = img.cloneNode(true);

	img.replaceWith(div);
	div.appendChild(img);

	if (hoverMode) {
		img.onmouseover = () => img_bg.style.filter = `blur(${borderSize}px)`;
		img.onmouseout = () => img_bg.style.filter = 'blur(0px)';
	} else {
		img_bg.style.filter = `blur(${borderSize}px)`;
	}

	div.appendChild(img_bg);
	img.style.position = 'absolute';
	img.style.zIndex = '1';
};
