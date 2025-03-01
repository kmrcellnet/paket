document.getElementById("topupForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let nomorHp = document.getElementById("nomor_hp").value;
    let produk = document.getElementById("produk").value;

    let response = await fetch("topup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomor_hp: nomorHp, produk: produk })
    });

    let result = await response.json();
    document.getElementById("response").innerText = result.message;
});