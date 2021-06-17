import React, { Component } from "react";
import { Button, Col, Row, Image, Card, Divider } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

const tiposDeComida = {
  1: [
    {
      title: "Copos de maíz",
      calorias: 350,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Pan de trigo blanco",
      calorias: 255,
      aptoDiabeticos: false,
      aptoCeliacos: false,
      vegano: true,
    },
    {
      title: "Banana",
      calorias: 90,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Manzana",
      calorias: 52,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Frutilla",
      calorias: 36,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Huevo frito",
      calorias: 162,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: false,
    },
    {
      title: "Avena",
      calorias: 367,
      aptoDiabeticos: true,
      aptoCeliacos: false,
      vegano: true,
    },
    {
      title: "Yogur Natural",
      calorias: 62,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
  ],

  2: [
    {
      title: "Banana",
      calorias: 90,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Manzana",
      calorias: 52,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Almendras",
      calorias: 620,
      aptoDiabeticos: true,
      aptoCeliacos: false,
      vegano: true,
    },
    {
      title: "Mani",
      calorias: 560,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Nueces",
      calorias: 660,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Medialuna",
      calorias: 456,
      aptoDiabeticos: false,
      aptoCeliacos: false,
      vegano: true,
    },
  ],

  3: [
    {
      title: "Arroz blanco",
      calorias: 354,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Bife de cerdo",
      calorias: 330,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: false,
    },
    {
      title: "Pollo",
      calorias: 134,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: false,
    },
    {
      title: "Polenta",
      calorias: 358,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Pasta al Huevo",
      calorias: 368,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: false,
    },
    {
      title: "Atun Enlatado",
      calorias: 203,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: false,
    },
    {
      title: "Hamburguesa",
      calorias: 140,
      aptoDiabeticos: true,
      aptoCeliacos: false,
      vegano: false,
    },
    {
      title: "Milanesa de ternera",
      calorias: 194,
      aptoDiabeticos: true,
      aptoCeliacos: false,
      vegano: false,
    },
    {
      title: "Espinaca",
      calorias: 32,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Tomate",
      calorias: 22,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Zanahoria",
      calorias: 42,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Calabacin",
      calorias: 31,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Lentejas",
      calorias: 336,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
  ],

  4: [
    {
      title: "Copos de maíz",
      calorias: 350,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Leche",
      calorias: 68,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: false,
    },
    {
      title: "Pastel de Manzana",
      calorias: 311,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Medialuna",
      calorias: 456,
      aptoDiabeticos: false,
      aptoCeliacos: false,
      vegano: true,
    },
    {
      title: "Galletas saladas",
      calorias: 464,
      aptoDiabeticos: true,
      aptoCeliacos: false,
      vegano: true,
    },
    {
      title: "Magdalenas",
      calorias: 469,
      aptoDiabeticos: false,
      aptoCeliacos: false,
      vegano: true,
    },
    {
      title: "Jugo de Naranja",
      calorias: 42,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
  ],

  5: [
    {
      title: "Arroz blanco",
      calorias: 354,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Arroz integral",
      calorias: 350,
      aptoDiabeticos: false,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Polenta",
      calorias: 358,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Garbanzos",
      calorias: 361,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Judías",
      calorias: 343,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Lentejas",
      calorias: 336,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Espinaca",
      calorias: 32,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Tomate",
      calorias: 22,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Zanahoria",
      calorias: 42,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
    {
      title: "Berenjena",
      calorias: 29,
      aptoDiabeticos: true,
      aptoCeliacos: true,
      vegano: true,
    },
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
    let dataSource = calcular(
      itemSelected.consumoCaloriasDiaria.toFixed(2),
      parseInt(state.sendData.cantidadComidas)
    );
    return dataSource;
  };

  getComidas = (key, calorias) => {
    const { state } = this.props.location;
    let isCeliaco = state.sendData.celiaco;
    let isVegan = !state.sendData.diabetico;
    let isDiabet = state.sendData.celiaco;
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
        <h1 className="titulo" style={{ color: "white", fontSize: 50 }}>
          Selecciona tu rutina
        </h1>
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
                  <div
                    className="subtitulo"
                    style={{ color: "white", fontSize: 20 }}
                  >
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
                      <div className="subtitulo"> {item.titulo} </div>
                      <hr style={{ border: "1px solid white", width: "70%" }} />
                      <div className="subtitulo">
                        {" "}
                        Consumo: {item.valor.toFixed(2)} kcal.{" "}
                      </div>
                      <hr style={{ border: "1px solid white", width: "70%" }} />
                      <div className="subtitulo">
                        {" "}
                        {this.getComidas(item.key, item.valor).map((comida) => {
                          return (
                            <div>
                              {comida.title} = {comida.consumo.toFixed(2)} gr.
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
            style={{ margin: 10, backgroundColor: "#DE99B4", color: "white" }}
          >
            {" "}
            Volver a calcular
          </Button>
          <Button
            size="large"
            type={"primary"}
            onClick={() => this.props.history.push("/")}
            style={{ margin: 10, backgroundColor: "#DE99B4", color: "white" }}
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
