function loadScript(url) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement('script');
		script.src = url;
		script.async = false;
		script.onload = function() {
			resolve(url);
		};
		script.onerror = function() {
			reject(url);
		};
		document.body.appendChild(script);
	});
}

let scripts = [
				'./js/templehighlight.js',
				'./js/weatherapi.js'
			];

// save all Promises as array
let promises = [];
scripts.forEach(function(url) {
	promises.push(loadScript(url));
});

Promise.all(promises)
.then(function() {
	console.log('all scripts loaded');
}).catch(function(script) {
	console.log(script + ' failed to load');
});