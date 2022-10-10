import { useState, useCallback } from "react";

const useInputs = (initialForm: any) => {
  const [form, setForm] = useState(initialForm);

  const setNull = useCallback(
    (e: any) => {
      setForm({
        ...form,
        [e]: "",
      });
    },
    [form]
  );

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form: any) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset, setNull];
};

export default useInputs;
