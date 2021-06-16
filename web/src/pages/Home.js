import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className = "e146_389">

        <Row>
          <Col>
            <div className = "e146_390">
              Dietips
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="e146_391">
              Alcanza tu peso ideal,comiendo tus platos favoritos.
            </div>
            <div className="e146_392">
              ¿Qué esperás?
            </div>
            <br />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className = "e146_393">
              <Button onClick={() => this.props.history.push("/formulario")}>
              Consigue tu plan
            </Button>
            </div>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(HomePage);
