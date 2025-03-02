document.addEventListener("DOMContentLoaded", function () {
    console.log("Memuat data ke index.html");

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];
    let gameData = JSON.parse(localStorage.getItem("gameData")) || [];

    // Jika localStorage kosong, ambil data dari data.json
    if (paketData.length === 0 || topupData.length === 0 || gameData.length === 0) {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                paketData = data.paketData;
                topupData = data.topup;
                gameData = data.gameTopup;

                localStorage.setItem("paketData", JSON.stringify(paketData));
                localStorage.setItem("topupData", JSON.stringify(topupData));
                localStorage.setItem("gameData", JSON.stringify(gameData));

                displayPaketData();
                displayTopupData();
                displayGameData();
            })
            .catch(error => console.error("Error fetching data:", error));
    } else {
        displayPaketData();
        displayTopupData();
        displayGameData();
    }
});

// === Fungsi Tampilkan Paket Data ===
function displayPaketData() {
    let container = document.getElementById("paket-list");
    container.innerHTML = ""; 

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    paketData.forEach(paket => {
        let card = createCard(paket.gambar, paket.nama, paket.harga, `beliPaket('${paket.nama}')`, "Beli");
        container.appendChild(card);
    });
}

// === Fungsi Tampilkan Top-Up Saldo ===
function displayTopupData() {
    let container = document.getElementById("topup-list");
    container.innerHTML = ""; 

    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];
    topupData.forEach(topup => {
        let card = createCard(topup.gambar, `Top-Up ${topup.nominal}`, topup.harga, `topUpSaldo('${topup.nominal}')`, "Top-Up");
        container.appendChild(card);
    });
}

// === Fungsi Tampilkan Top-Up Game ===
function displayGameData() {
    let container = document.getElementById("game-list");
    container.innerHTML = ""; 

    let gameData = JSON.parse(localStorage.getItem("gameData")) || [];
    gameData.forEach(game => {
        let card = createCard(game.gambar, `${game.game} - ${game.nominal}`, game.harga, `beliGame('${game.game}', '${game.nominal}')`, "Beli");
        container.appendChild(card);
    });
}

// === Fungsi Membuat Kartu (Card) ===
function createCard(image, title, price, onClickFunction, buttonText) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${image}" alt="${title}" class="icon">
        <h3>${title}</h3>
        <p>${price}</p>
        <button onclick="${onClickFunction}">${buttonText}</button>
    `;
    return card;
}

// === Fungsi Beli Paket Data ===
window.beliPaket = function (namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
};

// === Fungsi Top-Up Saldo ===
window.topUpSaldo = function (nominal) {
    alert(`Anda melakukan top-up sebesar ${nominal}`);
};

// === Fungsi Beli Top-Up Game ===
window.beliGame = function (game, nominal) {
    alert(`Anda membeli ${nominal} untuk ${game}`);
};
