import Image from "next/image";

export default function MenuSection({ category }) {

  if (!category) return null;

  return (
    <section id={category.id} className="mb-20">

      <h2 className="text-orange-500 text-3xl font-bold mb-8 border-b border-orange-500 pb-2">
        {category.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {category.items?.map((item) => (

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

            <div className="w-[110px] h-[110px] rounded-xl overflow-hidden bg-white flex items-center justify-center">

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