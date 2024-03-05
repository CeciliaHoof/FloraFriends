import * as yup from "yup";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

function CreateAccount({ hasAccount, handleChange, updateUser}) {
  const formSchema = yup.object().shape({
    username: yup.string().max(20).min(3),
    first_name: yup.string().required("Must enter a name").max(20).min(2),
    last_name: yup.string().required("Must enter a last name").min(2),
    password: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            updateUser(user);
          });
        }
      });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
        <h3>Create an Account</h3>
      <Form.Field>
        <Form.Input
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
          label="Username"
        ></Form.Input>
      </Form.Field>
      <Form.Field>
        <Form.Input
          onChange={formik.handleChange}
          value={formik.values.first_name}
          name="first_name"
          label="First Name"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          onChange={formik.handleChange}
          value={formik.values.last_name}
          name="last_name"
          label="Last Name"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          label="Password"
        />
      </Form.Field>
      <Form.Field>
        <Form.Button type="submit">Create Account</Form.Button>
        <span onClick={() => handleChange(!hasAccount)}>
          Already have an Account? Click Here!
          </span>
      </Form.Field>
    </Form>
  );
}

export default CreateAccount;
