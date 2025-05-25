type TranslationKey = string

type TranslationValue =
  | string
  | {
      [key: string]: TranslationValue
    }

type TranslationsType = {
  [locale: string]: {
    [key: string]: TranslationValue
  }
}

export const translations: TranslationsType = {
  en: {
    common: {
      language: "English",
      languageNative: "English",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      reservations: "Reservations",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
    },
    home: {
      hero: {
        tagline: "Eritrean & Ethiopian Cuisine",
        description: "Experience the rich flavors and traditions of East African cuisine in an elegant setting",
        reserveButton: "Reserve a Table",
        exploreButton: "Explore Our Menu",
      },
      intro: {
        title: "A Culinary Journey Through East Africa",
        paragraph1:
          "At Massawa, we invite you to experience the authentic flavors of Eritrean and Ethiopian cuisine. Our dishes are crafted with traditional spices and techniques passed down through generations.",
        paragraph2:
          "Named after the historic port city of Massawa, our restaurant celebrates the rich cultural heritage and culinary traditions of the Horn of Africa.",
        storyButton: "Our Story",
      },
      featured: {
        title: "Signature Dishes",
        viewMenu: "View Full Menu",
      },
      testimonials: {
        title: "Guest Experiences",
      },
      cta: {
        title: "Reserve Your Experience",
        description:
          "Join us for an unforgettable dining experience celebrating the rich culinary traditions of Eritrea and Ethiopia.",
        button: "Book a Table",
      },
    },
    menu: {
      hero: {
        title: "Our Menu",
        description: "A curated selection of authentic Eritrean and Ethiopian dishes",
      },
      introduction:
        "Our menu celebrates the rich culinary traditions of Eritrea and Ethiopia. Dishes are served with injera, a sourdough flatbread that serves as both plate and utensil. The communal dining experience is central to our culture—sharing food from a common plate symbolizes the bonds of loyalty and friendship.",
      dietary: {
        title: "Dietary Information",
        notice: "Please inform your server of any allergies or dietary restrictions.",
      },
    },
    contact: {
      hero: {
        title: "Contact Us",
        description: "We'd love to hear from you. Reach out for reservations, inquiries, or feedback.",
      },
      info: {
        getInTouch: "Get in Touch",
        location: "Location",
        phone: "Phone",
        phoneDescription: "For reservations and inquiries",
        email: "Email",
        emailDescription: "We'll respond as soon as possible",
        hours: "Hours",
        hoursDescription: "Monday - Sunday: 11:00 AM - 2:00 AM\nHours may differ on holidays",
        followUs: "Follow Us",
      },
      form: {
        title: "Send Us a Message",
      },
      map: {
        title: "Find Us",
        getDirections: "Get Directions",
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "Do I need to make a reservation?",
            answer:
              "While walk-ins are welcome, we recommend making a reservation, especially for weekends and larger groups. You can reserve a table online or by calling us directly.",
          },
          {
            question: "Is there parking available?",
            answer:
              "Yes, we have a dedicated parking area behind the restaurant. Additionally, there is street parking available in the vicinity.",
          },
          {
            question: "Do you cater for special dietary requirements?",
            answer:
              "Our menu includes many vegetarian and vegan options. Please inform us of any allergies or dietary restrictions when making your reservation, and our chefs will be happy to accommodate your needs.",
          },
          {
            question: "Can you host private events?",
            answer:
              "Yes, we offer private dining options for special occasions and events. Please contact us directly to discuss your requirements and receive a customized quote.",
          },
        ],
      },
    },
    reservations: {
      hero: {
        title: "Reserve a Table",
        description: "Join us for an authentic East African dining experience",
      },
      form: {
        title: "Book Your Table",
        success: {
          title: "Reservation Received",
          message:
            "Thank you for your reservation request. We have sent a confirmation email with the details. Our team will contact you shortly to confirm your reservation.",
          another: "Make another reservation",
        },
      },
      additionalInfo: {
        hours: "Hours",
        location: "Location",
        contact: "Contact",
      },
      policies: {
        title: "Reservation Policies",
        largeParties: {
          title: "Large Parties",
          description:
            "For groups of 8 or more, please contact us directly by phone to arrange your reservation. A deposit may be required for large group bookings.",
        },
        specialEvents: {
          title: "Special Events",
          description:
            "We offer private dining and catering services for special events. Please contact us at least two weeks in advance to discuss your requirements.",
        },
        cancellations: {
          title: "Cancellations",
          description:
            "We kindly request 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee.",
        },
        dietary: {
          title: "Dietary Requirements",
          description:
            "Please inform us of any dietary requirements or allergies when making your reservation. We are happy to accommodate special requests with advance notice.",
        },
      },
    },
    about: {
      hero: {
        title: "Our Story",
        description: "The journey behind Massawa Eritrean & Ethiopian Restaurant",
      },
      story: {
        beginning: {
          title: "The Beginning",
          paragraph1:
            "Massawa Restaurant was born from a passion for sharing the rich culinary traditions of Eritrea and Ethiopia. Named after the historic port city of Massawa on the Red Sea coast of Eritrea, our restaurant embodies the cultural crossroads that has shaped East African cuisine for centuries.",
          paragraph2:
            "Founded in 2015 by Chef Asmara Haile, Massawa began as a small family-owned establishment dedicated to authentic recipes passed down through generations. Chef Haile's vision was to create a dining experience that honored traditional cooking methods while presenting dishes with contemporary elegance.",
        },
        philosophy: {
          title: "Our Philosophy",
          paragraph1:
            "At Massawa, we believe that food is more than sustenance—it's a celebration of culture, community, and connection. Our approach to dining honors the communal traditions of East African cuisine, where meals are shared from a common plate and eating with hands creates a direct connection to the food.",
          paragraph2:
            "We are committed to sourcing the finest ingredients, including authentic spices imported directly from East Africa. Our berbere, mitmita, and other spice blends are prepared in-house according to time-honored recipes, ensuring the most authentic flavors possible.",
          quote:
            '"Food brings people together in a way that nothing else can. When we share a meal, we share our stories, our traditions, and our humanity."',
          quoteAuthor: "— Chef Asmara Haile, Founder",
        },
        heritage: {
          title: "Cultural Heritage",
          paragraph1:
            "Both Eritrean and Ethiopian cuisines share many similarities while maintaining their unique characteristics. Our menu celebrates this rich diversity, featuring dishes from both culinary traditions. The cornerstone of our cuisine is injera, the sourdough flatbread that serves as both plate and utensil in traditional dining.",
          paragraph2:
            "We take pride in educating our guests about the cultural significance of our dishes and dining customs. From the traditional coffee ceremony to the significance of sharing food from a common plate, we invite you to experience the full richness of East African hospitality.",
        },
        team: {
          title: "Our Team",
          paragraph1:
            "The heart of Massawa is our dedicated team of chefs, servers, and staff who share a passion for East African cuisine and hospitality. Many of our team members have roots in Eritrea and Ethiopia, bringing authentic knowledge and personal connections to the dishes we serve.",
          paragraph2:
            "Led by Executive Chef Tekle Mengistu, our kitchen team blends traditional techniques with modern culinary expertise. Each dish is prepared with meticulous attention to detail, honoring recipes that have been perfected over generations.",
        },
      },
      teamSection: {
        title: "Meet Our Team",
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Authenticity",
            description:
              "We honor traditional recipes and cooking methods, using imported spices and techniques passed down through generations.",
          },
          {
            title: "Community",
            description:
              "We believe in the power of food to bring people together, creating a space where connections are formed over shared meals.",
          },
          {
            title: "Sustainability",
            description:
              "We are committed to environmentally responsible practices, from sourcing ingredients to reducing waste.",
          },
        ],
      },
    },
    gallery: {
      hero: {
        title: "Our Gallery",
        description: "Experience the ambiance, cuisine, and culture of Massawa",
      },
      categories: {
        all: "All",
        food: "Food",
        interior: "Interior",
        culture: "Culture",
        kitchen: "Kitchen",
      },
      events: {
        title: "Events at Massawa",
        description:
          "We regularly host cultural events, cooking demonstrations, and special dining experiences. Check out some highlights from our past events.",
        culturalNights: {
          title: "Cultural Nights",
          description:
            "Experience traditional music, dance, and storytelling from Eritrea and Ethiopia while enjoying our authentic cuisine.",
          schedule: "Every Last Friday of the Month",
        },
        cookingClasses: {
          title: "Cooking Masterclasses",
          description:
            "Learn the art of East African cuisine with our expert chefs. From spice blending to injera making, discover the secrets of our kitchen.",
          schedule: "Monthly on Selected Sundays",
        },
        button: "Upcoming Events",
      },
    },
    footer: {
      description: "Authentic Eritrean & Ethiopian cuisine in the heart of Ede, Netherlands.",
      quickLinks: "Quick Links",
      contact: "Contact",
      hours: "Hours",
      hoursText: "Monday - Sunday: 11:00 AM - 2:00 AM",
      hoursNote: "Hours may differ on holidays",
      copyright: "All rights reserved.",
    },
    contactForm: {
      fullName: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: {
        title: "Message Sent Successfully",
        message:
          "Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.",
        another: "Send Another Message",
      },
      validation: {
        required: "is required",
        email: "Email is invalid",
        form: "Failed to send message. Please try again.",
      },
    },
    reservationForm: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      date: "Date",
      time: "Time",
      selectTime: "Select time",
      guests: "Number of Guests",
      selectGuests: "Select guests",
      person: "person",
      people: "people",
      specialRequests: "Special Requests",
      specialRequestsPlaceholder: "Dietary restrictions, special occasions, seating preferences, etc.",
      reserve: "Reserve Table",
      processing: "Processing your reservation...",
      policy: "By making a reservation, you agree to our reservation policy.",
      validation: {
        required: "is required",
        email: "Email is invalid",
        form: "Failed to send reservation. Please try again.",
      },
    },
  },
  nl: {
    common: {
      language: "Nederlands",
      languageNative: "Nederlands",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      reservations: "Reserveringen",
      about: "Over ons",
      gallery: "Galerij",
      contact: "Contact",
    },
    home: {
      hero: {
        tagline: "Eritrese & Ethiopische Keuken",
        description: "Ervaar de rijke smaken en tradities van de Oost-Afrikaanse keuken in een elegante omgeving",
        reserveButton: "Reserveer een Tafel",
        exploreButton: "Bekijk Ons Menu",
      },
      intro: {
        title: "Een Culinaire Reis Door Oost-Afrika",
        paragraph1:
          "Bij Massawa nodigen we u uit om de authentieke smaken van de Eritrese en Ethiopische keuken te ervaren. Onze gerechten worden bereid met traditionele kruiden en technieken die van generatie op generatie zijn doorgegeven.",
        paragraph2:
          "Genoemd naar de historische havenstad Massawa, viert ons restaurant het rijke culturele erfgoed en de culinaire tradities van de Hoorn van Afrika.",
        storyButton: "Ons Verhaal",
      },
      featured: {
        title: "Kenmerkende Gerechten",
        viewMenu: "Bekijk Volledig Menu",
      },
      testimonials: {
        title: "Gastenervaringen",
      },
      cta: {
        title: "Reserveer Uw Ervaring",
        description:
          "Doe mee aan een onvergetelijke eetervaring die de rijke culinaire tradities van Eritrea en Ethiopië viert.",
        button: "Boek een Tafel",
      },
    },
    menu: {
      hero: {
        title: "Ons Menu",
        description: "Een zorgvuldig samengestelde selectie van authentieke Eritrese en Ethiopische gerechten",
      },
      introduction:
        "Ons menu viert de rijke culinaire tradities van Eritrea en Ethiopië. Gerechten worden geserveerd met injera, een zuurdesembrood dat zowel als bord en bestek dient. De gezamenlijke eetervaring staat centraal in onze cultuur - het delen van voedsel van een gemeenschappelijk bord symboliseert de banden van loyaliteit en vriendschap.",
      dietary: {
        title: "Dieetinformatie",
        notice: "Informeer uw ober over eventuele allergieën of dieetbeperkingen.",
      },
    },
    contact: {
      hero: {
        title: "Neem Contact Op",
        description: "We horen graag van u. Neem contact op voor reserveringen, vragen of feedback.",
      },
      info: {
        getInTouch: "Neem Contact Op",
        location: "Locatie",
        phone: "Telefoon",
        phoneDescription: "Voor reserveringen en vragen",
        email: "E-mail",
        emailDescription: "We reageren zo snel mogelijk",
        hours: "Openingstijden",
        hoursDescription: "Maandag - Zondag: 11:00 - 02:00\nOpeningstijden kunnen afwijken tijdens feestdagen",
        followUs: "Volg Ons",
      },
      form: {
        title: "Stuur Ons een Bericht",
      },
      map: {
        title: "Vind Ons",
        getDirections: "Routebeschrijving",
      },
      faq: {
        title: "Veelgestelde Vragen",
        questions: [
          {
            question: "Moet ik een reservering maken?",
            answer:
              "Hoewel inlopen welkom zijn, raden we aan om een reservering te maken, vooral voor weekenden en grotere groepen. U kunt online een tafel reserveren of door ons direct te bellen.",
          },
          {
            question: "Is er parkeergelegenheid?",
            answer:
              "Ja, we hebben een eigen parkeerterrein achter het restaurant. Daarnaast is er straatparkeren beschikbaar in de omgeving.",
          },
          {
            question: "Kunt u voorzien in speciale dieetwensen?",
            answer:
              "Ons menu bevat veel vegetarische en veganistische opties. Informeer ons over eventuele allergieën of dieetbeperkingen bij het maken van uw reservering, en onze chef-koks zullen graag aan uw behoeften voldoen.",
          },
          {
            question: "Kunt u privé-evenementen organiseren?",
            answer:
              "Ja, we bieden privé-dining opties voor speciale gelegenheden en evenementen. Neem direct contact met ons op om uw wensen te bespreken en een gepersonaliseerde offerte te ontvangen.",
          },
        ],
      },
    },
    reservations: {
      hero: {
        title: "Reserveer een Tafel",
        description: "Doe mee aan een authentieke Oost-Afrikaanse eetervaring",
      },
      form: {
        title: "Boek Uw Tafel",
        success: {
          title: "Reservering Ontvangen",
          message:
            "Dank u voor uw reserveringsverzoek. We hebben een bevestigingsmail gestuurd met de details. Ons team zal binnenkort contact met u opnemen om uw reservering te bevestigen.",
          another: "Maak nog een reservering",
        },
      },
      additionalInfo: {
        hours: "Openingstijden",
        location: "Locatie",
        contact: "Contact",
      },
      policies: {
        title: "Reserveringsbeleid",
        largeParties: {
          title: "Grote Groepen",
          description:
            "Voor groepen van 8 of meer, neem direct telefonisch contact met ons op om uw reservering te regelen. Een aanbetaling kan vereist zijn voor boekingen van grote groepen.",
        },
        specialEvents: {
          title: "Speciale Evenementen",
          description:
            "We bieden privé-dining en cateringdiensten voor speciale evenementen. Neem minstens twee weken van tevoren contact met ons op om uw wensen te bespreken.",
        },
        cancellations: {
          title: "Annuleringen",
          description:
            "We verzoeken vriendelijk om 24 uur van tevoren te annuleren. Late annuleringen of no-shows kunnen kosten met zich meebrengen.",
        },
        dietary: {
          title: "Dieetwensen",
          description:
            "Informeer ons over eventuele dieetwensen of allergieën bij het maken van uw reservering. We zijn graag bereid om aan speciale verzoeken te voldoen met voorafgaande kennisgeving.",
        },
      },
    },
    about: {
      hero: {
        title: "Ons Verhaal",
        description: "De reis achter Massawa Eritrees & Ethiopisch Restaurant",
      },
      story: {
        beginning: {
          title: "Het Begin",
          paragraph1:
            "Massawa Restaurant is ontstaan uit een passie voor het delen van de rijke culinaire tradities van Eritrea en Ethiopië. Genoemd naar de historische havenstad Massawa aan de kust van de Rode Zee in Eritrea, belichaamt ons restaurant de culturele kruispunten die de Oost-Afrikaanse keuken al eeuwenlang vormgeven.",
          paragraph2:
            "Opgericht in 2015 door Chef Asmara Haile, begon Massawa als een kleine familiezaak gewijd aan authentieke recepten die van generatie op generatie zijn doorgegeven. De visie van Chef Haile was om een eetervaring te creëren die traditionele kookmethoden eerde, terwijl gerechten werden gepresenteerd met hedendaagse elegantie.",
        },
        philosophy: {
          title: "Onze Filosofie",
          paragraph1:
            "Bij Massawa geloven we dat eten meer is dan voeding - het is een viering van cultuur, gemeenschap en verbinding. Onze benadering van dineren eert de gemeenschappelijke tradities van de Oost-Afrikaanse keuken, waar maaltijden worden gedeeld van een gemeenschappelijk bord en eten met de handen een directe verbinding met het voedsel creëert.",
          paragraph2:
            "We zijn toegewijd aan het inkopen van de beste ingrediënten, waaronder authentieke kruiden die rechtstreeks uit Oost-Afrika worden geïmporteerd. Onze berbere, mitmita en andere kruidenmengsels worden in huis bereid volgens eeuwenoude recepten, wat zorgt voor de meest authentieke smaken.",
          quote:
            '"Eten brengt mensen samen op een manier die niets anders kan. Wanneer we een maaltijd delen, delen we onze verhalen, onze tradities en onze menselijkheid."',
          quoteAuthor: "— Chef Asmara Haile, Oprichter",
        },
        heritage: {
          title: "Cultureel Erfgoed",
          paragraph1:
            "Zowel de Eritrese als de Ethiopische keuken delen veel overeenkomsten, maar behouden hun unieke kenmerken. Ons menu viert deze rijke diversiteit en bevat gerechten uit beide culinaire tradities. De hoeksteen van onze keuken is injera, het zuurdesembrood dat zowel als bord en bestek dient bij traditioneel dineren.",
          paragraph2:
            "We zijn er trots op om onze gasten te informeren over de culturele betekenis van onze gerechten en eetgewoonten. Van de traditionele koffieceremonie tot de betekenis van het delen van voedsel van een gemeenschappelijk bord, we nodigen u uit om de volledige rijkdom van de Oost-Afrikaanse gastvrijheid te ervaren.",
        },
        team: {
          title: "Culinaire Tradities",
          paragraph1:
            "De culinaire tradities van Massawa weerspiegelen de kustlocatie en historische handelsverbindingen. Zeevruchten spelen een prominente rol, bereid met invloeden uit zowel Afrikaanse als Midden-Oosterse tradities. De keuken van de havenstad bevat ook pastagerechten, een erfenis van Italiaanse koloniale invloed, maar bereid met lokale kruiden en ingrediënten.",
          paragraph2:
            "Vandaag de dag blijft het culinaire erfgoed van Massawa zich ontwikkelen terwijl het zijn diepe culturele wortels behoudt. De traditionele methoden van voedselbereiding worden bewaard en gevierd, waarbij de authentieke smaken en technieken worden doorgegeven die de Habesha-keuken wereldwijd bekend hebben gemaakt om zijn unieke smaakprofiel en gemeenschappelijke eetervaring.",
        },
      },
      teamSection: {
        title: "Ontmoet Ons Team",
      },
      values: {
        title: "Onze Waarden",
        items: [
          {
            title: "Authenticiteit",
            description:
              "We eren de authentieke culinaire tradities van Massawa en de Habesha-cultuur, met gebruik van traditionele kruiden, kookmethoden en serveerstijlen die al generaties lang bewaard zijn gebleven.",
          },
          {
            title: "Gemeenschap",
            description:
              "We vieren de gemeenschappelijke eetervaring die centraal staat in de Habesha-cultuur, waar het delen van voedsel van een gemeenschappelijk bord symbool staat voor eenheid, vriendschap en de vreugde van samen brood breken.",
          },
          {
            title: "Cultureel Erfgoed",
            description:
              "We bewaren en delen het rijke culturele erfgoed van Massawa en de Hoorn van Afrika, van de traditionele koffieceremonie tot de kunst van het maken van injera en de complexe kruidenmengsels die onze keuken definiëren.",
          },
        ],
      },
    },
    gallery: {
      hero: {
        title: "Onze Galerij",
        description: "Ervaar de ambiance, keuken en cultuur van Massawa",
      },
      categories: {
        all: "Alles",
        food: "Eten",
        interior: "Interieur",
        culture: "Cultuur",
        kitchen: "Keuken",
      },
      events: {
        title: "Evenementen bij Massawa",
        description:
          "We organiseren regelmatig culturele evenementen, kookdemonstraties en speciale eetbelevenissen. Bekijk enkele hoogtepunten van onze eerdere evenementen.",
        culturalNights: {
          title: "Culturele Avonden",
          description:
            "Ervaar traditionele muziek, dans en storytelling uit Eritrea en Ethiopië terwijl u geniet van onze authentieke keuken.",
          schedule: "Elke laatste vrijdag van de maand",
        },
        cookingClasses: {
          title: "Kookmasterclasses",
          description:
            "Leer de kunst van de Oost-Afrikaanse keuken met onze expert chef-koks. Van kruidenmengen tot injera maken, ontdek de geheimen van onze keuken.",
          schedule: "Maandelijks op geselecteerde zondagen",
        },
        button: "Aankomende Evenementen",
      },
    },
    footer: {
      description: "Authentieke Eritrese & Ethiopische keuken in het hart van Ede, Nederland.",
      quickLinks: "Snelle Links",
      contact: "Contact",
      hours: "Openingstijden",
      hoursText: "Maandag - Zondag: 11:00 - 02:00",
      hoursNote: "Openingstijden kunnen afwijken tijdens feestdagen",
      copyright: "Alle rechten voorbehouden.",
    },
    contactForm: {
      fullName: "Volledige Naam",
      email: "E-mail",
      subject: "Onderwerp",
      message: "Bericht",
      send: "Verstuur Bericht",
      sending: "Versturen...",
      success: {
        title: "Bericht Succesvol Verzonden",
        message:
          "Bedankt voor uw bericht. We hebben uw bericht ontvangen en zullen zo snel mogelijk contact met u opnemen.",
        another: "Verstuur Nog Een Bericht",
      },
      validation: {
        required: "is verplicht",
        email: "E-mail is ongeldig",
        form: "Het versturen van het bericht is mislukt. Probeer het opnieuw.",
      },
    },
    reservationForm: {
      fullName: "Volledige Naam",
      email: "E-mail",
      phone: "Telefoonnummer",
      date: "Datum",
      time: "Tijd",
      selectTime: "Selecteer tijd",
      guests: "Aantal Gasten",
      selectGuests: "Selecteer gasten",
      person: "persoon",
      people: "personen",
      specialRequests: "Speciale Verzoeken",
      specialRequestsPlaceholder: "Dieetbeperkingen, speciale gelegenheden, zitplaatsvoorkeuren, etc.",
      reserve: "Reserveer Tafel",
      processing: "Uw reservering wordt verwerkt...",
      policy: "Door een reservering te maken, gaat u akkoord met ons reserveringsbeleid.",
      validation: {
        required: "is verplicht",
        email: "E-mail is ongeldig",
        form: "Het versturen van de reservering is mislukt. Probeer het opnieuw.",
      },
    },
  },
}

export function getTranslation(locale: string, key: string, defaultValue = ""): string {
  const keys = key.split(".")
  let value: any = translations[locale]

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k]
    } else {
      return defaultValue
    }
  }

  return typeof value === "string" ? value : defaultValue
}
