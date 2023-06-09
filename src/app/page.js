'use client'

import Image from 'next/image';
import styles from './styles/page.module.css';
import Card from '../../components/Card';
import { useState } from 'react';

const dataArr = ['domination', 'domination', 'sorcery', 'sorcery', 'inspiration', 'inspiration', 'resolve', 'resolve', 'precision', 'precision', 'rune', 'rune'];

const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const shuffledData = shuffle(dataArr);

const Home = () => {

  const [flippedCount, setFlipCount] = useState(0);

  const cardsArr = [];
  for (let i = 0; i < shuffledData.length; i++) {

    cardsArr.push(
      <Card 
        key={`game-card-${i}`} 
        value={`${shuffledData[i]}`}
        setFlipCount={setFlipCount}
        flippedCount={flippedCount}
        // cardFlip={cardFlip}
      />
    );
  }

  return (
    <div className={styles.MainPage}>  
      <h1> Matching Game </h1>
      <h3> timer: </h3>
      <p> flip count: {flippedCount} </p>

      <div className={styles.ButtonsDiv}>
        <button className={styles.GameButton}> Start </button>
        <button className={styles.GameButton}> Stop </button>
      </div>

      <div className={styles.CardsContainer}>
        {cardsArr}
      </div>

    </div>
  );
};

export default Home;
