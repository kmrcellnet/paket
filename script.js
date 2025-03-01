document.addEventListener("DOMContentLoaded", function () {
    console.log("Memuat data ke index.html");

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];

    if (paketData.length === 0) {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                paketData = data.paketData;
                topupData = data.topup;
                localStorage.setItem("paketData", JSON.stringify(paketData));
                localStorage.setItem("topupData", JSON.stringify(topupData));
                displayPaketData(paketData);
                displayTopupData(topupData);
            })
            .catch(error => console.error("Error fetching data:", error));
    } else {
        displayPaketData(paketData);
        displayTopupData(topupData);
    }
});

// === Tampilkan Paket Data ===
function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    container.innerHTML = "";
    paketList.forEach(paket => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${paket.gambar}" alt="${paket.nama}" class="icon">
            <h3>${paket.nama}</h3>
            <p>${paket.harga}</p>
            <button onclick="beliPaket('${paket.nama}')">Beli</button>
        `;
        container.appendChild(card);
    });
}

// === Tampilkan Top-Up Saldo ===
function displayTopupData(topupList) {
    let container = document.getElementById("topup-list");
    container.innerHTML = "";
    topupList.forEach(topup => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${topup.gambar}" alt="Top-Up ${topup.nominal}" class="icon">
            <h3>Top-Up ${topup.nominal}</h3>
            <button onclick="topUpSaldo('${topup.nominal}')">Top-Up</button>
        `;
        container.appendChild(card);
    });
}

// === Fungsi Top-Up Saldo ===
function topUpSaldo(nominal) {
    alert(`Anda melakukan top-up sebesar ${nominal}`);
}

// === Fungsi Beli Paket Data ===
function beliPaket(namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
}
