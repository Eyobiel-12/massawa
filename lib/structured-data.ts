export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Massawa Eritrean & Ethiopian Restaurant",
  image: "https://massawarestaurant.com/images/restaurant.jpg", // Replace with actual image URL
  "@id": "https://massawarestaurant.com",
  url: "https://massawarestaurant.com",
  telephone: "+31 123 456 789",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grotestraat 94",
    addressLocality: "Ede",
    postalCode: "6711 AN",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.047640071941146,
    longitude: 5.668334376689062,
  },
  priceRange: "€€",
  servesCuisine: ["Eritrean", "Ethiopian", "East African"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "02:00",
    },
  ],
  menu: "https://massawarestaurant.com/menu",
  acceptsReservations: "True",
  hasMenu: {
    "@type": "Menu",
    name: "Massawa Menu",
    description: "Authentic Eritrean and Ethiopian cuisine",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Appetizers",
        description: "Traditional starters and small plates",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Sambusa",
            description: "Crispy pastry triangles filled with spiced lentils or minced beef",
            price: "€7.50",
            offers: {
              "@type": "Offer",
              price: "7.50",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Kategna",
            description: "Toasted injera with berbere and seasoned clarified butter",
            price: "€6.00",
            offers: {
              "@type": "Offer",
              price: "6.00",
              priceCurrency: "EUR",
            },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Main Courses",
        description: "Traditional Eritrean and Ethiopian main dishes",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Doro Wat",
            description: "Spicy chicken stew with berbere, onions, and boiled egg, served with injera",
            price: "€18.50",
            offers: {
              "@type": "Offer",
              price: "18.50",
              priceCurrency: "EUR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Vegetarian Combo",
            description: "A selection of misir wot, shiro, gomen, and atkilt wot served with injera",
            price: "€22.00",
            offers: {
              "@type": "Offer",
              price: "22.00",
              priceCurrency: "EUR",
            },
          },
        ],
      },
    ],
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Maria S.",
      },
      datePublished: "2023-08-15",
      reviewBody:
        "The most authentic Ethiopian cuisine I've had outside of Addis Ababa. The ambiance is elegant yet welcoming.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "James L.",
      },
      datePublished: "2023-07-22",
      reviewBody:
        "A true culinary journey. The coffee ceremony was a delightful experience that transported me straight to East Africa.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
}
