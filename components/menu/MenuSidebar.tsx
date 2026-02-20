"use client";

export default function MenuSidebar({ categories }) {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-[280px] sticky top-20 h-fit hidden lg:block">

      <h2 className="text-orange-500 text-2xl font-bold mb-4">
        Menu
      </h2>

      <ul className="space-y-3 text-gray-300">

        {categories?.map((cat) => (
          <li
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className="cursor-pointer hover:text-orange-400 transition"
          >
            {cat.title}
          </li>
        ))}

      </ul>

    </div>
  );
}