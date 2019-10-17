import React from 'react'
import { Input, FormGroup, Row, Form, Label, Button} from 'reactstrap';
import './Newsletter.css'

const newsletter = (props) =>{

    return(
        <div className="newsletter-container">
            <Row className="text-container">
                <p>Compartilhe a novidade</p>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
            </Row>
            <Form onSubmit={props.sendEmail}>
                <Row>
                    <FormGroup className="newsletter-input">
                        <Label for="friendName">Nome do seu amigo:</Label>
                        <Input id="friendName" required></Input>
                    </FormGroup>
                    <FormGroup className="newsletter-input">
                        <Label id="friendEmail">E-mail:</Label>
                        <Input id="friendEmail" type="email" required></Input>
                    </FormGroup>
                </Row>
                <Row>
                    <Button type="submit" className="default-button newsletter-button">Enviar agora</Button>
                </Row>
            </Form>
        </div>
    )
}

export default newsletter