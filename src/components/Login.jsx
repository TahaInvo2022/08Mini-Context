import React, { useState, useContext } from 'react'
import UserContxt from '../context/userContext';

function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContxt);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({
            username: name,
        })
    }

  return (
      <div>
          <h2>Login</h2>
          <input type="text" placeholder='username' onChange={(e) => setName(e.target.value)} value={name} />
          {"    "}
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}  value={password}/>
          <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login