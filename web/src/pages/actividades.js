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
        <Row justify="center" gutter={16}>
          {state &&
            state.result &&
            state.result.map((item) => {
              return (
                <Col>
                  <Card
                    hoverable
                    style={{ width: 387, margin: 10 }}
                    cover={
                      <img
                        alt="example"
                        src={item.urlImage}
                        style={{ width: 387, height: 280 }}
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
                            Con este nivel de actividad fisica deberias de
                            consumir {item.consumoCaloriasDiaria.toFixed(2)}{" "}
                            kcal diariamente, para llegar a tu peso objetivo en{" "}
                            {item.dias} dias.
                          </div>
                          {/* <div>
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
                          </div> */}
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
