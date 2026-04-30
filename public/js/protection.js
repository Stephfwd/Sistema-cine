import { isAuthenticated, isAdmin, logout } from '/js/auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    
    // Protect User Pages
    const userPages = ['/pages/boletos.html', '/pages/salas.html', '/pages/confiteria_combos.html', '/pages/Cartelera.html'];
    if (userPages.some(page => currentPage.includes(page)) && !isAuthenticated()) {
        window.location.href = '/pages/login.html';
    }

    // Protect Admin Pages
    const adminPages = ['/pages/index.html']; // Current admin dashboard is index.html
    if (adminPages.some(page => currentPage.includes(page)) && !isAdmin()) {
        window.location.href = '/pages/admin/login.html';
    }
});
