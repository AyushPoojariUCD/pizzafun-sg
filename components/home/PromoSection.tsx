"use client";

export default function PromoSection() {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div
          className="group relative bg-[#d7dee7] rounded-xl overflow-hidden
                     min-h-[320px] sm:min-h-[360px] md:min-h-[420px]
                     flex items-center
                     transition-all duration-500 ease-out
                     hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
        >

          {/* Text */}
          <div className="z-10 p-6 sm:p-8 md:p-12 max-w-[65%] transition-all duration-500">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 leading-tight
                           transition-all duration-500 group-hover:text-red-700">
              BIRTHDAY <br /> MONTH
            </h2>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mt-2 mb-3
                           group-hover:text-red-700 transition-all duration-500">
              ENJOY BENEFITS
            </h3>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Discount of 15% off or monthly promotional whichever is higher &
              Double the FUN POINTS.
            </p>

          </div>

          {/* Image */}
          <div className="absolute right-0 bottom-0 h-full flex items-end overflow-hidden">
            <img
              src="/images/promo-section/birthday-offer.jpg"
              alt="Birthday"
              className="h-[85%] sm:h-[90%] md:h-full object-cover
                         transition-transform duration-700 ease-out
                         group-hover:scale-110"
            />
          </div>

        </div>


        {/* Card 2 */}
        <div
          className="group relative bg-[#e9dfd2] rounded-xl overflow-hidden
                     min-h-[320px] sm:min-h-[360px] md:min-h-[420px]
                     flex items-center
                     transition-all duration-500 ease-out
                     hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
        >

          {/* Text */}
          <div className="z-10 p-6 sm:p-8 md:p-12 max-w-[65%]">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600
                           transition-all duration-500 group-hover:text-red-700">
              STUDENTS
            </h2>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mt-2 mb-3
                           transition-all duration-500 group-hover:text-red-700">
              DISCOUNT & REWARDS
            </h3>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Get +2% discount on top of existing promotion & earn points.
            </p>

          </div>

          {/* Image */}
          <div className="absolute right-0 bottom-0 h-full flex items-end overflow-hidden">
            <img
              src="/images/promo-section/student-offer.jpg"
              alt="Student"
              className="h-[85%] sm:h-[90%] md:h-full object-cover
                         transition-transform duration-700 ease-out
                         group-hover:scale-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
}