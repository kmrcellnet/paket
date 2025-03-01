document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript berjalan!");

    // Ambil data dari Local Storage atau data.json jika kosong
    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            if (paketData.length === 0) paketData = data.paketData;
            if (topupData.length === 0) topupData = data.topup;

            displayPaketData(paketData);
            displayTopup(topupData);
        })
        .catch(error => console.error("Error fetching data:", error));

    // Event listener untuk form tambah paket baru
    document.getElementById("paket-form").addEventListener("submit", function(e) {
        e.preventDefault();

        let nama = document.getElementById("paket-nama").value;
        let harga = document.getElementById("paket-harga").value;
        let gambar = "default.jpg"; // Gambar default jika tidak ada input

        if (nama.trim() === "" || harga.trim() === "") {
            alert("Nama dan harga paket harus diisi!");
            return;
        }

        let newPaket = { nama, harga, gambar };
        paketData.push(newPaket);

        localStorage.setItem("paketData", JSON.stringify(paketData));

        displayPaketData(paketData); // Perbarui tampilan
        this.reset();
    });
});

function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    container.innerHTML = ""; // Bersihkan daftar sebelum menampilkan ulang

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

function displayTopup(topupList) {
    let container = document.getElementById("topup-list");
    container.innerHTML = "";

    topupList.forEach(topup => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${topup.gambar}" alt="Top-Up" class="icon">
            <h3>Top-Up ${topup.nominal}</h3>
            <button onclick="topUpSaldo('${topup.nominal}')">Top-Up</button>
        `;
        container.appendChild(card);
    });
}

function beliPaket(namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
}

function topUpSaldo(nominal) {
    alert(`Anda melakukan top-up sebesar ${nominal}`);
}
