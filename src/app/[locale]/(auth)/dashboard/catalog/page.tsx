import React from 'react';

import Home from '@/components/complexes/katalog-ahli/katalog-ahli';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Catalog',
  });

  return {
    title: t('meta_title'),
  };
}


const page = async () => {
  return (
    <Home />
  );
};

export default page;
