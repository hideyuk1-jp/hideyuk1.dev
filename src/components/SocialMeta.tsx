import React from 'react';
import Head from 'next/head';

interface Meta {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

const SocialMeta: React.FunctionComponent<Meta> = ({
  title,
  description,
  image,
  url,
  keywords,
}) => (
  <Head>
    <meta name="twitter:creator" content="hideyuk1" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:type" content="website" />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image ? (
      <meta name="og:image" content={`https://hideyuk1.dev${image}`} />
    ) : (
      <meta name="og:image" content="https://hideyuk1.dev/static/ogp.png" />
    )}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);

export default SocialMeta;
