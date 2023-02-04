import React, { useState } from 'react';
import FlashcardList from './FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
  <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question: "What is React?",
    answer: "A library for managing user interfaces",
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
      'Answer 5'
    ]
  },  
  {
    id:2,
    question: "What is a Single Page Application?",
    answer: "Write answer here",
    options: [
      'Answer 1',
      'Answer 2',
      'Answer 3',
      'Answer 4',
      'Answer 5'
    ]
  }
]

export default App;
