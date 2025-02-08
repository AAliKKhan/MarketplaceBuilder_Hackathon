
export default function Feedbacks() {
  return (
    <div className="mt-[100px] p-6 max-w-7xl mx-auto">
     <h2 className="text-3xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 group-hover:from-blue-800 group-hover:to-blue-500 transition-all duration-500 mb-2">Feedbacks</h2>
      <div className="space-y-6">
        {/* Dummy Reviews */}
        {[{
          name: "John Doe",
          rating: 5,
          feedback: "Great car, very comfortable and fuel-efficient!"
        }, {
          name: "Jane Smith",
          rating: 4,
          feedback: "Smooth ride, but the AC could be better."
        }, {
          name: "Michael Lee",
          rating: 5,
          feedback: "Fantastic experience! Will rent again."
        }].map((review, index) => (
          <div key={index} className="p-5 bg-white bg-opacity-75 backdrop-blur-lg rounded-lg shadow-md">
            <p className="font-semibold text-gray-800">{review.name}</p>
            <p className="text-yellow-500 text-lg">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
            <p className="text-gray-600 mt-2">{review.feedback}</p>
          </div>
        ))}
      </div>
      {/* Question Section */}
      <div className="mt-[100px]">
        <h3 className="text-3xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 group-hover:from-blue-800 group-hover:to-blue-500 transition-all duration-500 mb-2">Ask the Tenant</h3>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg mt-4 focus:ring-2 focus:ring-blue-400"
          placeholder="Have a question about this car? Ask here..."
        />
        <div className="flex justify-end">
        <button className="mt-4 w-1/6 px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Ask
        </button>
        </div>
      </div>
    </div>
  );
}