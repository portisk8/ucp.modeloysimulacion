import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Checkbox,
  Radio,
} from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class FormularioPage extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.history.push("/actividades");
    let body = {
      peso: values.pesoActual,
      edad: values.edad,
      altura: values.estatura,
      sexo: values.sexo,
      pesoObjetivo: values.pesoObjetivo,
      diasCantidad: values.diasParaPesObjetivo,
      diabetico: values.diabetes,
      celiaco: values.celiaco,
      consumisCarne: values.consumisCarne,
      cantidadComidas: values.comidasDiarias,
    };
    /*
      let body = {
      altura: 100,
      diasCantidad: 30,
      edad: 32,
      peso: 75,
      pesoObjetivo: 70,
      sexo: "M",
    };

    */

    console.log(body);
    axios.post(`http://localhost:3600/api/simula/simular`, body).then((res) => {
      console.log(res);
      console.log(res.data);
      this.props.history.push({
        pathname: "/actividades",
        state: { result: res.data.result, sendData: body }, // your data array of objects
      });
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="body">
        <div className="titulo" style={{ textAlign: "center" }}>
          <h1 style={{ color: "white", fontSize: "xxx-large" }}>
            Calcular plan nutricional
          </h1>
          <h1 style={{ color: "white", marginBottom: "2%" }}>
            Para un cálculo preciso, necesitamos un poco de información básica
          </h1>
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
              <div className="subtitulo">¿Cual es su Sexo?</div>
              <Form.Item
                name="sexo"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value="M" style={{ height: 50 }}>
                    <img
                      src={
                        "https://assets.yazio.com/frontend/images/icons.svg#icon-male"
                      }
                      style={{ height: 50, width: 50 }}
                    />
                    MASCULINO
                  </Radio.Button>
                  <Radio.Button value="F" style={{ height: 50 }}>
                    <img
                      src={
                        "https://assets.yazio.com/frontend/images/icons.svg#icon-female"
                      }
                      style={{ height: 50, width: 50 }}
                    />
                    FEMENINO
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>

              <div className="subtitulo">¿Cual es su Peso actual?</div>
              <Form.Item
                name="pesoActual"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <InputNumber min={30} max={200} />
              </Form.Item>

              <div className="subtitulo">¿Cual es su Estatura?</div>
              <Form.Item
                name="estatura"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <InputNumber min={100} max={250} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <div className="subtitulo">¿Cual es su Edad?</div>
              <Form.Item
                name="edad"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <InputNumber min={15} max={100} />
              </Form.Item>

              <div className="subtitulo">¿Cual es su Peso Objetivo?</div>
              <Form.Item
                name="pesoObjetivo"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <InputNumber min={50} max={200}></InputNumber>
              </Form.Item>

              <div className="subtitulo">
                ¿En cuantos dias pretende conseguir su peso objetivo?
              </div>
              <Form.Item
                name="diasParaPesObjetivo"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <InputNumber min={10} max={300} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col
              span={24}
              style={{
                marginTop: "1%",
                marginBottom: "1%",
                justifyContent: "space-between",
              }}
            >
              <Row justify="center">
                <div style={{ padding: 20 }}>
                  <h1
                    className="titulo"
                    style={{ color: "white", fontSize: "xx-large" }}
                  >
                    Indique si padece de alguna de las siguientes enfermedades
                  </h1>
                </div>
              </Row>

              <Row justify="center">
                <Col style={{ textAlign: "center", fontSize: "xx-large" }}>
                  <Row>
                    <Col span={12}>
                      <Form.Item name="diabetes" valuePropName="checked">
                        <Checkbox>
                          <h1
                            className="subtitulo"
                            style={{ color: "white", fontSize: "xx-large" }}
                          >
                            Diabetes
                          </h1>
                        </Checkbox>
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name="celiaco" valuePropName="checked">
                        <Checkbox>
                          <h1
                            className="subtitulo"
                            style={{ color: "white", fontSize: "xx-large" }}
                          >
                            Celiaquia
                          </h1>
                        </Checkbox>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row justify="center" style={{ marginTop: "2%" }}>
                <h1
                  className="titulo"
                  style={{ color: "white", fontSize: "xx-large" }}
                >
                  ¿Cuales son tus habitos alimenticios?
                </h1>
              </Row>

              <Row justify="center" style={{ marginTop: "1%" }}>
                <Col span={4} style={{ padding: "1%" }}>
                  <div className="subtitulo">Numero de Comidas Diarias</div>
                  <Form.Item
                    name="comidasDiarias"
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
                <Col span={4} style={{ padding: "1%" }}>
                  <div className="subtitulo">¿Consumis Carne?</div>
                  <Form.Item
                    name="consumisCarne"
                    hasFeedback
                    rules={[{ required: true, message: "Campo obligatorio!" }]}
                  >
                    <Select allowClear>
                      <Select.Option value={true}>Si</Select.Option>
                      <Select.Option value={false}>No</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Button
                id="calcular"
                shape="round"
                style={{
                  height: "auto",
                  width: "auto",
                  fontSize: 30,
                  color: "white",
                  backgroundColor: "#DE99B4",
                }}
                type="primary"
                htmlType="submit"
              >
                Calcular
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default withRouter(FormularioPage);
