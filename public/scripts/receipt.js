toStatsBtn = document.getElementById("stats-btn");
toStatsBtn.addEventListener("click", () => {
    window.location.href = "../html/stats.html"
})

toHomeBtn = document.getElementById("home-btn");
toHomeBtn.addEventListener("click", () => {
    window.location.href = "../html/expenses.html"
})

saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
    window.location.href = "../html/expenses.html"
})

cancelBtn = document.getElementById("canc-btn");
cancelBtn.addEventListener("click", () => {
    window.location.href = "../html/expenses.html"
})


document.addEventListener('DOMContentLoaded', function() {
    const langMap = {
      latvian: 'lv',
      english: 'en',
      german: 'ger'
    };
  
    
    const translations = {
      en: {
        mainTitle: "Receipt details",
        receiptTitle: "Receipt from PDF",
        browse: "Or Browse...",
        save: "Save",
        cancel: "Cancel",
        home: "Home",
        stats: "Go to my stats",
        h2Title: "Receipt",
        store: "Store:",
        total: "Total:",
        items: "Items:"
      },
      lv: {
        mainTitle: "Čeka detaļas",
        receiptTitle: "Čeka PDF",
        browse: "Skatīt citu...",
        save: "Saglabāt",
        cancel: "Atcelt",
        home: "Uz mājām",
        stats: "Skatīt savu statistiku",
        h2Title: "Čeks",
        store: "Veikals:",
        total: "Kopā:",
        items: "Preces:"
      },
      ger: {
        mainTitle: "Quittungsdetails",
        receiptTitle: "Quittung aus PDF",
        browse: "Oder durchsuchen...",
        save: "Speichern",
        cancel: "Stornieren",
        home: "Nach Heim",
        stats: "Zu meinen Statistiken gehe",
        h2Title: "Die Quittung",
        store: "Geschäft:",
        total: "Zusammen:",
        items: "Waren:"
      }
    };
    function applyTranslations(lang) {
        document.getElementById('main-h1').textContent = translations[lang].mainTitle;
        document.getElementById('receipt-h1').textContent = translations[lang].receiptTitle;
        document.getElementById('save-btn').textContent = translations[lang].save;
        document.getElementById('canc-btn').textContent = translations[lang].cancel;
        document.getElementById('home-btn').textContent = translations[lang].home;
        document.getElementById('stats-btn').textContent = translations[lang].stats;
        document.getElementById('title-h2').textContent = translations[lang].h2Title;
        document.getElementById('store').textContent = translations[lang].store;
        document.getElementById('total').textContent = translations[lang].total;
        document.getElementById('items').textContent = translations[lang].items;
    }
    let selectedLang = langMap[localStorage.getItem('language')] || 'lv'; 
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    applyTranslations(selectedLang);

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
  document.getElementById('theme-toggle').classList.toggle('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

});