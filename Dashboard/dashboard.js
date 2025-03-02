document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Dashboard admin dimuat...");

    // Ambil elemen form dan list
    const paketForm = document.getElementById("paket-form");
    const paketList = document.getElementById("paket-list");

    const topupForm = document.getElementById("topup-form");
    const topupList = document.getElementById("topup-list");

    const gameForm = document.getElementById("game-form");
    const gameList = document.getElementById("game-list");

    // Ambil data dari localStorage atau gunakan array kosong jika tidak ada data
    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];
    let gameData = JSON.parse(localStorage.getItem("gameData")) || [];

    // Tampilkan data yang ada
    displayPaketData();
    displayTopupData();
    displayGameData();

    // === Fungsi Menampilkan Paket Data ===
    function displayPaketData() {
        if (!paketList) return;
        paketList.innerHTML = "";

        paketData.forEach((paket, index) => {
            let card = createListItem(paket.gambar, paket.nama, paket.harga, index, "hapusPaket");
            paketList.appendChild(card);
        });

        localStorage.setItem("paketData", JSON.stringify(paketData));
    }

    // === Fungsi Menampilkan Top-Up Saldo ===
    function displayTopupData() {
        if (!topupList) return;
        topupList.innerHTML = "";

        topupData.forEach((topup, index) => {
            let card = createListItem(topup.gambar, `Top-Up ${topup.nominal}`, topup.harga, index, "hapusTopup");
            topupList.appendChild(card);
        });

        localStorage.setItem("topupData", JSON.stringify(topupData));
    }

    // === Fungsi Menampilkan Top-Up Game ===
    function displayGameData() {
        if (!gameList) return;
        gameList.innerHTML = "";

        gameData.forEach((game, index) => {
            let card = createListItem(game.gambar, `${game.game} - ${game.nominal}`, game.harga, index, "hapusGame");
            gameList.appendChild(card);
        });

        localStorage.setItem("gameData", JSON.stringify(gameData));
    }

    // === Fungsi Membuat List Item ===
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
    if (paketForm) {
        paketForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let nama = document.getElementById("paket-nama").value.trim();
            let harga = document.getElementById("paket-harga").value.trim();
            let gambar = document.getElementById("paket-gambar").value.trim();

            if (nama && harga && gambar) {
                paketData.push({ nama, harga, gambar });
                displayPaketData();
                paketForm.reset();
            } else {
                alert("❌ Harap isi semua kolom paket data!");
            }
        });
    }

    // === Tambah Top-Up Saldo ===
    if (topupForm) {
        topupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let nominal = document.getElementById("topup-nominal").value.trim();
            let harga = document.getElementById("topup-harga").value.trim();
            let gambar = document.getElementById("topup-gambar").value.trim();

            if (nominal && harga && gambar) {
                topupData.push({ nominal, harga, gambar });
                displayTopupData();
                topupForm.reset();
            } else {
                alert("❌ Harap isi semua kolom top-up saldo!");
            }
        });
    }

    // === Tambah Top-Up Game ===
    if (gameForm) {
        gameForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let game = document.getElementById("game-nama").value.trim();
            let nominal = document.getElementById("game-nominal").value.trim();
            let harga = document.getElementById("game-harga").value.trim();
            let gambar = document.getElementById("game-gambar").value.trim();

            if (game && nominal && harga && gambar) {
                gameData.push({ game, nominal, harga, gambar });
                displayGameData();
                gameForm.reset();
            } else {
                alert("❌ Harap isi semua kolom top-up game!");
            }
        });
    }

    // === Fungsi Hapus Data ===
    window.hapusPaket = function(index) {
        if (confirm("❌ Hapus paket ini?")) {
            paketData.splice(index, 1);
            displayPaketData();
        }
    };

    window.hapusTopup = function(index) {
        if (confirm("❌ Hapus top-up saldo ini?")) {
            topupData.splice(index, 1);
            displayTopupData();
        }
    };

    window.hapusGame = function(index) {
        if (confirm("❌ Hapus top-up game ini?")) {
            gameData.splice(index, 1);
            displayGameData();
        }
    };
});
