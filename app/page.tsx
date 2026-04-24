export default function Page() {
  const menu = [
    {
      name: "Tacos Al Pastor",
      price: "$2.50",
      desc: "Marinated pork with pineapple & cilantro.",
      img: "/taco-food1.webp",
    },
    {
      name: "Mini Tacos Fajita",
      price: "$3.00",
      desc: "Grilled fajita meat, bold flavor.",
      img: "/taco-food2.webp",
    },
    {
      name: "Gorditas",
      price: "$4.00",
      desc: "Handmade tortilla stuffed with meat.",
      img: "/taco-food3.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/toxic-logo.png" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-xl font-bold text-orange-500">TOXIC TACOS</h1>
            <p className="text-xs text-gray-400">Humble, TX</p>
          </div>
        </div>

        <a
          href="#menu"
          className="bg-orange-500 px-4 py-2 rounded-full text-black font-bold"
        >
          Menu
        </a>
      </div>

      {/* HERO */}
      <div className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Real Tacos.
            <br />
            <span className="text-orange-500">Real Flavor.</span>
          </h2>

          <p className="mt-4 text-gray-400 text-lg">
            Serving Humble the best tacos, fajitas, gorditas & more.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#menu"
              className="bg-orange-500 px-6 py-3 rounded-full font-bold text-black"
            >
              View Menu
            </a>
            <a
              href="#location"
              className="border border-white px-6 py-3 rounded-full"
            >
              Find Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="/taco-food1.webp" className="rounded-xl" />
          <img src="/taco-food2.webp" className="rounded-xl" />
          <img src="/taco-food3.webp" className="rounded-xl col-span-2" />
        </div>
      </div>

      {/* MENU */}
      <div id="menu" className="px-6 py-16 bg-white text-black">
        <h2 className="text-3xl font-bold text-center">Menu Highlights</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {menu.map((item) => (
            <div key={item.name} className="rounded-xl overflow-hidden shadow-lg">
              <img src={item.img} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-500">
                  {item.name}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
                <p className="mt-4 font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LOCATION */}
      <div id="location" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Visit Toxic Tacos</h2>

        <p className="mt-4 text-gray-400">
          Humble, TX • 4.5★ Google Rating
        </p>

        <a className="inline-block mt-6 bg-orange-500 px-6 py-3 rounded-full font-bold text-black">
          Get Directions
        </a>
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 py-6 border-t border-white/10">
        © 2026 Toxic Tacos
      </div>
    </div>
  );
}