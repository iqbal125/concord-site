import React from 'react';
import ProfileCard from '../ProfileCard';
import styles from './profilecardsection.module.css';
import { profiles } from './profileinfo.js';

const ProfileCardSection = () => {
  return (
    <div className={styles.top_div}>
      <div className={styles.about_text}>
        <h1> The Bridge to Modern Software</h1>
        <h3>
          Concord Software is an organization of like-minded professionals, experts in their
          respective fields, combining their experience, accomplishments, business contacts, and
          aspirations for a shared goal.
        </h3>
        <p>
          We are a consortium of accomplished business executives, software architects, technical
          leaders, analysts, health & life science professionals, educators, investors, and other
          innovators who share the goal to bring modern and sensible engineering to solve
          life-impacting problems.
        </p>
        <p>
          Software, engineering, and business advances are occurring at an accelerated pace and no
          single architect or leader can be “best in all new advancements”. A consortium of an elite
          group of industry veterans, whose focus is to discover, learn, build, and assist numerous
          companies through their knowledge — to improve the world.
        </p>
        <h4>Let the Revolution begin here. Cross the bridge with us.</h4>
      </div>
      <div className={styles.card_section}>
        {profiles.map(profile => (
          <div key={profile.id} className={styles.card}>
            <ProfileCard key={profile.id} profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCardSection;
