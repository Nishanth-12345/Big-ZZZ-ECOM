import React, { ChangeEvent, FC } from 'react';
import './styles.scss'

interface RegisterProps{
  email:string, 
  handleEmail:(e:ChangeEvent<HTMLInputElement>) => void,
  firstName:string;
  handleFirstName:(e:ChangeEvent<HTMLInputElement>) => void;
  lastName: string;
  handleLastName:(e:ChangeEvent<HTMLInputElement>) => void;
  age:string;
  handleAge:(e:ChangeEvent<HTMLInputElement>) => void;
  address:string;
  handleAddress:(e:ChangeEvent<HTMLInputElement>) => void;
  handleSignup:() => void;
}

const Register:FC<RegisterProps> = (props) => {
   const { 
    email, handleEmail,firstName,
    handleFirstName,
    lastName,
    handleLastName,
    age,
    handleAge,
    address,
    handleAddress,
    handleSignup
  } = props;

  return (
    <div>
        <form style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Enter Details</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input type='email' onChange={handleEmail} value={email} name="email" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>First Name:</label>
          <input type='text' onChange={handleFirstName} value={firstName} name="first" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Last Name:</label>
          <input type='text' onChange={handleLastName} value={lastName} name="last" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Age:</label>
          <input type="number" onChange={handleAge} value={age} name="age" style={{ marginLeft: '10px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address:</label>
          <input type='text' onChange={handleAddress} value={address} name="address" style={{ marginLeft: '10px' }} />
        </div>

        <button type="button" onClick={handleSignup} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign UP</button>
      </form>
    </div>
  )
}

export default Register
