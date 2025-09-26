// VWL Lernkarten - JavaScript Funktionalität

// Globale Variablen
let currentCardIndex = 0;
let currentCards = [...vwlData];
let isFlipped = false;
let quizMode = 'normal'; // 'normal', 'reverse', 'mixed'
let currentIsReversed = false;

// DOM Elemente
let flashcard, cardTerm, cardDefinition, cardCategoryFront, cardCategoryBack;
let currentCardSpan, totalCardsSpan, categorySelect, searchInput, glossaryList;
let quizModeSelect;

// DOM Elemente initialisieren
function initializeDOM() {
    flashcard = document.getElementById('flashcard');
    cardTerm = document.getElementById('term');
    cardDefinition = document.getElementById('definition');
    cardCategoryFront = document.querySelector('.cardCategoryFront');
    cardCategoryBack = document.querySelector('.cardCategoryBack');
    currentCardSpan = document.getElementById('currentCard');
    totalCardsSpan = document.getElementById('totalCards');
    categorySelect = document.getElementById('categorySelect');
    searchInput = document.getElementById('searchInput');
    glossaryList = document.getElementById('glossaryList');
    quizModeSelect = document.getElementById('quizMode');
}

// Initialisierung
document.addEventListener('DOMContentLoaded', function() {
    initializeDOM();
    updateCardDisplay();
    updateCardCounter();
    generateGlossary();
});

// Tab-Funktionalität
function showTab(tabName) {
    // Alle Tab-Inhalte verbergen
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Alle Tab-Buttons deaktivieren
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Gewählten Tab anzeigen
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Karteikarten-Funktionen
function updateCardDisplay() {
    if (currentCards.length === 0) {
        cardTerm.textContent = "Keine Karten gefunden";
        cardDefinition.textContent = "Wählen Sie eine andere Kategorie";
        cardCategory.textContent = "";
        cardCategoryFront.textContent = "";
        return;
    }
    
    const card = currentCards[currentCardIndex];
    
    // Quiz-Modus bestimmen
    if (quizMode === 'mixed') {
        currentIsReversed = Math.random() < 0.5;
    } else {
        currentIsReversed = quizMode === 'reverse';
    }
    
    // Karten-Inhalt basierend auf Modus setzen
    if (currentIsReversed) {
        cardTerm.textContent = card.definition;
        cardDefinition.textContent = card.term;
    } else {
        cardTerm.textContent = card.term;
        cardDefinition.textContent = card.definition;
    }
    
    // Beide Kategorie-Header aktualisieren
    if (cardCategoryFront) {
        cardCategoryFront.textContent = card.categoryName;
    }
    if (cardCategoryBack) {
        cardCategoryBack.textContent = card.categoryName;
    }
    
    // Karte zurücksetzen (Vorderseite zeigen)
    flashcard.classList.remove('flipped');
    isFlipped = false;
}

function updateCardCounter() {
    currentCardSpan.textContent = currentCards.length > 0 ? currentCardIndex + 1 : 0;
    totalCardsSpan.textContent = currentCards.length;
}

// flipCard Funktion wird weiter unten neu definiert

function nextCard() {
    if (currentCards.length === 0) return;
    
    currentCardIndex = (currentCardIndex + 1) % currentCards.length;
    updateCardDisplay();
    updateCardCounter();
}

function previousCard() {
    if (currentCards.length === 0) return;
    
    currentCardIndex = currentCardIndex === 0 ? currentCards.length - 1 : currentCardIndex - 1;
    updateCardDisplay();
    updateCardCounter();
}

function filterCards() {
    const selectedCategory = categorySelect.value;
    
    if (selectedCategory === 'alle') {
        currentCards = [...vwlData];
    } else {
        currentCards = vwlData.filter(card => card.category === selectedCategory);
    }
    
    currentCardIndex = 0;
    updateCardDisplay();
    updateCardCounter();
}

function shuffleCards() {
    // Fisher-Yates Shuffle Algorithmus
    for (let i = currentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
    }
    
    currentCardIndex = 0;
    updateCardDisplay();
    updateCardCounter();
}

// Tastatur-Navigation
document.addEventListener('keydown', function(event) {
    if (document.getElementById('flashcards').classList.contains('active')) {
        switch(event.key) {
            case 'ArrowLeft':
                previousCard();
                break;
            case 'ArrowRight':
                nextCard();
                break;
            case ' ':
            case 'Enter':
                event.preventDefault();
                flipCard();
                break;
        }
    }
});

// Glossar-Funktionen
function generateGlossary() {
    glossaryList.innerHTML = '';
    
    // Nach Kategorien sortieren, dann alphabetisch
    const sortedData = [...vwlData].sort((a, b) => {
        if (a.category !== b.category) {
            return a.category.localeCompare(b.category);
        }
        return a.term.localeCompare(b.term);
    });
    
    sortedData.forEach(item => {
        const glossaryItem = createGlossaryItem(item);
        glossaryList.appendChild(glossaryItem);
    });
}

function createGlossaryItem(item) {
    const div = document.createElement('div');
    div.className = 'glossary-item';
    div.setAttribute('data-category', item.category);
    div.setAttribute('data-term', item.term.toLowerCase());
    
    div.innerHTML = `
        <div class="glossary-term">${item.term}</div>
        <div class="glossary-definition">${item.definition}</div>
        <div class="glossary-category">${item.categoryName}</div>
    `;
    
    return div;
}

function searchGlossary() {
    const searchTerm = searchInput.value.toLowerCase();
    const glossaryItems = document.querySelectorAll('.glossary-item');
    
    glossaryItems.forEach(item => {
        const term = item.getAttribute('data-term');
        const definition = item.querySelector('.glossary-definition').textContent.toLowerCase();
        
        if (term.includes(searchTerm) || definition.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterGlossary(category) {
    // Filter-Button aktiv setzen
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const glossaryItems = document.querySelectorAll('.glossary-item');
    
    glossaryItems.forEach(item => {
        if (category === 'alle' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Suchfeld zurücksetzen
    searchInput.value = '';
}

// Zusätzliche Utility-Funktionen
function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * currentCards.length);
    currentCardIndex = randomIndex;
    updateCardDisplay();
    updateCardCounter();
}

// Touch-Gesten für mobile Geräte
let touchStartX = 0;
let touchEndX = 0;

flashcard.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

flashcard.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe nach rechts - vorherige Karte
            previousCard();
        } else {
            // Swipe nach links - nächste Karte
            nextCard();
        }
    }
}

// Fortschritts-Tracking (optional für zukünftige Erweiterungen)
const userProgress = {
    viewedCards: new Set(),
    correctAnswers: 0,
    totalAttempts: 0
};

function markCardAsViewed(cardId) {
    userProgress.viewedCards.add(cardId);
    // Hier könnte localStorage genutzt werden für persistente Speicherung
}

// Performance-Optimierung: Debouncing für Suchfunktion
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search function
const debouncedSearch = debounce(searchGlossary, 300);

// Event Listener für optimierte Suche
if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);
}

// Quiz-Modus Funktionen
function switchQuizMode() {
    quizMode = quizModeSelect.value;
    updateCardDisplay();
    updateCardCounter();
}

// Einfache flipCard Funktion
function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}