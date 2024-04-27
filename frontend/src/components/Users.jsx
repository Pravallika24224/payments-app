import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const Users = () => {
  const [filter, setFilter] = useState("")
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then(res => {
        setUsers(res.data.user)
      })
  }, [filter])
  return (
    <div className='flex flex-col'>
      <div className='font-bold text-lg'>Users</div>
      <input type="text" placeholder='Search Users...' onChange={(e) => setFilter(e.target.value)} className='w-full rounded border border-slate-200 h-10 px-2 my-2' />
      <div className='my-2'>
      {users.map(user => <User user={user} key={user._id} />)}
      </div>
    </div>
  )
}

const User = ({ user }) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <div className='rounded-full bg-slate-200 w-10 h-10 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center font-medium text-xl'>
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className='flex flex-col justify-center h-full'>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className='flex flex-col justify-center h-full'>
      <Button name="Send Money" onClick={() => navigate("/send?id=" + user._id + "&name=" + user.firstName)} />
      </div>
    </div>
  )
}

export default Users