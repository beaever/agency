import Head from 'next/head';
import { Header, Typography } from '@agency/components';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>THEBEAEVER</title>
        <meta name="description" content="THEBEAEVER Portfolio Site" />
      </Head>
      <main>
        <Header css={{ padding: '34px 30px' }} justifyContent="flex-start" alignItems="center">
          <Header.Item children={<Typography body="body1" children="THEBEAEVER" />} />
        </Header>
        <section css={{ padding: '80px 120px' }}>
          <Typography children="I'm THEBEAEVER. An expr" />{' '}
        </section>
      </main>
    </>
  );
}
