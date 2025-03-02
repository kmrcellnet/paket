document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Memuat data ke index.html...");

    // Ambil data dari Local Storage atau gunakan data.json jika kosong
    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];
    let gameData = JSON.parse(localStorage.getItem("gameData")) || [];

    if (paketData.length === 0 || topupData.length === 0 || gameData.length === 0) {
        console.log("📥 Mengambil data dari data.json...");
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                console.log("✅ Data dari data.json berhasil dimuat:", data);

                paketData = data.paketData;
                topupData = data.topup;
                gameData = data.gameTopup;

                localStorage.setItem("paketData", JSON.stringify(paketData));
                localStorage.setItem("topupData", JSON.stringify(topupData));
                localStorage.setItem("gameData", JSON.stringify(gameData));

                displayPaketData(paketData);
                displayTopupData(topupData);
                displayGameData(gameData);
            })
            .catch(error => console.error("❌ Gagal mengambil data:", error));
    } else {
        console.log("✅ Data diambil dari localStorage.");
        displayPaketData(paketData);
        displayTopupData(topupData);
        displayGameData(gameData);
    }
});

// === Fungsi Tampilkan Paket Data ===
function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    if (!container) {
        console.error("❌ Elemen #paket-list tidak ditemukan!");
        return;
    }
    container.innerHTML = "";

    paketList.forEach(paket => {
        let card = createCard(paket.gambar, paket.nama, paket.harga, `beliPaket('${paket.nama}')`, "Beli");
        container.appendChild(card);
    });
}

// === Fungsi Tampilkan Top-Up Saldo ===
function displayTopupData(topupList) {
    let container = document.getElementById("topup-list");
    if (!container) {
        console.error("❌ Elemen #topup-list tidak ditemukan!");
        return;
    }
    container.innerHTML = "";

    topupList.forEach(topup => {
        let card = createCard(topup.gambar, `Top-Up ${topup.nominal}`, topup.harga, `topUpSaldo('${topup.nominal}')`, "Top-Up");
        container.appendChild(card);
    });
}

// === Fungsi Tampilkan Top-Up Game ===
function displayGameData(gameList) {
    let container = document.getElementById("game-list");
    if (!container) {
        console.error("❌ Elemen #game-list tidak ditemukan!");
        return;
    }
    container.innerHTML = "";

    gameList.forEach(game => {
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
window.beliPaket = function(namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
};

// === Fungsi Top-Up Saldo ===
window.topUpSaldo = function(nominal) {
    alert(`Anda melakukan top-up sebesar ${nominal}`);
};

// === Fungsi Beli Top-Up Game ===
window.beliGame = function(game, nominal) {
    alert(`Anda membeli ${nominal} untuk ${game}`);
};
