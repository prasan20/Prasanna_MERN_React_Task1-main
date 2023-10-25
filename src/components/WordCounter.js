import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.split(' ');
    const filteredWords = words.filter(word => word !== ''); // Remove empty words

    setWordCount(filteredWords.length);
    setText(inputText);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
      />
      <div>
        Word Count: {wordCount}
      </div>
    </div>
  );
}

export default WordCounter;
