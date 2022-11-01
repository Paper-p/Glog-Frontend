import { useState, useCallback } from "react";

function useInputs(initialForm: any) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form: any) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  const setNull = useCallback((key: string) => {
    setForm((form: any) => ({ ...form, [key]: "" }));
  }, []);
  return [form, onChange, reset, setNull];
}

export default useInputs;
