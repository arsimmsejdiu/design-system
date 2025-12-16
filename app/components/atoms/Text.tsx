import React from "react";

interface TextProps {
  as?: "p" | "span" | "label";
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ as = "p", children }) => {
  const Component = as;
  return <Component className="text-slate-800">{children}</Component>;
};
