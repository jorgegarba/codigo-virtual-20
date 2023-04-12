axios.get('https://reqres.in/api/users/2').then((response) => {
	console.log(response);
});

async function getUser() {
	const response = await axios.get('https://reqres.in/api/users/2');
	return response.data;
}
getUser().then((data) => {
	console.log('data getUser', data);
});

const getUserV2 = async () => {
	const response = await axios.get('https://reqres.in/api/users/2');
	return response.data;
};

getUserV2().then((data) => {
	console.log('data getUserV2', data);
});
