import Image from "next/image";

interface RentalSummaryProps {
  carName: string;
  carImage: string;
  subtotal: number;
  tax: number;
  total: number;
  promoImage: string;
}

const RentalSummary: React.FC<RentalSummaryProps> = ({
 
}) => {
  return (
    <div className="p-6 mb-[100px]">
      <div>
        <h1 className="font-bold text-xl">Rental Summary</h1>
        <p className="font-extralight">
          Prices may change depending on the length of rental and the price of
          your rental car.
        </p>
      </div>
      <div className="flex mt-6 justify-between">
        <div className="bg-[url('/blue.png')] bg-cover bg-center w-[120px] h-[100px] flex flex-col border rounded-md items-start justify-center p-6">
          <Image src="/1.png" alt="Car view" width={105} height={32} />
        </div>
        <div>
          <h1 className="font-bold text-lg">Car</h1>
          <Image src="/reviews.png" alt="reviews" width={190} height={20} />
        </div>
      </div>
      <div className="mt-9">
        <div className="flex justify-between p-3">
          <p className="font-extralight">Subtotal</p>
          <p className="font-bold">$Subtotal</p>
        </div>
        <div className="flex justify-between p-3">
          <p className="font-extralight">Tax</p>
          <p className="font-bold">$56</p>
        </div>
      </div>
      <div className="mt-4">
        <Image src="/2.png" alt="promo" width={444} height={36} />
      </div>
      <div className="flex justify-between p-3 mt-4">
        <div>
          <h1 className="font-bold">Total Rental Price</h1>
          <p className="font-extralight">
            Overall price and includes rental discount
          </p>
        </div>
        <p className="font-bold text-3xl">789</p>
      </div>
    </div>
  );
};

export default RentalSummary;
