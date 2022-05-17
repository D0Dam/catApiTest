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

/*import axios from "axios";

axios({
	method: "post",
	url: "https://api.thecatapi.com/v1/images/search?size=full",
	data: {
		breeds: [],
		id: "dt0",
		url: "https://cdn2.thecatapi.com/images/dt0.jpg",
		width: 622,
		height: 480,
	},
}).then((response) => console.log(response));
*/
