'use client'

import Image from 'next/image';
import styles from '../src/app/styles/card.module.css';
import { useState } from 'react';

const Card = (props) => {

  const [flipped, setFlipped] = useState(false);
  const { value, flippedCount, setFlipCount } = props;

  const cardFlip = () => {
    if (flippedCount < 2 && !flipped) {
      setFlipCount(flippedCount+1);
      setFlipped(true);
    }
    if (flippedCount <= 2 && flipped) {
      setFlipCount(flippedCount-1);
      setFlipped(false);
    }
  };


  if (flipped) {
    if (value === 'domination') {
      return (
        <div className={styles.FlippedCard} onClick={() => cardFlip()}>
          <Image quality={100} width={32} height={32} alt="domination" src={`/domination.png`} />
        </div>
      );
    }

    if (value === 'precision') {
      return (
        <div className={styles.FlippedCard} onClick={() => cardFlip()}>
          <Image quality={100} width={32} height={32} alt="precision" src={`/precision.png`} />
        </div>
      );
    }

    if (value === 'sorcery') {
      return (
        <div className={styles.FlippedCard} onClick={() => cardFlip()}>
          <Image quality={100} width={32} height={32} alt="sorcery" src={`/sorcery.png`} />
        </div>
      );
    }

    if (value === 'inspiration') {
      return (
        <div className={styles.FlippedCard} onClick={() => cardFlip()}>
          <Image quality={100} width={32} height={32} alt="inspiration" src={`/inspiration.png`} />
        </div>
      );
    }

    if (value === 'resolve') {
      return (
        <div className={styles.FlippedCard} onClick={() => cardFlip()}>
          <Image quality={100} width={32} height={32} alt="resolve" src={`/resolve.png`} />
        </div>
      );
    }

    if (value === 'rune') {
      return (
        <div className={styles.FlippedCard} onClick={() => cardFlip()}>
          <Image quality={100} width={32} height={32} alt="rune" src={`/runesicon.png`} />
        </div>
      );
    }

  }
  
  if (!flipped) {
    return (
      <div className={styles.Card} onClick={() => cardFlip()}>
        <Image quality={100} width={32} height={32} alt="rune" src={`/armoricon.png`} />
      </div>
    );
  }
};

export default Card;