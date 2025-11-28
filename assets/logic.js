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

        for(let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function drawMatrix() {
            // Fade out
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + 'px monospace';

            for(let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                
                // Randomly switch between Red and Blue for the characters
                if (Math.random() > 0.5) {
                    ctx.fillStyle = '#ff003c'; // Red
                } else {
                    ctx.fillStyle = '#00f0ff'; // Blue
                }

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
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
                message = "ERR_ADDR_0x00A: SEGMENT_VIOLATION <br><br> DATA: [ !W ]";
                logMsg = "System Dump 0x01: Start sequence identified as '!W'";
            } else if (id === 2) {
                message = "BUFFER_OVERFLOW @ NET_PROTOCOL <br><br> PAYLOAD: [ @n+ ]";
                logMsg = "Network Packet Intercepted: Middle payload '@n+' found in stream.";
            } else if (id === 3) {
                message = "KERNEL_PANIC: HASH_MISMATCH <br><br> END_BLOCK: [ F1@9 ]";
                logMsg = "Critical Kernel Failure. Final memory block dump: 'F1@9'";
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
            e.preventDefault();
            const input = document.getElementById('password');
            const status = document.getElementById('status');
            const userPass = input.value;
            
            status.innerHTML = "VERIFYING CHECKSUM...";
            status.className = "status-message text-blue-400";

            setTimeout(() => {
                // New Password check
                if (userPass === '!W@n+F1@9') {
                    status.innerHTML = "ACCESS GRANTED. TIMELINE RESTORED.";
                    status.className = "status-message access-granted";
                    input.disabled = true;
                    
                    document.body.innerHTML = `
                        <div style="text-align:center; font-family:'VT323'; color:#00f0ff; font-size: 2rem; border: 2px solid #00f0ff; padding: 40px; background: rgba(0,0,50,0.9);">
                            <h1 style="color:#fff; text-shadow:0 0 20px #00f0ff">WELCOME TO THE FUTURE</h1>
                            <p style="color:#ff003c">YOU ARE THE OPERATOR</p>
                            <div style="font-size:1rem; color:#aaa; margin-top:20px;">Flag Captured: {F1AG_R3D_BLU3_T3AM}</div>
                            <button onclick="location.reload()" style="background:#ff003c; color:black; border:none; padding:10px 20px; cursor:pointer; font-family:'VT323'; font-size:1.5rem; margin-top:20px;">REBOOT</button>
                        </div>
                    `;

                } else {
                    status.innerHTML = "ACCESS DENIED. INCORRECT KEY.";
                    status.className = "status-message access-denied";
                    input.value = '';
                    input.focus();
                }
            }, 1000);
        }