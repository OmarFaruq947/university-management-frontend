"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFiledProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  //   validation?: object;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  options,
  label,
  defaultValue: defaultValue,
}: SelectFiledProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue="Gender"
            style={{ width: 350 }}
            onChange={onChange}
            options={options}
            value={value}
            size={size}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
