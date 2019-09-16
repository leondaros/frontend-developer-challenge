import React, { Component } from 'react';
import { Button ,Navbar ,Container, Row, Label, FormGroup, Input, Card, CardImg, CardText,
  CardTitle, CardSubtitle} from 'reactstrap';
import './App.css';

const initialState = {
  content: [],
  nextPage: ""
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  componentWillMount = () =>{
    this.loadFromApi("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
  }

  loadFromApi = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({content: this.state.content.concat(data.products), nextPage: "https://"+data.nextPage})
    });
  }

  render() {
    return (
      <div>
        <Navbar className="header">
          <Row className="text-container">
            <p>uma seleção de produtos</p>
            <h1>especial para você</h1>
            <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
          </Row>
          <Row>
            <Button className="default-button">Conheça a Linx</Button>
            <Button className="default-button">Ajude o algorítimo</Button>
            <Button className="default-button">Seus produtos</Button>
            <Button className="default-button">Compartilhe</Button>
          </Row>
        </Navbar>
        <Container>
          <Row>
            <p className="container-title">Sua seleção especial</p>
          </Row>
          <Row>
            <div className="content">
            {this.state.content.map((product,index) => {
              return(
                <Card key={product.id}>
                  <CardImg top width="100%" src={product.image} alt="Card image cap" />
                  <div className="card-content">
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CardSubtitle>De: R${product.oldPrice}</CardSubtitle>
                    <CardSubtitle className="card-price">Por: R${product.price}</CardSubtitle>
                    <CardSubtitle>ou {product.installments.count}x de R${product.installments.value}</CardSubtitle>
                    <Button className="card-button default-button">Comprar</Button>
                  </div>
                </Card>
              )
            })}
              <Row>
                <Button className="default-button next-button" onClick={() => this.loadFromApi(this.state.nextPage)}>Ainda mais produtos aqui!</Button>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="newsletter-container">
              <Row className="text-container">
                <p>Compartilhe a novidade</p>
                <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
              </Row>
              <Row>
                <FormGroup className="newsletter-input">
                  <Label>Nome do seu amigo:</Label>
                  <Input></Input>
                </FormGroup>
                <FormGroup className="newsletter-input">
                  <Label>E-mail:</Label>
                  <Input type="email"></Input>
                </FormGroup>
              </Row>
              <Row>
                <Button className="default-button newsletter-button">Enviar agora</Button>
              </Row>
            </div>
          </Row>
        </Container>
        <Navbar className="footer">
          <Row className="text-container">
            <p>Testando suas habilidades em HTML, CSS e JS.</p>
            <p>Linx Impulse</p>
            <p>2019</p>
          </Row>
        </Navbar>
      </div>
    );
  }
}

export default App;
