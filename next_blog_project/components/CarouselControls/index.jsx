import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const CarouselControls = (props) => {
  return (
    <div className="flex justify-end gap-2 ">
      <button
        onClick={() => {
          // if (props.canScrollPrev) {
          props.onPrev();
          // }
        }}
        // disabled={!props.canScrollPrev}
        className={"px-4 py-2 rounded-md bg-transparent text-[#696A75] border"}
      >
        <BsChevronLeft />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={"px-4 py-2 rounded-md bg-transparent text-[#696A75] border"}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};
export default CarouselControls;
