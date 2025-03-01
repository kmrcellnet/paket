document.addEventListener("DOMContentLoaded", function () {
    console.log("Memuat data ke index.html");

    // Ambil data dari Local Storage atau gunakan data.json jika kosong
    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            if (paketData.length === 0) paketData = data.paketData;

            displayPaketData(paketData);
        })
        .catch(error => console.error("Error fetching data:", error));
});

function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    container.innerHTML = ""; // Bersihkan sebelum menambahkan ulang

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

function beliPaket(namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
}
