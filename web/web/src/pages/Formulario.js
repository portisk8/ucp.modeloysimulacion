import {
  Row, Col, Form, Input, Button, Select, InputNumber, Checkbox, Image} from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const plainOptions = ['Diabetes','Sobrepeso']
const plainOptions2 = ['Celiaquia','Aterosclerosis']
const plainOptions3 = ['Anorexia','Bulimia']

const options = [ { label: 'Diabetes', value: 'Diabetes' },
                  { label: 'Sobrepeso', value: 'Sobrepeso' },
                  { label: 'Celiaquia', value: 'Celiaquia' },
                  { label: 'Aterosclerosis', value: 'Aterosclerosis' },
                  { label: 'Anorexia', value: 'Anorexia' },
                  { label: 'Bulimia', value: 'Bulimia' },
                ]

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

class FormularioPage extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Ingrese los siguientes datos:</h1>
        </div>
        <Form
          name="basic"
          layout={"vertical"}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          style={{ textAlign: "center" }}
          size={"large"}
        >
          <Row justify="center">
            <Col span={6}>
              <div>¿Cual es su Sexo?</div>
              <Form.Item
                hasFeedback
                rules={[{ required: true, message: "Campo obligatorio!" }]}
                style={{size: 24}}
              >
                <Select allowClear>
                  <Select.Option value="M">Masculino</Select.Option>
                  <Select.Option value="F">Femenino</Select.Option>
                </Select>
              </Form.Item>

              <div>¿Cual es su Peso actual?</div>
              <Form.Item name="pesoActual" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿Cual es su Estatura?</div>
              <Form.Item name="estatura" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>
            </Col>
            <Col span={6}>
              {/* <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item> */}

              <div>¿Cual es su Edad?</div>
              <Form.Item name="edad" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿Cual es su Peso Objetivo?</div>
              <Form.Item name="pesoObjetivo" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿En cuantos dias pretende conseguir su peso objetivo?</div>
              <Form.Item name="diasParaPesObjetivo" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>
              {/* <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item> */}
            </Col>
          </Row>

          {/* Enfermedades*/}
          <div style={{padding: 20 }}>
            <br></br>
            <h1>Indique si padece de alguna de las siguientes enfermedades</h1>
          </div>
          
          <Row>
            <Col span={24} style={{ textAlign: "center"}}>
                  <Row>
                    <Col span={24} style={{padding: 20}}>
                      <Checkbox.Group options={plainOptions} onChange={onChange}/>
                    </Col>
                    <Col span={24} style={{padding: 20}}>
                      <Checkbox.Group options={plainOptions2} onChange={onChange}/>
                    </Col>
                    <Col span={24} style={{padding: 20}}>
                      <Checkbox.Group options={plainOptions3} onChange={onChange}/>
                    </Col>
                  </Row>
              </Col>
          </Row>

          {/*Habitos Alimentcios */}
            <div>
              <h1>¿Cuales son tus habitos alimenticios?</h1>
            </div>
          <Row justify="center">
              <Col span={8}>
                  <div>Numero de Comidas Diarias</div>
                <Form.Item
                  hasFeedback
                  rules={[{ required: true, message: "Campo obligatorio!" }]}
                  style={{size: 24}}
                >
                  <Select allowClear>
                    <Select.Option value="1">1</Select.Option>
                    <Select.Option value="2">2</Select.Option>
                    <Select.Option value="3">3</Select.Option>
                    <Select.Option value="4">4</Select.Option>
                    <Select.Option value="5">5</Select.Option>
                    <Select.Option value="6">6</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            <Col span={8}>
              <div>¿Consumis Carne?</div>
              <Form.Item
                hasFeedback
                rules={[{ required: true, message: "Campo obligatorio!" }]}
                style={{size: 24}}
              >
                <Select allowClear>
                  <Select.Option value="Y">Si</Select.Option>
                  <Select.Option value="N">No</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
              <Button style={{textAlign:"center"}} type="primary" htmlType="submit">
                Calcular
              </Button>
          </Form.Item>
          <Col>
          <div><h1>Escoge un plan en base a la cantidad de actividad fisica que estes dispuesto a realizar:</h1></div>
          <Button>Poco o ningun ejercicio</Button>
          <h6>Con este nivel de actividad fisica deberias de consumir 858 kcal diariamente, considerablemente menos de las que consumes actualmente</h6>
          <Button>Ejercicio ligero (1-3 dias a la semana)</Button>
          <h6>Con este nivel de actividad fisica deberias de consumir 1118.6 kcal diariamente. Recomendable para personas no habituadas a ejecitarse</h6>
          <Button>Ejercicio moderado (3-5 dias a la semana)</Button>
          <h6>Con este nivel de actividad fisica deberias de consumir 1162.8 kcal diariamente</h6>
          <Button>Deportista (6-7 dias a la semana)</Button>
          <h6>Deberias consumir aproximadamente 1209.7 kcal diariamente, no recomendable en caso para empezar</h6>
          <Button>Atleta (Entrenamiento mañana y tarde)</Button>
          <h6>Con este nivel de actividad fisica deberias de consumir 1152.2 kcal diariamente</h6>
          </Col>

        {/*Calorias Finales*/}

        <div><br></br><h1>Tus calorías a consumir son: 2,147 - 2,637 kcal</h1><br></br></div> 
        <Row style={{padding: 20}} justify="center">
           <Col span={4}>
              <Image width={180} src="./images/image_19.png" alt="Atleta"/>
              </Col>
            <Col span={4}>
                <div>
                  <h3>Mientras te mantengas en este rango, ganarás masa muscular de manera limpia.</h3>
                  <h3>Todos los alimentos te aportan una cantidad de calorías, a través de una combinacion de proteínas, carbohidratos y grasa</h3>
                </div>
            </Col>
        </Row>

        {/*Proteinas Finales*/}

        <div><br></br><h1>Tu proteina a consumir son: 96 - 117 g</h1><br></br></div> 
        <Row style={{padding: 20}} justify="center">
           <Col span={4}>
              <Image width={180} src="./images/image_19.png" alt="Atleta"/>
              </Col>
            <Col span={4}>
                <div>
                  <h3>La proteina es esencial para desarrollar la masa muscular, especialmente cuando es combinada con entrenamientos de fuerza.</h3>
                  <h3>Intenta mantenerte en este rango para maximizar los resultados</h3>
                </div>
            </Col>
        </Row>

        <div><br></br><h1>Recomendacion de plan alimenticio:</h1><br></br></div>
        <Row style={{padding: 20}} justify="center">
          <Col span={8}>
              <h3>Opción A:</h3>
              <h3>Opción B:</h3>
              <h3>Opción C:</h3>
          </Col>
          <Col span={8}>

            <h3>Opción A:</h3>
            <h3>Opción B:</h3>
            <h3>Opción C:</h3>
          </Col>
        </Row>

        </Form>
      </div>
    );
  }
}

export default withRouter(FormularioPage);
