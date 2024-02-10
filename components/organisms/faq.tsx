import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/molecules/accordion"
import { v4 as uuid } from 'uuid';
import Triangle from "../atoms/triangle";

const FAQS = [
    { id: uuid(), question: 'How to open a Collect & Pay Business account', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to activate a Collect & Pay account', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to add users to a Collect & Pay account', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to add an additional currency account', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to send funds to a Collect & Pay account', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to make an external transfer', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to make an internal transfer within Collect & Pay ', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to proceed in case of a missing incoming payment', answer: 'How to open a Collect & Pay Business account' },
    { id: uuid(), question: 'How to deal with an incoming transfer in compliance', answer: 'How to open a Collect & Pay Business account' },
] as { id: string; question: string; answer: string; }[]

export default function FaqSection() {
    return (
        <section className="relative">
            <Triangle
                position="top-left"
                color="var(--primary)"
            />
            <div className="pt-24 pb-20 gap-20 max-w-6xl mx-auto">
                <div>
                    <h2 className="uppercase text-primary font-extrabold text-6xl w-full text-right">FAQ</h2>
                    <div className="text-white font-medium space-y-8 mt-16 text-lg leading-9 tracking-widest">
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {FAQS.map((item) => (
                                <AccordionItem value={item.id} key={item.id}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}