//axios get 사용 코드

const getUsers = () => {
	axios
		.get("https://api.thecatapi.com/v1/images/search?size=full")
		.then((response) => {
			const rData = response.data;
			const imgUrl = rData[0].url;
			document.querySelector("img").src = imgUrl;
		})
		.catch((error) => console.error(error));
};
getUsers();

//axios post 사용 코드
/*
axios({
	method: "post",
	url: "https://api.thecatapi.com/v1/images/search?size=full?1234",
	headers: { "x-api-key": "1234" },
	data: {
		breeds: [],
		id: "dt0",
		url: "https://cdn2.thecatapi.com/images/dt0.jpg",
		width: 622,
		height: 480,
	},
})
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
*/
//fetch 사용 코드
/*
fetch("https://api.thecatapi.com/v1/images/search?size=full")
	.then((res) => res.json())
	.then((data) => {
		document.querySelector("img").src = data[0].url;
	})
	.catch((err) => {
		console.log("Fetch Error", err);
	});
*/
