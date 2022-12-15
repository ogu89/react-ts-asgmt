import "../styles/alert.css";
type AlertProps = {
  alertText: string;
};

export function Alert({ alertText }: AlertProps) {
  return (
    <>
    <div className="flex justify-center">
      <div
        className="alert-box"
        role="alert"
      >
        {alertText}
      </div>
      </div>
    </>
  );
}
