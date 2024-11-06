const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader-wrapper flex flex-col items-center">
        <div className="loader border-t-4 border-orange-600 w-16 h-16 rounded-full animate-spin"></div>
        <p className="text-orange-600 text-lg font-semibold mt-4">Fetching Products...</p>
      </div>
    </div>
  );
};

export default Loader;
