import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import { Layout } from 'components'
import { increment, decrement } from 'redux/counter/action'

export default function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <Layout>
      <Head>
        <title>Counter redux</title>
      </Head>
      <h1>Counter redux</h1>
      <div>
        <p>You clicked {count} times (redux store)</p>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
        <button onClick={() => dispatch(increment())}>
          +
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
