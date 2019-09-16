import React, { Component } from 'react';
import { Button ,Navbar ,Container, Row, Label, FormGroup, Input, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

const initialState = {
  content: [],
  currentPage: "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
  nextPage: ""
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
  }

  componentWillMount = () =>{
    this.loadFromApi(this.state.currentPage)
  }

  loadFromApi = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({content: data.products, nextPage: data.nextPage})
      console.log(data)
    });
  }

  render() {
    return (
      <div>
        <Navbar className="header">
          <Row className="text-container">
            <p>uma seleção de produtos</p>
            <h2>especial para você</h2>
            <h5>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h5>
          </Row>
          <Row className="header-buttons">
            <Button>Conheça a Linx</Button>
            <Button>Ajude o algorítimo</Button>
            <Button>Seus produtos</Button>
            <Button>Compartilhe</Button>
          </Row>
        </Navbar>
        <Container>
          <Row>
            <p>Sua seleção especial</p>
          </Row>
          <Row>
            <div className="content">
            {this.state.content.map(product => {
              return(
                <Card>
                  <CardImg top width="100%" src="//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399" alt="Card image cap" />
                  <div className="card-content">
                    <CardTitle>Nome do produto</CardTitle>
                    <CardText>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</CardText>
                    <CardSubtitle>De: R$23,99</CardSubtitle>
                    <CardSubtitle>Por: R$19,99</CardSubtitle>
                    <CardSubtitle>ou 2x de R$9,99</CardSubtitle>
                    <Button className="card-button">Comprar</Button>
                  </div>
                </Card>
              )
            })}
            </div>
          </Row>
          <Row className="newsletter-container">
            <div className="newsletter">
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
                  <Input></Input>
                </FormGroup>
              </Row>
              <Row>
                <Button>Enviar agora</Button>
              </Row>
            </div>
          </Row>
        </Container>
        <Navbar className="footer">
          <Row className="text-container">
            <p>Testando suas habilidades em HTML, CSS e JS. Linx Impulse 2019</p>
          </Row>
        </Navbar>
      </div>
    );
  }
}

export default App;
