import React, { useRef, useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import SocialBar from '../SocialBar';

//illustrations
import image1 from '../../../static/uploads/coding_.svg';
import image2 from '../../../static/uploads/wave.svg';
import image3 from '../../../static/uploads/undraw_design_notes_8dmv.svg';
import image5 from '../../../static/uploads/code_development_.svg';

import styles from './home.module.css';

const Home = () => {
  const intersectTargetFeat1 = useRef(null);
  const intersectTargetFeat2 = useRef(null);
  const [feat1Intersect, setFeat1] = useState(false);
  const [feat2Intersect, setFeat2] = useState(false);

  const toContactPage = () => {
    navigate('/contact');
  };

  const toAboutPage = () => {
    navigate('/about');
  };

  useEffect(() => {
    const opts = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const callback = list => {
      list.forEach(entry => {
        let isFeat1 = entry.target.className.includes('feature1');
        let isFeat2 = entry.target.className.includes('feature2');

        if (entry.isIntersecting && isFeat1) {
          setFeat1(true);
        }
        if (entry.isIntersecting && isFeat2) {
          setFeat2(true);
        }
      });
    };
    const observerScroll = new IntersectionObserver(callback, opts);

    //observerScroll.observe(intersectTargetFeat1.current);
    observerScroll.observe(intersectTargetFeat2.current);
  }, []);

  return (
    <div>
      <div className={styles.landing_hero}>
        <h1 className={styles.value_prop}>Concord Software and Executive Consulting</h1>
        <div className={styles.feature1_text_full_hd}>
          <h1>Concord Software and Executive Consulting</h1>
          <h2>Industry Leading Tech Experts</h2>
          <p>
            We are a consortium of accomplished business executives, software architects, technical
            leaders, analysts, health & life science professionals, educators, investors, and other
            innovators who share the goal to bring modern and sensible engineering to solve
            life-impacting problems.
          </p>
          <p>
            Let us help you build your next React or Full Stack project, design your system, or
            evaluate you technology or designs!
          </p>
          <button className={styles.find_out_more_button} onClick={toAboutPage}>
            See Who We Are
          </button>
        </div>
        <div>
          <img className={styles.hero_illustration} src={image1} alt="" />
        </div>
      </div>
      <div className={styles.wave_bottom_hero}>
        <img src={image2} alt="" />
      </div>

      <div className={styles.feature1}>
        <div className={styles.feature1_text}>
          <h2>Industry Leading Tech Experts</h2>
          <p>
            We are a consortium of accomplished business executives, software architects, technical
            leaders, analysts, health & life science professionals, educators, investors, and other
            innovators who share the goal to bring modern and sensible engineering to solve
            life-impacting problems.
          </p>
          <p>
            Let us help you build your next React or Full Stack project, design your system, or
            evaluate you technology or designs!
          </p>
          <button className={styles.find_out_more_button} onClick={toAboutPage}>
            See Who We Are
          </button>
        </div>
        {/*<img
          ref={intersectTargetFeat1}
          className={feat1Intersect ? styles.feature1_img : styles.feature1_img_none}
          src={image1}
          alt=""
        />*/}
      </div>
      <div ref={intersectTargetFeat2} className={styles.feature2}>
        <img
          className={feat2Intersect ? styles.feature2_img : styles.feature2_img_none}
          src={image5}
          alt=""
        />

        <div className={styles.feature2_text}>
          <h2>Your Business is Too Important to Get Left Behind</h2>
          <p>
            Software, engineering, and business advances are occurring at an accelerated pace and no
            single architect or leader can be “best in all new advancements”. A consortium of an
            elite group of industry veterans, whose focus is to discover, learn, build, and assist
            numerous companies through their knowledge — to improve the world.
          </p>
        </div>
      </div>
      <div className={styles.bottom_cta_section}>
        <div className={styles.bottom_cta_text}>
          <h3>Get in touch to see how we can help you on your next project</h3>
          <button className={styles.get_started_button} onClick={toContactPage}>
            Get Started Now
          </button>
        </div>
        <div className={styles.social_bar}>
          <h3 className={styles.social_title}> Or Connect With Us on Social Just to Chat</h3>
          <SocialBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
