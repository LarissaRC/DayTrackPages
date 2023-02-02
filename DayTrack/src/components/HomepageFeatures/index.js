import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Atinja os seus Alvos',
    Svg: require('@site/static/img/home_alvo.svg').default,
    description: (
      <>
        Não se deixe intimidar por suas tarefas e seus trabalho. Foque na meta,
        planeje sua trajetória, e alcance seu objetivo.
      </>
    ),
  },
  {
    title: 'Controle o seu Tempo',
    Svg: require('@site/static/img/home_time.svg').default,
    description: (
      <>
        Mantenha seu calendário atualizada e bem informativo sobre todas as suas tarefas.
        Faça do seu ano um roteiro de conquistas.
      </>
    ),
  },
  {
    title: 'Crescimento Pessoal',
    Svg: require('@site/static/img/home_rects.svg').default,
    description: (
      <>
        Se permita ser uma pessoa mais organizada, focada e aplicada naquilo que
        é realmente importante para você.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
