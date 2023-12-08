import './../scss/main.scss'

(() => {
	document.querySelector('body').innerHTML = '<h1>' + hello() + '</h1>'
})()

const hello = () => {
	return 'Hello World'
}
