const navbar = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('#sidebar')
const date = document.querySelector('#date')

//smooth scroll to href links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})

// set year
date.innerHTML = new Date().getFullYear()

// popup
document.querySelectorAll('.project-card').forEach(function(card) {
  card.addEventListener('click', function(event) {
    // Prevent the popup from opening if a button is clicked
    if (event.target.tagName.toLowerCase() === 'button' || event.target.closest('button')) {
      return;
    }
    const popup = this.nextElementSibling;
    popup.style.display = 'block';
  });
});


document.querySelectorAll('.close-popup').forEach(function(btn) {
  btn.addEventListener('click', function() {
    const popup = this.closest('.popup');
    popup.style.display = 'none';
  });
});

window.addEventListener('click', function(event) {
  document.querySelectorAll('.popup').forEach(function(popup) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});

window.addEventListener('keydown', function(e) {
	document.querySelectorAll('.popup').forEach(function(popup) {
	if (e.key == "Escape" || e.keyCode == 27) {
		popup.style.display = 'none';
	}
  });
});
