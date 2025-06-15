"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedNavbar from "@/components/animated-navbar"
import Footer from "@/components/footer"
import MotionWrapper from "@/components/animations/motion-wrapper"
import StaggerChildren from "@/components/animations/stagger-children"
import ScrollReveal from "@/components/animations/scroll-reveal"
import { useLanguage } from "@/lib/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedNavbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/IMG_1150.jpg"
              alt="Massawa Restaurant Interior"
              fill
              className="object-cover brightness-40"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
              <MotionWrapper variant="fadeIn" duration={0.8}>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-300 text-shadow-lg mb-2">Massawa</h1>
                <h2 className="text-2xl md:text-3xl font-light tracking-wider text-amber-200 text-shadow-md mb-6">
                  {t("home.hero.tagline")}
                </h2>
              </MotionWrapper>
              <MotionWrapper variant="slideUp" delay={0.3} duration={0.8}>
                <p className="text-xl md:text-2xl text-amber-100 text-shadow mb-8 max-w-2xl mx-auto">{t("home.hero.description")}</p>
              </MotionWrapper>
            </div>
            <MotionWrapper variant="slideUp" delay={0.5} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                  <Link href="/reservations">{t("home.hero.reserveButton")}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-amber-700 hover:bg-white/10 hover:text-white"
                >
                  <Link href="/menu">{t("home.hero.exploreButton")}</Link>
                </Button>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <ScrollReveal className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                  {t("home.intro.title")}
                </h2>
                <p className="text-lg text-stone-700 mb-6">{t("home.intro.paragraph1")}</p>
                <p className="text-lg text-stone-700 mb-8">{t("home.intro.paragraph2")}</p>
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/about">
                    {t("home.intro.storyButton")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </ScrollReveal>
              <MotionWrapper variant="scale" className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/vegetarian-platter.png"
                  alt="Traditional Ethiopian Dishes"
                  fill
                  className="object-cover"
                />
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <MotionWrapper variant="fadeIn">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
                {t("home.featured.title")}
              </h2>
            </MotionWrapper>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-stone-800 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image src="/images/traditional-meal.png" alt="Traditional Meal" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Doro Wat</h3>
                  <p className="text-stone-300">
                    Spicy chicken stew simmered with berbere spice and served with injera
                  </p>
                </div>
              </div>
              <div className="bg-stone-800 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image src="/images/meat-stew-platter.png" alt="Meat Stew" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Zigni</h3>
                  <p className="text-stone-300">
                    Traditional Eritrean beef stew with aromatic spices and clarified butter
                  </p>
                </div>
              </div>
              <div className="bg-stone-800 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image src="/images/vegetarian-platter.png" alt="Vegetarian Platter" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">Vegetarian Platter</h3>
                  <p className="text-stone-300">Assortment of vegetable dishes including misir wot, gomen, and shiro</p>
                </div>
              </div>
            </StaggerChildren>
            <MotionWrapper variant="fadeIn" delay={0.6} className="text-center mt-12">
              <Button asChild variant="outline" className="border-amber-700 text-amber-500 hover:bg-amber-900/20">
                <Link href="/menu">{t("home.featured.viewMenu")}</Link>
              </Button>
            </MotionWrapper>
          </div>
        </section>

        {/* Cultural Experience */}
        <section className="py-20 bg-stone-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Cultural Experience</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                Immerse yourself in the rich traditions of Eritrean and Ethiopian culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-72">
                  <Image
                    src="/images/coffee-ceremony.png"
                    alt="Traditional Coffee Ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">Traditional Coffee Ceremony</h3>
                  <p className="text-stone-600 mb-4">
                    Experience the authentic Ethiopian coffee ceremony, a ritual of hospitality and community that has
                    been practiced for centuries. Fresh beans are roasted, ground, and brewed in a traditional clay pot
                    called a jebena.
                  </p>
                  <p className="text-amber-700">Available daily • 30-45 minutes</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-72">
                  <Image src="/images/ethiopian-baskets.png" alt="Traditional Crafts" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">Traditional Art & Crafts</h3>
                  <p className="text-stone-600 mb-4">
                    Our restaurant showcases beautiful handcrafted items from East Africa, including colorful mesob
                    baskets used for serving food, intricate textiles, and decorative art that reflects the region's
                    rich cultural heritage.
                  </p>
                  <p className="text-amber-700">On display throughout the restaurant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4 sm:px-6">
            <MotionWrapper variant="fadeIn">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-stone-800 mb-16">
                {t("home.testimonials.title")}
              </h2>
            </MotionWrapper>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The most authentic Ethiopian cuisine I've had outside of Addis Ababa. The ambiance is elegant yet welcoming.",
                  author: "Maria S.",
                },
                {
                  quote:
                    "A true culinary journey. The coffee ceremony was a delightful experience that transported me straight to East Africa.",
                  author: "James L.",
                },
                {
                  quote:
                    "Exceptional service and exquisite flavors. The vegetarian platter offers an incredible variety of tastes and textures.",
                  author: "Sophia T.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-amber-700 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.23.315-.606.814-1.083 1.492-1.425l-.398-.578c-1.85.64-3.08 1.543-3.678 2.714-.65 1.27-.737 2.614-.217 4.035.52 1.423 1.57 2.23 3.153 2.502 1.583.27 2.795-.206 3.636-1.43.84-1.225 1.158-2.58.955-4.068l-.793-.353z" />
                      <path d="M19.45 13.662c-.724-.883-1.683-1.32-2.88-1.297-1.198.027-2.156.507-2.88 1.442-.723.936-1.16 1.72-1.6 3.462-.556 2.25-.262 3.684.88 4.308.59.323 1.305.46 2.146.407.84-.053 1.724-.223 2.651-.513l.112-.56c-.428.345-.99.52-1.675.52-.714 0-1.266-.192-1.652-.576-.386-.384-.556-.894-.515-1.53l.016-.118c.886.094 1.743-.08 2.566-.52.823-.44 1.4-1.024 1.732-1.75.332-.726.395-1.457.187-2.196-.21-.74-.637-1.3-1.266-1.687l-.118.007z" />
                    </svg>
                  </div>
                  <p className="text-stone-700 mb-6 italic">{testimonial.quote}</p>
                  <p className="text-stone-900 font-semibold">{testimonial.author}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="py-20 bg-stone-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <MotionWrapper variant="slideUp">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t("home.cta.title")}</h2>
              <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">{t("home.cta.description")}</p>
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                <Link href="/reservations">{t("home.cta.button")}</Link>
              </Button>
            </MotionWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
