import SimpleCrypto from "simple-crypto-js";

const LocalStorage = function LocalStorage() {
	// _classCallCheck(this, LocalStorage);
};

// Function for get local storage
LocalStorage.get = function(key) {
	return localStorage.getItem(key);
};

// Function for get JSON form local storage
LocalStorage.getJSON = function(key) {
	const data = LocalStorage.get(key);
	return JSON.parse(data);
};

// Function for set local storage
LocalStorage.set = function(key, value) {
	return localStorage.setItem(key, value);
};

// Function for set JSON local storage
LocalStorage.setJSON = function(key, value) {
	const data = JSON.stringify(value);
	return LocalStorage.set(key, data);
};

// Function for remove local storage
LocalStorage.remove = function(key) {
	return localStorage.removeItem(key);
};

// Function for clear local storage
LocalStorage.clean = function() {
	return localStorage.clear();
};

export default LocalStorage;

export const localStorageKey = {
	user: "USER",
	authToken: "AUTH_TOKEN",
	authData: "AUTH_DATA"
};

const _secretKey = "gateflixhex112";

export const Crypto = new SimpleCrypto(_secretKey);

export const getToken = () => {
	let user = LocalStorage.get(localStorageKey.user);
	user = user && Crypto.decrypt(user) ? JSON.parse(Crypto.decrypt(user)) : null;
	return user && user.token ? user.token : null;
};

export const getUser = () => {
	let user = LocalStorage.get(localStorageKey.user);
	user = user && Crypto.decrypt(user) ? JSON.parse(Crypto.decrypt(user)) : null;
	return user || null;
};
