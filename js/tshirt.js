import { localhost } from "./adminurl.js";

export const Tshirt = async () => {
	try {
		const url = `${localhost}/tshirts/?_sort=id:DESC`;
		const ftch = await fetch(url);
		const data = await ftch.json();
		const result = data;
		// console.log(result[0].tshirt[0].desc);

	

		for (let i in result) {
			const container = document.querySelector(".container__content");

			const dv = document.createElement("div");
			dv.classList = "dv";

			const internaldiv = document.createElement("div");
			internaldiv.classList = "internaldiv";

			const img = document.createElement("img");
			img.src = `${result[i].tshirt[0].img[0].url}`;
			img.classList = "img";

			const name = document.createElement("h1");
			name.textContent = `${result[i].tshirt[0].name}`;
			name.classList = "name";

			const piece = document.createElement("p");
			piece.textContent = `${result[i].tshirt[0].piece}`;
			piece.classList = "piece";

			const price = document.createElement("p");
			price.textContent = `Price: NPR ${result[i].tshirt[0].price}`;
			price.classList = "price";

			const descHeading = document.createElement("h3");
			descHeading.textContent = `${result[i].tshirt[0].info}`;
			descHeading.classList = "descHeading";

			const desc = document.createElement("p");
			desc.textContent = `${result[i].tshirt[0].desc}`;
			desc.classList = "desc";

			const callheading = document.createElement("p");
			callheading.textContent = `${result[i].tshirt[0].callheading}`;
			callheading.classList = "callheading";

			const number = document.createElement("p");
			number.textContent = `${result[i].tshirt[0].number}`;
			number.classList = "number";

			internaldiv.appendChild(img);
			internaldiv.appendChild(name);
			internaldiv.appendChild(piece);
			internaldiv.appendChild(price);
			internaldiv.appendChild(descHeading);
			internaldiv.appendChild(desc);
			internaldiv.appendChild(callheading);
			internaldiv.appendChild(number);

			dv.appendChild(internaldiv);

			container.appendChild(dv);

			// document.querySelector('.container__content').textContent = 'Loading.............'
			// setTimeout(function () {
			//   document.querySelector('.container__content').textContent = `${container}`
			// }, 2000)
		}
	} catch (error) {
		console.log("failed", error);
	}
};

document.querySelector(".show").textContent =
"Loading: It may be slow while fetching from Heroku Server";

setTimeout(function () {
document.querySelector(".show").style.display = "none";
}, 7000);
