export const validateFirstName = (value: string): boolean => {
  const regex = /^[A-Za-zА-Яа-я][A-Za-zА-Яа-я-]*$/;
  return regex.test(value);
};

export const validateLastName = (value: string): boolean => {
  const regex = /^[A-Za-zА-Яа-я][A-Za-zА-Яа-я-]*$/;
  return regex.test(value);
};

export const validateLogin = (value: string): boolean => {
  const regex = /^[A-Za-z0-9_-]{3,20}$/;
  return regex.test(value);
};

export const validateEmail = (value: string): boolean => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return regex.test(value);
};

export const validatePassword = (value: string): boolean => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
  return regex.test(value);
};

export const validatePhone = (value: string): boolean => {
  const regex = /^\+?\d{10,15}$/;
  return regex.test(value);
};

export const validateMessage = (value: string): boolean => {
  return value.trim() !== '';
};

export const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};
