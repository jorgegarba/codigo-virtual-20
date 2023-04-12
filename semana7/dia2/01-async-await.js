axios.get('https://reqres.in/api/users/2').then((response) => {
	console.log(response);
});

async function getUser() {
	const response = await axios.get('https://reqres.in/api/users/2');
	console.log(response);
}
getUser();

const getUserV2 = async () => {
	const response = await axios.get('https://reqres.in/api/users/2');
	console.log(response);
};
getUserV2();
