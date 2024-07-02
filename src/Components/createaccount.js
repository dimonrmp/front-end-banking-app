import { useContext, useState } from "react";
import { UserContext } from "../context";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function CreateAccount() {
  const { users, setUsers } = useContext(UserContext);
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label + ' is required.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    if (label === 'password' && field.length < 8 ) {
      setStatus('Error: password should be 8 or more caracters long.');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    setUsers([...users, ...[{ name, email, password, balance: 0, loggedIn: false, transactions: [] }]]);

    setShow(false);
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card style={{ width: '22rem', backgroundColor: 'lightblue' }}>
      <Card.Body>
        <Card.Title>Create a new account</Card.Title>
        <Card.Text>{
          show ? (
            <>
              Name<br />
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
              Email address<br />
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
              Password<br />
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
              <Button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name && !email && !password}>Create Account</Button>
            </>
          ) : (
            <>
              <h5>Account for {name} has been successfully created</h5>
              <Button type="submit" className="btn btn-light" onClick={clearForm}>Create another account</Button>
            </>
          )}
        </Card.Text>
        <Card.Subtitle>{status}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}