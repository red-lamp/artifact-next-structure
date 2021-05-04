import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Layout } from 'components'

export default function FirstPost() {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <div>
        <p>You clicked {count} times (local state)</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <h4>
        <Link href='/'>
          Back to home
        </Link>
      </h4>
    </Layout>
  )
}
