import { ref, computed } from 'vue'

type Language = 'lt' | 'en'

const currentLanguage = ref<Language>('lt')

const translations = {
  lt: {
    subtitle: 'VILNIAUS UNIVERSITETE',
    description: 'Studentų (-čių) integracijos festivalis',
    whatIsAdAstra: 'Kas yra Ad Astra?',
    aboutText1:
      'Jau sutikus naujus mokslo metus, į Vilniaus universitetą tradiciškai, jau 6-ąjį kartą kviečia VU SA integracijos festivalis „Ad astra"!',
    aboutText2:
      'Vilniaus universiteto Studentų atstovybės (VU SA) organizuojame festivalyje pajusk tikrąją studentišką dvasią per kontaktų mugę su universitete veikiančiomis studentiškomis iniciatyvomis, diskusijas studentui (-ei) aktualiomis temomis, uždaromąjį koncertą ir dar daugiau.',
    aboutText3:
      'Būtent čia susirinks Universiteto bendruomenė, todėl nepražiopsok!',
    eventDate: 'Rugsėjo 5 d.',
    eventTime: 'nuo 13:00 iki 22:00',
    eventLocation: 'Vilniaus universiteto Centriniuose rūmuose',
    eventAddress: 'Universiteto g. 3, Vilnius',
    registrationTitle: 'REGISTRACIJA',
    registrationUrl: 'https://forms.office.com/e/16CCC0jR5H',
    freeEntry: 'Dalyvavimas NEMOKAMAS!',
    freeParticipation: 'NEMOKAMA',
    eventInfoTitle: 'Renginio informacija',
    dateLabel: 'Data',
    timeLabel: 'Laikas',
    locationLabel: 'Vieta',
    participationLabel: 'Dalyvavimas',
    whyAdAstraTitle: 'KODĖL AD ASTRA?',
    whyAdAstraText: 'Nes pradedant nuo čia kylama į žvaigždes! Taigi, ko tu lauki? Mes atsakytume – Tavęs! Nesvarbu ar esi šviežiai įstojęs (-usi) ar studentas (-ė), VU bendruomenės narys (-ė) ar svečias Vilniuje, nesi dalyvavęs ar gal nė vieno festivalio nepraleidęs (-usi) – „Ad astroje" ko nors įdomaus atras kiekvienas (-a)!',
    moreInfoSoon: 'Daugiau informacijos ir detali programa netrukus.',
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
    organizatoriaiTitle: 'Organizatoriai',
    // Navigation
    navHome: 'Pradžia',
    navAbout: 'Apie',
    navEvent: 'Renginys',
    navWhy: 'Kodėl',
    navProgram: 'Programa',
    navNews: 'Naujienos',
    navPartners: 'Partneriai',
    // Scroll hint
    scrollDown: 'Slinkti žemyn',
  },
  en: {
    subtitle: 'IN VILNIUS UNIVERSITY',
    description: "Students' Integration Festival",
    whatIsAdAstra: 'What is Ad Astra?',
    aboutText1:
      'With the new academic year already underway, Vilnius University is hosting the 6th annual VU SA integration festival, Ad astra!',
    aboutText2:
      'The Vilnius University Students\' Representation (VU SR) is organizing a festival where you can feel the true student spirit through a contact fair with student initiatives operating at the university, discussions on topics relevant to students, a closing concert, and much more.',
    aboutText3:
      'This is where the university community will gather, so don\'t miss it!',
    eventDate: 'September 5',
    eventTime: 'from 1:00 p.m. to 10:00 p.m.',
    eventLocation: 'Vilnius University Central Campus',
    eventAddress: 'Universiteto g. 3, Vilnius',
    registrationTitle: 'REGISTRATION',
    registrationUrl: 'https://forms.office.com/e/16CCC0jR5H',
    freeEntry: 'Entry is FREE!',
    freeParticipation: 'FREE',
    eventInfoTitle: 'Event Information',
    dateLabel: 'Date',
    timeLabel: 'Time',
    locationLabel: 'Location',
    participationLabel: 'Participation',
    whyAdAstraTitle: 'WHY AD ASTRA?',
    whyAdAstraText: 'Because this is where the journey to the stars begins! So, what are you waiting for? We would say – you! Whether you are a new student or a current student, a member of the VU community or a guest in Vilnius, whether you have never participated or have never missed a single festival – everyone will find something interesting at Ad Astro!',
    moreInfoSoon: 'More information and a detailed program will be available soon.',
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
    organizatoriaiTitle: 'Organizers',
    // Navigation
    navHome: 'Home',
    navAbout: 'About',
    navEvent: 'Event',
    navWhy: 'Why',
    navProgram: 'Program',
    navNews: 'News',
    navPartners: 'Partners',
    // Scroll hint
    scrollDown: 'Scroll down',
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