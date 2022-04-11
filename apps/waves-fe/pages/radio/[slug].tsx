import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import './[slug].module.css';
import { Radio } from '@waves/waves-data';
import radioDefinitions from '../../data/radios.json';
import BaseLayout from '../../components/base-layout/base-layout';
import RadioDetails from '../../components/radio-details/radio-details';
import { useEffect } from 'react';
import { useMediaPlayer } from '../../utils/media-player';
import { NextSeo } from 'next-seo';

/* eslint-disable-next-line */
export interface RadioPageProps {
  radio: Radio
}

export function RadioPage({ radio }: RadioPageProps) {
  const { playlist, load, play } = useMediaPlayer();

  useEffect(() => {
    load(radio);
    play();
  }, [load, play, radio]);

  return (
    <BaseLayout>
      <NextSeo noindex={true} />
      <RadioDetails radio={radio} playlist={playlist} />
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const radio: Radio = radioDefinitions.find((radioDefinition: Radio) => radioDefinition.slug === context.params.slug);

  if (radio === undefined) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      radio
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = radioDefinitions.map((radioDefinition, index) => ({
    params: {
      slug: radioDefinition.slug,
    },
  }));

  return { paths, fallback: false }
}

export default RadioPage;
