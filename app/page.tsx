export default function BarberShopDemoSite() {
  const services = [
    {
      name: "Signature Haircut",
      price: "$35",
      description: "Precision cut with fade or taper, lineup, and finished styling.",
    },
    {
      name: "Haircut + Beard",
      price: "$50",
      description: "Full haircut plus beard shaping, cleanup, and detailed edge work.",
    },
    {
      name: "Kids Cut",
      price: "$25",
      description: "Clean, quick, comfortable cuts with a patient and friendly approach.",
    },
  ];

  const highlights = [
    { label: "Rating", value: "4.9★" },
    { label: "Years Experience", value: "10+" },
    { label: "Appointments", value: "Easy" },
  ];

  const reviews = [
    "Best fade I’ve had in a long time. Clean work, no waiting around, and great attention to detail.",
    "The shop looks professional, booking was easy, and the beard work came out perfect.",
    "Brought my son here too and both cuts came out sharp. Definitely coming back.",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xl font-black tracking-tight">Northside Barber Studio</p>
            <p className="text-sm text-white/60">Premium cuts. Sharp fades. Modern style.</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#reviews" className="transition hover:text-white">Reviews</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              Houston’s go-to shop for clean fades and confident style
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
              A barber website that actually looks worth booking.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Premium presentation, simple booking flow, clean service menus, and a brand that makes the shop feel more established before clients even walk in.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Schedule a Cut
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-black">{item.value}</p>
                  <p className="mt-1 text-sm text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full bg-white/10 blur-3xl lg:block" />
            <div className="absolute -right-4 bottom-0 hidden h-40 w-40 rounded-full bg-white/10 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-5">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">Featured Service</p>
                  <p className="mt-3 text-3xl font-black">Executive Fade + Beard</p>
                  <p className="mt-3 text-white/65">
                    Signature fade, beard detail, hot towel finish, and style consultation.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Hours</p>
                    <p className="mt-2 text-lg font-bold">Mon-Sat: 9AM-7PM</p>
                    <p className="text-white/65">Sun: 11AM-4PM</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Location</p>
                    <p className="mt-2 text-lg font-bold">Houston, TX</p>
                    <p className="text-white/65">Easy parking available</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white p-5 text-black">
                  <p className="text-sm font-medium text-black/60">Why this works</p>
                  <p className="mt-2 text-lg font-bold">
                    It feels like a real brand, not just a phone number on a page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-black/45">Services</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Clean pricing. Strong presentation.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/60">
              This layout gives the business a professional service menu that feels high-end and easy to understand.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-[2rem] border border-black/10 bg-neutral-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black tracking-tight">{service.name}</h3>
                  <span className="rounded-full bg-black px-4 py-2 text-sm font-bold text-white">
                    {service.price}
                  </span>
                </div>
                <p className="mt-5 leading-7 text-black/65">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full border border-black/10 bg-white px-5 py-3 font-semibold text-black transition group-hover:bg-black group-hover:text-white"
                >
                  Book This Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">About</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Built to make the shop feel trusted before the first cut.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              A professional barber website should feel sharp, premium, and easy to use. It should show the work clearly, explain the services fast, and make booking feel simple.
            </p>
            <p>
              This demo is designed to help a barber shop look more established, attract higher-quality clients, and give people confidence that they are booking with someone serious.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-black/45">Reviews</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">What clients remember</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="rounded-[2rem] border border-black/10 bg-neutral-50 p-8 shadow-sm">
                <p className="text-lg leading-8 text-black/75">“{review}”</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-bold">Local Client</p>
                    <p className="text-sm text-black/50">Verified customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/45">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Ready to book your next cut?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              This section can be swapped with the real business phone number, booking link, address, Instagram, and hours.
            </p>

            <div className="mt-8 space-y-4 text-base text-white/80">
              <p><span className="font-bold text-white">Phone:</span> (713) 555-0188</p>
              <p><span className="font-bold text-white">Address:</span> 1234 Main St, Houston, TX</p>
              <p><span className="font-bold text-white">Instagram:</span> @northsidebarberstudio</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-black text-white">Request an Appointment</h3>
            <div className="mt-6 grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Phone number"
              />
              <select className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none">
                <option>Select a service</option>
                <option>Signature Haircut</option>
                <option>Haircut + Beard</option>
                <option>Kids Cut</option>
              </select>
              <textarea
                className="min-h-[130px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35"
                placeholder="Tell us what you want"
              />
              <button className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.02]">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
