import React, { useState } from 'react';

import styles from './profilecard.module.css';
import Shiitake from 'shiitake';

const ProfileCard = props => {
  const [trunc, setState] = useState(true);

  const setCard = () => {
    if (trunc === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className={trunc ? styles.card : styles.card_full}>
      <div className={styles.card_top_row}>
        <img className={styles.card_image} src={props.profile.image} alt="" />
        <div className={styles.card_title}>
          <h1>{props.profile.name}</h1>
          <h2>{props.profile.title}</h2>
        </div>
      </div>
      {/* Desktop Section */}
      <div className={styles.trunc_section}>
        {trunc ? (
          <Shiitake
            lines={6}
            throttleRate={200}
            className={styles.card_desc}
            overflowNode={
              <div className={styles.read_more} onClick={setCard}>
                Read More...
              </div>
            }
          >
            {props.profile.description}
          </Shiitake>
        ) : (
          <>
            <div className={styles.card_desc}> {props.profile.description} </div>
            <div className={styles.collapse} onClick={setCard}>
              Collapse...
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
