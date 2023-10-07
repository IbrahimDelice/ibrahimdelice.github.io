import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bildirilerim',
    Svg: require('@site/static/img/bildiri.svg').default,
    url: 'bildiriler',
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Makalelerim',
    Svg: require('@site/static/img/makale.svg').default,
    url: 'makaleler',
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Kitaplarım',
    Svg: require('@site/static/img/kitaplar.svg').default,
    url: 'kitaplar',
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'Şiirlerim',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    url: 'şiirler',
    description: (
      <>
        ...
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={url}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
