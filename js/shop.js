document.addEventListener("DOMContentLoaded", function () {
    getShop();
});

async function getShop() {
    try {
        const response = await fetch('../js/shop.json');
        const shops = await response.json();
        console.log(shops);

        let shopList = ``;
        for (let i = 0; i < shops.length; i++) {
            shopList += `
              <tr>
                  <th scope="row">${shops[i].id}</th>
                  <td>${shops[i].name}</td>
                  <td>${shops[i].location}</td>
                  <td>${shops[i].time}</td>
                  <td>${shops[i].website ? `<a href="${shops[i].website}" target="_blank">View Website</a>` : ''}</td>
              </tr>`;
        }

        const shopTableBody = document.querySelector("#shop tbody");
        if (shopTableBody) {
            shopTableBody.innerHTML = shopList;
        } else {
            console.error("Table body element not found.");
        }
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
    }
}