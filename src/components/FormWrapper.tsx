import { ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <>
      <div className="flex flex-col justify-center  items-center">
        {children}
      </div>
    </>
  );
}
