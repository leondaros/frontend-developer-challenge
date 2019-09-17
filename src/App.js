import React, { Component } from 'react';
import { Button ,Navbar ,Container, Row} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Newsletter from './components/Newsletter/Newsletter'
import Products from './components/Products/Products'

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

  sendEmail = (event) =>{
    toast.success('🚀 E-mail enviado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
    event.preventDefault();
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
            <Button href="https://www.linx.com.br/" className="default-button">Conheça a Linx</Button>
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
            <Products list={this.state.content} nextPage={() =>this.loadFromApi(this.state.nextPage)}/>
          </Row>
          <Row>
            <Newsletter sendEmail={this.sendEmail}/>
            <ToastContainer />
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
