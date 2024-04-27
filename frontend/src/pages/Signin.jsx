import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  console.log(password)

  const handleSignIn = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      username, 
      password
    })
    localStorage.setItem("token", response.data.token)
    navigate("/dashboard")
  }
  return (
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center w-96">
        <div className='rounded-lg bg-white text-center p-2 h-fit px-4 border shadow-lg'>
          <Heading label="Sign In"/>
          <SubHeading label="Enter your credentials to access your account"/>
            <InputBox label="Email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
            <InputBox label="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <Button name="Sign In" onClick={handleSignIn}/>
            <BottomWarning label= "Don't have an account?" buttonText= "Sign Up" to={'/signup'} />
        </div>
      </div>
    </div>
  )
}

export default Signin