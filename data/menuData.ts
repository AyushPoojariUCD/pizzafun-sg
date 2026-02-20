export const menuCategories = [

  // ================= VEG PIZZA =================
  {
    id: "veg",
    title: "Plant Power Pizzas | Veg Pizza",
    items: [
      {
        code: "P01",
        name: "Melt-O-Mania",
        price: "$10.00 / $14.00",
        desc: "A Pizza filled with Just Cheese & Secret Sauce.",
        image: "/images/menu/pizza/p01.png",
        type: "veg",
      },
      {
        code: "P02",
        name: "Farm Fiesta",
        price: "$10.00 / $14.00",
        desc: "Choose any topping – Onions, Tomato, Capsicum or Corn.",
        image: "/images/menu/pizza/p02.png",
        type: "veg",
      },
      {
        code: "P03",
        name: "Paneer-O-Rama (P-O-R)",
        price: "$12.00 / $16.00",
        desc: "Cottage cheese tossed with secret seasoning.",
        image: "/images/menu/pizza/p03.png",
        type: "veg",
      },
      {
        code: "P04",
        name: "Cottage Cheese Lover",
        price: "$16.00 / $20.00",
        desc: "Paneer with onions, capsicum & tomato.",
        image: "/images/menu/pizza/p04.png",
        type: "veg",
      },
      {
        code: "P05",
        name: "Garden Blast",
        price: "$18.00 / $22.00",
        desc: "Loaded with olives, corn, onions, tomato & capsicum.",
        image: "/images/menu/pizza/p05.png",
        type: "veg",
      },
      {
        code: "P06",
        name: "Veggie Volcano",
        price: "$20.00 / $24.00",
        desc: "Spicy paneer, olives, jalapeno & exotic veggies.",
        image: "/images/menu/pizza/p06.png",
        type: "veg",
        spicy: true,
      },
    ],
  },

  // ================= NON VEG PIZZA =================
  {
    id: "nonveg",
    title: "Cluckin' Pizzazz | Non-Veg Pizza",
    items: [
      {
        code: "P07",
        name: "Cheesy Chic’n Mania",
        price: "$10.00 / $14.00",
        desc: "Classic chicken and cheese pizza.",
        image: "/images/menu/pizza/p07.png",
        type: "nonveg",
      },
      {
        code: "P08",
        name: "Hot Chic’n Slice",
        price: "$13.00 / $17.00",
        desc: "Chicken with spicy Korean sauce, capsicum & chilli flakes.",
        image: "/images/menu/pizza/p08.png",
        type: "nonveg",
        spicy: true,
      },
      {
        code: "P09",
        name: "Corny Chic’n",
        price: "$13.00 / $17.00",
        desc: "Creamy chicken pizza with corn & olives.",
        image: "/images/menu/pizza/p09.png",
        type: "nonveg",
      },
      {
        code: "P10",
        name: "Smoky Chic’n",
        price: "$13.00 / $17.00",
        desc: "Chicken pizza with smoky BBQ sauce.",
        image: "/images/menu/pizza/p10.png",
        type: "nonveg",
      },
      {
        code: "P11",
        name: "Tikka Temptation",
        price: "$16.00 / $20.00",
        desc: "Chicken tikka with onion, capsicum & jalapeno.",
        image: "/images/menu/pizza/p11.png",
        type: "nonveg",
      },
      {
        code: "P12",
        name: "Tandoor Treat",
        price: "$16.00 / $20.00",
        desc: "Chicken tandoori with onion & secret sauce.",
        image: "/images/menu/pizza/p12.png",
        type: "nonveg",
      },
      {
        code: "P13",
        name: "Chic’n Supreme Delight",
        price: "$18.00 / $22.00",
        desc: "Chicken tikka & kebab loaded pizza.",
        image: "/images/menu/pizza/p13.png",
        type: "nonveg",
      },
      {
        code: "P14",
        name: "Chic’n Overfun",
        price: "$20.00 / $24.00",
        desc: "Loaded chicken with tikka, kebab & veggies.",
        image: "/images/menu/pizza/p14.png",
        type: "nonveg",
      },
    ],
  },

  // ================= CHIZZA =================
  {
    id: "chizza",
    title: "Crust Meets Crunch | Chizza",
    items: [
      {
        code: "C01",
        name: "Uno Chizza",
        price: "$6.50",
        desc: "Single chicken crust topped with cheese, onion & capsicum.",
        image: "/images/menu/chizza/c01.png",
        type: "nonveg",
      },
      {
        code: "C02",
        name: "Twin Chizza",
        price: "$10.50",
        desc: "Double chicken crust topped with cheese & seasoning.",
        image: "/images/menu/chizza/c02.png",
        type: "nonveg",
      },
    ],
  },

  // ================= BURGER =================
  {
    id: "burger",
    title: "Bun-dle Of Fun | Burger",
    items: [
      { code: "B01", name: "Garden Griller", price: "$6.00", desc: "Veggie patty with fresh veggies & mayo.", image: "/images/menu/burger/b01.png", type: "veg" },
      { code: "B02", name: "Cheesy Bloom", price: "$6.50", desc: "Veggie burger packed with cheese.", image: "/images/menu/burger/b02.png", type: "veg" },
      { code: "B03", name: "Spicy Hub-Bub", price: "$7.50", desc: "Spicy double veggie patty burger.", image: "/images/menu/burger/b03.png", type: "veg", spicy: true },
      { code: "B04", name: "Cluckin’ Classic", price: "$8.00", desc: "Chicken fillet burger.", image: "/images/menu/burger/b04.png", type: "nonveg" },
      { code: "B05", name: "Melt My Chic", price: "$8.50", desc: "Chicken burger with melty cheese.", image: "/images/menu/burger/b05.png", type: "nonveg" },
      { code: "B06", name: "Royal Stack-Up", price: "$9.50", desc: "Double chicken fillet burger.", image: "/images/menu/burger/b06.png", type: "nonveg" },
    ],
  },

  // ================= WRAPS =================
  {
    id: "wraps",
    title: "Rollin' with Flavour | Wraps",
    items: [
      { code: "W01", name: "Crispy Green Roll-Up", price: "$6.50", desc: "Veggie wrap with spicy sauce.", image: "/images/menu/wrap/w01.png", type: "veg" },
      { code: "W02", name: "Smoky Cheese Comfort", price: "$6.50", desc: "Paneer wrap with smoky flavor.", image: "/images/menu/wrap/w02.png", type: "veg" },
      { code: "W03", name: "Smoky Chic’n Snuggle", price: "$7.50", desc: "Chicken wrap with smoky taste.", image: "/images/menu/wrap/w03.png", type: "nonveg" },
      { code: "W04", name: "Crisp Chic’n Cuddle", price: "$7.50", desc: "Fried chicken wrap.", image: "/images/menu/wrap/w04.png", type: "nonveg" },
    ],
  },

  // ================= SANDWICH =================
  {
    id: "sandwich",
    title: "Stuff'd & Stack | Sandwich",
    items: [
      { code: "S01", name: "Garden Fresh", price: "$4.00", desc: "Crisp veggies layered with tangy sauces.", image: "/images/menu/sandwich/s01.png", type: "veg" },
      { code: "S02", name: "Garden Cheese Stack", price: "$4.50", desc: "Paneer sandwich with cheese.", image: "/images/menu/sandwich/s02.png", type: "veg" },
      { code: "S03", name: "Cluck & Crunch", price: "$5.00", desc: "Tender chicken toasted sandwich.", image: "/images/menu/sandwich/s03.png", type: "nonveg" },
    ],
  },

  // ================= QUICK BITES =================
  {
    id: "bites",
    title: "Grab & Gobble | Quick Bites",
    items: [
      { code: "G01", name: "Fry Yay!", price: "$3.00", desc: "Classic crisp french fries.", image: "/images/menu/bites/g01.png", type: "veg" },
      { code: "G01A", name: "Peri Peri Fry Yay!", price: "$3.50", desc: "Fries with peri peri seasoning.", image: "/images/menu/bites/g01a.png", type: "veg" },
      { code: "G05", name: "Sweet Fry Yay!", price: "$4.50", desc: "Sweet potato fries.", image: "/images/menu/bites/g05.png", type: "veg" },
      { code: "G06", name: "Toast It Up", price: "$6.00", desc: "Garlic bread indulgence.", image: "/images/menu/bites/g06.png", type: "veg" },
      { code: "G02", name: "Cluckin’ Chic’n", price: "$7.00", desc: "Crunchy chicken strips.", image: "/images/menu/bites/g02.png", type: "nonveg" },
      { code: "G03", name: "Hot Wing Ding", price: "$6.50", desc: "Spicy chicken wings.", image: "/images/menu/bites/g03.png", type: "nonveg", spicy: true },
      { code: "G04", name: "Pop-a-licious Chic’n", price: "$6.00", desc: "Chicken popcorn.", image: "/images/menu/bites/g04.png", type: "nonveg" },
    ],
  },

  // ================= DESSERT =================
  {
    id: "dessert",
    title: "Bite Me Sweetly | Deserts",
    items: [
      { code: "T01", name: "Fudgy Wudgy", price: "$3.50", desc: "Rich chocolate brownies.", image: "/images/menu/dessert/t01.png", type: "veg" },
    ],
  },

  // ================= DRINKS =================
  {
    id: "drinks",
    title: "Sippity Sip | Drinks",
    items: [
      { code: "D01", name: "Fizzy Pop Fix", price: "$3.00", desc: "460ml chilled soft drink.", image: "/images/menu/drinks/d01.png", type: "veg" },
      { code: "D02", name: "Hydro Hit", price: "$3.00", desc: "460ml bottled water.", image: "/images/menu/drinks/d02.png", type: "veg" },
      { code: "D03", name: "Caffeine Charm", price: "$3.00", desc: "Premium roasted coffee options.", image: "/images/menu/drinks/d03.png", type: "veg" },
    ],
  },

];