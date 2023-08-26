import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Yazdıklarımı okumaya buyurun!
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hakkımda() {
  return (
    <section style={{ marginBottom: 4 + 'em' }}>
      <div className="container">
        <div className="row block">
          <h1>Hacı İbrahim DELİCE Kimdir?</h1>

          <img src='img/Hacı_İbrahim_DELİCE.jpg' alt="Hacı İbrahim DELİCE" className='fr y30 boşluk' />
          <p>
            1964 Yılında, Sivas-Yıldızeli'ne bağlı Cumhuriyet (Kızıllı) köyünde dünyaya geldim.
          </p>
          <p>
            İlk öğrenimi, Kızıllı köyünde; orta öğrenimini, Sivas'ta tamamladım. 1979 yılında başladığım Selçuk Üniversitesi, Fen-Edebiyat Fakültesi, Türk Dili ve Edebiyatı Bölümünden 1984 yılında mezun oldum.
          </p>

          <p>  
            Yüksek lisansı, 1992 yılında, Cumhuriyet Üniversitesi, Sosyal Bilimler Enstitüsünde; doktorasını, 1996 yılında, Fırat Üniversitesi, Sosyal Bilimler Enstitüsünde tamamladım.
          </p>
          <p>
            1985 ~ 1989 yılları arasında, Akşehir Reis Lisesinde; 1990 yılında, Sivas İmam-Hatip Lisesinde Türk Dili ve Edebiyatı öğretmenliği yaptım. 1990 yılında Cumhuriyet Üniversitesi, Fen-Edebiyat Fakültesi, Türk Dili ve Edebiyatı Bölümünde araştırma görevliliğine başladım.
          </p>
          <p>
            Hâlen Cumhuriyet Üniversitesi, Fen-Edebiyat Fakültesi, Çağdaş Türk Lehçeleri  ve Edebiyatları Bölümü, Oğuz Gurubu Anabilim Dalında profesör kadrosunda çalışmaktayım.
          </p></div>
      </div>
    </section >)
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Hakkımda />
      </main>
    </Layout>
  );
}
