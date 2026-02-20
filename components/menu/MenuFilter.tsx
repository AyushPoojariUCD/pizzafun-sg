"use client";

type Filters = {
  veg: boolean;
  nonveg: boolean;
  spicy: boolean;
};

export default function MenuFilter({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) {

  const toggle = (key: keyof Filters) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Switch = ({
    label,
    active,
    onClick,
  }: {
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer"
    >
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          active ? "bg-green-500" : "bg-gray-500"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            active ? "translate-x-6" : ""
          }`}
        />
      </div>

      <span className="text-white capitalize">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-8 mb-10">

      <Switch
        label="non-veg"
        active={filters.nonveg}
        onClick={() => toggle("nonveg")}
      />

      <Switch
        label="spicy"
        active={filters.spicy}
        onClick={() => toggle("spicy")}
      />

      <Switch
        label="veg"
        active={filters.veg}
        onClick={() => toggle("veg")}
      />

    </div>
  );
}