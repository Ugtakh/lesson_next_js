import useEmblaCarousel from "embla-carousel-react";
import CarouselControls from "../CarouselControls";
import React from "react";

const Carousel = ({ children, ...options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  return (
    <>
      <div
        className="overflow-hidden rounded mb-4 bg-blend-[#141624
]"
        ref={emblaRef}
      >
        <div className="flex">{children}</div>
      </div>
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </>
  );
};
export default Carousel;
