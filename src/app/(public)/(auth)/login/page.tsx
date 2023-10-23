"use client";

import { setCookie } from "cookies-next";
import { Form, Input, Button } from "antd";

import { ECOMMERCE_ROLE, ECOMMERCE_TOKEN } from "@/constants";
import request from "@/server";
import { useAppDispatch } from "@/redux/hooks";
import { setIsAuthenticated, setRole } from "@/redux/slices/authSlice";

type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const userData = {
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      };
      const {
        data: { accesstoken, user },
      } = await request.post("auth/login", userData);
      setCookie(ECOMMERCE_TOKEN, accesstoken);
      setCookie(ECOMMERCE_ROLE, user.role);

      dispatch(setIsAuthenticated(true));
      dispatch(setRole(user.role));
    } finally {
    }
  };
  // const onFinish = (values: FieldType) => {
  //   console.log("Success:", values);
  // };
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <form
        className="max-w-[500px] w-full text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full mb-3 block border-2 py-2 px-3 border-black"
          placeholder="username"
          name="username"
        />
        <input
          type="text"
          className="w-full mb-3 block border-2 py-2 px-3 border-black"
          placeholder="password"
          name="password"
        />
        <button type="submit" className="border-2 border-black py-2 px-4">
          Login
        </button>
        {/* <input type="submit" value="Login" /> */}
      </form>

      {/* <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 24, span: 24 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}
    </div>
  );
};

export default Login;
