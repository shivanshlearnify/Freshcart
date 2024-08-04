import Shimmer from "./Shimmer";
const ProductPageShimmer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="font-medium flex space-x-2">
        <span className="mirror-effect rounded h-6 w-48"></span>
      </div>
      <div className="flex gap-8">
        <span className="w-1/2 h-[555px] mirror-effect rounded my-2" />
        <span />
        <div className="flex flex-col gap-6 justify-center">
          <div>
            <h2 className="mb-2 mirror-effect rounded w-40 h-10"></h2>
            <p className="mirror-effect rounded w-96 h-6 "></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48"></p>
          </div>
          <hr className="my-1" />

          <div className="flex gap-4">
            <p className="mirror-effect rounded h-10 w-32 my-2"></p>
            <p className="mirror-effect rounded h-10 w-32 my-2"></p>
          </div>
          <hr className="my-1" />
          <div>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
          </div>
        </div>
      </div>
      <div>
        <p className="mirror-effect rounded h-6 w-48"></p>
        <hr className="my-2 bg-black" />
        <div>
          <div>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
          </div>
          <hr className="my-2 bg-black" />
          <div>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
          </div>
          <hr className="my-2 bg-black" />
          <div>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
            <p className="mirror-effect rounded h-6 w-48 my-2"></p>
          </div>
          <hr className="my-2 bg-black" />
        </div>
      </div>
      <div>
        <h2 className="mb-2 mirror-effect rounded w-40 h-10"></h2>
        <div className="flex justify-between my-6">
          <Shimmer count={5} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageShimmer;

