import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Error, LoginContiner } from "../styles/Login.styles";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Card } from "../styles/UI.styles";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const initialValues = { username: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Min 5 Characters"),
  });

  const submitHandler = (values) => {
    login();
    navigate("/");
  };

  return (
    <LoginContiner>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Card bg="#efefef" shadow={true}>
          <Form>
            <h1 className="text-center">Login </h1>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
            />
            <Error>
              <ErrorMessage name="username" />
            </Error>
            <Field
              type="password"
              name="password"
              placeholder="*******"
              autoComplete="off"
            />
            <Error>
              <ErrorMessage name="password" />
            </Error>

            <div className="text-center">
              <Button>Login</Button>
            </div>
          </Form>
        </Card>
      </Formik>
    </LoginContiner>
  );
}
