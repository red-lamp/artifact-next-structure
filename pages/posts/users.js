import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import { Layout } from 'components'
import { getUsersFetching } from 'redux/users/action'

export default function Users() {
  const dispatch = useDispatch()
  const { users, error, loading } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsersFetching())
  }, [dispatch])

  if (loading) { return <div>Loading...</div> }
  if (error) { return <div>Error! {error}</div> }

  return (
    <Layout>
      <Head>
        <title>Users</title>
      </Head>
      <h1>Users</h1>
      <div>
        {
          users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))
        }
      </div>
      <h4>
        <Link href='/'>
          Back to home
        </Link>
      </h4>
    </Layout>
  )
}
