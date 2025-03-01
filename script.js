document.addEventListener("DOMContentLoaded", function () {
    console.log("Memuat data ke index.html");

    // Ambil data dari localStorage atau fallback ke data.json
    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];

    if (paketData.length === 0) {
        fetch("data.json")
            .then(response => response.json())
            .then(data => {
                paketData = data.paketData;
                localStorage.setItem("paketData", JSON.stringify(paketData)); // Simpan ke localStorage
                displayPaketData(paketData);
            })
            .catch(error => console.error("Error fetching data:", error));
    } else {
        displayPaketData(paketData); // Jika sudah ada di localStorage, langsung tampilkan
    }
});

// Fungsi menampilkan daftar paket data
function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    container.innerHTML = ""; // Bersihkan sebelum menampilkan ulang

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

// Fungsi pembelian paket (dummy alert)
function beliPaket(namaPaket) {
    alert(`Anda membeli ${namaPaket}`);
}
