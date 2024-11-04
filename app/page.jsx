import Collection from "@/components/collection";
import Hero from "@/components/hero";

const page = () => {
  return (
    <section className="mt-16 lg:mt-28 p-5 overflow-clip">
      <div className="flex flex-col lg:-space-y-6">
        <h1 className="font-neology text-3xl/snug md:text-6xl/normal lg:text-[7.4rem]/[10rem] uppercase flex justify-end">
          TIMELESS
          <span className="font-symphony italic text-orange-500"> CLASSICS</span>
        </h1>
        <h1 className="font-neology text-3xl/tight md:text-6xl/snug lg:text-[7.4rem]/[7.3rem] uppercase">
          The latest runway trends
        </h1>
      </div>
      <Collection />
      <Hero />
    </section>
  );
};

export default page;
