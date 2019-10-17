import React from 'react'
import {  Row, Button} from 'reactstrap';
import './Products.css'
import Product from './Product/Product'

const products = (props) =>{
    return(
        <div className="content">
            {props.list.map((element) => {
                return(
                    <Product data={element}/>
                )
            })}
            <Row>
                <Button className="default-button next-button" onClick={props.nextPage}>Ainda mais produtos aqui!</Button>
            </Row>
        </div>
    )
}

export default products