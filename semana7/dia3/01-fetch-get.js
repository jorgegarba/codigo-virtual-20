/**
 *  1. Request con método GET, sin headers sin query params
 * */
const getUsers = async () => {
	const URL_USERS = 'https://reqres.in/api/users';
	// el método HTTP por defecto es GET ( en caso no se especifique)
	const response = await fetch(URL_USERS, {
		method: 'GET',
		headers: {}
	});
	const data = await response.json();
	console.log('getUsers', data);
};

/**
 * 2. Request con método GET, sin headers con query params
 */

const getNProducts = async () => {
	const URL = 'https://fakestoreapi.com/products?limi=6&sort=desc';
	const response = await fetch(URL);
	const data = await response.json();
	console.log('getNProducts', data);
};

/**
 * 3. Request con método POST, sin headers con body
 */

const postCreateProduct = async () => {
	const URL = 'https://fakestoreapi.com/products';

	const producto = {
		title: 'test product',
		price: 13.5,
		description: 'lorem ipsum set',
		image: 'https://i.pravatar.cc',
		category: 'electronic'
	};

	const response = await fetch(URL, {
		method: 'POST',
		body: JSON.stringify(producto)
	});

	const data = await response.json();
	console.log('postCreateProduct', data);
};
