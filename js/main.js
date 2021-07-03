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
	actionBtn.addEventListener('click', () => {
	  if (!revealerNav.isRevealed()) {
		revealerNav.reveal();
		actionBtn.setAttribute('data-open', true);
	  } else {
		revealerNav.hide();
		actionBtn.setAttribute('data-open', false);
	  }
	});
  });

  // menu bar 