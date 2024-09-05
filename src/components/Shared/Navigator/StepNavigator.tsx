import Button from "../Button/Button";

type StepNavigatorProps = {
  prevClick: () => void;
  nextClick: () => void;
  lastIndex: number;
  activeTab: number
};

const StepNavigator = ({ prevClick, nextClick, lastIndex, activeTab }: StepNavigatorProps) => {

    const disablePrev = activeTab === 0
    const disableNext = activeTab === lastIndex

  return (
    <div className="col-9 mt-20 d-flex justify-content-between">
      <Button
        buttonType="secondary"
        type="button"
        showIcon={false}
        onClick={prevClick}
        disabled={disablePrev}
      >
        Previous
      </Button>

      <Button
        buttonType="secondary"
        type="button"
        showIcon={false}
        onClick={nextClick}
        disabled={disableNext}
      >
        Next
      </Button>
    </div>
  );
};

export default StepNavigator;
