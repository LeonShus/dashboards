"use client";

import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: IProps) => {
  return <button onClick={onClick}>{children}</button>;
};
