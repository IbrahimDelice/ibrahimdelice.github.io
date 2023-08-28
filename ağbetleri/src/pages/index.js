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
            to="/makaleler">
            Makalelerimi okumaya buyurun!
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
          <h1>Hacı İbrahim DELİCE'nin Özgeçmişi</h1>

          <img src='img/Hacı_İbrahim_DELİCE.jpg' alt="Hacı İbrahim DELİCE" className='fr y30 boşluk' />
          <p>
            1964 Yılında, Sivas-Yıldızeli'ne bağlı Cumhuriyet (Kızıllı) köyünde dünyaya geldi.
          </p>
          <p>
            İlk öğrenimini, köyünde; orta öğrenimini, Sivas'ta tamamladı. 1979 yılında başladığı Selçuk Üniversitesi, Fen-Edebiyat Fakültesi, Türk Dili ve Edebiyatı Bölümünden 1984 yılında mezun oldu.
          </p>

          <p>  
            Yüksek lisansını, 1992 yılında, Cumhuriyet Üniversitesi, Sosyal Bilimler Enstitüsünde; doktorasını, 1996 yılında, Fırat Üniversitesi, Sosyal Bilimler Enstitüsünde tamamladı.
          </p>
          <p>
            1985 ~ 1989 yılları arasında, Akşehir Reis ve 1990 yılında, Sivas İmam-Hatip Lisesinde Türk Dili ve Edebiyatı öğretmenliği yaptı. 1990 yılında Cumhuriyet Üniversitesi, Fen-Edebiyat Fakültesi, Türk Dili ve Edebiyatı Bölümünde araştırma görevliliğine başladı.
          </p>
          <p>
            Cumhuriyet Üniversitesi, Fen-Edebiyat Fakültesi, Türk Dili ve Edebiyatı Bölümü, Yeni Türk Dili ile Çağdaş Türk Lehçeleri  ve Edebiyatları Bölümü, Oğuz Grubu Anabilim Dalında öğretim üyesi olarak çalıştı.
          
            <p>  
            2023 yılında Afyon Kocatepe Üniversitesine geçti ve hâlen burada akademik faaliyetlerini sürdürmektedir.
          </p>

          </p></div>
      </div>
    </section >)
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}'nin kitapları, makaleleri, bildirileri, şiirleri, ...`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Hakkımda />
      </main>
    </Layout>
  );
}
