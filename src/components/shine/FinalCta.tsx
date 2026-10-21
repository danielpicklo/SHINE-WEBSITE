import { useState } from "react";
import { ChevronDown } from "lucide-react";

const field =
  "w-full border border-[#b1b1b1] bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#b1b1b1] focus:border-accent";

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 bg-[#0e0e0e] py-16 text-white lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 px-5 lg:grid-cols-[450px_512px] lg:justify-center lg:gap-[60px] lg:px-8">
        <div>
          <h2 className="max-w-sm text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]">
            Find Out What Your Roof Is Worth
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-[30px] lg:text-xl">
            Get in touch with us to discover how solar delivers additional income. Whether you have
            one property or an entire portfolio, we’re happy to provide a free analysis.
          </p>
        </div>

        {submitted ? (
          <div className="border border-accent/40 px-6 py-10">
            <h3 className="text-2xl text-accent">Request received.</h3>
            <p className="mt-4 leading-relaxed text-white/80">
              A member of the Shine team will review your property or portfolio details and follow
              up by email.
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
                <input required name="firstName" placeholder="First name" className={`${field} mt-1.5 focus:border-accent`} />
              </label>
              <label className="block text-sm font-medium">
                Last name
                <input required name="lastName" placeholder="Last name" className={`${field} mt-1.5`} />
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
    </section>
  );
}
