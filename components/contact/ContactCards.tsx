import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactCards() {

  const cards = [
    {
      icon: MapPin,
      title: "Address",
      text: "PizzaFun HQ, Singapore",
    },
    {
      icon: Mail,
      title: "Customer Support",
      text: "orders@pizzafun.sg",
    },
    {
      icon: Mail,
      title: "Franchise Enquiry",
      text: "info@pizzafun.sg",
    },
    {
      icon: Phone,
      title: "Phone",
      text: "+65 8184 3454",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

      {cards.map((card, index) => {

        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white text-black rounded-xl p-8 text-center shadow-lg hover:scale-105 transition"
          >

            <div className="flex justify-center mb-4">
              <div className="bg-[#263142] p-4 rounded-full text-white hover:text-yellow-400
                        hover:scale-[1.02]
                        hover:drop-shadow-[0_0_12px_rgba(255,200,0,0.6)]
                        cursor-default">
                <Icon size={32} />
              </div>
            </div>

            <h3 className="font-bold text-lg mb-2">
              {card.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {card.text}
            </p>

          </div>
        );
      })}

    </div>
  );
}