import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-hero-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About LuxoraTech</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Your trusted partner for premium technology and lifestyle products
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Founded in 2020, LuxoraTech emerged from a simple vision: to make premium technology and lifestyle products accessible to everyone. We believe that quality shouldn't come at the cost of affordability, and innovation should enhance everyday life.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                Our team of tech enthusiasts and lifestyle experts carefully curates every product in our catalog, ensuring that each item meets our high standards for quality, functionality, and design.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we serve thousands of customers across Africa and beyond, delivering not just products, but experiences that enrich lives and empower individuals to achieve more.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Every product undergoes rigorous quality checks
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  24/7 support team ready to help you
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Fast shipping to locations worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Join thousands of satisfied customers
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-8">
                To empower individuals with innovative technology and lifestyle products that enhance their daily lives, delivered with exceptional service and uncompromising quality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Products</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
