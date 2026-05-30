import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Feather,
  Mail,
  ShieldCheck,
  Star,
  PenLine,
  Newspaper,
  Users,
  CheckCircle,
  Quote,
} from "lucide-react";

const trustItems = [
  "Urban Fiction",
  "Independent Publishing",
  "Author-Owned Brand",
  "Original Stories",
];

const highlights = [
  {
    title: "Street Literature With Depth",
    text: "Raw stories built around loyalty, betrayal, survival, ambition, and consequence.",
  },
  {
    title: "Premium Author Branding",
    text: "A polished platform for Emani Nooner’s catalog, future releases, and reader base.",
  },
  {
    title: "Built For Growth",
    text: "Designed for book sales, reader inquiries, author submissions, and publishing opportunities.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Urban Fiction Novels",
    text: "Original street fiction created for readers who want cinematic plots, pressure, and unforgettable characters.",
  },
  {
    icon: PenLine,
    title: "Author Platform",
    text: "A professional digital home for Emani Nooner’s books, announcements, catalog, and reader interest.",
  },
  {
    icon: Newspaper,
    title: "Publishing Inquiries",
    text: "A clear path for authors, media, partners, and readers to connect with Pen Game Press.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover The Brand",
    text: "Visitors immediately understand the tone, genre, and professional identity of Pen Game Press.",
  },
  {
    step: "02",
    title: "Explore The Books",
    text: "Readers are guided toward featured releases, future titles, and book inquiry opportunities.",
  },
  {
    step: "03",
    title: "Start The Conversation",
    text: "Clear calls-to-action move serious visitors toward contact, orders, publishing questions, or partnerships.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 py-16 md:py-28">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#B8860B]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-white/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Pen Game Press
            </p>

            <h1 className="font-serif text-5xl font-black leading-[1.05] md:text-7xl">
              Stories Born From Pressure. Written With Purpose.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6F6A61]">
              A luxury urban fiction and independent publishing brand delivering
              cinematic street novels, powerful characters, and stories that
              leave a mark.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/books"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8860B] px-8 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-[#B8860B]/20 transition hover:bg-[#111]"
              >
                Explore Books <ArrowRight size={18} />
              </Link>

              <Link
                to="/publishing"
                className="inline-flex items-center justify-center rounded-full border border-[#B8860B]/40 bg-white/60 px-8 py-4 text-sm font-black uppercase tracking-widest text-[#111] transition hover:bg-[#B8860B] hover:text-white"
              >
                Publishing Inquiries
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Genre", "Urban Fiction"],
                ["Focus", "Storytelling"],
                ["Platform", "Independent"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#111]/10 bg-white/70 p-5"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[#B8860B]">
                    {label}
                  </p>
                  <p className="mt-2 font-bold text-[#111]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FEATURED BOOK CARD */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-[2rem] border border-[#B8860B]/30 md:block" />

            <div className="relative rounded-[2rem] border border-[#111]/10 bg-white p-6 shadow-2xl md:p-8">
              <div className="rounded-[1.5rem] border border-[#B8860B]/30 bg-[#F8F4EE] p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#B8860B]">
                  Featured Release
                </p>

                <div className="mt-8 flex min-h-[330px] flex-col justify-between rounded-xl border border-[#B8860B]/30 bg-gradient-to-b from-[#EFE7DA] to-white p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#6F6A61]">
                      A Pen Game Press Novel
                    </p>
                    <h2 className="mt-5 font-serif text-5xl font-black">
                      Coming Soon
                    </h2>
                  </div>

                  <div>
                    <p className="text-sm leading-7 text-[#6F6A61]">
                      Book cover, synopsis, release date, and order link will be
                      placed here.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Street Fiction", "Drama", "Legacy"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#B8860B]/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#B8860B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/books"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#B8860B] transition hover:text-[#111]"
                >
                  View Catalog <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="px-5">
        <div className="mx-auto grid max-w-7xl gap-3 border-y border-[#111]/10 py-6 sm:grid-cols-2 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#111]/70"
            >
              <ShieldCheck size={18} className="text-[#B8860B]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BRAND HIGHLIGHTS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                The Brand
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black md:text-6xl">
                Built for readers who want more than a story.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#6F6A61]">
              The homepage is designed to build trust fast, introduce the brand,
              guide readers toward the catalog, and create clear paths for
              publishing and business inquiries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#111]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <BookOpen className="text-[#B8860B]" size={34} />
                <h3 className="mt-8 font-serif text-3xl font-black">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#6F6A61]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / WHAT VISITORS CAN DO */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#EFE7DA] p-8 md:p-14">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                What We Offer
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black md:text-6xl">
                A home for books, readers, and publishing opportunities.
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#B8860B]"
            >
              Start Inquiry <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[2rem] border border-[#111]/10 bg-white p-8"
                >
                  <Icon className="text-[#B8860B]" size={34} />
                  <h3 className="mt-6 font-serif text-3xl font-black">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6F6A61]">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPLIT STORY SECTION */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#111]/10 bg-white md:grid-cols-2">
          <div className="bg-[#EFE7DA] p-10 md:p-16">
            <Feather className="text-[#B8860B]" size={40} />

            <h2 className="mt-8 font-serif text-4xl font-black md:text-6xl">
              The pen is the product.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6F6A61]">
              Pen Game Press turns pressure into pages, giving Emani Nooner’s
              voice a professional home while creating space for future books,
              readers, publishing partnerships, and author opportunities.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8860B] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#111]"
            >
              Read The Story <ArrowRight size={18} />
            </Link>
          </div>

          <div className="bg-[#111] p-10 text-white md:p-16">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Why It Works
            </p>

            <div className="mt-8 space-y-6">
              {[
                "Luxury editorial design builds trust immediately.",
                "Clear calls-to-action guide visitors toward books and inquiries.",
                "A professional brand creates room for future authors and releases.",
              ].map((text, index) => (
                <div key={text} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B8860B] font-serif text-xl font-black">
                    {index + 1}
                  </div>
                  <p className="pt-2 text-lg leading-8 text-white/75">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
                Reader Journey
              </p>
              <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
                Simple path. Strong conversion.
              </h2>
            </div>

            <p className="text-lg leading-8 text-[#6F6A61]">
              Every section moves visitors from curiosity to trust, then from
              trust to action — exploring books, contacting the brand, or
              submitting a publishing inquiry.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#111]/10 bg-white p-8 shadow-sm"
              >
                <p className="font-serif text-6xl font-black text-[#B8860B]">
                  {item.step}
                </p>
                <h3 className="mt-8 text-xl font-black uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#6F6A61]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / QUOTE */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Star className="mx-auto text-[#B8860B]" size={38} />

          <h2 className="mt-8 font-serif text-4xl font-black md:text-6xl">
            “The kind of stories that feel cinematic, personal, and impossible
            to ignore.”
          </h2>

          <p className="mt-6 text-sm font-black uppercase tracking-[0.35em] text-[#6F6A61]">
            Reader Response Preview
          </p>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#B8860B]">
              Quick Answers
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black md:text-6xl">
              Built to help visitors take the next step.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              [
                "What is Pen Game Press?",
                "An independent publishing brand focused on urban fiction, storytelling, and premium author presentation.",
              ],
              [
                "Can readers ask about books?",
                "Yes. Readers can use the contact page for book questions, ordering interest, and release updates.",
              ],
              [
                "Can authors or partners inquire?",
                "Yes. The publishing page and contact form are built for author submissions, partnerships, and media requests.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[2rem] border border-[#111]/10 bg-[#EFE7DA] p-7"
              >
                <h3 className="text-lg font-black">{question}</h3>
                <p className="mt-3 leading-7 text-[#6F6A61]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2.5rem] bg-[#B8860B] p-10 text-white md:flex-row md:items-center md:p-14">
          <div>
            <Mail size={34} />
            <h2 className="mt-5 font-serif text-4xl font-black">
              Ready to connect with Pen Game Press?
            </h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Reach out for book inquiries, publishing opportunities, media
              requests, or business conversations.
            </p>
          </div>

          <Link
            to="/contact"
          className="shrink-0 rounded-full bg-[#111] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-[#111]"
          >
            Contact Now
          </Link>
        </div>
      </section>
    </main>
  );
}