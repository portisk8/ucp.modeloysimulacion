import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  InputNumber,
} from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
        >
          <Row justify="center">
            <Col span={6}>
              <div>¿Cual es su Sexo?</div>
              <Form.Item
                hasFeedback
                rules={[{ required: true, message: "Campo obligatorio!" }]}
              >
                <Select allowClear>
                  <Select.Option value="M">Masculino</Select.Option>
                  <Select.Option value="F">Femenino</Select.Option>
                </Select>
              </Form.Item>

              <div>¿Cual es su Peso actual?</div>
              <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿Cual es su Estatura?</div>
              <Form.Item name="input-number" noStyle>
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

              <div>Cual es su Edad?</div>
              <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>¿Cual es su Peso Objetivo?</div>
              <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={100} />
              </Form.Item>

              <div>En cuantos dias pretende conseguir su peso objetivo?</div>
              <Form.Item name="input-number" noStyle>
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
          <Row style={{ textAlign: "center" }}>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Calcular
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default withRouter(FormularioPage);
