import React, { useState } from "react";
import { ModeType } from "./form.types";
import {
  StyledContainer,
  StyledInput,
  StyledSelect,
  StyledLabel,
} from "./form.styles";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  width?: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  width?: string;
}

export const TextInput = (props: TextInputProps) => {
  const { name, value = "", label, disabled, width, onChange, ...rest } = props;
  const initialMode = value ? ModeType.FilledIn : ModeType.Empty;
  const [mode, changeMode] = useState<ModeType>(initialMode);
  if (initialMode === ModeType.Empty && mode === ModeType.FilledIn)
    changeMode(initialMode);

  return (
    <StyledContainer width={width}>
      <StyledLabel mode={mode} disabled={disabled}>
        {label}
      </StyledLabel>
      <StyledInput
        type="text"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => changeMode(ModeType.Active)}
        onBlur={() => changeMode(value ? ModeType.FilledIn : ModeType.Empty)}
        {...rest}
      />
    </StyledContainer>
  );
};

export const Select = (props: SelectProps) => {
  const {
    name,
    value = "",
    label,
    disabled,
    width,
    onChange,
    children,
    ...rest
  } = props;
  const initialMode = value ? ModeType.FilledIn : ModeType.Empty;
  const [mode, changeMode] = useState<ModeType>(initialMode);
  if (initialMode === ModeType.Empty && mode === ModeType.FilledIn)
    changeMode(initialMode);

  return (
    <StyledContainer width={width}>
      <StyledLabel mode={mode} disabled={disabled}>
        {label}
      </StyledLabel>
      <StyledSelect
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onClick={(event) => event.stopPropagation()}
        onFocus={() => changeMode(ModeType.Active)}
        onBlur={() => changeMode(value ? ModeType.FilledIn : ModeType.Empty)}
        {...rest}
      >
        <option value="" />
        {children}
      </StyledSelect>
    </StyledContainer>
  );
};
