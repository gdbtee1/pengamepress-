import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Crown,
  Feather,
  Landmark,
  Quote,
  Sparkles,
  Users,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Feather,
    title: "The Pen",
    text: "Writing is the foundation. Every book starts with discipline, vision, and a story worth telling.",
  },
  {
    icon: Crown,
    title: "The Brand",
    text: "Pen Game Press is built to feel premium, respected, and serious in the publishing space.",
  },
  {
    icon: BookOpen,
    title: "The Reader",
    text: "Every story is created to pull readers in, hold attention, and leave something behind.",
  },
];

const pillars = [
  "Urban fiction with cinematic energy.",
  "Premium presentation for independent storytelling.",
  "A scalable publishing identity built for future releases.",
];

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 py-16 md:py-28">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#B8860B]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                About Pen Game Press
              </p>

              <h1 className="mt-6 font-serif text-5xl font-black leading-tight md:text-7xl">
                A publishing brand built from pressure, purpose, and
                penmanship.
              </h1>
            </div>

            <div className="flex items-end">
              <div>
                <p className="text-xl leading-9 text-[#3A2A1A]">
                  Pen Game Press is an independent publishing house created to
                  transform stories into legacy. Every title is built around
                  powerful storytelling, unforgettable characters, and premium
                  presentation.
                </p>

                <Link
                  to="/books"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#111]"
                >
                  Explore Books <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
          <div className="grid md:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-[#111] p-10 text-white md:p-16">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                Founder / Author
              </p>

              <h2 className="mt-6 font-serif text-6xl font-black">
                Emani Nooner
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">
                Emani Nooner is the creative voice behind Pen Game Press,
                writing street urban novels shaped by imagination, resilience,
                pressure, and storytelling that resonates with readers long
                after the final page.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Voice", "Raw"],
                  ["Style", "Cinematic"],
                  ["Mission", "Legacy"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <p className="text-xs font-black uppercase tracking-widest text-[#B8860B]">
                      {label}
                    </p>
                    <p className="mt-2 font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#EFE7DA] p-10 md:p-16">
              <Landmark className="text-[#B8860B]" size={44} />

              <h3 className="mt-8 font-serif text-4xl font-black">
                More than books. A literary house with a point of view.
              </h3>

              <p className="mt-6 leading-8 text-[#6F6A61]">
                Pen Game Press exists to create a professional home for urban
                fiction while building a respected publishing identity capable
                of supporting future books, authors, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-white p-8 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-14">
          <div>
            <Quote className="text-[#B8860B]" size={40} />
            <h2 className="mt-6 font-serif text-4xl font-black md:text-6xl">
              The story is the asset. The brand is the vehicle.
            </h2>
          </div>

          <div className="space-y-5">
            {pillars.map((item) => (
              <div key={item} className="flex gap-4">
                <CheckCircle className="mt-1 shrink-0 text-[#B8860B]" />
                <p className="text-lg leading-8 text-[#6F6A61]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Foundation
            </p>

            <h2 className="mt-5 font-serif text-4xl font-black md:text-6xl">
              Built on three principles.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#111]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Icon className="text-[#B8860B]" size={38} />

                  <h3 className="mt-8 font-serif text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#6F6A61]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              The Vision
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
              From manuscript to movement.
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {[
              [
                "01",
                "Create the Brand",
                "Establish Pen Game Press as a respected publishing identity.",
              ],
              [
                "02",
                "Launch the Catalog",
                "Showcase urban fiction through premium presentation and storytelling.",
              ],
              [
                "03",
                "Grow the Platform",
                "Expand into future releases, authors, readers, and partnerships.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="grid gap-6 rounded-[2rem] border border-[#111]/10 bg-white p-8 md:grid-cols-[120px_1fr]"
              >
                <div className="font-serif text-5xl font-black text-[#B8860B]">
                  {number}
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase tracking-widest">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#6F6A61]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            [Sparkles, "Premium Identity", "A serious brand creates trust before a reader ever opens the first page."],
            [Users, "Reader Community", "The platform gives supporters a place to discover, follow, and connect."],
            [Crown, "Long-Term Vision", "Pen Game Press is structured to grow beyond one book into a publishing house."],
          ].map(([Icon, title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] bg-[#EFE7DA] p-8"
            >
              <Icon className="text-[#B8860B]" size={36} />
              <h3 className="mt-6 font-serif text-3xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-[#6F6A61]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto rounded-[2.5rem] bg-[#111] p-12 text-center text-white md:p-16">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
            Read The Work
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl font-black md:text-6xl">
            Discover the stories behind Pen Game Press.
          </h2>

          <Link
            to="/books"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-[#111]"
          >
            View Books <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}