document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("paket-form");
    const paketList = document.getElementById("paket-list");

    // Ambil data dari localStorage atau buat array kosong
    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];

    // Fungsi menampilkan daftar paket
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

        // Simpan data terbaru ke localStorage
        localStorage.setItem("paketData", JSON.stringify(paketData));
    }

    // Fungsi menambah paket baru
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nama = document.getElementById("paket-nama").value;
        let harga = document.getElementById("paket-harga").value;
        let gambar = document.getElementById("paket-gambar").value;

        if (nama && harga && gambar) {
            paketData.push({ nama, harga, gambar });
            displayPaketData();
            form.reset();
        } else {
            alert("Harap isi semua data!");
        }
    });

    // Fungsi menghapus paket
    window.hapusPaket = function (index) {
        paketData.splice(index, 1);
        displayPaketData();
    };

    displayPaketData();
});
