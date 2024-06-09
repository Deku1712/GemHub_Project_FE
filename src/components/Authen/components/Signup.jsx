import { useState } from 'react'
import { signupFields } from '../constants/formFields'
import FormAction from './FormAction'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import manage from '../../../service/manage'

const fields=signupFields
let fieldsState={}

fields.forEach(field => fieldsState[field.id]='')

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState)
  const navigate = useNavigate()

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupState)
    createAccount()
  }

  // handle Signup API Integration here
  const createAccount = async () => {
    try {
      const response = await manage.signup(signupState)
      if (response.status == 200) { // assuming your API returns a success field
        alert('Signup successful! Please login.')
        navigate('/login')
      } else {
        // handle error case, e.g., show error message
        console.log(response.data || 'Signup failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />

          )
        }
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>


    </form>
  )
}