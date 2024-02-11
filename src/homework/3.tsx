import React, { useState, ChangeEvent } from "react";

type FormComponentProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function FormComponent({
  value: propValue,
  onChange: propOnChange,
}: FormComponentProps) {
  const [value, setValue] = useState(propValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    propOnChange(event);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
