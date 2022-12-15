type PreviousNextButtonProps = {
    isFirstStep: boolean;
    isLastStep: boolean;
    isInvalid: boolean;
    isNotEnough: boolean;
    back: ()=> void;
};

export function PreviousNextButton({ isFirstStep, isLastStep, isInvalid, isNotEnough, back}: PreviousNextButtonProps) {
  return (
    <>
      <div className="mt-4 flex gap-2 justify-end">
        {!isFirstStep && (
          <button type="button" onClick={back} className="previous-button">
            Previous
          </button>
        )}
        <button
          type="submit"
          disabled={isInvalid || isNotEnough}
          className="next-button"
        >
          {isLastStep ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
}
