const Loader = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen gap-4 bg-black/50">
      <div className="flex items-center justify-center text-4xl text-blue-400 border-8 border-gray-300 rounded-full w-28 h-28 animate-spin border-t-blue-400" />
    </div>
  );
};

export default Loader;
