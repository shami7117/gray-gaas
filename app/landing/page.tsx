import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function Landing() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[color:var(--brand)] text-white text-center py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Get Affordable Clean Cooking Today
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Join thousands of Nigerian households switching to LPG with Gray GaaS — a healthier, cheaper, and smarter way to cook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input placeholder="Enter your email" />
            <Button className="bg-yellow-400 text-gray-900 hover:brightness-95 font-semibold">
              Sign Up Now
            </Button>
          </div>
          <p className="mt-4 text-sm opacity-80">No upfront cost • Pay-as-you-use LPG • Instant onboarding</p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container py-16 grid md:grid-cols-4 gap-10 text-center">
        {[
          { icon: "💚", title: "Healthier Living", desc: "Reduce smoke & respiratory issues" },
          { icon: "💰", title: "Cheaper Cooking", desc: "55% lower costs per meal" },
          { icon: "📱", title: "Smarter Access", desc: "IoT-powered LPG smart meters" },
          { icon: "🌱", title: "Eco-Friendly", desc: "4 tons CO₂ saved per household" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center bg-green-50 p-6 rounded-2xl shadow-sm">
            <span className="text-4xl mb-3">{item.icon}</span>
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Explainer */}
      <section className="bg-gray-50 py-20">
        <div className="container text-center mb-10">
          <h2 className="text-3xl font-bold">How Gray GaaS Works</h2>
          <p className="text-gray-600 mt-3">Clean cooking in just four simple steps</p>
        </div>
        <div className="container grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Sign Up", desc: "Register via app or local partner" },
            { step: "2", title: "Get Your Kit", desc: "Free LPG canister, stove & smart meter" },
            { step: "3", title: "Top Up Anytime", desc: "Pay-as-you-use via mobile money" },
            { step: "4", title: "Cook Smarter", desc: "Healthier, safer, affordable cooking" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center">
              <div className="text-[color:var(--brand)] text-4xl font-bold mb-3">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--brand)] text-white text-center py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Join the Clean Cooking Revolution</h2>
          <p className="text-lg mb-6">Be one of 200,000 Nigerian households switching to affordable LPG</p>
          <Button className="bg-white text-[color:var(--brand)] hover:brightness-95 font-bold">
            Get Started Now
          </Button>
          <p className="mt-3 text-sm opacity-80">Limited pilot spots available — sign up today!</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© {new Date().getFullYear()} Gray GaaS. All rights reserved.</p>
      </footer>
    </div>
  );
}
