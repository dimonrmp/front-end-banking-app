import { useContext } from "react";
import { UserContext } from "../context";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

export default function AllData() {
  const { users } = useContext(UserContext);

  function loggedInUser() {
    return users.find(u => u.loggedIn === true) || false;
  };

  //if (!loggedInUser()) {
  return (<>
    <Card style={{ width: '42rem', backgroundColor: 'lightblue' }}>
      <Card.Body>
        <Card.Title>All users registered in the app:</Card.Title>
        <Card.Text>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
                <th>Logged in?</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (<>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>$ {user.balance}</td>
                    <td>{user.loggedIn ? 'Yes' : 'No'}</td>
                  </tr>
                </>)
              })}
            </tbody>
          </Table >
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
    {/* </>)
  } else {
    return (<> */}
    <Card style={{ width: '42rem', backgroundColor: 'lightblue' }}>
      <Card.Body>
        <Card.Title>{loggedInUser().name}'s transactions during the session:</Card.Title>
        <Card.Text>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Time</th>
                <th>Operation</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {loggedInUser()?.transactions?.map((t, index) => {
                return (<>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{t.time}</td>
                    <td>{t.operation}</td>
                    <td>$ {t.amount}</td>
                    <td>$ {t.balance}</td>
                  </tr>
                </>)
              })}
            </tbody>
          </Table >
        </Card.Text>
      </Card.Body>
    </Card>
  </>)
  // }
};
