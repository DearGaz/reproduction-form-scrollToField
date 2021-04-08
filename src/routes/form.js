import React from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.css";

const FormDemo = ({}) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form
      .validateFields()
      .then(() => {})
      .catch((errors) => {
        if (errors.errorFields && errors.errorFields.length > 0) {
          form.scrollToField(errors.errorFields[0].name, {
            block: "center",
            behavior: "smooth",
          });
        }
      });
  };

  return (
    <Form form={form}>
      <Button onClick={onSubmit}>提交</Button>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
        <Form.Item
          label={`input${i}`}
          name={`input${i}`}
          rules={[{ required: true }]}
          initialValue={i > 14 ? undefined : i}
        >
          <Input />
        </Form.Item>
      ))}
    </Form>
  );
};

export default FormDemo;
