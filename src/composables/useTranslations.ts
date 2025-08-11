import { ref, computed } from 'vue'

type Language = 'lt' | 'en'

const currentLanguage = ref<Language>('lt')

const translations = {
  lt: {
    subtitle: 'VILNIAUS UNIVERSITETE',
    description: 'Studentų (-čių) integracijos festivalis',
    whatIsAdAstra: 'Kas yra Ad Astra?',
    aboutText1:
      'Jau 5 metus skaičiuojanti iniciatyva, pradėta 2020 m. Vilniaus universiteto Studentų atstovybės (VU SA) Universiteto bendruomenėje tapusi jau tradiciniu metiniu renginiu. Šventė pradėta kaip „Diskusijų festivalis" užaugo į „Ad astra: Integracijos festivalis" išplėsdama savo ribas dabar įtraukiant ir mokslinius pranešimus, VU bendruomenės kontaktų mugę, koncertinę dalį bei kitos programinės dalys.',
    aboutText2:
      'Festivalis „Ad astra" simboliškai paskutinis renginys žymintis naujų akademinių studijų metų pradžią. Kasmet besikeičiančioje programoje ką nors išsinešti atras ne tik primakursiai(-ės) ir naujieji bendruomenės nariai(-ės), bet ir kiekvienas iš 15 fakultetų ir daugiau Universiteto bendruomenės narys ir narė. Tad kviečiame nepraleisti progos ir kartu su mumis kilti ad astra (į žvaigždes)!',
    programTitle: 'Festivalio zonos ir programa',
    programDescription:
      'Ad Astra festivalis atskleis savo duris keliose srityse, kur kiekvienas dalyvs galės rasti sau įdomių veiklų:',
    scientificZone: 'Mokslinių pranešimų zona',
    scientificZoneDesc:
      'Studentai pristatys savo tyrimų darbus, projektus ir inovatyvius sprendimus. Puiki galimybė sužinoti, kokius mokslinius pasiekimus daro mūsų bendruomenės nariai.',
    contactFair: 'Kontaktų mugė',
    contactFairDesc:
      'Susipažinkite su organizacijomis, įmonėmis ir iniciatyvomis, kurios siūlo praktikos vietas, darbo galimybes ir bendradarbiavimo projektus studentams.',
    discussionZone: 'Diskusijų zona',
    discussionZoneDesc:
      'Atviros diskusijos aktualiais studentų gyvenimo, mokslo ir bendruomenės klausimais. Galimybė išreikšti savo nuomonę ir išgirsti kitų argumentus.',
    concertPart: 'Koncertinė dalis',
    concertPartDesc:
      'Muzikiniai pasirodymai, kurie sukurs šventišką atmosferą ir suburs bendruomenę bendram kultūriniam patyrimui.',
    newsTitle: 'Sekite naujienas ir atnaujinimus',
    newsDescription:
      'Būkite informuoti apie paskutines žinias, programos pakeitimus ir svarbius pranešimus apie Ad Astra festivalį.',
    facebookEvent: 'Facebook renginys',
    facebookEventDesc:
      'Prisijunkite prie oficialaus Facebook renginio puslapio, kur rasite naujausią informaciją, galėsite bendrauti su kitais dalyviais ir gauti svarbius pranešimus.',
    viewEvent: 'Peržiūrėti renginį',
    vusaWebsite: 'VU SA svetainė',
    vusaWebsiteDesc:
      'Aplankykite oficialų Ad Astra puslapį VU SA svetainėje, kur rasite detalų programos aprašą, dalyvių informaciją ir oficialius dokumentus.',
    readMore: 'Skaityti daugiau',
    partnersTitle: 'Partneriai',
    partnersDescription:
      'Ad Astra festivalis vyksta tik dėka nuolatinio partnerių palaikymo ir bendradarbiavimo. Dėkojame visiems, kurie prisideda prie šios iniciatyvos sėkmės.',
    vusaPartner: 'Vilniaus universiteto Studentų atstovybė',
    vusaPartnerDesc: 'Pagrindinis organizatorius ir festivalo iniciatorius',
    vuPartner: 'Vilniaus universitetas',
    vuPartnerDesc: 'Institucinis partneris ir festivalio šeimininkas',
    facultiesPartner: '15 VU fakultetų',
    facultiesPartnerDesc: 'Aktyvūs dalyviai ir programos formuotojai',
    partnershipText: 'Norite tapti partneru? Susisiekite su mumis ir kartu kurkime puikų renginį!',
    contactEmail: 'kontaktai@adastra.vu.lt',
  },
  en: {
    subtitle: 'IN VILNIUS UNIVERSITY',
    description: "Students' Integration Festival",
    whatIsAdAstra: 'What is Ad Astra?',
    aboutText1:
      'An initiative that has been running for 5 years, started in 2020 by the Vilnius University Student Representation (VU SA) and has become a traditional annual event in the University community. The celebration started as a "Discussion Festival" and grew into "Ad astra: Integration Festival" expanding its scope to now include scientific presentations, VU community contact fair, concert program and other program parts.',
    aboutText2:
      'The "Ad astra" festival is symbolically the last event marking the beginning of a new academic year. In the annually changing program, not only first-year students and new community members will find something to take away, but also every member of the 15 faculties and more University community members. So we invite you not to miss the opportunity and join us in rising ad astra (to the stars)!',
    programTitle: 'Festival Zones and Program',
    programDescription:
      'The Ad Astra festival will open its doors in several areas where each participant can find interesting activities:',
    scientificZone: 'Scientific Presentations Zone',
    scientificZoneDesc:
      'Students will present their research work, projects and innovative solutions. A great opportunity to learn about the scientific achievements of our community members.',
    contactFair: 'Contact Fair',
    contactFairDesc:
      'Meet organizations, companies and initiatives that offer internships, job opportunities and collaboration projects for students.',
    discussionZone: 'Discussion Zone',
    discussionZoneDesc:
      'Open discussions on current student life, science and community issues. An opportunity to express your opinion and hear other arguments.',
    concertPart: 'Concert Program',
    concertPartDesc:
      'Musical performances that will create a festive atmosphere and bring the community together for a shared cultural experience.',
    newsTitle: 'Follow News and Updates',
    newsDescription:
      'Stay informed about the latest news, program changes and important announcements about the Ad Astra festival.',
    facebookEvent: 'Facebook Event',
    facebookEventDesc:
      'Join the official Facebook event page where you can find the latest information, interact with other participants and receive important announcements.',
    viewEvent: 'View Event',
    vusaWebsite: 'VU SA Website',
    vusaWebsiteDesc:
      'Visit the official Ad Astra page on the VU SA website where you can find detailed program descriptions, participant information and official documents.',
    readMore: 'Read More',
    partnersTitle: 'Partners',
    partnersDescription:
      'The Ad Astra festival takes place only thanks to the constant support and cooperation of partners. We thank everyone who contributes to the success of this initiative.',
    vusaPartner: 'Vilnius University Student Representation',
    vusaPartnerDesc: 'Main organizer and festival initiator',
    vuPartner: 'Vilnius University',
    vuPartnerDesc: 'Institutional partner and festival host',
    facultiesPartner: '15 VU Faculties',
    facultiesPartnerDesc: 'Active participants and program developers',
    partnershipText:
      "Want to become a partner? Contact us and let's create a great event together!",
    contactEmail: 'contact@adastra.vu.lt',
  },
}

export function useTranslations() {
  const t = computed(() => translations[currentLanguage.value])

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'lt' ? 'en' : 'lt'
  }

  return {
    currentLanguage,
    t,
    toggleLanguage
  }
}