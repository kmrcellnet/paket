document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById("game-list");
            data.games.forEach(game => {
                let div = document.createElement("div");
                div.classList.add("game-card");
                div.innerHTML = `
                    <img src="assets/img.png" width="100" />
                    <h3>${game.name}</h3>
                    <p>Mulai dari Rp${game.price}</p>
                `;
                div.onclick = () => alert(`Top-Up ${game.name} dipilih!`);
                gameList.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading games:", error));
});
