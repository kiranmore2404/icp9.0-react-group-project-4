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
      <section className="bg-white py-12 mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Ticket Fare</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Travel Class</th>
                  <th className="py-2 px-4 border-b">Minimum Distance</th>
                  <th className="py-2 px-4 border-b">Basic Fare at Min Distance</th>
                  <th className="py-2 px-4 border-b">Reservation Fee</th>
                  <th className="py-2 px-4 border-b">Supplementary Charge for Train Safety</th>
                </tr>
              </thead>
              <tbody>
                {fareData.map((fare, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{fare.class}</td>
                    <td className="py-2 px-4 border-b">{fare.minDistance}</td>
                    <td className="py-2 px-4 border-b">{fare.basicFare}</td>
                    <td className="py-2 px-4 border-b">{fare.resFee}</td>
                    <td className="py-2 px-4 border-b">{fare.suppCharge}</td>
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