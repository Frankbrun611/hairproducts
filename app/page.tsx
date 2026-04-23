export default function JoelsBarberShopSite() {
  const services = [
    {
      name: "Classic Haircut",
      price: "$30",
      description: "Clean, reliable cuts with attention to detail and a sharp finish.",
    },
    {
      name: "Haircut + Beard",
      price: "$40",
      description: "Full grooming service with haircut, beard shaping, and edge-up.",
    },
    {
      name: "Kids Cut",
      price: "$25",
      description: "Fast, neat cuts in a welcoming neighborhood shop environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-blue-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-2xl font-black tracking-tight text-slate-900">JOEL'S BARBER SHOP</p>
            <p className="text-sm text-gray-600">Clean cuts. Reliable service. Houston barbers you can trust.</p>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Call Now
          </a>
        </div>
      </header>

      <section>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-gray-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
              Houston, Texas
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-none tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Sharp cuts. No wait. No guesswork.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
              A modern barbershop website designed to make Joel's Barber Shop feel more professional, visible, and easy to contact.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#services"
                className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View Services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-black text-slate-900">Quick Info</h2>
              <div className="mt-6 space-y-4">
                <p className="text-gray-700"><strong>Phone:</strong> (832) 887-6844</p>
                <p className="text-gray-700"><strong>Location:</strong> Houston, TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-10">Services</h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-4xl font-black">Contact</h2>
          <div className="mt-6 space-y-3 text-gray-300">
            <p><strong className="text-white">Phone:</strong> (832) 887-6844</p>
            <p><strong className="text-white">Address:</strong> 1313 Aldine Bender Rd, Houston, TX 77032</p>
            <p><strong className="text-white">Email:</strong> joelsbarbershop2.7@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
