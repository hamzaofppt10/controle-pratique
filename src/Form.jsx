import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    birthDay: '',
    gender: '',
    city: '',
    hobbies: [],
    adresse: '',
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validationRules = {
      fname: value === '' ? 'First name is required' : '',
      lname: value === '' ? 'Last name is required' : '',
      email: !emailRegex.test(value) ? 'Invalid email address' : '',
      birthDay: value === '' ? 'Birth date is required' : '',
      city: value === '' ? 'Please select a city' : '',
      adresse: value === '' ? 'Address is required' : '',
      gender: value === '' ? 'Gender is required' : '',
    };

    return validationRules[name];
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' 
      ? checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter(hobby => hobby !== value)
      : value;

    setFormData(prevData => ({ ...prevData, [name]: newValue }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Object.keys(formData).reduce((acc, field) => {
      const error = validateField(field, formData[field]);
      if (error) acc[field] = error;
      return acc;
    }, {});

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
    }
  };

  const moroccanCities = [
    "Casablanca", "Rabat", "Marrakech", "Fes", "Tangier",
    "Agadir", "Meknes", "Oujda", "Tetouan", "Safi"
  ];

  const renderFieldError = (field) => errors[field] && <div className="text-danger">{errors[field]}</div>;

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        {['fname', 'lname', 'email', 'birthDay', 'adresse'].map((field, index) => (
          <Form.Group controlId={`form${field}`} className="mb-3" key={index}>
            <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            <Form.Control
              type={field === 'birthDay' ? 'date' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
            />
            {renderFieldError(field)}
          </Form.Group>
        ))}

        <Form.Group controlId="formCity" className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select your city</option>
            {moroccanCities.map(city => <option key={city} value={city}>{city}</option>)}
          </Form.Select>
          {renderFieldError('city')}
        </Form.Group>

        <Form.Group controlId="formGender" className="mb-3">
          <Form.Label>Gender</Form.Label>
          {['male', 'female'].map(gender => (
            <Form.Check
              key={gender}
              name="gender"
              value={gender}
              onChange={handleChange}
              type="radio"
              label={gender.charAt(0).toUpperCase() + gender.slice(1)}
              />
            ))}
            {renderFieldError('gender')}

        </Form.Group>

        <Form.Group controlId="formHobbies" className="mb-3">
          <Form.Label>Hobbies</Form.Label>
          {['Reading', 'Sport', 'Football'].map(hobby => (
            <Form.Check
              key={hobby}
              name="hobbies"
              value={hobby}
              onChange={handleChange}
              type="checkbox"
              label={hobby}
            />
          ))}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
