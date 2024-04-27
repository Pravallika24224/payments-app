import { useState } from 'react'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center w-96">
        <div className='rounded-lg bg-white text-center p-2 h-fit px-4'>
          <Heading label="Sign In"/>
          <SubHeading label="Enter your credentials to access your account"/>
            <InputBox label="Email" placeholder="Email" onChange={() => setEmail(e.target.value)} />
            <InputBox label="Password" placeholder="Password" onChange={() => setPassword(e.target.value)} />
            <Button name="Sign In" onClick={() => "ho"}/>
            <BottomWarning label= "Don't have an account?" buttonText= "Sign Up" to={'/signup'} />
        </div>
      </div>
    </div>
  )
}

export default Signin