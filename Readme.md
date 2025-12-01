✅FutureVision: FutureVision: The Hidden Key

A Web Authentication & Symbol-Decoding CTF Challenge

This includes:

    Title
    Description
    Difficulty
    Flag
    Walkthrough (how to solve)
    Technical notes
    Intended learning outcomes


📝Challenge Title:
    FutureVision: The Hidden Key


📌Description:
    FutureVision is a web-based CTF challenge where players must:
        Explore the login interface
        Discover fragmented symbol-encoded password sequences hidden within the website
        Decode the symbol sequence into plain English
        Enter the decoded password into a login form
        Authenticate through a backend PHP API
        Retrieve the final CTF flag stored behind a server-side session
    This challenge combines:
        OSINT-style web recon
        Basic decoding logic
        Understanding of authentication
        Reading client-side hints
        Recognizing server-side verification
        Avoiding misdirection (symbol password ≠ actual password)


🎚️Difficulty: (Low - Easey - Medium - High)
Medium-
    Designed for beginner–intermediate students learning:
        Web decoding
        JavaScript hint analysis
        API-based authentication
        Basic PHP backend logic
        Symbol → plaintext reasoning


🧩Challenge Goal:
    Players must find the symbol string, decode it, and use the plain text as the real password.

        Example symbol string found in fragments:
        !W@n+F1@9

        Students decode this into plain English:
        IWANTFLAG

    This plain English password is what the backend API accepts.


🚩Flag:
    flag{BRIGHT_FUTURE_2026}

    Located in:
    secret.php
    Accessible only after successful authenticated session.


🧠How to Solve:
    Step 1 — Explore Site / Hints
        Students inspect the website and find:
        Hint buttons
        Console messages
        Fragmented symbol sequences
        e.g.:
            !
            W
            @
            n
            +
            F
            1
            @
            9
    When combined in order:
        !W@n+F1@9

    Step 2 — Decode Symbol Mapping
        Hints reveal a mapping like:
            Symbol	Letter
                !	I
                @	A
                +	T
                1	L
                9	G
                W	W
                F	F
                n	N
            Applying the mapping to the symbol string: 
                        !  → I  
                        W  → W  
                        @  → A  
                        n  → N  
                        +  → T  
                        F  → F  
                        1  → L  
                        @  → A  
                        9  → G 
            Final decoded password:
                IWANTFLAG


    Step 3 — Enter Plain Password into Login Form
        User submits:
            IWANTFLAG
        JS sends this password to PHP API:
            POST /auth.php
                {
                    "password": "IWANTFLAG"
                }

    Step 4 — Backend Verification (PHP)
    login.php checks:
        md5("FUTURE_2025_" . "IWANTFLAG")
            Stored hash in config.php:
                98d75b6537514741b97d052b807a93a7

        If matched:
            PHP sets session: $_SESSION["logged_in"] = true;
            User is redirected to secret.php

    Step 5 — Flag Retrieval
        Authenticated users reach:
        secret.php
            Which reveals:
            flag{future_is_revealed_2025}


⚙️ Backend Technical Info:
    Authentication
        Done via login.php
        Accepts JSON POST payload
        Verifies using md5(salt + password)
            Salt:
                FUTURE_2025_
            Real password (plain):
                IWANTFLAG

    Frontend
        Hints stored in assets/logic.js
        No real password exposed in JS
        Only symbol fragments + mapping clues
        Authentication flow uses fetch() API → login.php

    Deployment
        Containerized using:
            PHP 8.2
            Apache
            Dockerfile
            Render.com


🎓Learning Outcomes

Students understand:

✔ How frontend hints can hide encoded data
✔ How JavaScript interacts with backend APIs
✔ Why client-side passwords are insecure
✔ How to decode symbol patterns into real strings
✔ How PHP handles authentication and sessions
✔ How to inspect network requests to see JSON login flow
✔ How encoding ≠ encryption or hashing