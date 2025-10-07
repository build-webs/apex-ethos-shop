import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: January 15, 2025</p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using LuxoraTech's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on LuxoraTech's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Product Information</h2>
            <p>
              We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>
            <p>
              All prices are in USD and subject to change without notice. Payment must be received before orders are processed. We accept major credit cards, PayPal, and Apple Pay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
            <p>
              Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Returns and Refunds</h2>
            <p>
              Products may be returned within 30 days of delivery for a full refund, provided they are unused and in original packaging. Return shipping costs are the customer's responsibility unless the item is defective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Prohibited Uses</h2>
            <p>You may not use our site:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates laws or regulations</li>
              <li>To transmit harmful or malicious code</li>
              <li>To collect or track personal information of others</li>
              <li>To engage in fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, and images, is the property of LuxoraTech and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
            <p>
              LuxoraTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              Email: legal@luxoratech.com<br />
              Phone: +1 (555) 123-4567<br />
              Address: 123 Tech Street, Innovation City, IC 12345
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
