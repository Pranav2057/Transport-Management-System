document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (role === 'owner') {
        window.location.href = 'owner_dashboard.html';
    } else if (role === 'co-owner') {
        window.location.href = 'coowner_dashboard.html';
    } else {
        alert('Invalid role selected.');
    }
});
