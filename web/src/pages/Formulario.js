import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  Image,
} from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const plainOptions = ["Diabetes", "Sobrepeso"];
const plainOptions2 = ["Celiaquia", "Aterosclerosis"];
const plainOptions3 = ["Anorexia", "Bulimia"];
const activies = document.getElementById("activitiesButtons");
const results = document.getElementById("Results");

const options = [
  { label: "Diabetes", value: "Diabetes" },
  { label: "Sobrepeso", value: "Sobrepeso" },
  { label: "Celiaquia", value: "Celiaquia" },
  { label: "Aterosclerosis", value: "Aterosclerosis" },
  { label: "Anorexia", value: "Anorexia" },
  { label: "Bulimia", value: "Bulimia" },
];

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

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
    this.props.history.push("/actividades");
    let body = {
      peso: values.pesoActual,
      edad: values.edad,
      altura: values.estatura,
      sexo: values.sexo,
      pesoObjetivo: values.pesoObjetivo,
      diasCantidad: values.diasParaPesObjetivo,
    };
    // let body = {
    //   altura: 100,
    //   diasCantidad: 30,
    //   edad: 32,
    //   peso: 75,
    //   pesoObjetivo: 70,
    //   sexo: "M",
    // };

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
      <div className="body">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "white" }}>Ingrese los siguientes datos:</h1>
        </div>
        <Form
          name="basic"
          layout={"vertical"}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          style={{ textAlign: "center", color: "white" }}
          size={"large"}
        >
          <Row justify="center">
            <Col span={6}>
              <div>¿Cual es su Sexo?</div>
              <Form.Item
                hasFeedback
                name="sexo"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
                style={{ size: 24 }}
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
          <div style={{ padding: 20 }}>
            <br></br>
            <h1 style={{ color: "white" }}>
              Indique si padece de alguna de las siguientes enfermedades
            </h1>
          </div>

          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <Row>
                <Col span={24} style={{ padding: 20 }}>
                  <Checkbox.Group options={plainOptions} onChange={onChange} />
                </Col>
                <Col span={24} style={{ padding: 20 }}>
                  <Checkbox.Group options={plainOptions2} onChange={onChange} />
                </Col>
                <Col span={24} style={{ padding: 20 }}>
                  <Checkbox.Group options={plainOptions3} onChange={onChange} />
                </Col>
              </Row>
            </Col>
          </Row>

          {/*Habitos Alimentcios */}
          <div>
            <h1 style={{ color: "white" }}>
              ¿Cuales son tus habitos alimenticios?
            </h1>
          </div>
          <Row justify="center" gutter={16}>
            <Col span={4}>
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
            <Col span={4}>
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
          <Form.Item>
            <Button
              id="calcular"
              style={{ textAlign: "center" }}
              type="primary"
              htmlType="submit"
            >
              Calcular
            </Button>
          </Form.Item>
        </Form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(FormularioPage);
