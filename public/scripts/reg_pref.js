document.addEventListener('DOMContentLoaded', function() {
  const langMap = {
    latvian: 'lv',
    english: 'en',
    german: 'ger'
  };

  let selectedLang = langMap[localStorage.getItem('language')] || 'lv';

  const translations = {
    en: {
      signup: "Sign Up",
      slogan: "See Where Your Money Goes - Effortlessly.",
      form_h1: "Registration",
      username: "Username",
      password: "Password",
      already_have: "Already have an account?",
    },
    lv: {
      signup: "Izveidot",
      slogan: "Sekojiet saviem tēriņiem - bez piepūles.",
      form_h1: "Reģistrācija",
      username: "Lietotājvārds",
      password: "Parole",
      already_have: "Jau ir profils?",
    },
    ger: {
      signup: "Anmelden",
      slogan: "Sieh, wohin dein Geld geht - ganz mühelos",
      form_h1: "Registrierung",
      username: "Benutzername",
      password: "Passwort",
      already_have: "Haben Sie bereits ein Konto?",
    }
  };

  function applyTranslations(lang) {
      const signupBtn = document.getElementById('signup-btn');
      const slogan = document.getElementById('slogan');
      const formH1 = document.getElementById('form-h1');
      const username = document.getElementById('username');
      const password = document.getElementById('password');
      const alreadyHave = document.getElementById('already-have');
      
      if (signupBtn) signupBtn.textContent = translations[lang].signup;
      if (slogan) slogan.textContent = translations[lang].slogan;
      if (formH1) formH1.textContent = translations[lang].form_h1;
      if (username) username.placeholder = translations[lang].username;
      if (password) password.placeholder = translations[lang].password;
      if (alreadyHave) alreadyHave.textContent = translations[lang].already_have;
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
      document.getElementById('signup-btn').classList.add('dark-mode');
      document.getElementById('form-container').classList.add('dark-mode');
      document.getElementById('form-h1').classList.add('dark-mode');
      document.getElementById('already-have').classList.add('dark-mode');
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
      document.getElementById('signup-btn').classList.toggle('dark-mode');
      document.getElementById('form-container').classList.toggle('dark-mode');
      document.getElementById('form-h1').classList.toggle('dark-mode');
      document.getElementById('already-have').classList.toggle('dark-mode');
  }

  document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
});
