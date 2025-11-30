<?php
session_start();
if (!isset($_SESSION["logged_in"])) {
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Future | ACCESS GRANTED</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: VT323 -->
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --term-red: #ff003c;
            --term-blue: #00f0ff;
            --term-green: #39ff14;
            --bg-color: #050005;
        }

        body {
            background-color: var(--bg-color);
            color: #fff;
            font-family: 'VT323', monospace;
            overflow: hidden;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Matrix Background */
        #matrix-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.15;
        }

        /* Scanlines */
        .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(255,255,255,0),
                rgba(255,255,255,0) 50%,
                rgba(0,0,0,0.2) 50%,
                rgba(0,0,0,0.2)
            );
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 999;
        }

        /* Main Container */
        .success-card {
            position: relative;
            z-index: 10;
            background: rgba(10, 5, 20, 0.9);
            border: 2px solid var(--term-blue);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.2), inset 0 0 20px rgba(0,0,0,0.8);
            padding: 3rem;
            max-width: 600px;
            width: 90%;
            text-align: center;
            border-radius: 4px;
            /* Corner accents */
            clip-path: polygon(
                0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%
            );
        }

        .success-card::before {
            content: '';
            position: absolute;
            top: -2px; left: -2px; right: -2px; bottom: -2px;
            z-index: -1;
            background: linear-gradient(45deg, var(--term-red), var(--term-blue));
            opacity: 0.3;
        }

        h1 {
            font-size: 3.5rem;
            line-height: 1;
            margin-bottom: 1rem;
            text-transform: uppercase;
            color: var(--term-blue);
            text-shadow: 2px 2px 0px var(--term-red);
            animation: glitch 2s infinite;
        }

        p {
            font-size: 1.5rem;
            color: #ccc;
            margin-bottom: 2rem;
            letter-spacing: 1px;
        }

        /* The Flag Box */
        .flag-container {
            background: rgba(0, 0, 0, 0.8);
            border: 1px dashed var(--term-red);
            padding: 1.5rem;
            margin: 2rem 0;
            position: relative;
        }

        .flag-label {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-color);
            padding: 0 10px;
            color: var(--term-red);
            font-size: 1rem;
            border: 1px solid var(--term-red);
        }

        pre {
            font-size: 2rem;
            color: var(--term-green);
            margin: 0;
            text-shadow: 0 0 10px var(--term-green);
            white-space: pre-wrap;
            word-break: break-all;
        }

        /* Glitch Keyframes */
        @keyframes glitch {
            0% { text-shadow: 2px 2px 0px var(--term-red); }
            50% { text-shadow: -2px -2px 0px var(--term-red); }
            52% { text-shadow: -10px 0px 0px var(--term-red); }
            54% { text-shadow: 2px 2px 0px var(--term-red); }
            100% { text-shadow: 2px 2px 0px var(--term-red); }
        }

        /* Button styling */
        .action-btn {
            background: transparent;
            color: var(--term-blue);
            border: 1px solid var(--term-blue);
            padding: 10px 30px;
            font-family: 'VT323';
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            margin-top: 1rem;
        }

        .action-btn:hover {
            background: var(--term-blue);
            color: #000;
            box-shadow: 0 0 20px var(--term-blue);
        }

    </style>
</head>
<body>

    <div class="scanlines"></div>
    <canvas id="matrix-bg"></canvas>

    <main class="success-card">
        <h1>Your Future Awaits</h1>
        <p>Congratulations. You have broken through the veil.</p>
        
        <div class="flag-container">
            <span class="flag-label">SECURE_DATA_PACKET</span>
            <!-- The ID allows us to target this for the decrypt animation -->
            <pre id="flag-text">ENCRYPTED...</pre>
        </div>

        <button class="action-btn" onclick="copyFlag()">Copy to Clipboard</button>
    </main>

    <script>
        // 1. Matrix Background (Reused for consistency)
        const canvas = document.getElementById('matrix-bg');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const chars = '01XY!@#FUTURES';
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = [];

        for(let x = 0; x < columns; x++) { drops[x] = 1; }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(5, 0, 5, 0.1)'; // Slower fade for trail
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = fontSize + 'px monospace';

            for(let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                // Randomly Red or Blue
                ctx.fillStyle = Math.random() > 0.5 ? '#ff003c' : '#00f0ff';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 50);

        // 2. Decrypt Effect for the Flag
        const finalFlag = "flag{BRIGHT_FUTURE_2026}";
        const flagElement = document.getElementById('flag-text');
        const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        let iteration = 0;

        // Wait a moment before starting decryption
        setTimeout(() => {
            const interval = setInterval(() => {
                flagElement.innerText = finalFlag
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return finalFlag[index];
                        }
                        return possibleChars[Math.floor(Math.random() * possibleChars.length)];
                    })
                    .join("");
                
                if(iteration >= finalFlag.length){ 
                    clearInterval(interval);
                    flagElement.style.color = "#39ff14"; // Turn green on success
                }
                
                iteration += 1/3; // Speed of decryption
            }, 30);
        }, 500);

        // 3. Copy Function
        function copyFlag() {
            const tempInput = document.createElement("input");
            tempInput.value = finalFlag;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy"); // Fallback for iframe environments
            document.body.removeChild(tempInput);
            
            const btn = document.querySelector('.action-btn');
            const originalText = btn.innerText;
            btn.innerText = "COPIED!";
            btn.style.background = "#39ff14";
            btn.style.borderColor = "#39ff14";
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = "transparent";
                btn.style.borderColor = "#00f0ff";
            }, 2000);
        }
    </script>
</body>
</html>
