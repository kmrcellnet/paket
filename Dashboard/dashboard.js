document.addEventListener("DOMContentLoaded", function () {
    console.log("Dashboard Admin: Memuat data...");

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            if (paketData.length === 0) paketData = data.paketData;

            displayPaketData(paketData);
        })
        .catch(error => console.error("Error fetching data:", error));

    document.getElementById("paket-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let nama = document.getElementById("paket-nama").value;
        let harga = document.getElementById("paket-harga").value;
        let fileInput = document.getElementById("paket-gambar");

        if (nama.trim() === "" || harga.trim() === "") {
            alert("Nama dan harga paket harus diisi!");
            return;
        }

        let reader = new FileReader();
        reader.onload = function (event) {
            let gambar = event.target.result; // Gambar dalam format base64

            let newPaket = { nama, harga, gambar };
            paketData.push(newPaket);

            // Simpan ke Local Storage
            localStorage.setItem("paketData", JSON.stringify(paketData));

            displayPaketData(paketData);
            document.getElementById("paket-form").reset();
        };

        if (fileInput.files.length > 0) {
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            alert("Harap pilih gambar!");
        }
    });
});

function displayPaketData(paketList) {
    let container = document.getElementById("paket-list");
    container.innerHTML = ""; 

    paketList.forEach(paket => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${paket.gambar}" alt="${paket.nama}" class="icon">
            <h3>${paket.nama}</h3>
            <p>${paket.harga}</p>
        `;
        container.appendChild(card);
    });
}
