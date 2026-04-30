const BASE_URL = "http://localhost:3002";

export async function login(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/Usuarios?email=${email}&password=${password}`);
        const users = await response.json();
        
        if (users.length > 0) {
            const user = users[0];
            localStorage.setItem("user_session", JSON.stringify(user));
            return { success: true, user };
        } else {
            return { success: false, message: "Correo o contraseña incorrectos" };
        }
    } catch (error) {
        console.error("Error en login:", error);
        return { success: false, message: "Error de conexión con el servidor" };
    }
}

export async function register(userData) {
    try {
        // Check if user exists
        const checkResponse = await fetch(`${BASE_URL}/Usuarios?email=${userData.email}`);
        const existingUsers = await checkResponse.json();
        
        if (existingUsers.length > 0) {
            return { success: false, message: "El correo ya está registrado" };
        }

        const response = await fetch(`${BASE_URL}/Usuarios`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...userData, rol: "usuario" })
        });
        
        if (response.ok) {
            const newUser = await response.json();
            return { success: true, user: newUser };
        }
        return { success: false, message: "Error al registrar usuario" };
    } catch (error) {
        console.error("Error en registro:", error);
        return { success: false, message: "Error de conexión" };
    }
}

export function logout() {
    localStorage.removeItem("user_session");
    window.location.href = "/pages/login.html";
}

export function getCurrentUser() {
    const session = localStorage.getItem("user_session");
    return session ? JSON.parse(session) : null;
}

export function isAuthenticated() {
    return localStorage.getItem("user_session") !== null;
}

export function isAdmin() {
    const user = getCurrentUser();
    return user && user.rol === "admin";
}
