const hero = () => {
  return (
    <section className="font-symphony">
      <div className="flex flex-col gap-3 items-center justify-center lg:flex-row">
        <div className="h-96 w-full bg-blue-300"></div>
        <div className="h-96 w-full bg-black p-8 flex flex-col items-start justify-evenly">
          <p className="text-white text-2xl">
            Its a brand that understands fashion isn't just clothing, it's a way
            of expressing yourself. Thank you, <span>Grace</span>, for making
            fashiojn such an enjoyable journey.
          </p>
          <p className="text-white">
            Vito Arvy <br />{" "}
            <span className="text-gray-600 text-sm">CEO of GRACE</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-evenly gap-5 py-10 text-4xl italic">
        <h1>DISCOUNT 20%</h1>
        <h1>DISCOUNT 20%</h1>
        <h1>DISCOUNT 20%</h1>
        <h1>DISCOUNT 20%</h1>
      </div>

      <div className="h-[400px] w-full bg-white flex flex-col justify-between p-10 lg:flex-row">
        <h1 className="uppercase text-4xl w-9/12 lg:w-3/12">
          bold <span className="italic text-orange-600">trends</span> the
          fashion confident
        </h1>
        <p className="lg:w-4/12 text-gray-600">
          Its a brand that understands fashion isn't just clothing, it's a way
          of expressing yourself. Thank you, <span>Vito</span>, for making
          fashiojn such an enjoyable journey.
        </p>
      </div>
    </section>
  );
};

export default hero;
