import { useState } from 'react'

import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center w-96">
        <div className='rounded-lg bg-white text-center p-2 h-fit px-4'>
          <Heading label="Sign Up" />
          <SubHeading label="Enter your information to create an account" />
            <InputBox label="First Name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <InputBox label="Last Name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <InputBox label="Email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
            <InputBox label="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <Button name="Sign Up" onClick={handleSignUp} />
            <BottomWarning label="Already have an account?" buttonText="Login" to={'/signin'} />
        </div>
      </div>
    </div>
  )
}

export default Signup