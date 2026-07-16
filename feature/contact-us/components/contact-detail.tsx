import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactDetails() {
  return (
    <main className="min-h-screen bg-custom-gradient px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-bold  font-space tracking-tight text-gray-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-md text-gray-500">
          Have questions or need support? Reach out to our team and we&apos;ll
          get back to you as soon as possible
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}
