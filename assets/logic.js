// --- 1. Matrix Rain (Red & Blue Mix) ---
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = '01XY!@#SYSTEM_FAILURE';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    // Fade out
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Randomly switch between Red and Blue for the characters
        if (Math.random() > 0.5) {
            ctx.fillStyle = '#ff003c'; // Red
        } else {
            ctx.fillStyle = '#00f0ff'; // Blue
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 40);

// --- 2. Typewriter Effect ---
const textToType = "SYSTEM ALERT: Security Breach Detected.\nFirewall Integrity: 12%.\nManual override required to stabilize timeline.\nSeek the hidden fragments to restore the key.";
const outputDiv = document.getElementById('terminal-output');
const contentElements = document.querySelectorAll('.type-content');
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        const char = textToType.charAt(i);
        if (char === '\n') {
            outputDiv.innerHTML += '<br>';
        } else {
            outputDiv.innerHTML += char;
        }
        i++;
        setTimeout(typeWriter, 20);
    } else {
        // Show form and buttons
        contentElements.forEach(el => {
            el.style.display = 'block';
            el.style.opacity = 0;
            let op = 0;
            const fadeInt = setInterval(() => {
                if (op >= 1) clearInterval(fadeInt);
                el.style.opacity = op;
                op += 0.1;
            }, 50);
        });
    }
}

setTimeout(typeWriter, 500);

// --- 3. Weird Glitch Alerts & Password Fragments ---

function triggerGlitch(id) {
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('alert-msg');

    // The password is: !W@n+F1@9
    // Part 1: !W
    // Part 2: @n+
    // Part 3: F1@9

    let message = "";
    let logMsg = "";


    if (id === 1) {
        message = `ERR_ADDR_0x00A: SEGMENT_VIOLATION <br><br> DATA: [ !W ]`;
        logMsg = `System Dump 0x01: Start sequence fragment found: '!W'`;
    } else if (id === 2) {
        message = `BUFFER_OVERFLOW @ NET_PROTOCOL <br><br> ERROR: [ @+ ]`;
        logMsg = `Network Packet Intercepted: Fragment anidentified.`;
    } else if (id === 3) {
        message = `KERNEL_PANIC: HASH_MISMATCH <br><br> END_BLOCK: [ n9F ]`;
        logMsg = `Critical Kernel Failure. Memory fragment 'n9F' extracted.`;
    } else if (id === 4) {
        message = `UNAUTHORIZED_ACCESS DETECTED <br><br> CREDENTIALS LEAKED Found Leak 0X]`;
        logMsg = `Security Alert: Leak contains fragment '@'.`;
    } else if (id === 5) {
        message = `DATA_CORRUPTION WARNING <br><br> FRAGMENT LOST: [ 1 ]`;
        logMsg = `Data Integrity Check Failed. Lost fragment identifier: '1'.`;
    }

    // Show Custom Alert
    alertMsg.innerHTML = message;
    alertBox.style.display = 'block';

    // Log to console (Weird messages)
    console.warn(`%c ⚠ SYSTEM BREACH DETECTED ⚠ `, 'background: red; color: white; font-size: 20px');
    console.log(`%c ${logMsg} `, 'color: #00f0ff; background: #000; border: 1px solid #00f0ff; padding: 5px;');
}

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}

// --- 4. Login Logic ---
function handleLogin(e) {
    if (e && e.preventDefault) e.preventDefault();

    const input = document.getElementById('password');
    const status = document.getElementById('status');
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('alert-msg');

    const userPass = input ? input.value.trim() : '';

    // If the input is empty, show a warning alert and do nothing
    if (!userPass) {
        alertMsg.innerHTML = '<strong>WARNING</strong><br>Please enter a password.';
        alertBox.style.display = 'block';
        if (status) {
            status.textContent = '';
            status.className = 'status-message';
        }
        return;
    }

    if (status) {
        status.textContent = 'VERIFYING CHECKSUM...';
        status.className = 'status-message text-blue-400';
    }

    // Send password to server (login.php expects JSON body)
    fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: userPass })
    })
    .then(resp => resp.json())
    .then(data => {
        if (data && data.status === 'ok') {
            window.location.href = 'secret.php';
        } else if (data && data.status === 'error') {
            if (status) {
                status.textContent = data.message || 'Error';
                status.className = 'status-message access-denied';
            }
        } else {
            if (status) {
                status.textContent = 'Incorrect Password!';
                status.className = 'status-message access-denied';
            }
        }
    })
    .catch(err => {
        console.error('Login request failed', err);
        if (status) {
            status.textContent = 'Network Error';
            status.className = 'status-message access-denied';
        }
    });
}