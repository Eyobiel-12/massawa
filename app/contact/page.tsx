"use client"

import Image from "next/image"
import AnimatedNavbar from "@/components/animated-navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedNavbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/restaurant-interior.png"
              alt="Contact Massawa"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-300 mb-4">{t("contact.hero.title")}</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">{t("contact.hero.description")}</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8">{t("contact.info.getInTouch")}</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-stone-800 mb-1">{t("contact.info.location")}</h3>
                      <p className="text-stone-600">
                        Grotestraat 94
                        <br />
                        Ede, Netherlands
                        <br />
                        6711 AN
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-stone-800 mb-1">{t("contact.info.phone")}</h3>
                      <p className="text-stone-600">+31 123 456 789</p>
                      <p className="text-stone-500 text-sm mt-1">{t("contact.info.phoneDescription")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-stone-800 mb-1">{t("contact.info.email")}</h3>
                      <p className="text-stone-600">info@massawarestaurant.com</p>
                      <p className="text-stone-500 text-sm mt-1">{t("contact.info.emailDescription")}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-6 w-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-stone-800 mb-1">{t("contact.info.hours")}</h3>
                      <p className="text-stone-600 whitespace-pre-line">{t("contact.info.hoursDescription")}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-4">{t("contact.info.followUs")}</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-stone-100 hover:bg-amber-100 transition-colors p-3 rounded-full"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-700"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-stone-100 hover:bg-amber-100 transition-colors p-3 rounded-full"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-700"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-stone-100 hover:bg-amber-100 transition-colors p-3 rounded-full"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-700"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-stone-50 rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">{t("contact.form.title")}</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-8 text-center">{t("contact.map.title")}</h2>
            <div className="rounded-lg overflow-hidden shadow-md h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.762407265426!2d5.668334376689062!3d52.047640071941146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7adabfae8514b%3A0x5b162fe21ebb9f5c!2smassawa%20eritrean%20%26%20ethiopian%20restaurant!5e0!3m2!1sen!2snl!4v1746400389513!5m2!1sen!2snl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Massawa Restaurant Location"
                className="absolute inset-0"
              ></iframe>
            </div>
            <div className="text-center mt-6 text-stone-600">
              <p>Grotestraat 94, Ede, Netherlands, 6711 AN</p>
              <a
                href="https://maps.app.goo.gl/g8SgaHA3is3rsKN39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-800 underline mt-2 inline-block"
              >
                {t("contact.map.getDirections")}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8 text-center">{t("contact.faq.title")}</h2>

            <div className="space-y-6">
              {t("contact.faq.questions", []).map((faq: any, index: number) => (
                <div key={index} className="bg-stone-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{faq.question}</h3>
                  <p className="text-stone-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
