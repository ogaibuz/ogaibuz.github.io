// setItem recibe una clave que va a guardare en el local Storage y los datos JSON
export function setLocalStorage({ key, value }) {
	window.localStorage.setItem(key, JSON.stringify(value))
}
