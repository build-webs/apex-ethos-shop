import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Free shipping is available on orders over $50."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all products. Items must be unused and in original packaging. Return shipping is free for defective items."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 30 countries worldwide. International shipping costs and delivery times vary by location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website or the carrier's site."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic and sourced directly from manufacturers or authorized distributors."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Most of our products come with manufacturer warranties ranging from 1-2 years. Specific warranty information is available on each product page."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team via email at support@luxoratech.com, phone at +1 (555) 123-4567, or through our contact form. We respond within 24 hours."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 2 hours of placement. After that, please contact customer support for assistance."
    },
    {
      question: "Do you offer price matching?",
      answer: "Yes, we offer price matching on identical products from authorized retailers. Contact us with proof of the lower price before making your purchase."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-hero-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Find answers to common questions about our products and services
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-8 bg-secondary rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a href="/contact" className="inline-block">
                <button className="px-6 py-3 bg-accent-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Contact Support
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
