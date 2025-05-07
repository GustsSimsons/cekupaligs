toStatsBtn = document.getElementById("stats-btn");

toStatsBtn.addEventListener("click", () => {
    window.location.href = "/html/stats.html"
})


document.addEventListener('DOMContentLoaded', function() {
    const langMap = {
      latvian: 'lv',
      english: 'en',
      german: 'ger'
    };
  
    
    const translations = {
      en: {
        stats: "Go to my stats",
        mainTitle: "Weekly Expenses",
        browse: "Or Browse...",
        receiptTitle: "Add receipt from PDF",
        h2Title: "Drag and drop"
      },
      lv: {
        stats: "Skatīt savu statistiku",
        mainTitle: "Nedēļas tēriņi",
        browse: "Skatīt citu...",
        receiptTitle: "Pievieno čeka PDF",
        h2Title: "Pievienojies šeit"

      },
      ger: {
        stats: "Zu meinen Statistiken gehe",
        mainTitle: "Wöchentliche Ausgaben",
        browse: "Oder durchsuchen...",
        receiptTitle: "Beleg aus PDF hinzufügen",
        h2Title: "Ziehen und ablegen"
      }
    };
    function applyTranslations(lang) {
        document.getElementById('stats-btn').textContent = translations[lang].stats;
        document.getElementById('main-h1').textContent = translations[lang].mainTitle;
        document.getElementById('browse-btn').textContent = translations[lang].browse;
        document.getElementById('receipt-h1').textContent = translations[lang].receiptTitle;
        document.getElementById('title-h2').textContent = translations[lang].h2Title;
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
  


    


const fileInput = document.getElementById("fileInput");
const image = document.getElementById("upload-img");

image.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if(file) {
        console.log("Selected file: ", file.name);
    }
});