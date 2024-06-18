import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import { UserContext } from "../context";

export default function Withdraw() {
  const { users, setUsers } = useContext(UserContext);
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState('');

  function loggedInUser() {
    return users.find(u => u.loggedIn);
  }

  function handleWithdraw() {
    if (amount <= 0) {
      setStatus('Error: Withdraw amount should be a positive number.');
      setTimeout(() => clearForm(), 3000);
      return false;
    }
    if (amount > loggedInUser().balance) {
      setStatus('Error: Withdraw amount should not exceed your current balance.');
      setTimeout(() => clearForm(), 3000);
      return false;
    }
    let newUsers = users.map(user => {
      if (user.email === loggedInUser().email) {
        user.balance -= Number(amount);
        user.transactions.push({ time: new Date().toLocaleTimeString(), operation: 'withdrawal', amount: amount, balance: user.balance });
      }
      return user;
    })
    setUsers(newUsers)
    setStatus('Success: your withdrawal has been processed.');
    setTimeout(() => clearForm(), 2000);
  }

  function clearForm() {
    setAmount('');
    setStatus('');
  }

  return (
    <Card style={{ width: '22rem', backgroundColor: 'lightblue' }}>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>
          Current balance: ${loggedInUser().balance}<br /><br />
          <input type="number" className="form-control" id="amount" placeholder="Enter withdraw amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />
          <Button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!amount}>Withdraw</Button>
        </Card.Text>
        <Card.Subtitle>{status}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}