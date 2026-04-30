const Peliculas = document.getElementById("Peliculas");
const Salas = document.getElementById("Salas");
const Boletos = document.getElementById("Boletos");
const Confiteria = document.getElementById("Confiteria");

Peliculas.addEventListener("click", () => {
    window.location.href = "/pages/Cartelera.html";
});

Salas.addEventListener("click", () => {
    window.location.href = "/pages/salas.html";
});

Boletos.addEventListener("click", () => {
    window.location.href = "/pages/boletos.html";
});

Confiteria.addEventListener("click", () => {
    window.location.href = "/pages/confiteria_combos.html";
});

const btnLogout = document.getElementById("btn-logout");
if (btnLogout) {
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("user_session");
        window.location.href = "/pages/login.html";
    });
}
