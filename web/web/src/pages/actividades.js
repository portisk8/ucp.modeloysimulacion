import React, { Component } from "react";
import { Button, Col, Row, Image } from "antd";
import { withRouter } from "react-router-dom";

class Actividades extends Component {
  render() {
    return (
      <div className = "e146_389">
          <div className="activitiesButtons" id = "activitiesButtons"> 
            <Col>
              <div><h1 style={{color:"white"}}>Escoge un plan en base a la cantidad de actividad fisica que estes dispuesto a realizar:</h1></div>
              <Button>Poco o ningun ejercicio</Button>
              <h6 style={{color:"white"}} >Con este nivel de actividad fisica deberias de consumir 858 kcal diariamente, considerablemente menos de las que consumes actualmente</h6>
              <Button>Ejercicio ligero (1-3 dias a la semana)</Button>
              <h6 style={{color:"white"}}>Con este nivel de actividad fisica deberias de consumir 1118.6 kcal diariamente. Recomendable para personas no habituadas a ejecitarse</h6>
              <Button>Ejercicio moderado (3-5 dias a la semana)</Button>
              <h6 style={{color:"white"}}>Con este nivel de actividad fisica deberias de consumir 1162.8 kcal diariamente</h6>
              <Button>Deportista (6-7 dias a la semana)</Button>
              <h6 style={{color:"white"}}>Deberias consumir aproximadamente 1209.7 kcal diariamente, no recomendable en caso para empezar</h6>
              <Button>Atleta (Entrenamiento mañana y tarde)</Button>
              <h6 style={{color:"white"}}>Con este nivel de actividad fisica deberias de consumir 1152.2 kcal diariamente</h6>
            </Col>
          </div>

        {/*Calorias Finales*/}
        <div id="Results" style={{display: "block"}}> 
          <div><br></br><h1 style={{color:"white"}}>Tus calorías a consumir son: 2,147 - 2,637 kcal</h1><br></br></div> 
          <Row style={{padding: 20}} justify="center">
            <Col span={4}>
                <Image width={180} src="./images/image_19.png" alt="Atleta"/>
                </Col>
              <Col span={4}>
                  <div>
                    <h3 style={{color:"white"}}>Mientras te mantengas en este rango, ganarás masa muscular de manera limpia.</h3>
                    <h3 style={{color:"white"}}>Todos los alimentos te aportan una cantidad de calorías, a través de una combinacion de proteínas, carbohidratos y grasa</h3>
                  </div>
              </Col>
          </Row>

        {/*Proteinas Finales*/}

          <div><br></br><h1 style={{color:"white"}}>Tu proteina a consumir son: 96 - 117 g</h1><br></br></div> 
          <Row style={{padding: 20}} justify="center">
            <Col span={4}>
                <Image width={180} src="../images/image_19.png" alt="Atleta"/>
                </Col>
              <Col span={4}>
                  <div>
                    <h3 style={{color:"white"}}>La proteina es esencial para desarrollar la masa muscular, especialmente cuando es combinada con entrenamientos de fuerza.</h3>
                    <h3 style={{color:"white"}}>Intenta mantenerte en este rango para maximizar los resultados</h3>
                  </div>
              </Col>
          </Row>
        
          <div><br></br><h1 style={{color:"white"}}>Recomendacion de plan alimenticio:</h1><br></br></div>
          <Row style={{padding: 20}} justify="center">
            <Col span={8}>
                <h3 style={{color:"white"}}>Opción A:</h3>
                <h3 style={{color:"white"}} >Opción B:</h3>
                <h3 style={{color:"white"}}>Opción C:</h3>
            </Col>
            <Col span={8}>

              <h3>Opción A:</h3>
              <h3>Opción B:</h3>
              <h3>Opción C:</h3>
            </Col>
          </Row>
      </div>
      </div>
    );
  }
}

export default withRouter(Actividades);
