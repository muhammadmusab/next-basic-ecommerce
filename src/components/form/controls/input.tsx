"use client";
import React from "react";
interface Props {
  type: string;
  placeholder: string;
}

const Input = ({ placeholder, type }: Props) => {
  const onChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <input
      type={type}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
    />
  );
};

export default Input;
