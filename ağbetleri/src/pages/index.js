import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
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
        <div className="row block justify">
          <h1 className="left">Hacı İbrahim DELİCE'nin Özgeçmişi</h1>

          <img src='img/Hacı_İbrahim_DELİCE.jpg' alt="Hacı İbrahim DELİCE" className='fr y30 yuvarlak-köşeli boşluk' />
          <p>
            1964 yılında, Sivas-Yıldızeli'ne bağlı Cumhuriyet (Kızıllı) köyünde dünyaya geldi.
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
            2023 yılında Afyon Kocatepe Üniversitesine geçti ve hâlen burada akademik faaliyetlerini sürdürmektedir.
          </p>
          </div>
      </div>
    </section >)
}

function Dua() {
  return (
    <section style={{ marginBottom: 4 + 'em' }}>
      <div className="container">
        <div className="row block justify">
          <h1 className="left">Dua</h1>

<<<<<<< Updated upstream
          <p>
            Rahmân ve rahîm olan Allah’ın adıyla:
          </p>
          <p>
            Ey Rabb’imiz, kalbime genişlik ver; işimi kolaylaştır! 
            Dilimin bağını çöz; de, insanlar sözümü doğru anlayabilsinler; bana destekçiler ver!
          </p>
          <p>
            Ey Rabbimiz, bize dünyada ahirette de iyilik ver. Bizi cehennem azabından koru!
          </p>
          <p>
            Ey Rabbimiz, üzerimize sabır yağdır, ayaklarımızı sağlam bastır ve şu kâfir ve 
            zalimlere karşı bize yardım et ve canımı Müslüman olarak al; beni sâlihler 
            arasına kat! Eğer beni bağışlamaz ve bana acımazsan, şüphesiz ziyana 
            uğrayanlardan olurum.
          </p>
<p>Ey Rabbimiz, unutursak veya hataya düşersek bizi sorumlu tutma.</p>
<p>Ey Rabbimiz, bizden öncekilere yüklediğin gibi bize de ağır bir yük yükleme. Bize gücümüzün yetmediği işler de yükleme! Bizi affet; bizi bağışla, bize acı! Sen bağışlayanların en iyisisin! Sen bizim mevlâmızsın; kâfirler topluluğuna karşı bize yardım et!</p>
<p>Ey Rabbimiz, bizi hidayete erdirdikten sonra kalplerimizi eğriltme. Bize katından bir rahmet bahşet; şüphesiz sen çok bahşedensin.</p>
<p>Ey Rabbimiz, bizi zalimler topluluğu ile beraber bulundurma! Bize, bu dünyada da ahirette de iyilik yaz; şüphesiz sana döneceğiz!</p>
<p>Ey Rabbimiz, biz yalnız sana tevekkül ettik, bizi zalimler topluluğunun baskı ve şiddetine maruz bırakma!</p>
<p>Ey Rabbimiz, şüphesiz senden hakkında bilgim olmayan şeyi istemekten sana sığınırım. Başarım ancak senin yardımınladır. Ben yalnızca sana dayanır ve ancak yine sana döneceğim!</p>
<p>Ey Rabbimiz, beni ve soyumdan gelecekleri namazı devamlı kılanlardan eyle!</p>
<p>Ey Rabbimiz, hesap olunacağı gün beni, ana babamı ve müminleri bağışla! Küçüklüğümde onlar beni nasıl yetiştirmişlerse, şimdi de sen onlara rahmet et!</p>
<p>Ey Rabbimiz, gireceğim yere dürüstlükle girmemi; çıkacağım yerden de dürüstlükle çıkmamı sağla. Bana tarafından, hakkıyla yardım edici bir kuvvet ver!</p>
<p>Ey Rabbimiz, bize katından bir rahmet ver ve içinde bulunduğumuz şu durumda bize kurtuluş ve doğruluğa ulaşmayı kolaylaştır. Rabbim beni, bundan daha doğru olana ulaştırmanı umarım!</p>
<p>Ey Rabbimiz, ilmimi artır; cahillerden olmaktan sana sığınırım!</p>
<p>Ey Rabbimiz, beni tek başıma bırakma. Sen varislerin en hayırlısısın.</p>
<p>Ey Rabbimiz, beni yalanlamalarına karşı bana yardım et!</p>
<p>Ey Rabbimiz, beni bereketli bir yere kondur; sen konuk edenlerin en hayırlısısın!</p>
<p>Ey Rabbimiz, şeytanların vesveselerinden sana sığınırım. Onların benim yanımda bulunmalarından da sana sığınırım!</p>
<p>Ey Rabbimiz, biz inandık; bizi bağışla! Bize merhamet et; sen merhamet edenlerin en hayırlısısın!</p>
<p>Ey Rabbimiz, bizden cehennem azabını uzaklaştır; gerçekten onun azabı sürekli bir helaktır!</p>
<p>Ey Rabbimiz, bize gözümüzü aydınlatacak eşler ve zürriyetler bağışla ve bizi takvâ sahiplerine önder kıl!</p>
<p>Ey Rabbimiz, bana bir hikmet bahşet ve beni salih kimseler arasına kat. Sonra gelecekler arasında beni doğrulukla anılanlardan kıl! Beni Naîm cennetinin varislerinden eyle!</p>
<p>Ey Rabbimiz, beni, ana babama ve bana verdiğin nimetlere şükretmeye; razı olacağın salih ameller işlemeye sevk et ve beni rahmetinle salih kullarının arasına kat! Benim için de zürriyetim için de iyiliği devam ettir. Ben sana döneceğim ve elbette ki, ben Müslümanlardanım.</p>
<p>Ey Rabbimiz, doğrusu kendime zulmettim; beni bağışla!</p>
<p>Ey Rabbimiz, beni zalimler güruhundan kurtar!</p>
<p>Ey Rabbimiz, bana göndereceğin her hayra muhtacım.</p>
<p>Ey Rabbimiz, bana sâlih çocuklar ihsan et!</p>
<p>Ey Rabbimiz, senin rahmet ve ilmin her şeyi kuşatmıştır. O hâlde tevbe eden ve senin yoluna gidenleri bağışla; onları cehennem azabından koru!</p>
<p>Ey Rabbimiz, onları da, onların atalarından, zevcelerinden, nesillerinden iyi olanları da kendilerine vâdettiğin Adn cennetlerine koy! Şüphesiz azîz ve hakîm olan sensin!</p>
<p>Ey Rabbimiz, bizi ve bizden önce gelip geçmiş imanlı kardeşlerimizi bağışla; kalplerimizde, iman edenlere karşı hiçbir kin bırakma! </p>
<p>Ey Rabbimiz, şüphesiz ki sen çok şefkatli, çok merhametlisin!</p>
<p>Ey Rabbimiz, ancak sana dayandık; sana yöneldik. Dönüş de ancak sanadır. </p>
<p>Ey Rabbimiz, bizi, inkâr edenler için deneme konusu kılma; bizi bağışla! </p>
<p>Ey Rabbimiz, yegâne galip ve hikmet sahibi, ancak sensin.</p>
<p>Ey Rabbimiz! Nûrumuzu bizim için tamamla; bizi bağışla; çünkü sen, her şeye kadirsin!</p>
<p>Ey Rabbimiz, beni, ana babamı, iman etmiş olarak evime girenleri, iman eden erkekleri ve iman eden kadınları bağışla; zalimlerin de ancak helâkini arttır!</p>
<p>Ey Rabbimiz, bana katından temiz bir nesil bahşet. Şüphesiz sen duayı hakkıyla işitensin.</p>
<p>Ey Rabbimiz, biz kendimize zulmettik; eğer bizi bağışlamaz ve bize acımazsan mutlaka ziyân edenlerden oluruz!</p>
<p>Ey Rabbimiz, bizi sana boyun eğenlerden kıl; neslimizden de sana itaat eden bir ümmet çıkar! Bize ibadet usullerimizi göster; tevbemizi kabul et; zira, tevbeleri çokça kabul eden, çok merhametli olan ancak sensin!</p>
<p>Hamd âlemlerin Rabbi olan sana mahsustur. Sen rahmân ve rahîmsin; ceza gününün sahibisin! Ancak sana kulluk eder ve ancak senden medet umarız. Bize doğru yolu göster; kendilerine lütuf ve ikramda bulunduğun kimselerin yolunu; gazaba uğramışların ve sapmışların yolunu değil!</p>
<p>Ey Rabbimiz, dualarımı kabul eyle!</p>
=======
          <p>Rahmân ve rahîm olan Allah’ın adıyla:</p>
<p>Ey Rabb’im, kalbime genişlik ver;  işimi kolaylaştır! Dilimin bağını çöz; de, insanlar sözümü doğru anlayabilsin! Bana destekçiler ver!</p>
<p>Ey Rabbim, bana dünyada da ahirette de iyilik ver. Beni cehennem azabından koru!</p>
<p>Ey Rabbim, üzerime sabır yağdır; ayaklarımı sağlam bastır ve şu kâfir ve zalimlere karşı bana yardım et ve canımı Müslüman olarak al; beni sâlihler arasına kat! Eğer beni bağışlamaz ve bana acımazsan -şüphesiz- ziyana uğrayanlardan olurum.</p>
<p>Ey Rabbim, unutur veya hataya düşersem beni sorumlu tutma!</p>
<p>Ey Rabbim, bizden öncekilere yüklediğin gibi bana da ağır bir yük yükleme! Bana gücümün yetmediği işler de yükleme! Beni affet; beni bağışla, bana acı! Sen bağışlayanların en iyisisin! Sen bizim mevlâmızsın; kâfirler topluluğuna karşı bana yardım et!</p>
<p>Ey Rabbim, beni hidayete erdirdikten sonra kalbimi eğriltme. Bana katından bir rahmet bahşet; şüphesiz sen çok bahşedensin.</p>
<p>Ey Rabbim, beni zalimler topluluğu ile beraber bulundurma! Bana, bu dünyada da ahirette de iyilik yaz; şüphesiz hepimiz sana döneceğiz!</p>
<p>Ey Rabbim, yalnız sana tevekkül ederim; beni zalimler topluluğunun baskı ve şiddetine maruz bırakma!</p>
<p>Ey Rabbim, şüphesiz senden hakkında bilgim olmayan şeyi istemekten sana sığınırım. Başarım ancak senin yardımınladır. Ben yalnızca sana dayanır ve ancak yine sana döneceğim!</p>
<p>Ey Rabbim, beni ve soyumdan gelecekleri, namazı devamlı kılanlardan eyle!</p>
<p>Ey Rabbim, hesap olunacağı gün beni, ana babamı ve müminleri bağışla! Küçüklüğümde onlar beni nasıl yetiştirmişlerse şimdi de sen onlara rahmet et!</p>
<p>Ey Rabbim, gireceğim yere dürüstlükle girmemi; çıkacağım yerden de dürüstlükle çıkmamı sağla. Bana tarafından, hakkıyla yardım edici bir kuvvet ver!</p>
<p>Ey Rabbim, bana katından bir rahmet ver ve içinde bulunduğumuz şu durumda benim için kurtuluş ve doğruluğa ulaşmayı kolaylaştır. Rabbim beni, sadece gerçeğe ulaştırmanı umarım!</p>
<p>Ey Rabbim, ilmimi artır; zira, cahillerden olmaktan sana sığınırım!</p>
<p>Ey Rabbim, beni tek başıma bırakma; sen varislerin en hayırlısısın!</p>
<p>Ey Rabbim, beni yalanlamalarına karşı bana yardım et!</p>
<p>Ey Rabbim, beni bereketli bir yere kondur; sen konuk edenlerin en hayırlısısın!</p>
<p>Ey Rabbim, şeytanların vesveselerinden sana sığınırım. Onların benim yanımda bulunmalarından da sana sığınırım!</p>
<p>Ey Rabbim, ben sana inandım; beni bağışla! Bana merhamet et; sen merhamet edenlerin en hayırlısısın!</p>
<p>Ey Rabbim, benden cehennem azabını uzaklaştır; gerçekten onun azabı sürekli bir helaktır!</p>
<p>Ey Rabbim, bizlere gözümüzü aydınlatacak eşler ve zürriyetler bağışla ve bizi takvâ sahiplerine önder kıl!</p>
<p>Ey Rabbim, bana bir hikmet bahşet ve beni salih kimseler arasına kat. Sonra gelecekler arasında beni doğrulukla anılanlardan kıl! Beni Naîm cennetinin varislerinden eyle!</p>
<p>Ey Rabbim, beni, ana babama ve bana verdiğin nimetlere şükretmeye; razı olacağın salih ameller işlemeye sevk et ve beni rahmetinle salih kullarının arasına kat! Benim için de zürriyetim için de iyiliği devam ettir. Ben sana döneceğim ve elbette ki, ben Müslümanlardanım.</p>
<p>Ey Rabbim, doğrusu kendime zulmettim; beni bağışla!</p>
<p>Ey Rabbim, beni zalimler güruhundan kurtar!</p>
<p>Ey Rabbim, bana sâlih çocuklar ihsan et!</p>
<p>Ey Rabbim, senin rahmet ve ilmin her şeyi kuşatmıştır. O hâlde tevbe eden ve senin yoluna gidenleri bağışla; onları cehennem azabından koru!</p>
<p>Ey Rabbim, onları da, onların atalarından, zevcelerinden, nesillerinden iyi olanları da kendilerine vâdettiğin Adn cennetlerine koy! Şüphesiz azîz ve hakîm olan sensin!</p>
<p>Ey Rabbim, beni ve önceden gelip geçmiş imanlı kardeşlerimizi bağışla; kalbimde, iman edenlere karşı hiçbir kin bırakma! </p>
<p>Ey Rabbim, şüphesiz; ki, sen, çok şefkatli; çok merhametlisin!</p>
<p>Ey Rabbim, ancak sana dayanıp sana yöneldik! Dönüş de ancak sanadır! </p>
<p>Ey Rabbimiz, beni, inkâr edenler için deneme konusu kılma; beni bağışla! </p>
<p>Ey Rabbim, yegâne galip ve hikmet sahibi, ancak sensin!</p>
<p>Ey Rabbim, nûrumu benim için tamamla; beni bağışla; çünkü sen, her şeye kadirsin!</p>
<p>Ey Rabbim, beni, ana babamı, iman etmiş olarak evime girenleri, iman eden erkekleri ve iman eden kadınları bağışla; zalimlerin de ancak helâkini artır!</p>
<p>Ey Rabbim, bana katından temiz bir nesil bahşet. Şüphesiz sen duayı hakkıyla işitensin.</p>
<p>Ey Rabbim, biz kendimize zulmedenleriz; eğer bizi bağışlamaz ve bize acımazsan mutlaka ziyân edenlerden oluruz!</p>
<p>Ey Rabbim, beni sana boyun eğenlerden kıl; neslimden de sana itaat eden salih kullar çıkar! Bana ibadet usullerinin yolunu göster; tevbemi kabul et; zira, tevbeleri çokça kabul eden ve çok merhametli olan ancak sensin!</p>
<p> Ey Rabbim, hamd âlemlerin Rabbi olan sana mahsustur. Sen rahmân ve rahîmsin! Ceza gününün sahibisin! Ancak sana kulluk eder ve ancak senden medet umarız! Bana doğru yolu göster! Kendilerine lütuf ve ikramda bulunduğun kimselerin yolunu; gazaba uğramışların ve sapmışların yolunu değil!</p>
<p>Ey Rabbim, bana göndereceğin her hayra muhtacım.</p>
<p>Ey Rabbimi, dualarımı kabul eyle!</p>
>>>>>>> Stashed changes
<p>Amin.</p>

          </div>
      </div>
    </section>)
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
        <Dua/>
        <Hakkımda />
      </main>
    </Layout>
  );
}
