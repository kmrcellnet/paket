document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Dashboard admin dimuat...");

    const paketForm = document.getElementById("paket-form");
    const topupForm = document.getElementById("topup-form");

    let paketData = JSON.parse(localStorage.getItem("paketData")) || [];
    let topupData = JSON.parse(localStorage.getItem("topupData")) || [];

    function saveData() {
        localStorage.setItem("paketData", JSON.stringify(paketData));
        localStorage.setItem("topupData", JSON.stringify(topupData));
        window.dispatchEvent(new Event("storage")); // Memicu event perubahan storage
    }

    paketForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let nama = document.getElementById("paket-nama").value.trim();
        let harga = document.getElementById("paket-harga").value.trim();
        let gambar = document.getElementById("paket-gambar").value.trim();

        if (nama && harga && gambar) {
            let id = paketData.length ? paketData[paketData.length - 1].id + 1 : 1;
            paketData.push({ id, nama, harga, gambar });
            saveData();
            paketForm.reset();
        }
    });

    topupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let nominal = document.getElementById("topup-nominal").value.trim();
        let harga = document.getElementById("topup-harga").value.trim();
        let gambar = document.getElementById("topup-gambar").value.trim();

        if (nominal && harga && gambar) {
            let id = topupData.length ? topupData[topupData.length - 1].id + 1 : 1;
            topupData.push({ id, nominal, harga, gambar });
            saveData();
            topupForm.reset();
        }
    });
});
