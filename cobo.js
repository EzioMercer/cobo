window.onload = () => {
	Array.from(document.querySelectorAll("img[class~=cobo-static], img[class~=cobo-hover]")).forEach(
		(img) => {
			let
				div = document.createElement('div'),
				img_bg = img.cloneNode(true);

			img.replaceWith(div);
			div.appendChild(img);

			if(img.classList.contains('cobo-static')){

				img_bg.style.filter = "blur(8px)";

			} else if(img.classList.contains('cobo-hover')){

				img.onmouseover = () => img_bg.style.filter = "blur(8px)";
				img.onmouseout = () => img_bg.style.filter = "blur(0px)";

			}

			div.appendChild(img_bg);
			img.style.position = 'absolute';
			img.style.zIndex = '1';
		});
};