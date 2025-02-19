import React from "react";

const About = () => {
  return (
    <div className="p-6 w-[80%] mx-auto text-justify mt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-800">About Us</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">IRCTC</h2>
        <p>
          IRCTC stands for Indian Railway Catering and Tourism Corporation. It is a subsidiary of Indian Railways and is responsible for online ticket booking, catering, and tourism services. IRCTC was established in 1999 and is headquartered in New Delhi, India.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">IRCTC Next Generation e-Ticketing System</h2>
        <p>
          IRCTC's online ticketing platform allows users to book train tickets, check train availability, and track the status of their bookings. The platform also offers features like e-wallets, cancellation & refund options, and meal & accommodation booking on trains.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Catering & Tourism Services</h2>
        <p>
          IRCTC provides catering services to passengers via its e-catering services, where meals can be pre-booked and delivered to their seats. It also operates restaurants under "Food Plaza" and "Jan Aahar" at various railway stations. Additionally, IRCTC offers tour packages, hotel bookings, and luxury trains like the Maharaja Express and Buddhist Circuit Tourist Train.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">IRCTC Booking Types</h2>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">IRCTC UTS (Unreserved Ticketing System)</h3>
          <p>
            The IRCTC UTS mobile app allows users to book paperless tickets without visiting the counter. Users can also print tickets using ATVMs (Automatic Ticket Vending Machines).
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">IRCTC Full Tariff Rate (FTR)</h3>
          <p>
            This allows booking an entire coach or train for tours or special occasions. Users must register at least 30 days in advance, with a security deposit of ₹50,000 per coach.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">IRCTC General Booking</h3>
          <p>
            This booking type allows users to postpone or prepone their travel dates for Waitlisted/RAC/Confirmed tickets by paying an extra charge.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">IRCTC Tatkal Booking</h3>
          <p>
            Tatkal tickets are for last-minute bookings available 24 hours before departure on a first-come-first-serve basis. These tickets are non-refundable.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">IRCTC Ladies Quota</h3>
          <p>
            Introduced in 2011, this quota is for women traveling alone or with children under 3 years. Each train has six reserved berths in the sleeper class.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">How to Book IRCTC Tickets on TrackGo</h2>
        <ol className="list-decimal pl-6">
          <li>Select source and destination stations.</li>
          <li>Choose the date of journey.</li>
          <li>Select a train and class (Sleeper, 3rd AC, etc.).</li>
          <li>Enter passenger details and berth preferences.</li>
          <li>Provide contact details (mobile & email).</li>
          <li>Select additional preferences (e.g., book only if confirm berth).</li>
          <li>Enter GST details if applicable.</li>
          <li>Complete payment.</li>
          <li>Enter IRCTC credentials to confirm booking.</li>
        </ol>
      </section>

      <p className="text-center text-gray-600 mt-6">
        Book your train tickets easily with us and experience a hassle-free journey!
      </p>
    </div>
  );
};

export default About;