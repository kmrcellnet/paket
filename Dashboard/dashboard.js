document.addEventListener("DOMContentLoaded", function() {
    loadPaketData();

    document.getElementById("paket-form").addEventListener("submit", function(e) {
        e.preventDefault();
        let nama = document.getElementById("paket-nama").value;
        let harga = document.getElementById("paket-harga").value;

        if (nama.trim() === "" || harga.trim() === "") {
            alert("Nama dan harga paket harus diisi!");
            return;
        }

        addPaket(nama, harga);
        this.reset(); // Mengosongkan input setelah submit
    });
});

function loadPaketData() {
    let paketList = JSON.parse(localStorage.getItem("paketData")) || [];
    let container = document.getElementById("paket-list");
    container.innerHTML = "";
    paketList.forEach((paket, index) => {
        let div = document.createElement("div");
        div.classList.add("list-item");
        div.innerHTML = `
            <span>${paket.nama} - Rp ${paket.harga}</span>
            <button class="delete-btn" onclick="deletePaket(${index})">Hapus</button>
        `;
        container.appendChild(div);
    });
}

function addPaket(nama, harga) {
    let paketList = JSON.parse(localStorage.getItem("paketData")) || [];
    paketList.push({ nama, harga });
    localStorage.setItem("paketData", JSON.stringify(paketList));
    loadPaketData(); // Update tampilan
}

function deletePaket(index) {
    let paketList = JSON.parse(localStorage.getItem("paketData"));
    paketList.splice(index, 1);
    localStorage.setItem("paketData", JSON.stringify(paketList));
    loadPaketData();
}
