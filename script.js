// ==========================================================================
// COTTONKNITPOD - Interactive Sock Architect, Harmonizer & Theme Engine
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Bar
    const progressBar = document.getElementById('readingProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const currentProgress = (window.pageYOffset / totalScroll) * 100;
                progressBar.style.width = currentProgress + '%';
            }
        });
    }

    // 2. Theme Toggle (Loom Daylight vs Indigo Heather Noir)
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('ckp_theme') || 'light';
    
    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌓';
        }
        localStorage.setItem('ckp_theme', theme);
    }
    
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme') || 'light';
            const nextTheme = current === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        });
    }

    // 3. Mobile Navigation Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // 4. Interactive Sock Architect (Pod Knitter)
    const cutButtons = document.querySelectorAll('#cutOptions .selector-btn');
    const paletteButtons = document.querySelectorAll('#paletteOptions .swatch-btn');
    const gaugeButtons = document.querySelectorAll('#gaugeOptions .selector-btn');
    const cushionButtons = document.querySelectorAll('#cushionOptions .selector-btn');

    const sockCuff = document.getElementById('sockCuff');
    const sockLeg = document.getElementById('sockLeg');
    const sockFoot = document.getElementById('sockFoot');
    const sockHeel = document.getElementById('sockHeel');
    const sockToe = document.getElementById('sockToe');
    const architectSockName = document.getElementById('architectSockName');
    const architectSockSpec = document.getElementById('architectSockSpec');
    const needleCountBadge = document.getElementById('needleCountBadge');

    let sockState = {
        name: 'The Essential Crew Pod',
        cut: 'crew',
        color: '#1e3a5f',
        accentColor: '#c86d51',
        paletteName: 'Indigo Slate & Copper',
        gauge: '168-Needle Fine Rib',
        needles: '168 Needles',
        cushion: 'Targeted Terry Cushion'
    };

    function updateSockArchitectUI() {
        if (!sockLeg) return;

        // Update Cut Heights
        if (sockState.cut === 'crew') {
            sockLeg.style.height = '110px';
            sockCuff.style.display = 'block';
        } else if (sockState.cut === 'ankle') {
            sockLeg.style.height = '30px';
            sockCuff.style.display = 'block';
        } else if (sockState.cut === 'quarter') {
            sockLeg.style.height = '60px';
            sockCuff.style.display = 'block';
        } else if (sockState.cut === 'knee') {
            sockLeg.style.height = '180px';
            sockCuff.style.display = 'block';
        }

        // Update Colors
        sockLeg.style.backgroundColor = sockState.color;
        sockFoot.style.backgroundColor = sockState.color;
        sockCuff.style.backgroundColor = sockState.color;
        sockHeel.style.backgroundColor = sockState.accentColor;
        sockToe.style.backgroundColor = sockState.accentColor;

        // Update Live Texts
        if (architectSockName) architectSockName.textContent = sockState.name;
        if (architectSockSpec) {
            architectSockSpec.textContent = `${sockState.paletteName} • ${sockState.gauge} • ${sockState.cushion}`;
        }
        if (needleCountBadge) needleCountBadge.textContent = sockState.needles;
    }

    cutButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            cutButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sockState.cut = btn.getAttribute('data-cut');
            sockState.name = btn.getAttribute('data-name');
            updateSockArchitectUI();
        });
    });

    paletteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            paletteButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sockState.color = btn.getAttribute('data-color');
            sockState.accentColor = btn.getAttribute('data-accent');
            sockState.paletteName = btn.getAttribute('data-palette');
            updateSockArchitectUI();
        });
    });

    gaugeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            gaugeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sockState.gauge = btn.getAttribute('data-gauge');
            sockState.needles = btn.getAttribute('data-needles');
            updateSockArchitectUI();
        });
    });

    cushionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            cushionButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            sockState.cushion = btn.getAttribute('data-cushion');
            updateSockArchitectUI();
        });
    });

    // 5. Seasonal Sock Capsule Harmonizer
    const seasonTabs = document.querySelectorAll('.season-tab');
    const harmonizerImg = document.getElementById('harmonizerImg');
    const harmonizerTag = document.getElementById('harmonizerTag');
    const harmonizerTitle = document.getElementById('harmonizerTitle');
    const harmonizerDesc = document.getElementById('harmonizerDesc');
    const harmonizerCut = document.getElementById('harmonizerCut');
    const harmonizerFiber = document.getElementById('harmonizerFiber');
    const harmonizerFootwear = document.getElementById('harmonizerFootwear');

    const seasonData = {
        spring: {
            img: 'images/ribbed-crew-cotton-socks.jpg',
            tag: 'Spring Vernal Capsule • March - May',
            title: 'The Botanical Sage Ribbed Crew',
            desc: 'Engineered for transition seasons. Woven from 100% GOTS certified long-staple organic cotton with low-tension welt bands and seamless hand-linked toe seams.',
            cut: 'Mid-Calf Ribbed Crew (168-Needle Gauge)',
            fiber: '85% Organic Combed Cotton, 13% Recycled Polyamide, 2% Elastane',
            footwear: 'Canvas Sneakers, Suede Loafers, Minimalist Trainers'
        },
        summer: {
            img: 'images/cushioned-running-ankle-socks.jpg',
            tag: 'Summer Solstice Pod • June - August',
            title: 'The Riviera Honeycomb Low-Cut Trainer',
            desc: 'Maximum breathability with open-mesh dorsal vents and anti-slip Achilles silicone-free friction collars. Keeps feet cool and dry through peak summer heat.',
            cut: 'No-Show & Low-Cut Ankle (200-Needle Fine Gauge)',
            fiber: '90% Supima Combed Cotton, 8% Nylon, 2% Lycra',
            footwear: 'Running Shoes, Espadrilles, Low-Top Court Sneakers'
        },
        autumn: {
            img: 'images/merino-wool-cotton-blend-socks.jpg',
            tag: 'Autumn Woodland Capsule • September - November',
            title: 'The Terracotta Merino-Cotton Blend Pod',
            desc: 'Combining the moisture-wicking thermal kinetics of Australian merino wool with the softness of combed organic cotton. Features medium-density terry cushion underfoot.',
            cut: 'Quarter & Classic Crew (144-Needle Cushion Gauge)',
            fiber: '55% Organic Cotton, 35% Fine Merino Wool, 8% Nylon, 2% Spandex',
            footwear: 'Leather Derbies, Oxford Shoes, Heritage Work Boots'
        },
        winter: {
            img: 'images/cozy-winter-wool-cotton-boot-socks.jpg',
            tag: 'Winter Hearth & Alpine • December - February',
            title: 'The Thermal Waffle Knit Mountain Boot Sock',
            desc: 'Chunky 96-needle double-cylinder waffle knit providing trapped thermal air pockets for deep cold protection. Heavy arch support band prevents bunching inside boots.',
            cut: 'Tall Mountain Boot Sock (96-Needle Heavy Gauge)',
            fiber: '60% Heavy Ring-Spun Cotton, 30% Merino Wool, 10% Stretch Polyamide',
            footwear: 'Winter Hiking Boots, Leather Chelsea Boots, Shearling Slippers'
        }
    };

    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const season = tab.getAttribute('data-season');
            if (!seasonData[season]) return;

            seasonTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const data = seasonData[season];
            if (harmonizerImg) harmonizerImg.src = data.img;
            if (harmonizerTag) harmonizerTag.textContent = data.tag;
            if (harmonizerTitle) harmonizerTitle.textContent = data.title;
            if (harmonizerDesc) harmonizerDesc.textContent = data.desc;
            if (harmonizerCut) harmonizerCut.textContent = data.cut;
            if (harmonizerFiber) harmonizerFiber.textContent = data.fiber;
            if (harmonizerFootwear) harmonizerFootwear.textContent = data.footwear;
        });
    });

    // 6. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isOpen) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 7. Blog Category Filter
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterCategory = btn.getAttribute('data-category');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            blogCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (filterCategory === 'all' || cardCat === filterCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
