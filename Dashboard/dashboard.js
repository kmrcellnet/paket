document.addEventListener("DOMContentLoaded", function () {
    const paketForm = document.getElementById("paket-form");
    const paketList = document.getElementById("paket-list");

    const topupForm = document.getElementById("topup-form");
    const topupList = document.getElementById("topup-list");

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];

    // === Menampilkan Paket Data ===
    function displayPaketData() {
        paketList.innerHTML = "";
        paketData.forEach((paket, index) => {
            let card = document.createElement("div");
            card.classList.add("list-item");
            card.innerHTML = `
                <img src="${paket.gambar}" alt="${paket.nama}" class="paket-img">
                <div class="paket-info">
                    <h3>${paket.nama}</h3>
                    <p>Harga: ${paket.harga}</p>
                </div>
                <button class="delete-btn" onclick="hapusPaket(${index})">Hapus</button>
            `;
            paketList.appendChild(card);
        });

        localStorage.setItem("paketData", JSON.stringify(paketData));
    }

    // === Menampilkan Top-Up Saldo ===
    function displayTopupData() {
        topupList.innerHTML = "";
        topupData.forEach((topup, index) => {
            let card = document.createElement("div");
            card.classList.add("list-item");
            card.innerHTML = `
                <img src="${topup.gambar}" alt="Top-Up ${topup.nominal}" class="paket-img">
                <div class="paket-info">
                    <h3>Top-Up ${topup.nominal}</h3>
                </div>
                <button class="delete-btn" onclick="hapusTopup(${index})">Hapus</button>
            `;
            topupList.appendChild(card);
        });

        localStorage.setItem("topupData", JSON.stringify(topupData));
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
        let gambar = document.getElementById("paket-gambar").value;

        if (nominal && gambar) {
            topupData.push({ nominal, gambar });
            displayTopupData();
            topupForm.reset();
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

    displayPaketData();
    displayTopupData();
});
