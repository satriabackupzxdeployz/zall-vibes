function checkPassword() {
    const passInput = document.getElementById("passwordInput").value;
    const loginScreen = document.getElementById("login-screen");
    const mainContent = document.getElementById("main-content");

    if (passInput === "cilakirana") {
        loginScreen.style.opacity = "0";
        loginScreen.style.transform = "scale(1.1)";
        setTimeout(() => {
            loginScreen.style.display = "none";
            mainContent.classList.remove("hidden");
            mainContent.style.animation = "fadeInUp 0.8s ease forwards";
        }, 500);
    } else {
        const box = document.querySelector(".login-box");
        box.style.animation = "shake 0.3s";
        document.getElementById("error-msg").style.display = "block";
        setTimeout(() => box.style.animation = "", 300);
    }
}

function kirimKeIG() {
    const from = document.getElementById("fromInput").value;
    const msg = document.getElementById("msgInput").value;
    const display = document.getElementById("messageDisplay");
    const igUsername = "ur.izall.exe_";

    if (!from || !msg) {
        alert("Isi nama dan pesannya dulu ya sob! 😊");
        return;
    }

    const card = document.createElement("div");
    card.className = "glass-card msg-card";
    card.innerHTML = `
        <small style="color:#00d2ff">Dari: ${from}</small>
        <p style="margin-top:10px; font-style:italic">"${msg}"</p>
    `;
    display.prepend(card);

    alert("Pesan tercatat! Klik OK untuk lanjut DM ke @ur.izall.exe_");
    window.open(`https://www.instagram.com/${igUsername}/`, '_blank');

    document.getElementById("fromInput").value = "";
    document.getElementById("msgInput").value = "";
}

document.getElementById("passwordInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkPassword();
});
