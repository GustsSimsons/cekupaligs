toStatsBtn = document.getElementById("home-btn");

toStatsBtn.addEventListener("click", () => {
    window.location.href = "../html/home.html"
})


document.addEventListener('DOMContentLoaded', function() {
    const langMap = {
      latvian: 'lv',
      english: 'en',
      german: 'ger'
    };
  
    
    const translations = {
      en: {
        home: "Home",
        mainTitle: "My stats",
        period: "Period:",
        showAs: "Show as:",
        itemCat: "Item category:",
        store: "Store(-s):",
        filter: "Search"
      },
      lv: {
        home: "Mājas",
        mainTitle: "Mana statistika",
        period: "Periods:",
        showAs: "Rādīt kā:",
        itemCat: "Kategorija:",
        store: "Veikals(-)",
        filter: "Meklēt"
      },
      ger: {
        home: "Startseite",
        mainTitle: "Meine Statistik",
        period: "Zeitraum:",
        showAs: "Anzeigen als:",
        itemCat: "Artikelkategorie:",
        store: "Geschäft(-e):",
        filter: "Suchen"
      }
    };
    function applyTranslations(lang) {
      document.getElementById('home-btn').textContent = translations[lang].home;
      document.getElementById('main-h1').textContent = translations[lang].mainTitle;
      document.getElementById('label-period').textContent = translations[lang].period;
      document.getElementById('label-show').textContent = translations[lang].showAs;
      document.getElementById('label-cat').textContent = translations[lang].itemCat;
      document.getElementById('label-store').textContent = translations[lang].store;
      document.getElementById('filter-btn').textContent = translations[lang].filter;
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