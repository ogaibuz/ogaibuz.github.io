export function getLocalStorage(item) {
	return JSON.parse(window.localStorage.getItem(item))
}
