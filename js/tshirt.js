import { localhost } from './adminurl.js';

export const Tshirt = async () => {

    try {
        const url = `${localhost}/tshirts/?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        // const result = data;
    
        console.log(result);

        for (let i in result) {
            const container = document.querySelector(".container__content");

            const dv = document.createElement("div");

            const img = document.createElement("img");
            img.textContent = `${result[i].tshirt[0].img[0].url}`;

            const name = document.createElement("h1");
            name.textContent = `${result[i].tshirt[0].name}`;

            const piece = document.createElement("p");
            piece.textContent = `${result[i].tshirt[0].piece}`;

            const price = document.createElement("p");
            price.textContent = `Price: ${result[i].tshirt[0].price}`;

            const descHeading = document.createElement("h3");
            descHeading.textContent = `${result[i].tshirt[0].info}`;

            const desc = document.createComment("p");
            desc.textContent = `${result[i].tshirt[0].desc}`;

            const callheading = document.createComment("p");
            callheading.textContent = `${result[i].tshirt[0].callheading}`;

            const number = document.createElement("p");
            number.textContent = `${result[i].tshirt[0].number}`;

            dv.appendChild(img);
            dv.appendChild(name);
            dv.appendChild(piece);
            dv.appendChild(price);
            dv.appendChild(descHeading);
            dv.appendChild(desc);
            dv.appendChild(callheading);
            dv.appendChild(number);

            container.appendChild(dv);





        }
    }

    catch(error) {
        console.log("failed", error);
    }


}