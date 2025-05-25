"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-stone-900 text-white/80">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/massawa-logo.png"
                alt="Massawa Restaurant Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="mt-2">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-amber-400 transition-colors">
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-amber-400 transition-colors">
                  {t("nav.reservations")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t("footer.contact")}</h3>
            <address className="not-italic space-y-2">
              <p>Grotestraat 94</p>
              <p>Ede, Netherlands, 6711 AN</p>
              <p>Phone: +31 123 456 789</p>
              <p>Email: info@massawarestaurant.com</p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t("footer.hours")}</h3>
            <ul className="space-y-2">
              <li>{t("footer.hoursText")}</li>
              <li>{t("footer.hoursNote")}</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-stone-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="https://facebook.com/massawarestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://instagram.com/massawarestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://twitter.com/massawarestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Massawa Restaurant. {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  )
}
