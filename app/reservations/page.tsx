"use client"

import { useState } from "react"
import Image from "next/image"
import AnimatedNavbar from "@/components/animated-navbar"
import Footer from "@/components/footer"
import ReservationForm from "@/components/reservation-form"
import MotionWrapper from "@/components/animations/motion-wrapper"
import StaggerChildren from "@/components/animations/stagger-children"
import { motion, AnimatePresence } from "framer-motion"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useRouter } from 'next/navigation';

export default function ReservationsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [lastReservation, setLastReservation] = useState<any>(null)
  const router = useRouter();

  // Pass a callback to ReservationForm to capture reservation data
  const handleSuccess = (data: any) => {
    setLastReservation(data)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedNavbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/restaurant-interior.png"
              alt="Massawa Reservations"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6">
            <MotionWrapper variant="fadeIn" duration={0.8}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Reserve a Table</h1>
            </MotionWrapper>
            <MotionWrapper variant="slideUp" delay={0.3} duration={0.8}>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join us for an authentic East African dining experience
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* Reservation Form Section */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:flex">
                <motion.div
                  className="md:w-1/2 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-64 md:h-full">
                    <Image src="/images/restaurant-bar.png" alt="Restaurant Interior" fill className="object-cover" />
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 p-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      >
                        <div className="flex flex-col items-center justify-center mb-6">
                          <DotLottieReact
                            src="https://lottie.host/3b0ac62a-b258-4307-9d45-08c494f7a133/k5DxgkGW8X.lottie"
                            loop={false}
                            autoplay
                            style={{ width: 120, height: 120 }}
                          />
                        </div>
                        <motion.h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
                          Reservation Confirmed!
                        </motion.h2>
                        <motion.p className="text-stone-600 mb-6">
                          Thank you for your reservation. We look forward to welcoming you to Massawa!
                        </motion.p>
                        {lastReservation && (
                          <div className="bg-stone-50 rounded-lg p-4 mb-6 text-left max-w-md mx-auto shadow">
                            <h3 className="font-bold mb-2 text-amber-700">Your Reservation</h3>
                            <ul className="text-stone-700 space-y-1">
                              <li><b>Name:</b> {lastReservation.name}</li>
                              <li><b>Email:</b> {lastReservation.email}</li>
                              <li><b>Phone:</b> {lastReservation.phone}</li>
                              <li><b>Date:</b> {lastReservation.date}</li>
                              <li><b>Time:</b> {lastReservation.time}</li>
                              <li><b>Guests:</b> {lastReservation.guests}</li>
                              {lastReservation.specialRequests && <li><b>Special Requests:</b> {lastReservation.specialRequests}</li>}
                            </ul>
                          </div>
                        )}
                        <div className="flex flex-col gap-2 items-center">
                          <button
                            className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition"
                            onClick={() => router.push('/')}
                          >
                            Back to Home
                          </button>
                          <button
                            className="text-amber-700 underline mt-2"
                            onClick={() => setIsSubmitted(false)}
                          >
                            Make another reservation
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Book Your Table</h2>
                        <ReservationForm onSuccess={handleSuccess} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Hours",
                  content: (
                    <>
                      Monday - Sunday: 11:00 AM - 2:00 AM
                      <br />
                      Hours may differ on holidays
                    </>
                  ),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Location",
                  content: (
                    <>
                      Grotestraat 94
                      <br />
                      Ede, Netherlands
                      <br />
                      6711 AN
                    </>
                  ),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  title: "Contact",
                  content: (
                    <>
                      Phone: +31 123 456 789
                      <br />
                      Email: info@massawarestaurant.com
                    </>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-4 text-amber-700">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-600">{item.content}</p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Policies */}
        <section className="py-12 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <MotionWrapper variant="fadeIn" className="text-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-stone-800">Reservation Policies</h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MotionWrapper variant="slideRight" delay={0.2}>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">Large Parties</h3>
                  <p className="text-stone-600 mb-6">
                    For groups of 8 or more, please contact us directly by phone to arrange your reservation. A deposit
                    may be required for large group bookings.
                  </p>

                  <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">Special Events</h3>
                  <p className="text-stone-600">
                    We offer private dining and catering services for special events. Please contact us at least two
                    weeks in advance to discuss your requirements.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper variant="slideLeft" delay={0.2}>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">Cancellations</h3>
                  <p className="text-stone-600 mb-6">
                    We kindly request 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee.
                  </p>

                  <h3 className="text-lg font-serif font-bold text-stone-800 mb-3">Dietary Requirements</h3>
                  <p className="text-stone-600">
                    Please inform us of any dietary requirements or allergies when making your reservation. We are happy
                    to accommodate special requests with advance notice.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
