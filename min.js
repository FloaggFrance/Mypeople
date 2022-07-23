var w = window, 
	d = document, 
	e = d.documentElement, 
	g = d.getElementsByTagName('body')[0], 
	x = w.innerWidth || e.clientWidth || g.clientWidth, 
	y = w.innerHeight|| e.clientHeight|| g.clientHeight; 
	
let WindowHtml = document.querySelectorAll('.load-page-JScroll')
let sc = (y)
let i = 1
let a = 0

document.querySelectorAll('.window-height').forEach(div => {
	div.style.minHeight = y+'px'
})

let pageContent = document.querySelectorAll('.content-page')

document.addEventListener('scroll', function() {
	if(WindowHtml[i-1] !== undefined) { 
		if(document.querySelector('body').scrollTop >= (sc * i) - a / 2) {
				
			if(WindowHtml[i-1].classList.contains('remove')) {
				WindowHtml[i-1].classList.replace('remove', 'load');
			} else {
				WindowHtml[i-1].classList.add('load');
			}
			
			if(pageContent[i-1] !== undefined) {
				a = pageContent[i-1].scrollHeight
			}
			
			if((i) < WindowHtml.length) {
				i += 1
			}
		}
		if(document.querySelector('body').scrollTop < sc * i) {
			// console.log(WindowHtml.length+" - "+i)
			WindowHtml[i-1].classList.replace('load', 'remove');
		}
		if(document.querySelector('body').scrollTop == (e.clientHeight - window.innerHeight)) {
			WindowHtml.forEach(div => {
				div.classList.replace('load', 'remove');
			})
		}
		console.log(document.querySelector('body').scrollTop+' - '+(e.clientHeight - window.innerHeight))
		// if ($(window).scrollTop() == $(document).height() - $(window).height()) {
		
		if(document.querySelector('body').scrollTop < 30) {
			WindowHtml.forEach(div => {
				div.classList.replace('load', 'remove');
			})
		}
	}
	
	if(document.querySelector('body').scrollTop < sc * i) {
		if(i > 1) {
			i -= 1 
		}
	}
})