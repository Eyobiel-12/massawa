"use client"
import Image from "next/image"
import AnimatedNavbar from "@/components/animated-navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MotionWrapper from "@/components/animations/motion-wrapper"
import StaggerChildren from "@/components/animations/stagger-children"
import AnimatedImageGallery from "@/components/animated-image-gallery"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

// Gallery data with categories
const galleryData = {
  all: [
    {
      src: "/images/restaurant-interior.png",
      alt: "Restaurant Interior",
      category: "interior",
    },
    {
      src: "/images/coffee-ceremony.png",
      alt: "Traditional Coffee Ceremony",
      category: "culture",
    },
    {
      src: "/images/vegetarian-platter.png",
      alt: "Vegetarian Platter",
      category: "food",
    },
    {
      src: "/images/restaurant-bar.png",
      alt: "Restaurant Bar",
      category: "interior",
    },
    {
      src: "/images/traditional-platter.png",
      alt: "Traditional Platter with Injera",
      category: "food",
    },
    {
      src: "/images/ethiopian-baskets.png",
      alt: "Traditional Ethiopian Baskets",
      category: "culture",
    },
    {
      src: "/images/meat-stew-platter.png",
      alt: "Meat Stew with Vegetables",
      category: "food",
    },
    {
      src: "/images/traditional-meal.png",
      alt: "Traditional Meal with Injera",
      category: "food",
    },
    {
      src: "/images/massawa-storefront.png",
      alt: "Outdoor Seating",
      category: "interior",
    },
    {
      src: "/images/traditional-meal.png",
      alt: "Tibs",
      category: "food",
    },
    {
      src: "/images/ethiopian-baskets.png",
      alt: "Traditional Spices",
      category: "culture",
    },
  ],
  food: [],
  interior: [],
  culture: [],
  kitchen: [],
}

// Populate category arrays
galleryData.food = galleryData.all.filter((item) => item.category === "food")
galleryData.interior = galleryData.all.filter((item) => item.category === "interior")
galleryData.culture = galleryData.all.filter((item) => item.category === "culture")
galleryData.kitchen = galleryData.all.filter((item) => item.category === "kitchen")

export default function GalleryPage() {
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
              alt="Massawa Gallery"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6">
            <MotionWrapper variant="fadeIn" duration={0.8}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t("gallery.hero.title")}</h1>
            </MotionWrapper>
            <MotionWrapper variant="slideUp" delay={0.3} duration={0.8}>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">{t("gallery.hero.description")}</p>
            </MotionWrapper>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6">
            <Tabs defaultValue="all" className="w-full">
              <MotionWrapper variant="fadeIn" className="flex justify-center mb-8">
                <TabsList className="bg-stone-100">
                  <TabsTrigger value="all" className="text-sm sm:text-base">
                    {t("gallery.categories.all")}
                  </TabsTrigger>
                  <TabsTrigger value="food" className="text-sm sm:text-base">
                    {t("gallery.categories.food")}
                  </TabsTrigger>
                  <TabsTrigger value="interior" className="text-sm sm:text-base">
                    {t("gallery.categories.interior")}
                  </TabsTrigger>
                  <TabsTrigger value="culture" className="text-sm sm:text-base">
                    {t("gallery.categories.culture")}
                  </TabsTrigger>
                  <TabsTrigger value="kitchen" className="text-sm sm:text-base">
                    {t("gallery.categories.kitchen")}
                  </TabsTrigger>
                </TabsList>
              </MotionWrapper>

              {(Object.keys(galleryData) as Array<keyof typeof galleryData>).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <AnimatedImageGallery images={galleryData[category]} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <MotionWrapper variant="fadeIn" className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">{t("gallery.events.title")}</h2>
              <p className="text-lg text-stone-600 max-w-3xl mx-auto">{t("gallery.events.description")}</p>
            </MotionWrapper>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div className="bg-stone-50 rounded-lg overflow-hidden" whileHover={{ y: -5 }}>
                <div className="relative h-64">
                  <Image
                    src="/images/coffee-ceremony.png"
                    alt="Cultural Night"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
                    {t("gallery.events.culturalNights.title")}
                  </h3>
                  <p className="text-stone-600 mb-4">{t("gallery.events.culturalNights.description")}</p>
                  <p className="text-amber-700 font-medium">{t("gallery.events.culturalNights.schedule")}</p>
                </div>
              </motion.div>

              <motion.div className="bg-stone-50 rounded-lg overflow-hidden" whileHover={{ y: -5 }}>
                <div className="relative h-64">
                  <Image
                    src="/images/ethiopian-baskets.png"
                    alt="Cooking Class"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">
                    {t("gallery.events.cookingClasses.title")}
                  </h3>
                  <p className="text-stone-600 mb-4">{t("gallery.events.cookingClasses.description")}</p>
                  <p className="text-amber-700 font-medium">{t("gallery.events.cookingClasses.schedule")}</p>
                </div>
              </motion.div>
            </StaggerChildren>

            <MotionWrapper variant="fadeIn" delay={0.4} className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/events">{t("gallery.events.button")}</Link>
                </Button>
              </motion.div>
            </MotionWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
