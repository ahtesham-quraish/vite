import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Fake login logic (replace with real API call)
    if (email === 'user@example.com' && password === 'password123') {
      setSuccess('Login successful!');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: 'auto' }}>
      <h2>Login</h2>

      <div style={{ marginBottom: 10 }}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
          required
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <button type="submit" style={{ padding: '8px 16px' }}>
        Login
      </button>
    </form>
  );
}
