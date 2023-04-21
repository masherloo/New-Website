import React, { useState, useEffect } from 'react';

const WordSwapper = ({ words, interval, delayBetweenWords }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[0]);
  const [action, setAction] = useState('deleting');
  const [marker, setMarker] = useState('|');
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const markerBlink = setInterval(() => {
      if (isBlinking) {
        setMarker((prevMarker) => (prevMarker === '|' ? ' ' : '|'));
      }
    }, 500);
    return () => clearInterval(markerBlink);
  }, [isBlinking]);

  useEffect(() => {
    if (action === 'typing' && charIndex === 0) {
      setIsBlinking(true);
    } else if (action === 'deleting' && charIndex === words[currentWordIndex].length) {
      setIsBlinking(true);
    } else {
      setIsBlinking(false);
    }
  }, [action, charIndex, words, currentWordIndex]);


  useEffect(() => {
    const updateWord = () => {
      const word = words[currentWordIndex];
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[nextWordIndex];

      if (action === "deleting") {
        if (charIndex <= 0) {
          setTimeout(() => {
            setAction("typing");
          }, delayBetweenWords);
        } else {
          setCharIndex((prevCharIndex) => prevCharIndex - 1);
          setDisplayWord(word.slice(0, charIndex - 1));
        }
      } else if (action === "typing") {
        if (charIndex >= nextWord.length) {
          setTimeout(() => {
            setCurrentWordIndex(nextWordIndex);
            setAction("deleting");
          }, delayBetweenWords);
        } else {
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
          setDisplayWord(nextWord.slice(0, charIndex + 1));
        }
      }
    };

    const timeout = setTimeout(
      updateWord,
      interval / (words[currentWordIndex].length * 2)
    );
    return () => clearTimeout(timeout);
  }, [
    displayWord,
    action,
    charIndex,
    currentWordIndex,
    words,
    interval,
    delayBetweenWords,
  ]);

  return (
    <span>
      <span className="gradient-text">{displayWord}</span>
      <span className="marker">{marker}</span>
    </span>
  );
};

export default WordSwapper;
