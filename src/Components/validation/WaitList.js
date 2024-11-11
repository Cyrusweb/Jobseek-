export const validate = (email, setError) => {
  let isValid = true;
  let newError = { email: "" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    newError.email = "Please enter a valid email address";
    isValid = false;
  }
  setError(newError);

  return isValid;
};
