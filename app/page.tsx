export default function ToxicTacosSite() {
  const menu = [
    {
      name: "Tacos Al Pastor",
      price: "$2.50",
      desc: "Marinated pork with pineapple, onions, cilantro and house salsa.",
    },
    {
      name: "Mini Tacos Fajita",
      price: "$3.00",
      desc: "Grilled fajita meat served mini-style with fresh toppings.",
    },
    {
      name: "Gorditas",
      price: "$4.00",
      desc: "Thick handmade tortilla filled with your choice of meat.",
    },
    {
      name: "Breakfast Tacos",
      price: "$1.75",
      desc: "Fresh breakfast tacos made quick and full of flavor.",
    },
  ];

  const reviews = [
    {
      name: "Filoteo Yanez",
      text: "Been eating the breakfast tacos since they were inside the Valero down the street. Always fresh and very friendly staff. 5 stars.",
    },
    {
      name: "Sherrie Thibodeax",
      text: "The food was made from scratch and delicious. Lots of tables and very clean. I will be going back when I am in town.",
    },
    {
      name: "Christa Villafranca",
      text: "Toxic Tacos is a hidden gem in Humble! Their tacos are flavorful and perfectly seasoned. Highly recommend stopping by.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="bg-[#111111] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-[#f15a24] flex items-center justify-center font-black text-2xl">
              X
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                TO<span className="text-[#f15a24]">X</span>IC
              </h1>
              <p className="text-sm font-bold tracking-[0.25em]">TACOS</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase">
            <a href="#menu" className="hover:text-[#f15a24]">Menu</a>
            <a href="#reviews" className="hover:text-[#f15a24]">Reviews</a>
            <a href="#location" className="hover:text-[#f15a24]">Location</a>
          </nav>

          <a
            href="#location"
            className="bg-[#f15a24] px-6 py-3 rounded-md font-black text-white hover:bg-orange-600"
          >
            Order Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(241,90,36,0.35),transparent_35%),radial-gradient(circle_at_10%_10%,rgba(45,95,39,0.45),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-7xl md:text-8xl font-black leading-[0.9] uppercase">
              Real Tacos.
              <br />
              <span className="text-[#f15a24]">Real Flavor.</span>
            </h2>

            <p className="mt-6 text-2xl font-bold max-w-xl">
              Serving Humble the best tacos, tortas, menudo & more!
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#menu"
                className="bg-[#f15a24] px-7 py-4 rounded-md font-black uppercase"
              >
                View Menu
              </a>
              <a
                href="#location"
                className="border border-white px-7 py-4 rounded-md font-black uppercase"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-10">
              <p className="text-yellow-400 text-2xl">★★★★★</p>
              <p className="text-lg">
                <span className="font-black">4.5 Stars</span> on Google
              </p>
              <p className="text-white/70">140+ reviews from happy customers</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-orange-500 via-red-700 to-green-800 flex items-end p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  Featured Plate
                </p>
                <h3 className="text-4xl font-black mt-2">
                  Tacos • Tortas • Menudo
                </h3>
                <p className="text-white/75 mt-3">
                  Replace this area with their real food photo for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2f6b2f] py-8">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-6">
          {[
            ["🌮", "Authentic Recipes", "Made from scratch every day."],
            ["🌶️", "Fresh Ingredients", "Quality you can taste."],
            ["⏱️", "Fast Service", "Great food, fast."],
            ["🥤", "Dine In or Take Out", "Come by or order to-go."],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex gap-4 items-start">
              <p className="text-4xl">{icon}</p>
              <div>
                <h3 className="font-black uppercase">{title}</h3>
                <p className="text-white/80">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="bg-[#111111] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-[#f15a24] font-black uppercase tracking-[0.25em]">
            Favorites
          </p>
          <h2 className="text-center text-5xl font-black uppercase mt-3">
            Menu Highlights
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {menu.map((item) => (
              <div key={item.name} className="bg-[#f8efe4] text-stone-950 rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-400 via-red-600 to-yellow-300" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#f15a24] uppercase">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-stone-700">{item.desc}</p>
                  <p className="mt-5 text-2xl font-black text-[#2f6b2f]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#location"
              className="inline-block bg-[#f15a24] px-8 py-4 rounded-md font-black uppercase"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#f8efe4] text-stone-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-black uppercase">
            What Our Customers Say
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white border border-orange-200 rounded-xl p-8 shadow-sm">
                <p className="text-[#f15a24] text-2xl">★★★★★</p>
                <p className="mt-4 text-stone-700 leading-7">“{review.text}”</p>
                <p className="mt-6 font-bold italic">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="bg-[#111111] py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-black uppercase">Visit Us</h3>
            <p className="mt-4 text-white/70">
              3103 Wilson Rd
              <br />
              Humble, TX 77396
            </p>
            <a className="mt-6 inline-block bg-[#2f6b2f] px-6 py-3 rounded-md font-black">
              Get Directions
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase">Hours</h3>
            <p className="mt-4 text-white/70">
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

          <div>
            <h3 className="text-2xl font-black uppercase">Follow Us</h3>
            <p className="mt-4 text-white/70">Facebook • Instagram</p>
            <div className="mt-6 text-4xl font-black">
              TO<span className="text-[#f15a24]">X</span>IC
              <p className="text-sm tracking-[0.3em]">TACOS</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2f6b2f] py-5 text-center text-sm">
        © 2026 Toxic Tacos. All Rights Reserved.
      </footer>
    </div>
  );
}