const Shimmer = ({ count }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between ">
      {Array.from({ length:count }).map((_, index) => (
        <div
          key={index}
          className="w-60 h-80 border-2  mirror-effect rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
