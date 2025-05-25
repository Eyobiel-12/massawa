"use client"

import Image from "next/image"
import AnimatedNavbar from "@/components/animated-navbar"
import Footer from "@/components/footer"
import { menuData } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import MotionWrapper from "@/components/animations/motion-wrapper"

export default function MenuPage() {
  const { t, language } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedNavbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/traditional-platter.png"
              alt="Massawa Menu"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t("menu.hero.title")}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{t("menu.hero.description")}</p>
          </div>
        </section>

        {/* Menu Introduction */}
        <section className="py-12 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
            <p className="text-lg text-stone-700">{t("menu.introduction")}</p>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            {menuData.map((category, index) => (
              <MotionWrapper key={index} variant="fadeIn" delay={index * 0.1} className="mb-16 last:mb-0">
                <div className="flex items-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-stone-800">{category.name}</h2>
                  <div className="ml-6 flex-grow h-px bg-amber-700/30"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  {category.items.map((item, itemIndex) => (
                    <MotionWrapper key={itemIndex} variant="slideUp" delay={itemIndex * 0.05 + 0.2} className="flex">
                      {item.image && (
                        <div className="mr-6 flex-shrink-0">
                          <div className="relative h-24 w-24 rounded-md overflow-hidden">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="flex items-baseline justify-between mb-2">
                          <div className="flex items-center">
                            <h3 className="text-xl font-serif font-bold text-stone-800">{item.name}</h3>
                            {('special' in item) && (item as any).special && (
                              <Badge className="ml-2 bg-amber-600 hover:bg-amber-700">SPECIAL</Badge>
                            )}
                          </div>
                          <div className="ml-4 text-lg font-medium text-amber-800">
                            {item.price !== null ? `€${item.price.toFixed(2)}` : item.priceText}
                          </div>
                        </div>
                        <p className="text-stone-600 mb-2">
                          {typeof item.description === 'string' ? item.description : item.description?.[language]}
                        </p>
                        {item.dietaryInfo && item.dietaryInfo.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.dietaryInfo.map((info, infoIndex) => (
                              <span
                                key={infoIndex}
                                className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-700"
                              >
                                {info}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </MotionWrapper>
                  ))}
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-16 bg-stone-800">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Featured Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-stone-700 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/vegetarian-platter.png"
                    alt="Vegetarian Platter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-serif font-bold mb-2">Massawa Special Vegan Menu</h3>
                  <p className="text-stone-300">A selection of five vegan dishes served with injera</p>
                </div>
              </div>
              <div className="bg-stone-700 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/traditional-meal.png"
                    alt="Traditional Meal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-serif font-bold mb-2">Kitfo</h3>
                  <p className="text-stone-300">Minced lean beef, warmed in niter kibbeh with mitmita spices</p>
                </div>
              </div>
              <div className="bg-stone-700 rounded-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/coffee-ceremony.png"
                    alt="Coffee Ceremony"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-serif font-bold mb-2">Traditional Coffee Ceremony</h3>
                  <p className="text-stone-300">Experience the authentic ritual of coffee preparation and serving</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dietary Information */}
        <section className="py-12 bg-stone-100">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6 text-center">{t("menu.dietary.title")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Vegetarian", icon: "🌱" },
                { label: "Vegan", icon: "🌿" },
                { label: "Gluten-Free", icon: "🌾" },
                { label: "Spicy", icon: "🌶️" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-stone-800">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-stone-600">{t("menu.dietary.notice")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
