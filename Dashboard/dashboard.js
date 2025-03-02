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
            let card = createCard(paket.gambar, paket.nama, `Harga: ${paket.harga}`, `hapusPaket(${index})`, "Hapus");
            paketList.appendChild(card);
        });

        localStorage.setItem("paketData", JSON.stringify(paketData));
    }

    // === Menampilkan Top-Up Saldo ===
    function displayTopupData() {
        topupList.innerHTML = "";
        topupData.forEach((topup, index) => {
            let card = createCard(topup.gambar, `Top-Up ${topup.nominal}`, "", `hapusTopup(${index})`, "Hapus");
            topupList.appendChild(card);
        });

        localStorage.setItem("topupData", JSON.stringify(topupData));
    }

    // === Menampilkan Top-Up Game ===
    function displayGameData() {
        gameList.innerHTML = "";
        gameData.forEach((game, index) => {
            let card = createCard(game.gambar, `${game.game} - ${game.nominal}`, `Harga: ${game.harga}`, `hapusGame(${index})`, "Hapus");
            gameList.appendChild(card);
        });

        localStorage.setItem("gameData", JSON.stringify(gameData));
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
        let gambar = document.getElementById("topup-gambar").value;

        if (nominal && gambar) {
            topupData.push({ nominal, gambar });
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

    // === Fungsi Membuat Kartu (Card) ===
    function createCard(image, title, price, onClickFunction, buttonText) {
        let card = document.createElement("div");
        card.classList.add("list-item");
        card.innerHTML = `
            <img src="${image}" alt="${title}" class="paket-img">
            <div class="paket-info">
                <h3>${title}</h3>
                <p>${price}</p>
            </div>
            <button class="delete-btn" onclick="${onClickFunction}">${buttonText}</button>
        `;
        return card;
    }

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

    // Panggil fungsi untuk menampilkan data saat halaman dimuat
    displayPaketData();
    displayTopupData();
    displayGameData();
});
