        const translations = {
            pt: {
                title: "Flor da Amazônia - Biojóias",
                author: "Eliane Pioli | Brasília - Brasil",
                subtitle: "Biojóias",
                desc: "Peças únicas, feitas à mão com sementes e madeira.",
                btnCatalog: "Instagram",
                btnStore: "Atendimento WhatsApp",
                btnPortfolio: "Portfólio",
                footer: "© 2026 Flor da Amazônia. Todos os direitos reservados."
            },
            en: {
                title: "Flor da Amazônia - Bio Jewelry",
                author: "Eliane Pioli | Brasília - Brazil",
                subtitle: "Bio-jewelry",
                desc: "Unique handmade pieces crafted with seeds and wood.",
                btnCatalog: "Instagram",
                btnStore: "WhatsApp Support",
                btnPortfolio: "Portfolio",
                footer: "© 2026 Flor da Amazônia. All rights reserved."
            }
        };

        function changeLanguage(lang) {
            document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
            document.title = translations[lang].title;
            document.querySelector('.author').innerText = translations[lang].author;
            document.getElementById('subtitle').innerText = translations[lang].subtitle;
            document.getElementById('desc').innerText = translations[lang].desc;
            document.getElementById('btn-catalog').innerText = translations[lang].btnCatalog;
            document.getElementById('btn-store').innerText = translations[lang].btnStore;
            document.getElementById('btn-portfolio').innerText = translations[lang].btnPortfolio;
            document.getElementById('footer-text').innerText = translations[lang].footer;
        }