export default function Page() {
  const menu = [
    {
      name: "Tacos Al Pastor",
      price: "$2.50",
      desc: "Marinated pork with pineapple, onions, cilantro and house salsa.",
      img: "/tacos-1.webp",
    },
    {
      name: "Mini Tacos Fajita",
      price: "$3.00",
      desc: "Grilled fajita meat served mini-style with fresh toppings.",
      img: "/tacos-2.webp",
    },
    {
      name: "Gorditas",
      price: "$4.00",
      desc: "Thick handmade tortilla filled with your choice of meat.",
      img: "/tacos-3.webp",
    },
    {
      name: "Breakfast Tacos",
      price: "$1.75",
      desc: "Fresh breakfast tacos made quick and full of flavor.",
      img: "/tacos-1.webp",
    },
  ];

  const reviews = [
    {
      name: "Filoteo Yanez",
      text: "Been eating the breakfast tacos since they were inside the Valero down the street. Always fresh and very friendly staff. 5 stars.",
    },
    {
      name: "Sherrie Thibodeax",
      text: "It is located in a parking lot with a gas station. I would not let that stop you. The food was made from scratch and delicious.",
    },
    {
      name: "Christa Villafranca",
      text: "Toxic Tacos is a hidden gem in Humble! Their tacos are flavorful and perfectly seasoned. Highly recommend stopping by.",
    },
  ];

  const features = [
    {
      icon: "🌮",
      title: "Authentic Recipes",
      text: "Made from scratch every day.",
    },
    {
      icon: "🌶️",
      title: "Fresh Ingredients",
      text: "Quality you can taste in every bite.",
    },
    {
      icon: "⏱️",
      title: "Fast Service",
      text: "Great food, fast. Every time.",
    },
    {
      icon: "🥤",
      title: "Dine In or Take Out",
      text: "Come by or order to go.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#101010] text-white">
      {/* HEADER */}
      <header className="absolute left-0 top-0 z-40 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/toxic-logo.png"
              alt="Toxic Tacos logo"
              className="h-20 w-24 object-contain"
            />
          </a>

          <nav className="hidden items-center gap-9 text-sm font-black uppercase tracking-wide lg:flex">
            <a href="#home" className="border-b-2 border-[#ff5a13] pb-2">
              Home
            </a>
            <a href="#menu" className="transition hover:text-[#ff5a13]">
              Menu
            </a>
            <a href="#about" className="transition hover:text-[#ff5a13]">
              About
            </a>
            <a href="#gallery" className="transition hover:text-[#ff5a13]">
              Gallery
            </a>
            <a href="#location" className="transition hover:text-[#ff5a13]">
              Location
            </a>
            <a href="#contact" className="transition hover:text-[#ff5a13]">
              Contact
            </a>
          </nav>

          <a
            href="#location"
            className="rounded-md bg-[#ff5a13] px-6 py-3 text-sm font-black uppercase text-white shadow-lg transition hover:bg-orange-600"
          >
            Order Now
          </a>
        </div>
      </header>

      {/* HERO */}
<section
  id="home"
  className="relative min-h-[900px] overflow-hidden bg-[#080808] lg:min-h-[760px]"
></section>        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,90,19,0.36),transparent_34%),radial-gradient(circle_at_12%_42%,rgba(47,107,47,0.5),transparent_36%)]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-8%] top-[28%] h-80 w-80 rounded-full bg-[#2f6b2f] blur-3xl" />
          <div className="absolute right-[8%] top-[18%] h-96 w-96 rounded-full bg-[#ff5a13] blur-3xl" />
          <div className="absolute bottom-[-10%] right-[20%] h-72 w-72 rounded-full bg-yellow-500 blur-3xl" />
        </div>

        {/* Brush-like dark panel */}
        <div className="absolute left-0 top-0 z-0 hidden h-full w-[58%] bg-gradient-to-r from-black via-black/95 to-black/35 lg:block" />

        {/* Food image cluster */}
{/* Food image cluster */}
<div className="relative z-30 mx-auto mt-6 flex max-w-md items-center justify-center lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[62%] lg:max-w-none">
 <div className="max-w-2xl rounded-3xl bg-black/45 p-6 backdrop-blur-sm lg:bg-transparent lg:p-0"></div>
  <img
    src="/tacos-1.webp"
    alt="Tacos"
    className="h-64 w-64 rounded-[2rem] object-cover shadow-2xl sm:h-80 sm:w-80 lg:absolute lg:right-[-20px] lg:top-24 lg:h-[560px] lg:w-[680px] lg:rotate-3"
  />
  <img
    src="/tacos-2.webp"
    alt="Mini tacos"
    className="absolute left-4 top-20 h-32 w-40 -rotate-6 rounded-[1.5rem] object-cover shadow-2xl sm:h-40 sm:w-52 lg:right-[360px] lg:left-auto lg:top-[300px] lg:h-[260px] lg:w-[360px]"
  />
  <img
    src="/tacos-3.webp"
    alt="Gorditas"
    className="absolute right-4 top-28 h-32 w-40 rotate-6 rounded-[1.5rem] object-cover shadow-2xl sm:h-40 sm:w-52 lg:right-[40px] lg:top-[430px] lg:h-[240px] lg:w-[350px]"
  />
</div>
      {/* GREEN FEATURE STRIP */}
      <section className="relative bg-[#2f6b2f] py-10">
        <div className="absolute inset-x-0 -top-5 h-8 bg-[#2f6b2f]" />

        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-4 lg:px-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="text-5xl text-[#ff5a13]">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-black uppercase leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-white/85">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-[#101010] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.3em] text-[#ff5a13]">
            Favorites
          </p>

          <h2 className="mt-3 text-center text-5xl font-black uppercase tracking-tight text-white">
            Menu Highlights
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ff5a13]" />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {menu.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-xl bg-[#f8efe4] text-stone-950 shadow-2xl transition hover:-translate-y-1 hover:shadow-orange-500/20"
              >
                <div className="h-56 bg-white">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black uppercase text-[#ff5a13]">
                    {item.name}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-stone-700">
                    {item.desc}
                  </p>
                  <p className="mt-4 text-2xl font-black text-[#2f6b2f]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#location"
              className="inline-block rounded-md bg-[#ff5a13] px-10 py-4 font-black uppercase text-white shadow-lg transition hover:bg-orange-600"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / GALLERY */}
      <section id="about" className="bg-[#f8efe4] px-6 py-20 text-stone-950 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ff5a13]">
              About Toxic Tacos
            </p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-tight">
              Built for flavor, speed, and loyal customers.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Toxic Tacos serves breakfast tacos, tortas, menudo, tacos,
              gorditas and more. The goal of this website is simple: make people
              hungry fast, help them find the location, and give the restaurant a
              stronger online presence than a social page alone.
            </p>
          </div>

          <div id="gallery" className="grid gap-5 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl sm:col-span-2">
              <img
                src="/tacos-1.webp"
                alt="Taco plate"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <img
                src="/tacos-2.webp"
                alt="Taco closeup"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <img
                src="/tacos-3.webp"
                alt="Gordita"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="rounded-2xl bg-[#2f6b2f] p-8 text-white shadow-xl sm:col-span-2">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/70">
                Customer Favorite
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase">
                Fresh tacos, quick service, and food people remember.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[#f8efe4] px-6 pb-20 text-stone-950 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-5xl font-black uppercase">
            What Our <span className="text-[#2f6b2f]">Customers Say</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#2f6b2f]" />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-xl border border-orange-200 bg-white p-8 shadow-sm"
              >
                <p className="text-2xl text-[#ff5a13]">★★★★★</p>
                <p className="mt-5 leading-7 text-stone-700">
                  “{review.text}”
                </p>
                <p className="mt-8 font-bold italic">- {review.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="rounded-md border border-stone-300 bg-white px-8 py-3 font-black uppercase shadow-sm">
              See More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* LOCATION / FOOTER */}
      <section id="location" className="bg-[#101010] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-black uppercase">Visit Us</h3>
            <p className="mt-5 text-white/70">
              3103 Wilson Rd
              <br />
              Humble, TX 77396
              <br />
              United States
            </p>
            <a
              href="#"
              className="mt-7 inline-block rounded-md bg-[#2f6b2f] px-7 py-3 font-black uppercase text-white transition hover:bg-green-700"
            >
              Get Directions
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase">Hours</h3>
            <p className="mt-5 text-white/70">
              Monday - Saturday
              <br />
              6:00 AM - 9:00 PM
              <br />
              <br />
              Sunday
              <br />
              6:00 AM - 8:00 PM
            </p>
          </div>

          <div id="contact">
            <h3 className="text-2xl font-black uppercase">Follow Us</h3>
            <p className="mt-5 text-white/70">Facebook • Instagram</p>
            <img
              src="/toxic-logo.png"
              alt="Toxic Tacos"
              className="mt-8 h-24 w-40 object-contain"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#2f6b2f] py-5 text-center text-sm text-white/80">
        © 2026 Toxic Tacos. All Rights Reserved.
      </footer>
    </main>
  );
}