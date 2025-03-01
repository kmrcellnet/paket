document.addEventListener("DOMContentLoaded", function() {
    loadPaketData();
    loadTopupData();

    document.getElementById("paket-form").addEventListener("submit", function(e) {
        e.preventDefault();
        let nama = document.getElementById("paket-nama").value;
        let harga = document.getElementById("paket-harga").value;
        addPaket(nama, harga);
        this.reset();
    });

    document.getElementById("topup-form").addEventListener("submit", function(e) {
        e.preventDefault();
        let nominal = document.getElementById("topup-nominal").value;
        addTopup(nominal);
        this.reset();
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
            <span>${paket.nama} - ${paket.harga}</span>
            <button class="delete-btn" onclick="deletePaket(${index})">Hapus</button>
        `;
        container.appendChild(div);
    });
}

function loadTopupData() {
    let topupList = JSON.parse(localStorage.getItem("topupData")) || [];
    let container = document.getElementById("topup-list");
    container.innerHTML = "";
    topupList.forEach((topup, index) => {
        let div = document.createElement("div");
        div.classList.add("list-item");
        div.innerHTML = `
            <span>Top-Up ${topup.nominal}</span>
            <button class="delete-btn" onclick="deleteTopup(${index})">Hapus</button>
        `;
        container.appendChild(div);
    });
}

function addPaket(nama, harga) {
    let paketList = JSON.parse(localStorage.getItem("paketData")) || [];
    paketList.push({ nama, harga });
    localStorage.setItem("paketData", JSON.stringify(paketList));
    loadPaketData();
}

function addTopup(nominal) {
    let topupList = JSON.parse(localStorage.getItem("topupData")) || [];
    topupList.push({ nominal });
    localStorage.setItem("topupData", JSON.stringify(topupList));
    loadTopupData();
}

function deletePaket(index) {
    let paketList = JSON.parse(localStorage.getItem("paketData"));
    paketList.splice(index, 1);
    localStorage.setItem("paketData", JSON.stringify(paketList));
    loadPaketData();
}

function deleteTopup(index) {
    let topupList = JSON.parse(localStorage.getItem("topupData"));
    topupList.splice(index, 1);
    localStorage.setItem("topupData", JSON.stringify(topupList));
    loadTopupData();
}
