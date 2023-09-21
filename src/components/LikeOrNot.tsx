import Image from "next/image";

const LikeOrNot = () => {
  return (
    <div className="p-4 m-auto bg-orange-700 rounded-lg">
      <div className="flex gap-2">
        <h5>Lucia</h5>
        <p>22</p>
      </div>
      <Image
        src="/imgs/test.jpg"
        alt="img test"
        className="rounded"
        unoptimized
        width={250}
        height={250}
      />
      <div className="flex justify-center gap-4 mt-4">
        <p className="p-3 bg-green-500 rounded-lg">Like :&#41;</p>
        <p className="p-3 bg-red-500 rounded-lg">No like :&#40;</p>
      </div>
    </div>
  );
};

export default LikeOrNot;
