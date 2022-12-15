type PreviousNextButtonProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  setError: (val: boolean) => void;
};

export function PreviousNextButton({
  isFirstStep,
  isLastStep,
  setError,
  back,
}: PreviousNextButtonProps) {
  return (
    <>
      <div className="mt-4 flex gap-2 justify-end">
        {!isFirstStep && (
          <button
            type="button"
            onClick={() => {
              back();
              setError(false);
            }}
            className="previous-button"
          >
            Previous
          </button>
        )}
        <button type="submit" className="next-button">
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}
