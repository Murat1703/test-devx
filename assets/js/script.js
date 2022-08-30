let burger = document.querySelector('.menu-burger-inner');
let menuMobile = document.querySelector('.menu-mobile');
let bodyLck = document.querySelector('body');
burger.addEventListener('click', function()
	{
        menuMobile.classList.toggle('active');
		burger.classList.toggle('active');
		bodyLck.classList.toggle('lock');
	});
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;
	
				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
	
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
	
		setTimeout(() => {
			animOnScroll();
		}, 300);
	}
	$('a[href^="#"').on('click', function() {

		let href = $(this).attr('href');
	
		$('html, body').animate({
			scrollTop: $(href).offset().top
		});
		return false;
	});
	let SocialBtn = document.querySelector('.contacts-btn');
	let SocialBtnInner = document.querySelector('.contacts-btn-inner');
	let SocialBtnImg = document.querySelector('.icon_img');
	let WpBtnImg = document.querySelector('.__whatsapp');
	let instBtnImg = document.querySelector('.__inst');
	let callBtnImg = document.querySelector('.__phone-call');
	SocialBtn.addEventListener('click', clickOnSocial);
	function clickOnSocial(){
		SocialBtnInner.classList.toggle('__icon_active');
		SocialBtnImg.classList.toggle('__img_active');
		WpBtnImg.classList.toggle('__img_active');
		instBtnImg.classList.toggle('__img_active');
		callBtnImg.classList.toggle('__img_active');
	}

/*
Высота Футера =  391
script.js:64 adsasdasd 618
script.js:66 Высота окна 648
*/