import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className = "body">
        <Row>
          <Col span={24} style={{marginTop: "15%" ,marginBottom: "17%", justifyContent: 'space-between'}}>
              <h1 style={{color:"white", fontSize: 60}}>Dietips</h1>
              <h2 style={{color:"white", fontSize: 30}}>Alcanza tu peso ideal,comiendo tus platos favoritos.</h2>
              <h2 style={{color:"white", fontSize: 30, marginBottom: "2%"}}>¿Qué esperás?</h2>
              <Button shape="round" style={{height: "auto", width: "auto", fontSize: 30}} onClick={() => this.props.history.push("/formulario")}>Consigue tu plan</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(HomePage);