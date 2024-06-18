// import { useAuth } from './AuthContext';

import { useContext, useState } from "react";
import { UserContext } from "../context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Login() {

  const { users, setUsers } = useContext(UserContext);
  // const { isAuthenticated, login, logout } = useAuth();
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label + ' is required.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    users.forEach(u => ({ ...u, loggedIn: false }));
    // logout();
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    let guestIndex = users.findIndex(u => u.email === email && u.password === password);

    if (guestIndex >= 0) {
      users[guestIndex].loggedIn = true;
      setUsers([...users]);
      console.log(email, password);
      // login();
    }
    else {
      setStatus('Error: Wrong username or password.');
      setTimeout(() => { clearForm() }, 3000);
    }
    setShow(false);
  }

  function clearForm() {
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('');
  }

  return (
    <Card style={{ width: '22rem', backgroundColor: 'lightblue' }}>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Text>{
          show ? (
            <>
              Email address<br />
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
              Password<br />
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
              <Button type="submit" className="btn btn-light" onClick={handleLogin}>Login</Button>
            </>
          ) : (
            <>
              {<h5>Welcome to the Bad Bank!</h5>}
              <Button type="submit" className="btn btn-light" onClick={clearForm}>Login with another account</Button>
            </>
          )}
        </Card.Text>
        <Card.Subtitle>{status}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}