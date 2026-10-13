import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from './api/api'

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000*60*0.3 // 5 minute
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error fetching users!</h2>
  }

  return (
    <>
      {data.map((user) => (
        <div className='flex flex-wrap items-center justify-center'>
          <h1 key={user.id}>{user.title}</h1>
       <img loading="lazy" className='h-40 ' src={user.image} alt="" />
        </div>
      ))}
    </>
  )
}

export default App