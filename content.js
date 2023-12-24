function highlightInitialCharacters() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        if (!paragraph.classList.contains('speed-read-processed')) {
            paragraph.classList.add('speed-read-processed');
            paragraph.innerHTML = paragraph.innerText.split(' ').map(word => {
                let threshold = Math.ceil(word.length * 0.51);
                let highlightedPart = word.substring(0, threshold);
                let restOfWord = word.substring(threshold);
                return '<span style="font-weight: bold;">' + highlightedPart + '</span>' + restOfWord;
            }).join(' ');
        }
    });
}

highlightInitialCharacters();
