        const translations = {
            pt: {
                subtitle: "Biojóias",
                desc: "Peças únicas, feitas à mão com sementes e madeira.",
                btnCatalog: "Ver Catálogo",
                btnStore: "Atendimento WhatsApp",
                footer: "© 2026 Flor da Amazônia. Todos os direitos reservados."
            },
            en: {
                subtitle: "Bio-jewelry",
                desc: "Unique handmade pieces crafted with seeds and wood.",
                btnCatalog: "View Catalog",
                btnStore: "WhatsApp Support",
                footer: "© 2026 Flor da Amazônia. All rights reserved."
            }
        };

        function changeLanguage(lang) {
            document.getElementById('subtitle').innerText = translations[lang].subtitle;
            document.getElementById('desc').innerText = translations[lang].desc;
            document.getElementById('btn-catalog').innerText = translations[lang].btnCatalog;
            document.getElementById('btn-store').innerText = translations[lang].btnStore;
            document.getElementById('footer-text').innerText = translations[lang].footer;
        }