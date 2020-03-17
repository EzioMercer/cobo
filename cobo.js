window.onload = () => {
	Array.from(document.getElementsByClassName('cobo')).forEach(
		(img) => {
			let
				div = document.createElement('div'),
				img_bg = img.cloneNode(true);
			img.replaceWith(div);
			div.appendChild(img);
			img_bg.style.filter = "blur(8px)";
			div.appendChild(img_bg);
			img.style.position = 'absolute';
			img.style.zIndex = '1';
		})
};