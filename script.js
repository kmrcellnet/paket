document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Memuat data ke index.html...");

    function loadData() {
        let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
        let topupData = JSON.parse(localStorage.getItem("topupData")) || [];
        let gameData = JSON.parse(localStorage.getItem("gameData")) || [];

        displayPaketData(paketData);
        displayTopupData(topupData);
        displayGameData(gameData);
    }

    // Muat data saat pertama kali
    loadData();

    // Cek perubahan setiap 2 detik
    setInterval(() => {
        console.log("🔄 Memeriksa perubahan data...");
        loadData();
    }, 2000);

    function displayPaketData(paketList) {
        let container = document.getElementById("paket-list");
        if (!container) return;
        container.innerHTML = "";

        paketList.forEach(paket => {
            let card = createCard(paket.gambar, paket.nama, paket.harga, `beliPaket('${paket.nama}')`, "Beli");
            container.appendChild(card);
        });
    }

    function displayTopupData(topupList) {
        let container = document.getElementById("topup-list");
        if (!container) return;
        container.innerHTML = "";

        topupList.forEach(topup => {
            let card = createCard(topup.gambar, `Top-Up ${topup.nominal}`, topup.harga, `topUpSaldo('${topup.nominal}')`, "Top-Up");
            container.appendChild(card);
        });
    }

    function displayGameData(gameList) {
        let container = document.getElementById("game-list");
        if (!container) return;
        container.innerHTML = "";

        gameList.forEach(game => {
            let card = createCard(game.gambar, `${game.game} - ${game.nominal}`, game.harga, `beliGame('${game.game}', '${game.nominal}')`, "Beli");
            container.appendChild(card);
        });
    }

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

    window.beliPaket = function(namaPaket) {
        alert(`Anda membeli ${namaPaket}`);
    };

    window.topUpSaldo = function(nominal) {
        alert(`Anda melakukan top-up sebesar ${nominal}`);
    };

    window.beliGame = function(game, nominal) {
        alert(`Anda membeli ${nominal} untuk ${game}`);
    };
});
