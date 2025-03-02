document.addEventListener("DOMContentLoaded", function () {
    const paketForm = document.getElementById("paket-form");
    const paketList = document.getElementById("paket-list");

    const topupForm = document.getElementById("topup-form");
    const topupList = document.getElementById("topup-list");

    const gameForm = document.getElementById("game-form");
    const gameList = document.getElementById("game-list");

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];
    let gameData = JSON.parse(localStorage.getItem("gameData")) || [];

    // === Menampilkan Paket Data ===
    function displayPaketData() {
        paketList.innerHTML = "";
        paketData.forEach((paket, index) => {
            let card = createListItem(paket.gambar, paket.nama, paket.harga, index, "hapusPaket");
            paketList.appendChild(card);
        });
        localStorage.setItem("paketData", JSON.stringify(paketData));
    }

    // === Menampilkan Top-Up Saldo ===
    function displayTopupData() {
        topupList.innerHTML = "";
        topupData.forEach((topup, index) => {
            let card = createListItem(topup.gambar, `Top-Up ${topup.nominal}`, topup.harga, index, "hapusTopup");
            topupList.appendChild(card);
        });
        localStorage.setItem("topupData", JSON.stringify(topupData));
    }

    // === Menampilkan Top-Up Game ===
    function displayGameData() {
        gameList.innerHTML = "";
        gameData.forEach((game, index) => {
            let card = createListItem(game.gambar, `${game.game} - ${game.nominal}`, game.harga, index, "hapusGame");
            gameList.appendChild(card);
        });
        localStorage.setItem("gameData", JSON.stringify(gameData));
    }

    // === Fungsi Membuat Item List ===
    function createListItem(image, title, price, index, deleteFunction) {
        let card = document.createElement("div");
        card.classList.add("list-item");
        card.innerHTML = `
            <img src="${image}" alt="${title}" class="paket-img">
            <div class="paket-info">
                <h3>${title}</h3>
                <p>Harga: ${price}</p>
            </div>
            <button class="delete-btn" onclick="${deleteFunction}(${index})">Hapus</button>
        `;
        return card;
    }

    // === Tambah Paket Data ===
    paketForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let nama = document.getElementById("paket-nama").value;
        let harga = document.getElementById("paket-harga").value;
        let gambar = document.getElementById("paket-gambar").value;

        if (nama && harga && gambar) {
            paketData.push({ nama, harga, gambar });
            displayPaketData();
            paketForm.reset();
        } else {
            alert("Harap isi semua data!");
        }
    });

    // === Tambah Top-Up Saldo ===
    topupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let nominal = document.getElementById("topup-nominal").value;
        let harga = document.getElementById("topup-harga").value;
        let gambar = document.getElementById("topup-gambar").value;

        if (nominal && harga && gambar) {
            topupData.push({ nominal, harga, gambar });
            displayTopupData();
            topupForm.reset();
        } else {
            alert("Harap isi semua data!");
        }
    });

    // === Tambah Top-Up Game ===
    gameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let game = document.getElementById("game-nama").value;
        let nominal = document.getElementById("game-nominal").value;
        let harga = document.getElementById("game-harga").value;
        let gambar = document.getElementById("game-gambar").value;

        if (game && nominal && harga && gambar) {
            gameData.push({ game, nominal, harga, gambar });
            displayGameData();
            gameForm.reset();
        } else {
            alert("Harap isi semua data!");
        }
    });

    // === Hapus Paket Data ===
    window.hapusPaket = function (index) {
        paketData.splice(index, 1);
        displayPaketData();
    };

    // === Hapus Top-Up Saldo ===
    window.hapusTopup = function (index) {
        topupData.splice(index, 1);
        displayTopupData();
    };

    // === Hapus Top-Up Game ===
    window.hapusGame = function (index) {
        gameData.splice(index, 1);
        displayGameData();
    };

    displayPaketData();
    displayTopupData();
    displayGameData();
});
