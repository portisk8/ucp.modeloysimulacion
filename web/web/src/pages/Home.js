import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>

        <Row>
          <Col span={24} style={{ fontSize: 34 ,textAlign: "center"}}>DIETIPS</Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "center", fontSize: 24 }}>
            Alcanza tu peso ideal,comiendo tus platos favoritos.
            <br />
            ¿Qué esperás?
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => this.props.history.push("/formulario")}>
              Consigue tu plan
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(HomePage);
