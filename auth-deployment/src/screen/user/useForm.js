import { useEffect, useState } from "react";
// import {themes} from '../profile/themes';

function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [theme, setTheme] = useState('')

const handleInfoChange = event => {
  const { name, value } = event.target;
  setValues({ ...values, [name]: value });
};

const handleSubmit = async event => {
  setSubmitting(true);
  event.preventDefault();
  await new Promise(r => setTimeout(r, 1000));
  setErrors(validate(values));
};

// const handleChange = (selectedTheme) => {
//     setTheme(themes[selectedTheme].value)
//   }

  const refCallback = (node) => {
    if (node) {
      theme &&
        Object.keys(theme).forEach((element) => {
          node.style.setProperty(element, theme[element], 'important');
          if (element === 'background-color' || element === 'background') {
            // apply the same background mentioned for theme to the body of the website
            document.body.style.background = theme[element];
          }
        });
    }
  }


useEffect(() => {
  if (submitting) {
    if (Object.keys(errors).length === 0) {
      onSubmit(values);
    }
    setSubmitting(false);
  }
}, [errors]);

return {
  values,
  errors,
  submitting,
  handleInfoChange,
  // handleChange,
  handleSubmit,
  refCallback
};
}

export default useForm;