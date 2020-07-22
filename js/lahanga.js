import { localhost } from './adminurl.js';

export const Lahanga = async () => {

    try {
        const url = `${localhost}/lahangas/?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result[0].lahangazone[0].desc);

        for (let i in result) {
            const container = document.querySelector(".container__content");

            const dv = document.createElement("div");
            dv.classList = "dv";

            const internaldiv = document.createElement("div");
            internaldiv.classList = "internaldiv";


            const img = document.createElement("img");
            img.src = `${result[i].lahangazone[0].img[0].url}`;
            img.classList = "img";

            const name = document.createElement("h1");
            name.textContent = `${result[i].lahangazone[0].name}`;
            name.classList = "name";

            const piece = document.createElement("p");
            piece.textContent = `${result[i].lahangazone[0].piece}`;
            piece.classList = "piece";

            const price = document.createElement("p");
            price.textContent = `Price: NPR ${result[i].lahangazone[0].price}`;
            price.classList = "price";

            const descHeading = document.createElement("h3");
            descHeading.textContent = `${result[i].lahangazone[0].info}`;
            descHeading.classList = "descHeading";

            const desc = document.createElement("p");
            desc.textContent = `${result[i].lahangazone[0].desc}`;
            desc.classList = "desc";

            const callheading = document.createElement("p");
            callheading.textContent = `${result[i].lahangazone[0].callheading}`;
            callheading.classList = "callheading";

            const number = document.createElement("p");
            number.textContent = `${result[i].lahangazone[0].number}`;
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





        }
    }

    catch(error) {
        console.log("failed", error);
    }


}