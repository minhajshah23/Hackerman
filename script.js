const terminal = document.getElementById("terminal");
const button = document.getElementById("startBtn");

function printMessage(message) {
    const line = document.createElement("div");
    line.innerText = message;
    terminal.appendChild(line);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startHack() {
    printMessage("Initializing hack program...");
    await delay(2000);

    printMessage("Hacking username...");
    await delay(2000);

    printMessage("Username found: zuhaib583@gmail.com");
    await delay(2000);

    printMessage("Connecting to Gmail...");
    await delay(2000);

    printMessage("Access Granted.");
}

button.addEventListener("click", () => {
    terminal.innerHTML = "";
    startHack();
});