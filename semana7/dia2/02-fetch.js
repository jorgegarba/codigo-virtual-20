const url = 'https://reqres.in/api/users/2';

// fetch(url)
// fetch(url)
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

const getUsuario = async () => {
	const response = await fetch(url);
	const data = await response.json();
	console.log('data', data);
};

getUsuario();
