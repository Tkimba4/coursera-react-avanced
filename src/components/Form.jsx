import { useState } from "react";

export default function ContactForm() {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputs({ ...inputs, [name]: value });
  };

  //Our form validation
  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (inputs.name.trim() === "") {
      newErrors.name = "Please enter name!";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }
    if (inputs.message.trim().length < 10) {
      newErrors.message = "Message must have > 10 caracter!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSuccess(true);
      alert("Formulaire soumis avec succès !");
      setInputs({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {success && <p style={{ color: "green" }}>Success</p>}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="Your name"
        value={inputs.name}
        onChange={handleChange}
      />
      {errors.name && <ErrorMsg error={errors.name} />}

      <label htmlFor="email">Email adress</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Your email"
        value={inputs.email}
        onChange={handleChange}
      />
      {errors.email && <ErrorMsg error={errors.email} />}

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        required
        placeholder="Enter your message!"
        rows={5}
        value={inputs.message}
        onChange={handleChange}
      ></textarea>
      {errors.message && <ErrorMsg error={errors.message} />}
      <button type="submit">Submit</button>
    </form>
  );
}

const ErrorMsg = ({error}) => <p style={{ color: "red" }}>{error}</p>;
