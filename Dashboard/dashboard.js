document.addEventListener("DOMContentLoaded", () => {
    fetch("../data.json")
        .then(response => response.json())
        .then(data => {
            const dashboardContent = document.getElementById("dashboard-content");
            data.games.forEach(game => {
                let div = document.createElement("div");
                div.innerHTML = `<p>${game.name} - Rp${game.price}</p>`;
                dashboardContent.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading dashboard data:", error));
});
