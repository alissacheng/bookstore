import bookInputData from "../data/bookInputData"

const validateForm = (formData, setFormErr) => {
  const errors = {};

  // Validate each form input
  bookInputData.forEach(({ name }) => {
    errors[name] = formData[name] ? false : `Please enter a valid ${name.replace("_", " ")}.`;
  });
  
  // Update form errors
  setFormErr(errors);
  // Check if there are no errors
  return !Object.values(errors).some(value => value !== false);
};

export default validateForm;