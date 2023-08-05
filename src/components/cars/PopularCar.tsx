import { MdVerifiedUser } from "react-icons/md";
const PopularCar = ({ carInfo }: { carInfo: { carBrandImg: string, carImg: string, carName: string, carModel: string, amountPday: string, ownerName: string, ownerImg: string, bgColor: string, bg2Color: string } }) => {
  return (
    <div className="border bg-[#e9f2ff] rounded-lg w-full">
      <div className="flex justify-between p-3">
        <div className="flex ">
          <img
            className="rounded-full  h-[3rem] w-[3rem]"
            src={carInfo.carBrandImg}
            alt="logo"
          />
          <div>
            <h1 className="font-bold">{carInfo.carName}</h1>
            <p>{carInfo.carModel}</p>
          </div>
        </div>
        <div>
          <p className="bg-white rounded-lg px-3 py-1 whitespace-nowrap" >2 Units available</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <img className="h-[10rem]" src={carInfo.carImg} alt="car" />
      </div>
      <div className="flex justify-between gap-4 bg-[#e6e9f3] p-3">
        <div className="flex gap-2">
          <img
            className="rounded-full w-[3rem] h-[3rem] object-contain"
            src="/user-avatar.png"
            alt="profile"
          />
          <div className="">
            <h1 className="font-bold">{carInfo.ownerName}</h1>
            <p className="flex gap-2 items-center">
              <MdVerifiedUser className="text-[#55b4dc]" />
              verified User
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            $950<span className="font-normal">/day</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PopularCar;
