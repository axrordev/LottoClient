import { useState } from 'react';

const AdminLogIn = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
		setPassword('')
		setUsername('')

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Foydalanuvchi nomi"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Kirish</button>
    </form>
  );
};

export default AdminLogIn;
