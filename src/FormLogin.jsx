import React, { useState } from 'react';
import { useUser } from './UserContext';

const FormLogin = () => {
  const { setUser } = useUser();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    setUser({ name, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>submit</button>
    </div>
  );
};

export default FormLogin;