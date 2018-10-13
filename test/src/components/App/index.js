import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Button,
  Grid,
  Well,
  Row,
  Alert,
  FormControl,
  FormGroup,
  ControlLabel
} from 'react-bootstrap';
import { sendEchoText } from '../../actions';
import './App.css';

class App extends Component {

  state = {
    currentText: '',
    emptyText: false
  }

  handleOnClick = event => {
    if(!this.state.currentText) return this.setState({ emptyText: true });
    this.props.sendEcho(this.state.currentText);
  }

  handleOnChange = event => {
    const { value } = event.target;
    if(!value) this.setState({ emptyText: true });
    else this.setState({ emptyText: false });
    this.setState({ currentText: value });
  }

  render() {
    return (
      <Grid>
         <div className="App gradient">
          <div className="App-body">
            <Row xs={12} className="show-grid App-row ">
              <FormGroup
                controlId="textForm"
              >
                <ControlLabel>Texto</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.currentText}
                  placeholder="Escribir texto"
                  onChange={this.handleOnChange}
                />
                <FormControl.Feedback />
              </FormGroup>
            </Row>
            <Row xs={12} className="show-grid App-row">
              <Button  bsStyle="primary" onClick={this.handleOnClick}> Mandar texto </Button>
            </Row>
            <Row xs={12} className="show-grid App-row">
              { this.state.emptyText && (
                <Alert bsStyle="warning">
                  <strong>No puedes mandar mensajes vacios</strong>
                </Alert>
                )}
            </Row>
            <Row xs={12} className="show-grid App-row">
              <Well>RESPUESTA DE LA API: {JSON.stringify(this.props.echoReducer.text)}</Well>
            </Row>
              
          </div>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  sendEcho: txt => dispatch(sendEchoText(txt))
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
