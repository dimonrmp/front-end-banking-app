import Card from 'react-bootstrap/Card';
import bankImage from "./bank.png"

import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
    return (
        <Card style={{ width: '24rem', backgroundColor: 'lightblue' }}>
            <Card.Img variant="top" src={bankImage} />
            <Card.Body>
                <Card.Title>Welcome to the bank</Card.Title>
                <Card.Text>
                    You can move around using the navigation bar.
                    <br/>To see the full list of available menu items, please log in to the app.
                    <br/>The list of registered accounts is available on 'All data' page.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}


