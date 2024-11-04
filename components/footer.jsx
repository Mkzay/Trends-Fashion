
const footer = () => {
  return (
    <footer className="flex items-center justify-between w-full absolute bottom-auto p-5 font-jane">
      <div>
        <h1 className="text-xl font-light lg:text-3xl uppercase">Trends</h1>
      </div>
      <ul className="hidden items-center gap-24 lg:flex">
        <li>Home</li>
        <li>New Arrivals</li>
        <li>Collections</li>
        <li>Sales</li>
        <li>Contact</li>
      </ul>
      <a>Back To Top</a>
    </footer>
  );
};

export default footer;
