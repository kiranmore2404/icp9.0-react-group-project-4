const TicketFareSection = () => {
  const fareData = [
    {
      class: "First Class",
      minDistance: "500 km",
      basicFare: "₹2000",
      resFee: "₹100",
      suppCharge: "₹50",
    },
    {
      class: "Second Class",
      minDistance: "500 km",
      basicFare: "₹1500",
      resFee: "₹80",
      suppCharge: "₹40",
    },
    {
      class: "Third Class",
      minDistance: "500 km",
      basicFare: "₹1000",
      resFee: "₹60",
      suppCharge: "₹30",
    },
    {
      class: "Sleeper Class",
      minDistance: "500 km",
      basicFare: "₹500",
      resFee: "₹40",
      suppCharge: "₹20",
    },
    {
      class: "General Class",
      minDistance: "500 km",
      basicFare: "₹300",
      resFee: "₹20",
      suppCharge: "₹10",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Ticket Fare</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left">Travel Class</th>
                <th className="py-2 px-4 text-left">Minimum Distance</th>
                <th className="py-2 px-4 text-left">Basic Fare at Min Distance</th>
                <th className="py-2 px-4 text-left">Reservation Fee</th>
                <th className="py-2 px-4 text-left">Supplementary Charge for Train Safety</th>
              </tr>
            </thead>
            <tbody>
              {fareData.map((fare, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4">{fare.class}</td>
                  <td className="py-2 px-4">{fare.minDistance}</td>
                  <td className="py-2 px-4">{fare.basicFare}</td>
                  <td className="py-2 px-4">{fare.resFee}</td>
                  <td className="py-2 px-4">{fare.suppCharge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TicketFareSection;