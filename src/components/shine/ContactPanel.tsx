import { useState } from "react";
import { ChevronDown } from "lucide-react";

const field =
  "w-full border border-[#b1b1b1] bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#b1b1b1] focus:border-accent";

export function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="contact-split text-white"
      style={{
        backgroundImage: "linear-gradient(222deg, #122a00 34%, #0e0e0e 58%)",
      }}
    >
      <div className="min-h-[280px] lg:min-h-full">
        <img
          src="/contact/hero.jpg"
          alt="Shine team members on a multifamily rooftop overlooking the city"
          className="size-full min-h-[280px] object-cover object-[20%_center] lg:min-h-full"
        />
      </div>

      <div className="flex items-start justify-center px-5 py-16 lg:px-8 lg:py-24">
        <div className="w-full max-w-[512px]">
          <h1 className="text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]">
            Get in Touch
            <br />
            With Our Team
          </h1>
          <p className="mt-5 text-lg leading-[30px] lg:text-xl">
            We&apos;re here to answer any questions or provide a free analysis of your properties.
          </p>
          <p className="mt-5 text-lg leading-[30px] lg:text-xl">
            For partnership inquiries, contact{" "}
            <a
              href="mailto:info@getshine.com"
              className="font-bold text-accent underline underline-offset-2"
            >
              info@getshine.com
            </a>
          </p>

          <div className="mt-[60px]">
            {submitted ? (
              <div className="border border-accent/40 px-6 py-10">
                <h2 className="text-2xl text-accent">Request received.</h2>
                <p className="mt-4 leading-relaxed text-white/80">
                  A member of the Shine team will review your property or portfolio details and
                  follow up by email.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    First name
                    <input
                      required
                      name="firstName"
                      placeholder="First name"
                      className={`${field} mt-1.5`}
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Last name
                    <input
                      required
                      name="lastName"
                      placeholder="Last name"
                      className={`${field} mt-1.5`}
                    />
                  </label>
                </div>
                <label className="block text-sm font-medium">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className={`${field} mt-1.5`}
                  />
                </label>
                <label className="block text-sm font-medium">
                  Phone number
                  <div className="mt-1.5 flex border border-[#b1b1b1] focus-within:border-accent">
                    <span className="flex items-center gap-1 border-r border-[#b1b1b1] px-4 text-base">
                      US
                      <ChevronDown className="h-4 w-4" />
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#b1b1b1]"
                    />
                  </div>
                </label>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Property location(s)
                    <input name="location" placeholder="City, State" className={`${field} mt-1.5`} />
                  </label>
                  <label className="block text-sm font-medium">
                    Approximate unit count
                    <input name="units" placeholder="i.e. 24" className={`${field} mt-1.5`} />
                  </label>
                </div>
                <label className="block text-sm font-medium">
                  Message (optional)
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about the project..."
                    className={`${field} mt-1.5 resize-y`}
                  />
                </label>
                <button
                  type="submit"
                  className="bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black"
                >
                  Contact us
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
