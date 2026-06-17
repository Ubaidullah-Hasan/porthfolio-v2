import ContactIntro from "./ContactIntro";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050816] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.20),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent)]" />

        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <ContactIntro />
        <ContactForm />
      </div>
    </section>
  );
}