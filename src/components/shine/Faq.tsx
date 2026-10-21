import { Minus, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/shine-content";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[linear-gradient(203deg,#122a00_0%,#0e0e0e_79%)] py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-[768px] px-5">
        <h2 className="text-center text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible defaultValue="faq-0" className="mt-12">
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-[#3d3d3d]">
              <AccordionTrigger className="group py-6 text-left font-display text-lg tracking-[-0.6px] text-white hover:no-underline [&>svg]:hidden">
                <span className="pr-6">{item.question}</span>
                <span className="ml-auto grid size-6 shrink-0 place-items-center rounded-full border border-accent text-accent">
                  <Plus className="h-3.5 w-3.5 group-data-[state=open]:hidden" />
                  <Minus className="hidden h-3.5 w-3.5 group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-[22.5px] text-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
