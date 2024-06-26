const words = [
    { russian: "Сколько это стоит?", english: "How much does this cost?" },
    { russian: "Где находится ближайший банк?", english: "Where is the nearest bank?" },
    { russian: "Я хотел бы заказать столик на двоих", english: "I would like to reserve a table for two" },
    { russian: "Вы принимаете кредитные карты?", english: "Do you accept credit cards?" },
    { russian: "Можно счет, пожалуйста?", english: "Can I have the bill, please?" },
    { russian: "Где находится туалет?", english: "Where is the restroom?" },
    { russian: "Можно меню, пожалуйста?", english: "Can I have the menu, please?" },
    { russian: "У вас есть свободные номера?", english: "Do you have any available rooms?" },
    { russian: "Где я могу купить билет?", english: "Where can I buy a ticket?" },
    { russian: "Как пройти к вокзалу?", english: "How do I get to the train station?" },
    { russian: "Когда отправляется следующий автобус?", english: "When does the next bus leave?" },
    { russian: "Я хотел бы обменять деньги", english: "I would like to exchange money" },
    { russian: "Какой у вас курс обмена?", english: "What is your exchange rate?" },
    // Add more words here
];

let currentWordIndex = 0;

const wordElement = document.getElementById('word');
const translationElement = document.getElementById('translation');
const showTranslationButton = document.getElementById('show-translation');
const playPronunciationButton = document.getElementById('play-pronunciation');
const nextWordButton = document.getElementById('next-word');
const flashcardCounterElement = document.getElementById('flashcard-counter');

function updateFlashcardCounter() {
    flashcardCounterElement.textContent = `Flashcard: ${currentWordIndex + 1}/${words.length}`;
}

function showWord() {
    wordElement.textContent = words[currentWordIndex].russian;
    translationElement.textContent = words[currentWordIndex].english;
    translationElement.style.display = 'none';
    updateFlashcardCounter();
}

function showTranslation() {
    translationElement.style.display = 'block';
}

function playPronunciation() {
    const utterance = new SpeechSynthesisUtterance(words[currentWordIndex].russian);
    utterance.lang = 'ru-RU';
    window.speechSynthesis.speak(utterance);
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    showWord();
}

showTranslationButton.addEventListener('click', showTranslation);
playPronunciationButton.addEventListener('click', playPronunciation);
nextWordButton.addEventListener('click', nextWord);

showWord();
