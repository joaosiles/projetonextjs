import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <head>
        <title>Primeiro Post</title>
    </head>
      <h1>Primeiro Post</h1>
      <h2>
        <Link href="/">
          <a>Voltar pra home</a>
        </Link>
      </h2>
    </Layout>
  )
}