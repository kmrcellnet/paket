document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        displayPaketData(data.paketData);
        displayTopup(data.topup);
    })
    .catch(error => console.error("Error fetching data:", error));
});

function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    paketList.forEach(paket => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${paket.nama}</h3>
            <p>${paket.harga}</p>
            <button onclick="beliPaket('${paket.nama}')">Beli</button>
        `;
        container.appendChild(card);
    });
}

function displayTopup(topupList) {
    let container = document.getElementById("topup-list");
    topupList.forEach(topup => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>Top-Up ${topup.nominal}</h3>
            <button onclick="topUpSaldo('${topup.nominal}')">Top-Up</button>
        `;
        container.appendChild(card);
    });
}

function beliPaket(namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
}

function topUpSaldo(nominal) {
    alert(`Anda melakukan top-up sebesar ${nominal}`);
}