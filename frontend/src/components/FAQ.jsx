import { useState } from 'react'

const FAQS = [
  {
    question: 'Is it safe to use every day?',
    answer:
      'Yes. The device is designed for daily use at low-to-moderate intensity. We recommend starting with shorter, lower-intensity sessions and building up as your body adjusts.',
  },
  {
    question: 'How long do the gel pads last?',
    answer:
      'Each pair of gel pads lasts roughly 20–30 sessions with proper care. Replacement pads are available separately, and storing them on the plastic backing between uses extends their life.',
  },
  {
    question: 'How long does the battery last on a single charge?',
    answer:
      'A full charge takes about 90 minutes over USB-C and powers roughly 6–8 sessions of 15 minutes each, depending on the intensity level used.',
  },
  {
    question: 'Where can I place it on my body?',
    answer:
      'It can be worn on the neck, shoulders, lower back, arms, or legs. Avoid the head, chest, throat, and any area with broken or irritated skin.',
  },
  {
    question: 'Can people with pacemakers or implants use it?',
    answer:
      'No. EMS devices should not be used by anyone with a pacemaker, defibrillator, or other electronic implant. Consult a doctor before use if you have any underlying medical condition.',
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-gray-900">{question}</span>
        <ChevronIcon open={isOpen} />
      </button>

      {/* Expand/collapse content */}
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-gray-500">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-xs font-medium text-blue-600">FAQ</span>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Questions answered.
        </h2>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white px-6 text-left">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
