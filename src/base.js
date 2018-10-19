
function setScroll(v){
	document.documentElement.scrollTop = document.body.scrollTop = v;
}

function setSessionStorage(key,value){
	window.sessionStorage.setItem(key,value);
}

function getSessionStorage(key){
	return window.sessionStorage.getItem(key);
}

export {
	setScroll,
	setSessionStorage,
	getSessionStorage
};