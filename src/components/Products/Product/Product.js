import React from 'react'
import {  Card, CardImg, CardText, CardTitle, CardSubtitle,Button} from 'reactstrap';
import './Product.css'

const product = (props) =>{
    return(
        <Card key={props.data.id}>
            <CardImg top width="100%" src={props.data.image} alt="Card image cap" />
            <div className="card-content">
                <CardTitle>{props.data.name}</CardTitle>
                <CardText>{props.data.description}</CardText>
                <CardSubtitle>De: R${props.data.oldPrice}</CardSubtitle>
                <CardSubtitle className="card-price">Por: R${props.data.price}</CardSubtitle>
                <CardSubtitle>ou {props.data.installments.count}x de R${props.data.installments.value}</CardSubtitle>
                <Button className="card-button default-button">Comprar</Button>
            </div>
        </Card>
    )
}

export default product