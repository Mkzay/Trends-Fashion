import Collection from "@/components/collection";
import Hero from "@/components/hero";
import Image from "next/image";
import Categories from "@/components/categories";

const page = () => {
  return (
    <section className="mt-16 lg:mt-12 py-5 overflow-clip flex flex-col lg:gap-10">
      <div className="flex flex-col lg:-space-y-6 px-5">
        <h1 className="font-neology text-3xl/snug md:text-6xl/normal lg:text-[7.4rem]/[10rem] uppercase flex justify-end">
          TIMELESS
          <span className="font-symphony italic text-orange-500">
            {" "}
            CLASSICS
          </span>
        </h1>
        <h1 className="font-neology text-3xl/tight md:text-6xl/snug lg:text-[7.4rem]/[7.3rem] uppercase z-20">
          The latest runway trends
        </h1>
        <div className="flex flex-col items-center justify-between pt-5 lg:pt-0 z-10 gap-5 lg:gap-0 lg:flex-row">
          <Image
            className=" h-[500px] relative lg:top-16"
            src="/images/philip.jpg"
            alt="Photo by <a href='https://unsplash.com/@philipparltdesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Philipp Arlt</a> on <a href='https://unsplash.com/photos/woman-in-coat-NmH9A0obon8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>
  "
            width={400}
            height={200}
          />
          <Image
            className="h-[500px] relative lg:bottom-40"
            src="/images/molly.jpg"
            alt="Photo by <a href='https://unsplash.com/@molllteaser?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Molly Mears</a> on <a href='https://unsplash.com/photos/man-in-black-and-yellow-jacket-wearing-sunglasses-4_90zmmdo_4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>
  "
            width={400}
            height={200}
          />
          <Image
            className="h-[500px] relative lg:top-40"
            src="/images/black.jpg"
            alt="Photo by <a href='https://unsplash.com/@vanschneider?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Tobias van Schneider</a> on <a href='https://unsplash.com/photos/black-sweatshirts-on-plastic-hangers-gCeCpP15V1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'Unsplash</a>
  "
            width={400}
            height={200}
          />
        </div>
        <div className="flex items-center justify-center uppercase font-neology text-3xl/normal pt-5 lg:pt-0">
          <h2 className="lg:w-4/12 tracking-wide">
            Express your bold side with runway inspired fashion.
          </h2>
        </div>
        <div className="flex flex-col items-start lg:items-center gap-2 lg:gap-0 font-neology pt-2 lg:pt-12 lg:flex-row">
          <p className="lg:w-[27%] text-gray-600 text-sm">These are pieces that transcends seasons and trends, the wardrobe staples that never go out of style.</p>
          <a className="text-orange-500 text-xs md:text-sm border-b border-orange-500">
            See More
          </a>
        </div>
      </div>
      <Collection />
      <Categories />
      <Hero />
    </section>
  );
};

export default page;
