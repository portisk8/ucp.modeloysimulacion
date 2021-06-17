import { Row,Col,Form,Input,Button,Select,InputNumber,Checkbox,Radio } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class FormularioPage extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
    // console.log(almuerzo);
    this.props.history.push("/actividades");
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
        state: { result: res.data.result, sendData: body }, // your data array of objects
      });
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="body" style={{ marginTop:"1%" }} >
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
                name="sexo"
                rules={[{ required: true, message: "Campo obligatorio!" }]}
                // style={{ size: 24 }}
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

              <div>¿Cual es su Peso actual?</div>
              <Form.Item name="pesoActual" rules={[{ required: true, message: "Campo obligatorio!" }]}>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿Cual es su Estatura?</div>
              <Form.Item name="estatura" rules={[{ required: true, message: "Campo obligatorio!" }]}>
                <InputNumber min={1} max={100} />
              </Form.Item>
            </Col>
            <Col span={6}>

              <div>¿Cual es su Edad?</div>
              <Form.Item name="edad" rules={[{ required: true, message: "Campo obligatorio!" }]}>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿Cual es su Peso Objetivo?</div>
              <Form.Item name="pesoObjetivo" rules={[{ required: true, message: "Campo obligatorio!" }]}>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿En cuantos dias pretende conseguir su peso objetivo?</div>
              <Form.Item name="diasParaPesObjetivo" rules={[{ required: true, message: "Campo obligatorio!" }]}>
                <InputNumber min={1} max={100} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
          <Col span={24} style={{marginTop: "1%", marginBottom:"1%", justifyContent: 'space-between'}}>
              
                <Row justify="center" style={{marginTop:"1%"}}>
                  <div style={{padding: 20}}>
                  <h1 style={{ color: "white" }}>Indique si padece de alguna de las siguientes enfermedades</h1>
                  </div>
                </Row>

                <Row justify="center">
                  <Col style={{ textAlign: "center"}}>
                    <Row>
                      <Col span={14}>
                        <Checkbox value= "Diabetes"><h1 style={{ color:"white" }}>Diabetes</h1></Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value= "Celiaquia"><h1 style={{ color:"white" }}>Celiaquia</h1></Checkbox>
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
                
          </Col>
          </Row>
          </Form>
        </div>
    );
  }
}

export default withRouter(FormularioPage);
