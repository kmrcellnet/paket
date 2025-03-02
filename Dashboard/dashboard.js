document.addEventListener("DOMContentLoaded", function() {
    const transactions = [
        { id: 1, game: "Mobile Legends", amount: "50 Diamonds", status: "Sukses" },
        { id: 2, game: "Free Fire", amount: "100 Diamonds", status: "Pending" }
    ];

    const tableBody = document.getElementById("transaction-list");

    transactions.forEach(trans => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${trans.id}</td><td>${trans.game}</td><td>${trans.amount}</td><td>${trans.status}</td>`;
        tableBody.appendChild(row);
    });
});
