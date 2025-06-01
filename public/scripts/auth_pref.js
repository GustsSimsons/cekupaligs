document.addEventListener('DOMContentLoaded', function() {
    const langMap = {
      latvian: 'lv',
      english: 'en',
      german: 'ger'
    };
  
    let selectedLang = langMap[localStorage.getItem('language')] || 'lv'; 
  
    const translations = {
      en: {
        login: "Log In",
        registration: "Create new account",
        slogan: "See Where Your Money Goes - Effortlessly.",
        form_h1: "Authentication",
        username: "Username",
        password: "Password",
        forget_a: "Forgot password?",
      },
      lv: {
        login: "Ienākt",
        registration: "Izveidot jaunu kontu",
        slogan: "Sekojiet saviem tēriņiem - bez piepūles.",
        form_h1: "Autentifikācija",
        username: "Lietotājvārds",
        password: "Parole",
        forget_a: "Aizmirsāt paroli?",
      },
      ger: {
        login: "Einloggen",
        registration: "Neuen Account erstellen",
        slogan: "Sieh, wohin dein Geld geht - ganz mühelos",
        form_h1: "Authentifizierung",
        username: "Benutzername",
        password: "Passwort",
        forget_a: "Passwort vergessen?",
      }
    };
  
    function applyTranslations(lang) {
      document.getElementById('login-btn').textContent = translations[lang].login;
      document.getElementById('registration-btn').textContent = translations[lang].registration;
      document.getElementById('slogan').textContent = translations[lang].slogan;
      document.getElementById('form-h1').textContent = translations[lang].form_h1;
      document.getElementById('username').placeholder = translations[lang].username;
      document.getElementById('password').placeholder = translations[lang].password;
      document.getElementById('forget-a').textContent = translations[lang].forget_a;
    }
  
    applyTranslations(selectedLang);
  
    document.getElementById('images').addEventListener('click', function(event) {
      const clicked = event.target;
  
      if (clicked.tagName === 'IMG') {
        const langKey = clicked.id; 
        const lang = langMap[langKey];
  
        localStorage.setItem('language', langKey);
  
        applyTranslations(lang);
      }
    });


    const savedTheme = localStorage.getItem('theme') || 'light'; 


if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  document.querySelector('h1').classList.add('dark-mode');
  document.querySelector('p').classList.add('dark-mode');
  document.getElementById('top').classList.add('dark-mode');
  document.getElementById('bottom').classList.add('dark-mode');
  document.getElementById('right').classList.add('dark-mode');
  document.getElementById('login-btn').classList.add('dark-mode');
  document.getElementById('form-container').classList.add('dark-mode');
  document.getElementById('form-h1').classList.add('dark-mode');
  document.getElementById('forget-a').classList.add('dark-mode');
  document.getElementById('theme-toggle').classList.add('dark-mode');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
  document.getElementById('theme-toggle').classList.toggle('dark-mode');
  document.querySelector('h1').classList.toggle('dark-mode');
  document.querySelector('p').classList.toggle('dark-mode');
  document.getElementById('top').classList.toggle('dark-mode');
  document.getElementById('bottom').classList.toggle('dark-mode');
  document.getElementById('right').classList.toggle('dark-mode');
  document.getElementById('login-btn').classList.toggle('dark-mode');
  document.getElementById('form-container').classList.toggle('dark-mode');
  document.getElementById('form-h1').classList.toggle('dark-mode');
  document.getElementById('forget-a').classList.toggle('dark-mode');

}

document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

});
  
