//Url to Google Sheets
//const url = 'https://docs.google.com/spreadsheets/d/[sheet ID]/gviz/tq?';
const url = 'https://docs.google.com/spreadsheets/d/1qqcewCVPu3hTQTlgLBHbPWKJShlVnEiKu4ZdHLctPvc/gviz/tq?';
const productsContainer = document.querySelector('.products-grid');
    fetch(url)
    .then(res => res.text())
    .then(response =>{

        //Parsing the JSON
        const data = JSON.parse(response.substr(47).slice(0,-2));
        //consologeando el JSON
        console.log(data);

        //Iterating over the JSON to create the products
        data.table.rows.forEach(product => {

            const productCard = document.createElement('div');
            productCard.classList.add('product-card',);
            productCard.setAttribute('data-aos', 'fade-up');
            productCard.innerHTML = `
                <div class="product-card__image">
                    <img class="product-img" src="${product.c[4].v}" alt="${product[0]}">
                </div>
                <div class="product-card__info">
                    <h2 class="product-brand">Model: ${product.c[0].v}</h2>
                    <p class="product-text">Color: ${product.c[1].v}</p>
                    <p class="product-text">Year: ${product.c[3].v}</p>
                    <a class="product-link" href="${product.c[5].v}" target="_blank">
                    <button type="button" class="btn btn-outline-dark">More...</button>
                    </a>
                </div>
            `;
            productsContainer.appendChild(productCard);
        }
    );
}).catch(error => console.log(error)); //catch error in case the JSON cannot be parsed
