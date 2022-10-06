const scrollUpBtn = document.querySelector(`.scroll-up-btn`)
const progressBar = document.querySelector(`.scroll-progress-bar`)
const root = document.documentElement

const handleProgressBar = () => {
	const scrollValue = window.scrollY
	const spaceLeftToScroll = document.body.scrollHeight - window.innerHeight
	const actualScrollPosition = Math.floor((scrollValue / spaceLeftToScroll) * 100)
	root.style.setProperty(`--scroll-width`, `${actualScrollPosition}%`)
}

window.addEventListener(`scroll`, () => {
	handleProgressBar()
	if (window.scrollY >= 300) {
		scrollUpBtn.classList.add('active')
	} else {
		scrollUpBtn.classList.remove('active')
	}
})
