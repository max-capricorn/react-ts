import React from "react";
import { ChangeEvent } from "react";

export interface Props {
  l: string;
  change: (idx: number, value: string) => void;
  idx: number
}

export default (l: Props["l"], idx: Props["idx"]) => {
  const handleChange = (idx: Props["idx"], l: Props["l"]) => {

  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleChange(idx, e.target.value);
  }
  return <input defaultValue={l} onChange={(e) => { onChange(e) }} />
}