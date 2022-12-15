import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      {/* <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem"}} className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {title}
        </h2> */}
      {/* <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      > */}
      <div className="flex flex-col justify-center  items-center">
        {children}
      </div>
    </>
  );
}
