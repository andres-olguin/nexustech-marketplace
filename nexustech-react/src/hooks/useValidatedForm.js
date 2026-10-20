import { useRef, useState } from 'react';

// Los formularios comparten el foco y los errores; cada pantalla define su validación.
export default function useValidatedForm(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const ref = useRef(null);
  function setValue(name, value) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }
  function change(event) {
    const { name, value } = event.target;
    setValue(name, value);
  }
  function submit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) { ref.current.elements.namedItem(first)?.focus(); return; }
    onSubmit(values);
  }
  return { values, errors, ref, change, setValue, submit };
}
