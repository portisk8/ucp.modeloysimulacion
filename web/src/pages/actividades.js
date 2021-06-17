import React, { Component } from "react";
import { Button, Col, Row, Image, Card } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;
class Actividades extends Component {
  state = {
    itemSelected: null,
  };

  selectCard = (item) => {
    this.myRef = React.createRef();
    const { state } = this.props.location;
    this.setState({ itemSelected: item }, () => {
      this.myRef.current.scrollIntoView();
    });
  };

  obtenerObjetivoDescripcion = (peso, pesoObjetivo) => {
    if (peso < pesoObjetivo) return "ganar";
    else if (peso > pesoObjetivo) return "perder";
    else return "mantener tu";
  };

  render() {
    const { state } = this.props.location;
    const { itemSelected } = this.state;
    console.log(this.props);
    return (
      <div className="body" style={{ textAlign: "center", padding: 20 }}>
        <h1 style={{ color: "white", fontSize: 50 }}>Selecciona tu rutina</h1>
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
                    onClick={() => this.selectCard(item)}
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
        <div ref={this.myRef} style={{ color: "white" }}>
          {itemSelected && (
            <div>
              <h1 style={{ color: "white", fontSize: 50 }}>
                Para el nivel: {itemSelected.actividadDescripcion}
              </h1>
              <Row justify="center">
                <Col span={16}>
                  <div style={{ color: "white", fontSize: 20 }}>
                    Deberás consumir{" "}
                    {itemSelected.consumoCaloriasDiaria.toFixed(2)} kcal.
                    diarias para poder{" "}
                    <strong>
                      {this.obtenerObjetivoDescripcion(
                        state.sendData.peso,
                        state.sendData.pesoObjetivo
                      )}{" "}
                      peso
                    </strong>
                    .
                    <br />
                    Para esto, te presentamos el siguiente plan alimenticio:
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Actividades);
