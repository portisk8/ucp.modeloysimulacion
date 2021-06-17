import React, { Component } from "react";
import { Button, Col, Row } from "antd";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className = "body">
        <Row>
          <Col span={24} style={{marginTop: "1%", marginBottom:"1%"}}>
              <div className="dietips" >
                <h1 style={{color:"white", fontSize: 170, color: "#DE99B4", }}>Dietips</h1>
              </div>
              <div className="subtitulo">
                <h2 style={{color:"white", fontSize: 24, font: "s"}}>Dietips es una herramienta con la cual podrás conocer la cantidad de calorías que deberías consumir a diario, para conseguir tu peso deseado, en el tiempo que desees.</h2>
                <h2 style={{color:"white", margin:"2%", fontSize: 24}}>Podrás elegir la cantidad de actividad física que te gustaría realizar para alcanzar el peso que deseas.</h2>
                <h2 style={{color:"white", fontSize: 24}}>Además, te recomendara diferentes tipos de alimentos, en las cantidades en las que deberías consumirlos a diario, para cumplir con tu dieta y lograr tu objetivo. </h2>
                <h2 className="titulo" style={{color:"white", fontSize: 40, marginTop:"6%" ,marginBottom: "1%"}}>Cambia tu estilo de vida y tu cuerpo de forma saludable!</h2>
                <h2 className="titulo" style={{color:"white", fontSize: 48, marginBottom: "2%"}}>¿Qué esperas?</h2>
                <Button shape="round" style={{height: "auto", width: "auto", fontSize: 30, backgroundColor:"#DE99B4", color: "white"}} onClick={() => this.props.history.push("/formulario")}>Consigue tu plan</Button>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(HomePage);