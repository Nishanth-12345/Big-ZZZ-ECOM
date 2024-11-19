import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import Register from './pages/register';

const RegisterContainer: FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstName, setFirstName] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [astNameError, setLastNameError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [image, setImage] = useState(null);

  const minLength = 3;
  const maxLength = 50;


  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);
  const handleAge = (e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value);
  const handleaddress = (e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFirstName = (firstName: string) => {
    const firstNameRegex = /^[a-zA-Z_ ]*$/;
    return firstNameRegex.test(firstName);
  };

  const validateLastName = (lastName: string) => {
    const lastNameRegex = /^[a-zA-Z_ ]*$/;
    return lastNameRegex.test(lastName);
  };


  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9-+ ]+$/;
    return phoneRegex.test(phone);
  };

  const handleSignup = () => {
    let isValid = true;
    if (!email) {
      setEmailError('email address cannot be blank');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('please enter a valid email address');
      isValid = false;
    } else if (email.length > maxLength) {
      setEmailError('Email cannot exceed ' + maxLength + ' characters.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!firstName) {
      setFirstNameError('First name cannot be blank');
      isValid = false;
    } else if (!validateFirstName(firstName)) {
      setFirstNameError('Please enter a valid first name.');
      isValid = false;
    } else if (firstName.length > maxLength) {
      setFirstNameError('firstname cannot exceed ' + maxLength);
      isValid = false;
    } else if (firstName.length < minLength) {
      setFirstNameError('firstname must be at least ' + maxLength);
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setFirstNameError('last name cannot be blank');
      isValid = false;
    } else if (!validateLastName(firstName)) {
      setLastNameError('Please enter a valid Last name.');
      isValid = false;
    } else if (lastName.length > maxLength) {
      setLastNameError('Lastname cannot exceed ' + maxLength);
      isValid = false;
    } else if (lastName.length < minLength) {
      setFirstNameError('Lastname must be at least ' + maxLength);
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (!address) {
      setAddressError('address Line 1 cannot be blank.');
      isValid = false;
    } else if (address.length > maxLength) {
      setAddressError('address Line 1 cannot exceed ' + maxLength + ' characters.')
      isValid = false;
    } else if (address.length < minLength) {
      setAddressError('address Line 1 must be at least ' + minLength + ' characters long.')
      isValid = false;
    } else {
      setAddressError('');
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  }




  return (
    <div>
      <Register
        email={email}
        firstName={firstName}
        lastName={lastName}
        age={age}
        address={address}
        handleEmail={handleEmail}
        handleAddress={handleaddress}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleAge={handleAge}
        handleSignup={handleSignup}
      />
    </div>
  )
}

export default RegisterContainer;
