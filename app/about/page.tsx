"use client"

import Image from "next/image"
import AnimatedNavbar from "@/components/animated-navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedNavbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/restaurant-interior.png"
              alt="About Massawa"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t("about.hero.title")}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{t("about.hero.description")}</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-stone mx-auto">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                  {t("about.story.beginning.title")}
                </h2>
                <p>
                  Massawa is a historic port city located on the Red Sea coast of Eritrea. Known as the "Pearl of the
                  Red Sea," Massawa has been a crucial trading hub for centuries, connecting the Horn of Africa with the
                  Middle East, India, and beyond. This strategic location has made it a melting pot of cultures,
                  influencing its rich culinary traditions.
                </p>
                <p>
                  The city's history dates back to ancient times, with evidence of settlement from the Aksumite Empire.
                  Over the centuries, Massawa has been influenced by Ottoman, Egyptian, Italian, and Ethiopian rule,
                  each leaving their mark on the city's architecture, culture, and cuisine.
                </p>

                <div className="my-12 relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/coffee-ceremony.png"
                    alt="Traditional coffee ceremony"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                  {t("about.story.philosophy.title")}
                </h2>
                <p>
                  Habesha cuisine, encompassing both Eritrean and Ethiopian food traditions, is one of the world's most
                  distinctive and flavorful culinary traditions. At its heart is the communal dining experience, where
                  meals are shared from a common plate, symbolizing unity and togetherness.
                </p>
                <p>
                  The foundation of Habesha cuisine is injera, a sourdough flatbread with a unique, slightly spongy
                  texture. Made from teff, an ancient grain native to the Horn of Africa, injera serves as both the
                  plate and the utensil for the meal. Diners tear pieces of injera to scoop up the various stews and
                  dishes served atop it.
                </p>

                <blockquote className="border-l-4 border-amber-700 pl-4 italic my-8">
                  "Food is not just sustenance in Habesha culture; it is a social ritual that brings people together,
                  strengthens community bonds, and celebrates our shared humanity."
                  <footer className="text-right">— Traditional Habesha saying</footer>
                </blockquote>

                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">{t("about.story.heritage.title")}</h2>
                <p>
                  The spices used in Habesha cuisine are what give it its distinctive character. Berbere, a complex
                  blend of chili peppers, garlic, ginger, basil, korarima, rue, ajwain, nigella, and fenugreek, is the
                  signature spice mix used in many dishes. Mitmita, another essential spice blend, is typically hotter
                  than berbere and includes African bird's eye chili peppers, cardamom seeds, cloves, and salt.
                </p>
                <p>
                  Signature dishes include Doro Wat (spicy chicken stew), Zigni (beef stew), Kitfo (minced raw beef
                  seasoned with mitmita and niter kibbeh), and a variety of vegetarian dishes like Misir Wat (spiced red
                  lentils), Shiro (ground chickpea stew), and Gomen (collard greens). The coffee ceremony, a ritual of
                  hospitality and respect, is an integral part of Habesha culture, showcasing the region's connection to
                  the birthplace of coffee.
                </p>

                <div className="my-12 relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/ethiopian-baskets.png"
                    alt="Traditional Habesha baskets and cultural items"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">{t("about.story.team.title")}</h2>
                <p>
                  The culinary traditions of Massawa reflect its coastal location and historical trade connections.
                  Seafood features prominently, prepared with influences from both African and Middle Eastern
                  traditions. The port city's cuisine also incorporates pasta dishes, a legacy of Italian colonial
                  influence, but prepared with local spices and ingredients.
                </p>
                <p>
                  Today, Massawa's culinary heritage continues to evolve while maintaining its deep cultural roots. The
                  traditional methods of food preparation are preserved and celebrated, passing down the authentic
                  flavors and techniques that have made Habesha cuisine renowned worldwide for its unique taste profile
                  and communal dining experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-serif font-bold text-center text-stone-800 mb-12">
              {t("about.values.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4">Authenticity</h3>
                <p className="text-stone-600">
                  We honor the authentic culinary traditions of Massawa and the Habesha culture, using traditional
                  spices, cooking methods, and serving styles that have been preserved for generations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4">Community</h3>
                <p className="text-stone-600">
                  We celebrate the communal dining experience central to Habesha culture, where sharing food from a
                  common plate symbolizes unity, friendship, and the joy of breaking bread together.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4">Cultural Heritage</h3>
                <p className="text-stone-600">
                  We preserve and share the rich cultural heritage of Massawa and the Horn of Africa, from the
                  traditional coffee ceremony to the art of making injera and the complex spice blends that define our
                  cuisine.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
