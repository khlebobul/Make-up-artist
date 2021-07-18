// Smooth Scrolling Sticky ScrollSpy Navigation

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});

// Smooth Scrolling Sticky ScrollSpy Navigation


// menu bar
 
document.addEventListener('DOMContentLoaded', () => {
	const revealerNav = window.revealer({
	  revealElementSelector: '.nav-js',
	  options: {
		anchorSelector: '.nav-btn-js',
	  },
	});
  
	const actionBtn = document.querySelector('.nav-btn-js');

	//const menu = document.querySelector('header__nav');
	//const menuLinks = document.querySelector('header__menu-item-link');
	const menuLinks = document.querySelectorAll('.header__menu-item-link');

  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
      
      revealerNav.hide();
      actionBtn.setAttribute('data-open', false);
    })
  })

	actionBtn.addEventListener('click', () => {
	  if (!revealerNav.isRevealed()) {
		revealerNav.reveal();
		actionBtn.setAttribute('data-open', true);
	  } else {
		revealerNav.hide();
		actionBtn.setAttribute('data-open', false);
	  }
	});
	

	//if (window.innerWidth <= 1024) {
	//	for (let i = 0; i < menuLinks.lenght; i += 1){
	//		menuLinks[i].addEventListener('click', () => {
	//			revealerNav.reveal();
	//			actionBtn.setAttribute('data-open', flase);
	//		})
	//	}
	//}
	
  });

  // menu bar 