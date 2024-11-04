const collection = () => {
  return (
    <section className="font-symphony my-20">
      <div className="flex gap-28 lg:gap-44">
        <h1 className="uppercase text-sm font-bold">collection</h1>
        <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row lg:gap-0">
          <h2 className="uppercase text-orange-500 text-2xl md:text-5xl lg:text-7xl/tight italic flex items-start justify-center flex-col">
            fearless <br />{" "}
            <span className="text-black not-italic">confidence</span>
          </h2>
          <a className="text-orange-500 text-xs md:text-sm border-b border-orange-500 pb-1">See More</a>
        </div>
      </div>
      <p className="flex items-end justify-end md:w-6/12 lg:w-4/12 relative md:-right-[50%] mt-10 text-gray-600 text-base">
        Fearless confidence is that unwavering belief in yourself and your
        abilities, the audacity to step outside comfort zone.
      </p>
    </section>
  );
};

export default collection;
