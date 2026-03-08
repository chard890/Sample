const fs = require('fs');

let content = fs.readFileSync('k:/Antigravity Projects/Marketplace/hero.html', 'utf-8');

const cssOldPattern = /\/\* ========== WHY CUSTOMERS LOVE — BENTO GRID ==========\*\/.+?padding: 0 24px;\s+\}\s+\}/s;
const cssOldPattern2 = /\/\* ========== WHY CUSTOMERS LOVE — BENTO GRID ==========\s*\*\/.+?@media \(max-width: 768px\) \{.*?padding: 0 24px;\s*\}\s*\}/s;

const cssNew = `        /* ========== WHY PHIMART — SCROLL INTERACTIVE ========== */
        .why-premium {
            position: relative;
            z-index: 1;
            width: 100%;
            background: #FFFFFF;
        }
        
        .why-premium-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 40px;
            display: flex;
            align-items: flex-start;
            gap: 80px;
        }

        .why-text-col {
            flex: 1;
            padding: 30vh 0; /* Creates scrollable space */
        }

        .why-step {
            margin-bottom: 30vh;
            opacity: 0.25;
            transform: translateX(-20px);
            transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            padding-left: 40px;
            border-left: 2px solid #F1F3F4;
        }

        .why-step:last-child {
            margin-bottom: 0;
        }

        .why-step.active {
            opacity: 1;
            transform: translateX(0);
            border-left-color: var(--primary-color);
        }

        .step-icon-wrap {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: #F8F9FA;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 24px;
            color: var(--primary-color);
            border: 1px solid #E8EAED;
            box-shadow: 0 8px 16px rgba(0,0,0,0.03);
            transition: background 0.4s ease, border-color 0.4s ease;
        }

        .why-step.active .step-icon-wrap {
            background: #E8F0FE;
            border-color: #D2E3FC;
        }

        .step-icon-wrap .material-symbols-outlined {
            font-size: 28px;
        }

        .why-step h3 {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-main);
            margin: 0 0 16px;
            line-height: 1.25;
        }

        .why-step p {
            font-size: 1.125rem;
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 0;
            max-width: 440px;
        }

        .why-visual-col {
            flex: 1.2;
            position: sticky;
            top: 20vh;  /* Sticky position relative to viewport */
            height: 60vh;
            min-height: 500px;
            max-height: 700px;
        }

        .why-visual-board {
            width: 100%;
            height: 100%;
            background: #F8F9FA;
            border: 1px solid #E8EAED;
            border-radius: 32px;
            box-shadow: 0 24px 80px rgba(0,0,0,0.04), inset 0 2px 4px rgba(255,255,255,0.5);
            position: relative;
            overflow: hidden;
        }

        /* Abstract blurred accent behind the board elements */
        .why-visual-board::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: radial-gradient(circle, rgba(66,133,244,0.1) 0%, rgba(248,249,250,0) 70%);
            z-index: 0;
            pointer-events: none;
        }

        .viz-layer {
            position: absolute;
            inset: 0;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.6s;
            transform: scale(0.96) translateY(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
        }

        .viz-layer.active {
            opacity: 1;
            visibility: visible;
            transform: scale(1) translateY(0);
            z-index: 2;
        }

        /* --- VISUAL 1: Post once (connecting nodes) --- */
        .viz-1-content {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .viz-1-center {
            position: absolute;
            top: 50%;
            left: 25%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: #FFFFFF;
            border-radius: 20px;
            box-shadow: 0 12px 32px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--primary-color);
            z-index: 2;
        }
        .viz-1-center .material-symbols-outlined { color: var(--primary-color); font-size: 36px; }
        
        .viz-1-target {
            position: absolute;
            width: 220px;
            background: #FFFFFF;
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.05);
            border: 1px solid #E8EAED;
            left: 55%;
            z-index: 2;
        }
        .viz-1-target.t1 { top: 20%; }
        .viz-1-target.t2 { top: 45%; }
        .viz-1-target.t3 { top: 70%; }

        .viz-target-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
        }
        .viz-target-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #F1F3F4;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .viz-target-avatar .material-symbols-outlined { font-size: 16px; color: #5F6368; }
        .viz-target-bars div { height: 6px; border-radius: 4px; background: #E8EAED; margin-bottom: 4px; }
        .viz-target-bars div:first-child { width: 80px; background: #BDC1C6; }
        .viz-target-bars div:last-child { width: 40px; }
        
        /* Animated SVG Lines */
        .viz-1-lines {
            position: absolute;
            inset: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
        }
        .viz-1-line path {
            stroke: #D2E3FC;
            stroke-width: 3;
            fill: none;
            stroke-dasharray: 10 10;
            animation: dash-flow 2s linear infinite;
        }
        @keyframes dash-flow {
            to { stroke-dashoffset: -20; }
        }

        /* --- VISUAL 2: Save hours (Clock to Check) --- */
        .viz-2-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .viz-2-circle {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: #E8F0FE;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 32px;
        }
        .viz-2-icon {
            font-size: 64px;
            color: var(--primary-color);
            position: absolute;
        }
        .viz-2-icon.clock {
            animation: rotate-clock 4s linear infinite;
        }
        @keyframes rotate-clock {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .viz-2-bars {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 250px;
        }
        .viz-2-bar {
            height: 16px;
            border-radius: 8px;
            background: #E8EAED;
            width: 100%;
            animation: pulse-bar 2s ease-in-out infinite alternate;
        }
        .viz-2-bar:nth-child(2) { width: 80%; animation-delay: 0.2s; }
        .viz-2-bar:nth-child(3) { width: 60%; animation-delay: 0.4s; }
        @keyframes pulse-bar {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* --- VISUAL 3: Compare before (Stack of cards) --- */
        .viz-3-content {
            position: relative;
            width: 280px;
            height: 360px;
        }
        .viz-3-card {
            position: absolute;
            width: 100%;
            height: 140px;
            background: #FFFFFF;
            border-radius: 20px;
            border: 1px solid #E8EAED;
            box-shadow: 0 12px 32px rgba(0,0,0,0.06);
            padding: 24px;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .viz-layer.active .viz-3-card:nth-child(1) { transform: translateY(0); z-index: 3;}
        .viz-layer.active .viz-3-card:nth-child(2) { transform: translateY(110px) scale(0.95); z-index: 2; }
        .viz-layer.active .viz-3-card:nth-child(3) { transform: translateY(220px) scale(0.9); z-index: 1; }
        
        .viz-layer:not(.active) .viz-3-card {
            transform: translateY(110px) scale(0.9) !important;
        }
        
        .viz-3-header { display: flex; justify-content: space-between; margin-bottom: 20px;}
        .viz-3-circle { width: 40px; height: 40px; border-radius: 50%; background: #F1F3F4; }
        .viz-3-price { font-size: 20px; font-weight: 700; color: var(--primary-color);}
        .viz-3-line { height: 8px; border-radius: 4px; background: #E8EAED; width: 60%; margin-bottom: 8px;}

        /* --- VISUAL 4: AI Matching (Glowing orb) --- */
        .viz-4-content {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
        .ai-core {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-color), #8AB4F8);
            box-shadow: 0 0 40px rgba(66, 133, 244, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 3;
            animation: pulse-core 3s infinite alternate;
        }
        .ai-core .material-symbols-outlined {
            color: #FFF;
            font-size: 48px;
        }
        @keyframes pulse-core {
            0% { transform: scale(1); box-shadow: 0 0 30px rgba(66, 133, 244, 0.3); }
            100% { transform: scale(1.1); box-shadow: 0 0 60px rgba(66, 133, 244, 0.6); }
        }
        .ai-ring {
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(66, 133, 244, 0.2);
            animation: pulse-ring 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .ai-ring-1 { width: 200px; height: 200px; }
        .ai-ring-2 { width: 340px; height: 340px; animation-delay: 1s; }
        .ai-ring-3 { width: 480px; height: 480px; animation-delay: 2s; }
        @keyframes pulse-ring {
            0% { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(1.2); opacity: 0; }
        }
        
        .ai-float {
            position: absolute;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #FFFFFF;
            box-shadow: 0 8px 24px rgba(0,0,0,0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #5F6368;
            z-index: 4;
            animation: float-icon 6s ease-in-out infinite alternate;
        }
        .ai-float:nth-child(4) { top: 20%; left: 20%; animation-delay: 0s; }
        .ai-float:nth-child(5) { bottom: 20%; left: 25%; animation-delay: 1s; }
        .ai-float:nth-child(6) { top: 30%; right: 20%; animation-delay: 2s; }
        .ai-float:nth-child(7) { bottom: 25%; right: 25%; animation-delay: 3s; }
        
        @keyframes float-icon {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
        }

        @media (max-width: 992px) {
            .why-premium-inner {
                flex-direction: column;
                padding: 80px 32px;
                gap: 40px;
            }
            .why-text-col { padding: 0; display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 24px; padding-bottom: 24px; min-width: 100%;}
            .why-step {
                min-width: 85vw;
                min-height: auto;
                margin-bottom: 0;
                scroll-snap-align: center;
                opacity: 1;
                transform: none;
                padding: 24px;
                border-left: none;
                border-top: 4px solid #E8EAED;
                background: #F8F9FA;
                border-radius: 20px;
            }
            .why-step.active { border-top-color: var(--primary-color); }
            .why-visual-col {
                position: relative;
                top: 0;
                width: 100%;
                height: 450px;
                flex: none;
            }
        }`;

content = content.replace(cssOldPattern2, cssNew);

const htmlOldPattern = /<!-- WHY CUSTOMERS LOVE PHIMART -->\s*<section class="why-love">.*?<\/section>/s;
const htmlNew = `<!-- WHY PHIMART — SCROLL INTERACTIVE SECTION -->
    <section class="why-premium">
        <div class="why-premium-inner">
            <!-- Left: Scrolling Text -->
            <div class="why-text-col">
                <div class="section-badge" style="margin-bottom: 32px;">
                    <span class="material-symbols-outlined" style="font-size: 16px;">verified</span>
                    The PhiMart Advantage
                </div>

                <div class="why-step step-0 active">
                    <div class="step-icon-wrap">
                        <span class="material-symbols-outlined">campaign</span>
                    </div>
                    <h3>Post once. Get multiple offers.</h3>
                    <p>Instead of searching and messaging many businesses, post your request once and let businesses come to you with their best offers.</p>
                </div>

                <div class="why-step step-1">
                    <div class="step-icon-wrap">
                        <span class="material-symbols-outlined">schedule</span>
                    </div>
                    <h3>Save hours of searching.</h3>
                    <p>No more browsing dozens of pages. PhiMart instantly connects you with businesses ready to help.</p>
                </div>

                <div class="why-step step-2">
                    <div class="step-icon-wrap">
                        <span class="material-symbols-outlined">compare_arrows</span>
                    </div>
                    <h3>Compare before choosing.</h3>
                    <p>View multiple offers, compare prices, and pick the best option for your needs.</p>
                </div>

                <div class="why-step step-3">
                    <div class="step-icon-wrap">
                        <span class="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <h3>Powered by smart AI.</h3>
                    <p>Our AI understands your request and matches you with the most relevant businesses near you — automatically and instantly.</p>
                </div>
            </div>

            <!-- Right: Sticky Visuals -->
            <div class="why-visual-col">
                <div class="why-visual-board">
                    <!-- Viz 0: Post once -->
                    <div class="viz-layer viz-0 active">
                        <div class="viz-1-content">
                            <svg class="viz-1-lines" viewBox="0 0 500 600" preserveAspectRatio="none">
                                <path class="viz-1-line" d="M 125 300 C 200 300, 200 120, 275 120" />
                                <path class="viz-1-line" d="M 125 300 L 275 270" style="animation-delay: 0.5s;" />
                                <path class="viz-1-line" d="M 125 300 C 200 300, 200 420, 275 420" style="animation-delay: 1s;" />
                            </svg>
                            <div class="viz-1-center">
                                <span class="material-symbols-outlined">person</span>
                            </div>
                            <div class="viz-1-target t1">
                                <div class="viz-target-header">
                                    <div class="viz-target-avatar"><span class="material-symbols-outlined">storefront</span></div>
                                    <div class="viz-target-bars"><div></div><div></div></div>
                                </div>
                            </div>
                            <div class="viz-1-target t2">
                                <div class="viz-target-header">
                                    <div class="viz-target-avatar"><span class="material-symbols-outlined">handyman</span></div>
                                    <div class="viz-target-bars"><div></div><div></div></div>
                                </div>
                            </div>
                            <div class="viz-1-target t3">
                                <div class="viz-target-header">
                                    <div class="viz-target-avatar"><span class="material-symbols-outlined">restaurant</span></div>
                                    <div class="viz-target-bars"><div></div><div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Viz 1: Save hours -->
                    <div class="viz-layer viz-1">
                        <div class="viz-2-content">
                            <div class="viz-2-circle">
                                <span class="material-symbols-outlined viz-2-icon clock">schedule</span>
                            </div>
                            <div class="viz-2-bars">
                                <div class="viz-2-bar"></div>
                                <div class="viz-2-bar"></div>
                                <div class="viz-2-bar"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Viz 2: Compare -->
                    <div class="viz-layer viz-2">
                        <div class="viz-3-content">
                            <div class="viz-3-card">
                                <div class="viz-3-header">
                                    <div class="viz-3-circle"></div>
                                    <div class="viz-3-price">₱1,200</div>
                                </div>
                                <div class="viz-3-line"></div>
                                <div class="viz-3-line" style="width: 40%;"></div>
                            </div>
                            <div class="viz-3-card">
                                <div class="viz-3-header">
                                    <div class="viz-3-circle"></div>
                                    <div class="viz-3-price">₱1,500</div>
                                </div>
                                <div class="viz-3-line"></div>
                                <div class="viz-3-line" style="width: 40%;"></div>
                            </div>
                            <div class="viz-3-card">
                                <div class="viz-3-header">
                                    <div class="viz-3-circle"></div>
                                    <div class="viz-3-price">₱1,450</div>
                                </div>
                                <div class="viz-3-line"></div>
                                <div class="viz-3-line" style="width: 40%;"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Viz 3: Smart AI -->
                    <div class="viz-layer viz-3">
                        <div class="viz-4-content">
                            <div class="ai-ring ai-ring-1"></div>
                            <div class="ai-ring ai-ring-2"></div>
                            <div class="ai-ring ai-ring-3"></div>
                            
                            <div class="ai-float"><span class="material-symbols-outlined">camera_alt</span></div>
                            <div class="ai-float"><span class="material-symbols-outlined">ac_unit</span></div>
                            <div class="ai-float"><span class="material-symbols-outlined">cleaning_services</span></div>
                            <div class="ai-float"><span class="material-symbols-outlined">plumbing</span></div>

                            <div class="ai-core">
                                <span class="material-symbols-outlined">auto_awesome</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

content = content.replace(htmlOldPattern, htmlNew);

const jsLogic = `
    <script>
        // Sticky Scroll Intersection Logic for Why Customers Love section
        const whySteps = document.querySelectorAll('.why-step');
        const vizLayers = document.querySelectorAll('.viz-layer');

        if(whySteps.length > 0) {
            const stepObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        whySteps.forEach(step => step.classList.remove('active'));
                        vizLayers.forEach(viz => viz.classList.remove('active'));
                        
                        entry.target.classList.add('active');
                        
                        let i = 0;
                        whySteps.forEach((step, index) => {
                            if (step === entry.target) i = index;
                        });
                        
                        if(vizLayers[i]) {
                            vizLayers[i].classList.add('active');
                        }
                    }
                });
            }, { 
                rootMargin: '-30% 0px -50% 0px' 
            });

            whySteps.forEach(step => stepObserver.observe(step));
        }
    </script>
</body>`;

if (!content.includes('// Sticky Scroll')) {
    content = content.replace('</body>', jsLogic);
}

fs.writeFileSync('k:/Antigravity Projects/Marketplace/index.html', content, 'utf-8');
console.log('Update successful');
