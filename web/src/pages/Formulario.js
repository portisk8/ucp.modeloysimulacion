import { Row,Col,Form,Input,Button,Select,InputNumber,Checkbox,Image, } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const plainOptions = ["Diabetes", "Sobrepeso"];
const plainOptions2 = ["Celiaquia", "Aterosclerosis"];
const plainOptions3 = ["Anorexia", "Bulimia"];
const activies = document.getElementById("activitiesButtons");
const results = document.getElementById("Results");


var desMMerienda =
  '{ "desayuno" : [' +
  '{ "alimento":"Pan integral" , "Calorias":"176,8" },' +
  '{ "alimento":"Queso fresco" , "Calorias":"49,5" },' +
  '{ "alimento":"Tomate" , "Calorias":"43,9" } ]}';

var almuerzo =
  '{ "almuerzo" : [' +
  '{ "alimento":"Albóndigas" , "Calorias":"202" },' +
  '{ "alimento":"Arroz frito" , "Calorias":"186" },' +
  '{ "alimento":"Arroz integral" , "Calorias":"362" } ]}';

var cena =
  '{ "cena" : [' +
  '{ "alimento":"Albóndigas" , "Calorias":"202" },' +
  '{ "alimento":"Arroz frito" , "Calorias":"186" },' +
  '{ "alimento":"Arroz integral" , "Calorias":"362" } ]}';

desMMerienda = JSON.parse(desMMerienda);
almuerzo = JSON.parse(almuerzo);
cena = JSON.parse(cena);

console.log(almuerzo);

function calcular(cal, numComidas) {
  if ((numComidas = 3)) {
    var d = cal * 0.25;
    var a = cal * 0.45;
    var c = cal * 0.3;
    var calxcomida = { d, a, c };
    return calxcomida;
  } else if ((numComidas = 4)) {
    var d = cal * 0.2;
    var a = cal * 0.4;
    var m = cal * 0.1;
    var c = cal * 0.3;
    calxcomida = { d, a, m, c };
    return calxcomida;
  } else {
    var d = cal * 0.2;
    var mm = cal * 0.1;
    var a = cal * 0.3;
    var m = cal * 0.1;
    var c = cal * 0.3;
    var calxcomida = { d, mm, a, m, c };
    return calxcomida;
  }
}

class FormularioPage extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    // console.log(almuerzo);
    // this.props.history.push("/actividades");
    // let body = {
    //   peso: values.pesoActual,
    //   edad: values.edad,
    //   altura: values.estatura,
    //   sexo: values.sexo,
    //   pesoObjetivo: values.pesoObjetivo,
    //   diasCantidad: values.diasParaPesObjetivo,
    // };
    let body = {
      altura: 100,
      diasCantidad: 30,
      edad: 32,
      peso: 75,
      pesoObjetivo: 70,
      sexo: "M",
    };

    console.log(body);
    axios.post(`http://localhost:3600/api/simula/simular`, body).then((res) => {
      console.log(res);
      console.log(res.data);
      this.props.history.push({
        pathname: "/actividades",
        state: res.data, // your data array of objects
      });
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className = "body">
          <Row>
          <Col span={24} style={{marginTop: "1%", marginBottom:"1%", justifyContent: 'space-between'}}>
              <h1 style={{color: "white" }}>Ingrese los siguientes datos:</h1>
              <Form
              name="basic"
              layout={"vertical"}
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              style={{ textAlign: "center", color: "white" }}
              size={"large"}
              >
                <Row justify="center" style={{marginTop: "3%", marginLeft: "5%"}}>
                  <Col style={{textAlign: "center"}} span={3}>
                    <div>¿Cual es su Sexo?</div>
                    <Form.Item
                      hasFeedback
                      name="sexo"
                      rules={[{ required: true, message: "Campo obligatorio!" }]}
                      style={{margin: "5%"}}
                    >
                      <Select allowClear>
                        <Select.Option value="M">Masculino</Select.Option>
                        <Select.Option value="F">Femenino</Select.Option>
                      </Select>
                    </Form.Item>
      
                    <div>¿Cual es su Peso actual?</div>
                    <Form.Item name="pesoActual" noStyle>
                      <InputNumber min={20} max={300} style={{margin: "5%"}}/>
                    </Form.Item>
      
                    <div>¿Cual es su Estatura?</div>
                    <Form.Item name="estatura" noStyle>
                      <InputNumber min={1} max={250} style={{margin: "5%"}}/>
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <div>¿Cual es su Edad?</div>
                    <Form.Item name="edad" noStyle>
                      <InputNumber min={1} max={100} style={{margin: "3%"}}/>
                    </Form.Item>
                    <div>¿Cual es su Peso Objetivo?</div>
                    <Form.Item name="pesoObjetivo" noStyle>
                      <InputNumber min={1} max={300} style={{margin: "3%"}}/>
                    </Form.Item>
                    <div>¿En cuantos dias pretende conseguir su peso objetivo?</div>
                    <Form.Item name="diasParaPesObjetivo" noStyle>
                      <InputNumber min={1} max={100} style={{margin: "3%"}}/>
                    </Form.Item>
                  </Col>
                </Row>

                <Row justify="center" style={{marginTop:"1%"}}>
                  <div style={{padding: 20}}>
                  <h1 style={{ color: "white" }}>Indique si padece de alguna de las siguientes enfermedades</h1>
                  </div>
                </Row>

                <Row justify="center">
                  <Col style={{ textAlign: "center"}}>
                    <Row>
                      <Col span={12}>
                        <Checkbox value= "Diabetes"><h1 style={{ color:"white" }}>Diabetes</h1></Checkbox>
                      </Col>
                      <Col>
                        <Checkbox value= "Sobrepeso"><h1 style={{ color:"white" }}>Sobrepeso</h1></Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox value= "Celiaquia"><h1 style={{ color:"white" }}>Celiaquia</h1></Checkbox>
                      </Col>
                      <Col>
                        <Checkbox value= "Bulimia"><h1 style={{ color:"white" }}>Bulimia</h1></Checkbox>
                      </Col>
                    </Row>
                  </Col>
                </Row>


                <Row justify="center" style={{marginTop:"2%"}}>
                  <h1 style={{ color: "white" }}>¿Cuales son tus habitos alimenticios?</h1>
                </Row>

                <Row justify="center" style={{marginTop:"1%"}}>
                    <Col span={4} style={{padding: "1%"}}>
                      <div>Numero de Comidas Diarias</div>
                      <Form.Item
                        hasFeedback
                        rules={[{ required: true, message: "Campo obligatorio!" }]}
                      >
                        <Select allowClear>
                          <Select.Option value="3">3</Select.Option>
                          <Select.Option value="4">4</Select.Option>
                          <Select.Option value="5">5</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={4} style={{padding: "1%"}}>
                      <div>¿Consumis Carne?</div>
                      <Form.Item
                        hasFeedback
                        rules={[{ required: true, message: "Campo obligatorio!" }]}
                      >
                        <Select allowClear>
                          <Select.Option value="Y">Si</Select.Option>
                          <Select.Option value="N">No</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>

                </Row>

                <Button id="calcular" shape="round" style={{height: "auto", width: "auto", fontSize: 30}} type="primary" htmlType="submit">Calcular</Button>
              
              </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(FormularioPage);
