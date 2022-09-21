import React from "react";
import { Card } from "react-bootstrap";

export const Product = ({product}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}
                </Card.Text> 
            </Card.Body>
        </Card>
    )
}