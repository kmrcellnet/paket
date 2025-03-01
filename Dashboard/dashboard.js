document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("paket-form");
    const paketList = document.getElementById("paket-list");

    // Menyimpan daftar paket
    let paketData = [];

    // Fungsi untuk menampilkan daftar paket
    function displayPaketData() {
        paketList.innerHTML = "";
        paketData.forEach((paket, index) => {
            let card = document.createElement("div");
            card.classList.add("list-item");
            card.innerHTML = `
                <img src="${paket.gambar}" alt="${paket.nama}" width="50">
                <div>
                    <h3>${paket.nama}</h3>
                    <p>Harga: ${paket.harga}</p>
                </div>
                <button class="delete-btn" onclick="hapusPaket(${index})">Hapus</button>
            `;
            paketList.appendChild(card);
        });
    }

    // Fungsi untuk menambah paket baru
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

    // Fungsi untuk menghapus paket
    window.hapusPaket = function (index) {
        paketData.splice(index, 1);
        displayPaketData();
    };

    displayPaketData();
});
