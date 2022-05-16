const getUsers = () => {
	axios
		.get("https://api.thecatapi.com/v1/images/search?size=full")
		.then((response) => {
			const users = response.data;
			const usera = users[0].url;
			document.querySelector("img").src = usera;
			console.log(`GET usera`, usera);
		})
		.catch((error) => console.error(error));
};
getUsers();
