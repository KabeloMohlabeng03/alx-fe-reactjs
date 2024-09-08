import React from "react";
import RegistrationForm from "./components/RegistrationForm"; 
import FormikForm from "./components/formikForm"; 

function App() {
  return (
    <div>
      <h1>User Registration Forms</h1>

      <section>
        <h2>Controlled Component Form</h2>
        <RegistrationForm />
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Formik Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
