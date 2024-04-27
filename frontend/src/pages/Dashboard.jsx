import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className='m-6'>
        <Balance amount="10,000"/>
      </div>
      <div className='m-6'>
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard