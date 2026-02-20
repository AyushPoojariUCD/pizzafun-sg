import Image from "next/image";

export default function MenuSection({ category, filters }) {

  if (!category) return null;

  const filteredItems = category.items?.filter(item => {

    if (!filters?.veg && !filters?.nonveg && !filters?.spicy)
      return true;

    if (filters.veg && item.type === "veg")
      return true;

    if (filters.nonveg && item.type === "nonveg")
      return true;

    if (filters.spicy && item.spicy)
      return true;

    return false;
  });

  if (!filteredItems?.length) return null;

  return (
    <section id={category.id} className="mb-20">

      <h2 className="text-orange-500 text-3xl font-bold mb-8 border-b border-orange-500 pb-2">
        {category.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {filteredItems.map(item => (

          <div
            key={item.code}
            className="flex items-center justify-between border-b border-gray-600 pb-6"
          >

            <div>

              <h3 className="text-white text-xl font-semibold">
                {item.code} - {item.name}
              </h3>

              <p className="text-orange-400 font-semibold">
                {item.price}
              </p>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

            </div>

            <div className="w-[110px] h-[110px] rounded-xl overflow-hidden bg-white">

              <Image
                src={item.image}
                alt={item.name}
                width={110}
                height={110}
                className="object-cover w-full h-full"
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}