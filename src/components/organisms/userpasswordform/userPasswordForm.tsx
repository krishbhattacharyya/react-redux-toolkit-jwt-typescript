import { useState, memo } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import classes from "./userPasswordForm.module.scss"

export default memo(function UserPasswordForm({
  submitButton,
  formSubmitted,
}: {
  submitButton: string
  formSubmitted: React.FormEventHandler
}) {
  const [value, setValue] = useState({ email: "", password: "" })
  function resetForm(e: React.SyntheticEvent) {
    formSubmitted(e)
    //setValue({ email: "", password: "" })
  }
  return (
    <div className={classes.formWrapper}>
      <Form onSubmit={resetForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={value.email}
            onChange={e =>
              setValue(prevState => {
                return { ...prevState, email: e.target.value }
              })
            }
          />
          <Form.Text className={classes.textMuted}>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={value.password}
            onChange={e =>
              setValue(prevState => {
                return { ...prevState, password: e.target.value }
              })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {submitButton}
        </Button>
      </Form>
    </div>
  )
})
