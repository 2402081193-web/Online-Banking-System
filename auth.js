// Get current user's role from Firestore
async function getUserRole(uid) {
    const doc = await db.collection('users').doc(uid).get();
    return doc.exists ? doc.data().role : null;
}

// Redirect based on role after login
function redirectBasedOnRole(user) {
    getUserRole(user.uid).then(role => {
        if (role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    });
}

// Protect pages: if not logged in, go to login
function requireAuth() {
    auth.onAuthStateChanged(user => {
        if (!user) {
            window.location.href = 'login.html';
        }
    });
}

// Protect admin pages: if not admin, go to customer dashboard
function requireAdmin() {
    auth.onAuthStateChanged(user => {
        if (!user) {
            window.location.href = 'login.html';
        } else {
            getUserRole(user.uid).then(role => {
                if (role !== 'admin') {
                    window.location.href = 'dashboard.html';
                }
            });
        }
    });
}

// Redirect if already logged in (for login/register pages)
function redirectIfLoggedIn() {
    auth.onAuthStateChanged(user => {
        if (user) {
            redirectBasedOnRole(user);
        }
    });
}

// Logout function
function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    });
}