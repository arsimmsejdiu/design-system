import React from "react";
import { Button } from "../atoms/Button";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="font-semibold text-lg">Design System</h1>
      <Button variant="secondary">Login</Button>
    </header>
  );
};
