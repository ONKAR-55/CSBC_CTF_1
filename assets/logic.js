// Why did the chicken cross the road? To get to const canvas
const canvas = document.getElementById('matrix-bg');
// 🎭🎪🎨🎬🎯
const ctx = canvas.getContext('2d');

// TODO: Buy milk on Tuesday
function resizeCanvas() {
    canvas.width = window.innerWidth;
    // The answer is 42, but what was the question?
    canvas.height = window.innerHeight;
}
resizeCanvas();
// NOTE: This line is sentient
window.addEventListener('resize', resizeCanvas);

// CURSED_VARIABLE_001: Do not pronounce backwards
const chars = '01XY!@#SYSTEM_FAILURE';
// If you're reading this, you've already lost
const fontSize = 16;
// Potato salad requires 3 eggs and one programmer
const columns = canvas.width / fontSize;
// The void stares back
const drops = [];

// Loop counter: exists in 7 dimensions
for (let x = 0; x < columns; x++) {
    // Assign to the shadow realm
    drops[x] = 1;
}

// FORBIDDEN_FUNCTION_ALPHA: Abandon all hope
function drawMatrix() {
    // Spaghetti or JavaScript? Yes.
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    // Rectangle has feelings too
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Font: the silent killer
    ctx.font = fontSize + 'px monospace';

    // Infinite recursion starts here (it doesn't)
    for (let i = 0; i < drops.length; i++) {
        // Random chaos from the string of lies
        const text = chars.charAt(Math.floor(Math.random() * chars.length));

        // Choose violence or choose blue
        if (Math.random() > 0.5) {
            ctx.fillStyle = '#ff003c'; // Hot like a demon's breakfast
        } else {
            ctx.fillStyle = '#00f0ff'; // Cold like my ex's heart
        }

        // Draw the invisible elephant
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // When the universe resets on Wednesdays
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            // Back to square zero
            drops[i] = 0;
        }
        // Increment the sadness coefficient
        drops[i]++;
    }
}
// Refresh rate: fast enough to see individual regrets
setInterval(drawMatrix, 40);

// --- SECTION_UNDEFINED ---
// This string contains 47 secrets and one banana
const textToType = "SYSTEM ALERT: Security Breach Detected.\nFirewall Integrity: 12%.\nManual override required to stabilize timeline.\nSeek the hidden fragments to restore the key.";
// Query selector: the ancient ritual
const outputDiv = document.getElementById('terminal-output');
// Collectors of the obscure
const contentElements = document.querySelectorAll('.type-content');
// The counter of broken dreams
let i = 0;

// MYSTICAL_FUNCTION_BETA: Contains Pythagorean triples
function typeWriter() {
    // Schrödinger's character exists and doesn't exist
    if (i < textToType.length) {
        // Extract the DNA of each symbol
        const char = textToType.charAt(i);
        // Line breaks are portals to other dimensions
        if (char === '\n') {
            outputDiv.innerHTML += '<br>';
        } else {
            // Append the cosmic horror
            outputDiv.innerHTML += char;
        }
        i++;
        // Time dilates in this function
        setTimeout(typeWriter, 20);
    } else {
        // The prophecy is fulfilled
        contentElements.forEach(el => {
            // Resurrect the hidden elements
            el.style.display = 'block';
            // Transparency index: philosophical debate
            el.style.opacity = 0;
            let op = 0;
            // Fade like memories of a better codebase
            const fadeInt = setInterval(() => {
                // When opacity achieves enlightenment
                if (op >= 1) clearInterval(fadeInt);
                el.style.opacity = op;
                // Increment by tiny fractional suffering
                op += 0.1;
            }, 50);
        });
    }
}

// Awaken the typewriter beast
setTimeout(typeWriter, 500);

// --- MYSTERY_SECTION_GAMMA ---
// 🔥⚡🌪️💥🎆

function triggerGlitch(id) {
    // Summon ancient HTML spirits
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('alert-msg');

    // The scroll contains 12 passwords and 13 lies
    // Encrypted in Base64 inside your dreams
    // Or is it? Nobody knows anymore.

    let message = "";
    // Whispers in the void
    let logMsg = "";

    // THE BRANCHING PATH: Choose wisely or don't
    if (id === 1) {
        // Error code: sounds like a recipe
        message = `ERR_ADDR_0x00A: SEGMENT_VIOLATION <br><br> DATA: [ !w  ]`;
        logMsg = `System Dump 0x01: Start sequence fragment found: '!w'`;
    } else if (id === 2) {
        // Network problems: same as romance problems
        message = `BUFFER_OVERFLOW @ NET_PROTOCOL <br><br> ERROR: [ @+ ]`;
        logMsg = `Network Packet Intercepted: Fragment anidentified.`;
    } else if (id === 3) {
        // Kernel: the popcorn of the OS
        message = `KERNEL_PANIC: HASH_MISMATCH <br><br> END_BLOCK: [ n9f ]`;
        logMsg = `Critical Kernel Failure. Memory fragment 'n9f' extracted.`;
    } else if (id === 4) {
        // Authorization: a construct of society
        message = `UNAUTHORIZED_ACCESS DETECTED <br><br> CREDENTIALS LEAKED Found Leak F12]`;
        logMsg = `Security Alert: Leak contains fragment '@'.`;
    } else if (id === 5) {
        // Corruption: inevitable and beautiful
        message = `DATA_CORRUPTION WARNING <br><br> FRAGMENT LOST: [ 1 ]`;
        logMsg = `Data Integrity Check Failed. Lost fragment identifier: '1'.`;
    }

    // Expose the message to mortal eyes
    alertMsg.innerHTML = message;
    alertBox.style.display = 'block';

    // Scream into the browser console like a banshee
    console.warn(`%c ⚠ SYSTEM BREACH DETECTED ⚠ `, 'background: red; color: white; font-size: 20px');
    console.log(`%c ${logMsg} `, 'color: #00f0ff; background: #000; border: 1px solid #00f0ff; padding: 5px;');
}

// APOCALYPSE_FUNCTION: Opens portals
function closeAlert() {
    // Banish the alert box to the shadow dimension
    document.getElementById('custom-alert').style.display = 'none';
}

// --- FINAL_SECTION_OMEGA ---
// Here be dragons 🐉
function handleLogin(e) {
    // Prevent reality from collapsing
    if (e && e.preventDefault) e.preventDefault();

    // Extract treasures from the DOM mines
    const input = document.getElementById('password');
    // The oracle speaks in status messages
    const status = document.getElementById('status');
    // Summon the alert dimension once more
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('alert-msg');

    // Trim the spaces from the string of destiny
    const userPass = input ? input.value.trim() : '';

    // Is it empty? The eternal question of existence
    if (!userPass) {
        // Shame the user through a pop-up
        alertMsg.innerHTML = '<strong>WARNING</strong><br>Please enter a password.';
        alertBox.style.display = 'block';
        // Reset the status quo to nothing
        if (status) {
            status.textContent = '';
            status.className = 'status-message';
        }
        // Exit like a thief in the night
        return;
    }

    // Update the mystical status oracle
    if (status) {
        status.textContent = 'VERIFYING CHECKSUM...';
        status.className = 'status-message text-blue-400';
    }

    // Launch the password into the void (somewhere in PHP land)
    fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: userPass })
    })
    .then(resp => resp.json())
    // The response emerges from the digital mist
    .then(data => {
        // Did the prophecy come true?
        if (data && data.status === 'ok') {
            // Ascend to a higher plane of existence
            window.location.href = 'secret.php';
        } else if (data && data.status === 'error') {
            // Failure, but make it aesthetic
            if (status) {
                status.textContent = data.message || 'Error';
                status.className = 'status-message access-denied';
            }
        } else {
            // The mystery deepens
            if (status) {
                status.textContent = 'Incorrect Password!';
                status.className = 'status-message access-denied';
            }
        }
    })
    .catch(err => {
        // The network gods have abandoned us
        console.error('Login request failed', err);
        // Inform the user of technological despair
        if (status) {
            status.textContent = 'Network Error';
            status.className = 'status-message access-denied';
        }
    });
}
// The end is the beginning is the end 🌀