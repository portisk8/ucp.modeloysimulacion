import React, { Component } from "react";
import { Button, Col, Row, Image, Card, Divider } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

const tiposDeComida = {
  1: [
    { title: "Copos de maíz", calorias: 350 },
    { title: "Pan de trigo blanco", calorias: 255 },
    { title: "Banana", calorias: 90 },
    { title: "Manzana", calorias: 52 },
    { title: "Frutilla", calorias: 36 },
    { title: "Huevo frito", calorias: 162 },
    { title: "Avena", calorias: 367 },
    { title: "Yogur Netural", calorias: 62 },
  ],

  2: [
    { title: "Banana", calorias: 90 },
    { title: "Manzana", calorias: 52 },
    { title: "Almendras", calorias: 620 },
    { title: "Mani", calorias: 560 },
    { title: "Nueces", calorias: 660 },
    { title: "Medialuna", calorias: 456 },
  ],

  3: [
    { title: "Arroz blanco", calorias: 354 },
    { title: "Bife de cerdo", calorias: 330 },
    { title: "Pollo", calorias: 134 },
    { title: "Polenta", calorias: 358 },
    { title: "Pasta al Huevo", calorias: 368 },
    { title: "Atun Enlatado", calorias: 203 },
    { title: "Hamburguesa", calorias: 140 },
    { title: "Milanesa de ternera", calorias: 194 },
    { title: "Espinaca", calorias: 32 },
    { title: "Tomate", calorias: 22 },
    { title: "Zanahoria", calorias: 42 },
    { title: "Calabacin", calorias: 31 },
    { title: "Lentejas", calorias: 336 },
  ],

  4: [
    { title: "Copos de maíz", calorias: 350 },
    { title: "Leche", calorias: 68 },
    { title: "Pastel de Manzana", calorias: 311 },
    { title: "Medialuna", calorias: 456 },
    { title: "Galletas saladas", calorias: 464 },
    { title: "Magdalenas", calorias: 469 },
    { title: "Jugo de Naranja", calorias: 42 },
  ],

  5: [
    { title: "Arroz blanco", calorias: 354 },
    { title: "Arroz integral", calorias: 350 },
    { title: "Polenta", calorias: 358 },
    { title: "Garbanzos", calorias: 361 },
    { title: "Judías", calorias: 343 },
    { title: "Lentejas", calorias: 336 },
    { title: "Polenta", calorias: 358 },
    { title: "Espinaca", calorias: 32 },
    { title: "Tomate", calorias: 22 },
    { title: "Zanahoria", calorias: 42 },
    { title: "Berenjena", calorias: 29 },
  ],
};

const calcular = function (cal, numComidas) {
  let comidas = [];
  if (numComidas == 3) {
    comidas.push({ key: 1, titulo: "Desayuno", valor: cal * 0.25 });
    comidas.push({ key: 3, titulo: "Almuerzo", valor: cal * 0.45 });
    comidas.push({ key: 5, titulo: "Cena", valor: cal * 0.3 });
  } else if (numComidas == 4) {
    comidas.push({ key: 1, titulo: "Desayuno", valor: cal * 0.2 });
    comidas.push({ key: 3, titulo: "Almuerzo", valor: cal * 0.4 });
    comidas.push({ key: 4, titulo: "Merienda", valor: cal * 0.1 });
    comidas.push({ key: 5, titulo: "Cena", valor: cal * 0.3 });
  } else {
    comidas.push({ key: 1, titulo: "Desayuno", valor: cal * 0.2 });
    comidas.push({ key: 2, titulo: "Media mañana", valor: cal * 0.1 });
    comidas.push({ key: 3, titulo: "Almuerzo", valor: cal * 0.3 });
    comidas.push({ key: 4, titulo: "Merienda", valor: cal * 0.1 });
    comidas.push({ key: 5, titulo: "Cena", valor: cal * 0.3 });
  }
  return comidas;
};

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

  getDataSource = () => {
    const { state } = this.props.location;
    const { itemSelected } = this.state;
    //TODO: obtener la cantidad de comidas del formulario
    let dataSource = calcular(itemSelected.consumoCaloriasDiaria.toFixed(2), 5);
    return dataSource;
  };

  getComidas = (key, calorias) => {
    var tipoComida = tiposDeComida[key];
    for (let index = 0; index < tipoComida.length; index++) {
      tipoComida[index].consumo = (calorias * 100) / tipoComida[index].calorias;
    }
    return tipoComida;
  };

  render() {
    const { state } = this.props.location;
    const { itemSelected } = this.state;
    console.log(this.props);
    return (
      <div className="body" style={{ textAlign: "center", padding: 20 }}>
        <h1 className="titulo" style={{ color: "white", fontSize: 50 }}>Selecciona tu rutina</h1>
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
                          <div className="subtitulo">
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
              <h1 className="titulo" style={{ color: "white", fontSize: 50 }}>
                Para el nivel: {itemSelected.actividadDescripcion}
              </h1>
              <Row justify="center">
                <Col span={16}>
                  <div className="subtitulo" style={{ color: "white", fontSize: 20 }}>
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
              <Row
                justify="center"
                style={{ color: "white", marginTop: 40, marginBottom: 40 }}
              >
                {this.getDataSource().map((item) => {
                  return (
                    <Col span={4} style={{ border: "1px solid white" }}>
                      <div className="subtitulo" > {item.titulo} </div>
                      <hr style={{ border: "1px solid white", width: "70%" }} />
                      <div className="subtitulo"> Consumo: {item.valor.toFixed(2)} kcal. </div>
                      <hr style={{ border: "1px solid white", width: "70%" }} />
                      <div className="subtitulo">
                        {" "}
                        {this.getComidas(item.key, item.valor).map((comida) => {
                          return (
                            <div>
                              {comida.title} ({comida.calorias}) ={" "}
                              {comida.consumo.toFixed(2)} gr.
                            </div>
                          );
                        })}{" "}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </div>
        <div>
          <Button
            size="large"
            type={"primary"}
            onClick={() => this.props.history.push("/formulario")}
            style={{ margin: 10, backgroundColor:"#DE99B4", color: "white" }}
          >
            {" "}
            Volver a calcular
          </Button>
          <Button
            size="large"
            type={"primary"}
            onClick={() => this.props.history.push("/")}
            style={{ margin: 10, backgroundColor:"#DE99B4", color: "white" }}
          >
            {" "}
            Volver al Home
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Actividades);
