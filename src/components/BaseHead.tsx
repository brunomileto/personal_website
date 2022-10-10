import Head from 'next/head';

const BASE_TITLE = "Bruno Mileto | Fullstack Developer";

const BASE_DESCRIPTION = `O Pix Anônimo fornece um meio de você receber pix, sem informar seus dados pessoais.
O pagador verá todos os dados do Pix Anônimo e quando o pagamento for realizado,
te enviamos os valores, de forma anônima e segura! Experimente!`;

interface SiteHeadProps {
  title?: string;
  description?: string;
}

export function BaseHead({
  title = BASE_TITLE,
  description = BASE_DESCRIPTION,
}: SiteHeadProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BrunoMileto" />
      <meta
        property="og:image"
        content="https://www.brunomileto.tech/logo.svg"
      />
      <meta property="og:description" content={description} />
    </Head>
  );
}
