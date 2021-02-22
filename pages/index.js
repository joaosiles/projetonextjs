import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Olá mundo!</p>
        <p>
          (Estou aprendendo next.js no {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}