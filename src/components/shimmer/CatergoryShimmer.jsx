const CategoryShimmer = ({ count }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between ">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          <p className="mirror-effect rounded h-6 w-48"></p>
          <hr className="my-1" />
        </div>
      ))}
    </div>
  );
};

export default CategoryShimmer;
