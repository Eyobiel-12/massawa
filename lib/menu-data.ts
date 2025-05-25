export const menuData = [
  {
    name: "Breakfast",
    items: [
      {
        name: "Ful Medames (فول مدمس)",
        description: {
          nl: "Gekookte, gepureerde tuinbonen met olijfolie, tomaat, ui, groene peper, feta. Keuze uit vers brood of injera.",
          en: "Cooked, puréed fava beans w/ olive oil, tomato, red onion, green pepper, feta. Choice of fresh bread or injera."
        },
        ingredients: {
          nl: "Tuinbonen, olijfolie, tomaat, rode ui, groene peper, feta.",
          en: "Fava beans, olive oil, tomato, red onion, green pepper, feta."
        },
        allergens: {
          nl: "Lactose, Gluten (bij brood)",
          en: "Dairy, Gluten (w/ bread)"
        },
        price: 8.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Chechebsa (ጨቸብሳ)",
        description: {
          nl: "Gefragmenteerde injera, gegaard in tesmi (gekruide geklaarde boter) en honing. Optioneel met yoghurt of berbere.",
          en: "Fragmented injera prepared in tesmi (spiced clarified butter) & honey. Optionally w/ yogurt or berbere."
        },
        ingredients: {
          nl: "Injera, tesmi (gekruide geklaarde boter), honing.",
          en: "Injera, tesmi (spiced clarified butter), honey."
        },
        allergens: {
          nl: "Lactose, Gluten",
          en: "Dairy, Gluten"
        },
        price: 15.5,
        image: "/images/traditional-meal.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Firfir (ፍርፍር)",
        description: {
          nl: "Zachte injera segmenten gemengd met pikante wot (stoofgerecht, vaak op basis van berbere), variabel met rund/lam/groenten. Dagvariatie opvraagbaar.",
          en: "Soft injera segments mixed w/ piquant wot (stew, often berbere-based), variable w/ beef/lamb or seasonal vegetables. Daily variation on request."
        },
        ingredients: {
          nl: "Injera, pikante wot (kan rund/lam/groenten bevatten, berbere, kruiden).",
          en: "Injera, piquant wot (may contain beef/lamb/vegetables, berbere, spices)."
        },
        allergens: {
          nl: "Gluten, Kan sporen bevatten.",
          en: "Gluten, May contain traces."
        },
        price: 15.5,
        image: "/images/traditional-platter.png",
        dietaryInfo: [],
      },
    ],
  },
  {
    name: "Lunch",
    items: [
      {
        name: "Kiti Fitfit be Tesmi",
        description: {
          nl: "Fijne injera segmenten vermengd met tesmi (gekruide geklaarde boter) en traditionele specerijen.",
          en: "Fine injera segments combined w/ tesmi (spiced clarified butter) & traditional spices."
        },
        ingredients: {
          nl: "Injera, tesmi (gekruide geklaarde boter), kruiden.",
          en: "Injera, tesmi (spiced clarified butter), spices."
        },
        allergens: {
          nl: "Lactose, Gluten",
          en: "Dairy, Gluten"
        },
        price: 16.5,
        image: "/images/traditional-meal.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Kithia Fitit be Selsie",
        description: {
          nl: "Zachte injera-segmenten met selsie (tomatensaus/dressing met ui, groene peper, citroensap, kruiden).",
          en: "Soft injera segments w/ selsie (tomato sauce/dressing w/ onion, green pepper, lemon)."
        },
        ingredients: {
          nl: "Injera, tomatensaus, ui, groene peper, citroensap, kruiden.",
          en: "Injera, tomato sauce, onion, green pepper, lemon, spices."
        },
        allergens: {
          nl: "Gluten",
          en: "Gluten"
        },
        price: 17.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian", "Vegan"],
      },
      {
        name: "Kitithi Fitit be Shika",
        description: {
          nl: "Injera vermengd met shika (aromatische, aardse specerijenmix).",
          en: "Injera combined w/ shika (aromatic, earthy spice blend)."
        },
        ingredients: {
          nl: "Injera, shika (kruidenmix).",
          en: "Injera, shika (spice blend)."
        },
        allergens: {
          nl: "Gluten",
          en: "Gluten"
        },
        price: 19.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Ful Meselha",
        description: {
          nl: "Variant op Ful Medames met extra groenten, berbere, geserveerd met salade.",
          en: "Variation on Ful Medames w/ extra vegetables, berbere, served w/ salad."
        },
        ingredients: {
          nl: "Tuinbonen, tomaat, ui, groene peper, berbere, kruiden, salade.",
          en: "Fava beans, tomato, onion, green pepper, berbere, spices, salad."
        },
        allergens: {
          nl: "Kan sporen bevatten (dressing)",
          en: "May contain traces (dressing)"
        },
        price: 9.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian", "Vegan"],
      },
      {
        name: "Panino",
        description: {
          nl: "Vers broodje, Italiaanse stijl. Dagselectie vullingen opvraagbaar.",
          en: "Fresh sandwich, Italian style. Daily filling selection on request."
        },
        ingredients: {
          nl: "Brood (wit/bruin), diverse vullingen.",
          en: "Bread (white/brown), various fillings."
        },
        allergens: {
          nl: "Gluten, Kan andere bevatten (vulling)",
          en: "Gluten, May contain others (filling)"
        },
        price: 7.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Fritata",
        description: {
          nl: "Eiergerecht geïnspireerd op frittata, met verse groenten/kruiden.",
          en: "Egg dish inspired by frittata, w/ fresh vegetables/herbs."
        },
        ingredients: {
          nl: "Eieren, diverse groenten, kruiden.",
          en: "Eggs, various vegetables, herbs."
        },
        allergens: {
          nl: "Ei",
          en: "Eggs"
        },
        price: 8.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Injer Verver",
        description: {
          nl: "Injera bereiding met verse groenten, kruiden en lichte dressing.",
          en: "Injera preparation w/ fresh vegetables, herbs, light dressing."
        },
        ingredients: {
          nl: "Injera, verse groenten, kruiden, lichte dressing.",
          en: "Injera, fresh vegetables, herbs, light dressing."
        },
        allergens: {
          nl: "Gluten, Kan sporen bevatten (dressing)",
          en: "Gluten, May contain traces (dressing)"
        },
        price: 15.0,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegetarian"],
      },
      {
        name: "Merke",
        description: {
          nl: "Langzaam gegaarde soep van gemarineerd schapenvlees (met botten) voor rijke bouillon.",
          en: "Slow-cooked soup from marinated mutton (w/ bones) for rich broth."
        },
        ingredients: {
          nl: "Schapenvlees (incl. botten), marinademix.",
          en: "Mutton (incl. bones), marinade."
        },
        allergens: {
          nl: "Kan sporen bevatten (marinade)",
          en: "May contain traces (marinade)"
        },
        price: 10.0,
        image: "/images/meat-stew-platter.png",
        dietaryInfo: [],
      },
    ],
  },
  {
    name: "Dinner - Meat",
    items: [
      {
        name: "Lams Tibs",
        description: {
          nl: "Malse lamsegmenten, gebakken met verse pepers en Noord-Oost-Afrikaanse specerijen.",
          en: "Tender lamb segments, pan-fried w/ fresh peppers & North-East African spices."
        },
        ingredients: {
          nl: "Lamsvlees, groene/rode pepers, Noord-Oost-Afrikaanse kruiden.",
          en: "Lamb, green/red peppers, North-East African spices."
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: 24.5,
        image: "/images/meat-stew-platter.png",
        dietaryInfo: [],
      },
      {
        name: "Rund Tibs",
        description: {
          nl: "Rundvleessegmenten, roergebakken met pepers en Noord-Oost-Afrikaanse specerijen.",
          en: "Beef segments, stir-fried w/ peppers & North-East African spices."
        },
        ingredients: {
          nl: "Rundvlees, verse pepers, Noord-Oost-Afrikaanse kruiden.",
          en: "Beef, fresh peppers, North-East African spices."
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: 23.5,
        image: "/images/meat-stew-platter.png",
        dietaryInfo: [],
      },
      {
        name: "Zilzil Tibs",
        description: {
          nl: "Fijne reepjes rundvlees, droog gegrild, gekruid met krachtige Noord-Oost-Afrikaanse melange.",
          en: "Fine beef strips, dry-grilled, seasoned w/ potent North-East African blend."
        },
        ingredients: {
          nl: "Rundvlees, Noord-Oost-Afrikaanse kruiden.",
          en: "Beef, North-East African spices."
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: 24.5,
        image: "/images/traditional-meal.png",
        dietaryInfo: [],
      },
      {
        name: "Gored Gored",
        description: {
          nl: "Kubussen kogelbiefstuk, gemarineerd (Noord-Oost-Afrikaans), medium-rare gebakken in cognacsaus.",
          en: "Beef tenderloin cubes, marinated (North-East African), seared medium-rare in cognac sauce."
        },
        ingredients: {
          nl: "Kogelbiefstuk, Noord-Oost-Afrikaanse kruiden, cognacsaus.",
          en: "Beef tenderloin, North-East African spices, cognac sauce."
        },
        allergens: {
          nl: "Kan sulfieten bevatten.",
          en: "May contain sulfites."
        },
        price: 23.5,
        image: "/images/meat-stew-platter.png",
        dietaryInfo: [],
      },
      {
        name: "Kitfo",
        description: {
          nl: "Gemalen mager biefstuk, verwarmd in niter kibbeh (gekruide boter) met mitmita/Noord-Oost-Afrikaanse specerijen. Rauw, medium of doorbakken op specificatie.",
          en: "Minced lean beef, warmed in niter kibbeh (spiced butter) w/ mitmita/North-East African spices. Raw, medium, or well-done on specification."
        },
        ingredients: {
          nl: "Rauw gemalen biefstuk, niter kibbeh (gekruide boter), mitmita, Noord-Oost-Afrikaanse kruiden.",
          en: "Minced beef, niter kibbeh (spiced butter), mitmita, North-East African spices."
        },
        allergens: {
          nl: "Lactose",
          en: "Dairy"
        },
        price: 22.5,
        image: "/images/traditional-platter.png",
        dietaryInfo: [],
      },
      {
        name: "Lams Zigni",
        description: {
          nl: "Malse lamsegmenten, langzaam gegaard in dieprode, rijk gekruide, pikante berbere-saus met Noord-Oost-Afrikaanse kruiden.",
          en: "Tender lamb segments, slow-cooked in deep red, richly spiced, piquant berbere sauce w/ North-East African spices."
        },
        ingredients: {
          nl: "Lamsvlees, pikante berbere-saus (ui, tomaat, berbere, kruiden), Noord-Oost-Afrikaanse kruiden.",
          en: "Lamb, spicy berbere sauce (onion, tomato, berbere, spices), North-East African spices."
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: 24.5,
        image: "/images/meat-stew-platter.png",
        dietaryInfo: [],
      },
      {
        name: "Sebhi Dorho Wot",
        description: {
          nl: "Kippenbouten & ei in intens gekruide, pikante berbere-saus.",
          en: "Chicken drumsticks & boiled egg in intensely spiced, piquant berbere sauce."
        },
        ingredients: {
          nl: "Kippenbouten, ei, pikante berbere-saus (ui, tomaat, berbere, kruiden).",
          en: "Chicken drumsticks, egg, spicy berbere sauce (onion, tomato, berbere, spices)."
        },
        allergens: {
          nl: "Ei",
          en: "Egg"
        },
        price: 22.5,
        image: "/images/meat-stew-platter.png",
        dietaryInfo: ["Spicy"],
      },
    ],
  },
  {
    name: "Dinner - Vegetarian",
    items: [
      {
        name: "Gele Linzen",
        description: {
          nl: "Saus van zachte gele linzen, verrijkt met kerrie en Noord-Oost-Afrikaanse kruiden.",
          en: "Sauce of tender yellow lentils, enriched w/ curry & North-East African herbs."
        },
        ingredients: {
          nl: "Gele linzen, kerrie, Noord-Oost-Afrikaanse kruiden, plantaardige olie.",
          en: "Yellow lentils, curry, North-East African herbs, vegetable oil."
        },
        allergens: {
          nl: "Kan sporen bevatten.",
          en: "May contain traces."
        },
        price: 19.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan"],
      },
      {
        name: "Rode Linzen (Pittig)",
        description: {
          nl: "Rode linzen, gegaard met rode peper en Noord-Oost-Afrikaanse kruiden. Licht pittig. (Vaak Misir Wot genoemd)",
          en: "Red lentils, simmered w/ red pepper & North-East African herbs. Mildly piquant. (Often called Misir Wot)."
        },
        ingredients: {
          nl: "Rode linzen, rode peper, Noord-Oost-Afrikaanse kruiden, plantaardige olie.",
          en: "Red lentils, red pepper, North-East African herbs, vegetable oil."
        },
        allergens: {
          nl: "Kan sporen bevatten.",
          en: "May contain traces."
        },
        price: 21.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan", "Spicy"],
      },
      {
        name: "Shiro",
        description: {
          nl: "Rijke saus van gemalen kikkererwten/tuinbonen en specifieke Noord-Oost-Afrikaanse specerijen (berbere vaak inbegrepen).",
          en: "Rich sauce from ground chickpeas/fava beans & specific North-East African spices (berbere often included)."
        },
        ingredients: {
          nl: "Kikkererwten/tuinbonenmeel, Noord-Oost-Afrikaanse kruiden (incl. berbere), plantaardige olie.",
          en: "Chickpea/fava bean flour, North-East African spices (incl. berbere), vegetable oil."
        },
        allergens: {
          nl: "Kan sporen bevatten.",
          en: "May contain traces."
        },
        price: 17.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan"],
      },
      {
        name: "Hamli Dnish",
        description: {
          nl: "Spinazie/boerenkool gecombineerd met aardappelen, gekruid (Noord-Oost-Afrikaans). (Vaak Gomen genoemd)",
          en: "Spinach/collard greens combined w/ potatoes, seasoned (North-East African). (Often called Gomen)."
        },
        ingredients: {
          nl: "Spinazie/boerenkool, aardappel, Noord-Oost-Afrikaanse kruiden, olie.",
          en: "Spinach/collard greens, potato, North-East African herbs, oil."
        },
        allergens: {
          nl: "Kan sporen bevatten.",
          en: "May contain traces."
        },
        price: 17.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan"],
      },
      {
        name: "Atakilt Wat (አታኪልት ወጥ)",
        description: {
          nl: "Milde stoofpot van groenten (kool, wortel, aardappel) met ui, knoflook, gember, milde kruiden (kurkuma).",
          en: "Mild stew of vegetables (cabbage, carrot, potato) w/ onion, garlic, ginger, mild spices (turmeric)."
        },
        ingredients: {
          nl: "Kool, wortel, aardappel, ui, knoflook, gember, milde kruiden (kurkuma), olie.",
          en: "Cabbage, carrot, potato, onion, garlic, ginger, mild spices (turmeric), oil."
        },
        allergens: {
          nl: "Kan sporen bevatten.",
          en: "May contain traces."
        },
        price: 19.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan"],
      },
      {
        name: "Misir Wot (ምስር ወጥ, VG, Pittig)",
        description: {
          nl: "Pikante linzenstoofpot (rood) met ui, knoflook, gember en berbere mix in olie.",
          en: "Piquant lentil stew (red) w/ onion, garlic, ginger & berbere mix in oil."
        },
        ingredients: {
          nl: "Rode linzen, ui, knoflook, gember, berbere, olie.",
          en: "Red lentils, onion, garlic, ginger, berbere, oil."
        },
        allergens: {
          nl: "Kan sporen bevatten.",
          en: "May contain traces."
        },
        price: 16.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan", "Spicy"],
      },
    ],
  },
  {
    name: "Side Dishes",
    items: [
      {
        name: "Injera (እንጀራ)",
        description: {
          nl: "Traditioneel zuurdesem platbrood van 100% teffmeel (glutenvrij).",
          en: "Traditional sourdough flatbread from 100% teff flour (gluten-free)."
        },
        ingredients: {
          nl: "Teffmeel, water.",
          en: "Teff flour, water."
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: 7.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan", "Gluten-Free"],
      },
      {
        name: "Salad (ሰላጣ)",
        description: {
          nl: "Frisse salade (seizoensgroenten) met lichte huisdressing. Samenstelling opvraagbaar.",
          en: "Fresh salad (seasonal vegetables) w/ light house dressing. Composition on request."
        },
        ingredients: {
          nl: "Verse groenten, huisdressing.",
          en: "Fresh vegetables, house dressing."
        },
        allergens: {
          nl: "Kan sporen bevatten (dressing).",
          en: "May contain traces (dressing)."
        },
        price: 4.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan"],
      },
    ],
  },
  {
    name: "Special Menus",
    items: [
      {
        name: "Massawa Speciaal Vlees Menu (2 Pers.)",
        description: {
          nl: "Proeverij van rund-, lams-, kipgerechten. Actuele selectie opvraagbaar.",
          en: "Tasting of beef, lamb, chicken dishes. Current selection on request."
        },
        ingredients: {
          nl: "Afh. van selectie (rund, lam, kip), kruiden, specerijen.",
          en: "Dep. on selection (beef, lamb, chicken), spices, herbs."
        },
        allergens: {
          nl: "Afh. van selectie.",
          en: "Dep. on selection."
        },
        price: 45.5,
        image: "/images/traditional-platter.png",
        dietaryInfo: [],
        special: true,
      },
      {
        name: "Massawa Speciaal Vega Menu (2 Pers.)",
        description: {
          nl: "Selectie van vijf veganistische gerechten (bijv. Shiro, Misir Wot, Atakilt Wat, Gomen, Linzen). Actuele selectie opvraagbaar.",
          en: "Selection of five vegan dishes (e.g., Shiro, Misir Wot, Atakilt Wat, Gomen, Lentils). Current selection on request."
        },
        ingredients: {
          nl: "Afh. van selectie (vegan), groenten, peulvruchten, kruiden, specerijen, olie.",
          en: "Dep. on selection (vegan), vegetables, pulses, herbs, spices, oil."
        },
        allergens: {
          nl: "Afh. van selectie.",
          en: "Dep. on selection."
        },
        price: 39.5,
        image: "/images/vegetarian-platter.png",
        dietaryInfo: ["Vegan"],
        special: true,
      },
    ],
  },
  {
    name: "Beverages",
    items: [
      {
        name: "Suwa",
        description: {
          nl: "Traditioneel lokaal bier (Prijs op aanvraag).",
          en: "Traditional local beer (Price on request)."
        },
        ingredients: {
          nl: "-",
          en: "-"
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: null,
        priceText: "Prijs op aanvraag / Price on request",
        image: "/images/coffee-ceremony.png",
        dietaryInfo: ["Vegan"],
      },
      {
        name: "Tej",
        description: {
          nl: "Honingwijn (zoet, licht gefermenteerd) (Prijs op aanvraag).",
          en: "Honey wine (sweet, lightly fermented) (Price on request)."
        },
        ingredients: {
          nl: "-",
          en: "-"
        },
        allergens: {
          nl: "Kan sulfieten bevatten.",
          en: "May contain sulfites."
        },
        price: null,
        priceText: "Prijs op aanvraag / Price on request",
        image: "/images/coffee-ceremony.png",
        dietaryInfo: ["Vegan", "Gluten-Free"],
      },
      {
        name: "Koffieceremonie",
        description: {
          nl: "Authentieke Noord-Oost-Afrikaanse koffie, vers gebrand, traditioneel bereid (Prijs op aanvraag).",
          en: "Authentic North-East African coffee, freshly roasted, traditionally prepared (Price on request)."
        },
        ingredients: {
          nl: "-",
          en: "-"
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: null,
        priceText: "Prijs op aanvraag / Price on request",
        image: "/images/coffee-ceremony.png",
        dietaryInfo: ["Vegan", "Gluten-Free"],
      },
      {
        name: "Frisdranken, sappen, water",
        description: {
          nl: "Prijs op aanvraag.",
          en: "Price on request."
        },
        ingredients: {
          nl: "-",
          en: "-"
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: null,
        priceText: "Prijs op aanvraag / Price on request",
        image: "/images/coffee-ceremony.png",
        dietaryInfo: [],
      },
      {
        name: "Huiswijn rood/wit (Glas/Karaf)",
        description: {
          nl: "Prijs op aanvraag.",
          en: "Price on request."
        },
        ingredients: {
          nl: "-",
          en: "-"
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: null,
        priceText: "Prijs op aanvraag / Price on request",
        image: "/images/coffee-ceremony.png",
        dietaryInfo: [],
      },
      {
        name: "Bier (Tap/Fles)",
        description: {
          nl: "Prijs op aanvraag.",
          en: "Price on request."
        },
        ingredients: {
          nl: "-",
          en: "-"
        },
        allergens: {
          nl: "-",
          en: "-"
        },
        price: null,
        priceText: "Prijs op aanvraag / Price on request",
        image: "/images/coffee-ceremony.png",
        dietaryInfo: [],
      },
    ],
  },
]
