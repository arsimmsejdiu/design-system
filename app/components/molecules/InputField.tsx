import React from "react";

interface InputFieldProps {
  label: string;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
        aria-invalid={!!error}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};
