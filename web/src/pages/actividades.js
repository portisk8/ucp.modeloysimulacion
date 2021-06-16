import React, { Component } from "react";
import { Button, Col, Row, Image, Card } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;
class Actividades extends Component {
  render() {
    const { state } = this.props.location;
    console.log(this.props);
    return (
      <div className="body" style={{ textAlign: "center", padding: 20 }}>
        <Row justify="center">
          {state &&
            state.result &&
            state.result.map((item) => {
              return (
                <Col>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://image.shutterstock.com/image-photo/handsome-stylish-young-man-sitting-260nw-792091585.jpg"
                      />
                    }
                  >
                    <Meta
                      title={
                        <div style={{ overflowWrap: "break-word" }}>
                          {item.actividadDescripcion}
                        </div>
                      }
                      description={
                        <div>
                          <div>
                            consumoCaloriasDiaria: {item.consumoCaloriasDiaria}
                            <br />
                            consumoCaloriasTotal: {item.consumoCaloriasTotal}
                            <br />
                            dias: {item.dias}
                            <br />
                            diferenciaPeso: {item.diferenciaPeso}
                            <br />
                            tmb: {item.tmb}
                            <br />
                            tmbDias: {item.tmbDias}
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  }
}

export default withRouter(Actividades);
