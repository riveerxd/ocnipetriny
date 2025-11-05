// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  // SEO and Performance Optimizations
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Oční Petřiny | Oční ordinace Praha 6 | MUDr. Drahoslava Petříková | Oftalmologie',
      meta: [
        {
          name: 'description',
          content: 'Oční Petřiny - Oční ordinace Praha 6 s MUDr. Drahoslavou Petříkovou. Moderní péče o váš zrak s lidským přístupem. Oftalmologická vyšetření, diagnostika očních onemocnění, moderní technologie OCT, perimetr, tonometr. Komplexní zákroky, preventivní prohlídky. Stamicova 21, Praha 6. ☎ +420 734 554 553.'
        },
        {
          name: 'keywords',
          content: 'Oční Petřiny, oční ordinace Praha 6, MUDr. Drahoslava Petříková, oftalmologie Praha, oční lékař Praha 6, oční vyšetření, diagnostika očních onemocnění, OCT vyšetření, perimetr, tonometr, pachymetr, autokeratorefraktometr, glaukom, katarakta, kontaktní čočky, brýle, preventivní prohlídky, řidičský průkaz, zbrojní průkaz, péče o zrak, oční klinika Petřiny, Stamicova Praha 6, oftalmolog Praha, oční ambulance, vyšetření zraku, oční specialista, moderní technologie'
        },
        {
          name: 'author',
          content: 'Oční Petřiny s.r.o.'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'bingbot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        // Mobile Optimization
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Oční Petřiny' },
        { name: 'application-name', content: 'Oční Petřiny' },
        { name: 'msapplication-TileColor', content: '#60AA06' },
        { name: 'theme-color', content: '#60AA06' },
        // Security
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        // Format Detection
        { name: 'format-detection', content: 'telephone=yes' },
        { name: 'format-detection', content: 'address=yes' },
        // Open Graph for Social Media
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Oční Petřiny' },
        { property: 'og:title', content: 'Oční Petřiny | MUDr. Drahoslava Petříková | Oftalmologie Praha 6' },
        { property: 'og:description', content: 'Moderní oční ordinace v Praze 6 s profesionální péčí o váš zrak. Oftalmologická vyšetření, diagnostika očních onemocnění, moderní technologie OCT, perimetr, tonometr. Komplexní zákroky a preventivní prohlídky. Stamicova 21, Praha 6.' },
        { property: 'og:url', content: 'https://www.ocnipetriny.cz/' },
        { property: 'og:image', content: 'https://www.ocnipetriny.cz/images/preview.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Oční Petřiny - Moderní oční ordinace Praha 6' },
        { property: 'og:locale', content: 'cs_CZ' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Oční Petřiny | MUDr. Drahoslava Petříková | Oftalmologie Praha 6' },
        { name: 'twitter:description', content: 'Moderní oční ordinace s profesionální péčí o váš zrak. OCT, perimetr, tonometr. Komplexní zákroky. Oftalmologie Praha 6. ☎ +420 734 554 553' },
        { name: 'twitter:image', content: 'https://www.ocnipetriny.cz/images/preview.png' },
        { name: 'twitter:image:alt', content: 'Oční Petřiny - Moderní oční ordinace Praha 6' },
        // Local Business SEO
        { name: 'geo.region', content: 'CZ-PR' },
        { name: 'geo.placename', content: 'Praha 6, Petřiny' },
        { name: 'geo.position', content: '50.0969;14.3197' },
        { name: 'ICBM', content: '50.0969, 14.3197' },
        // Contact Information
        { name: 'contact', content: 'sestra@ocnipetriny.cz' },
        { name: 'telephone', content: '+420734554553' },
        // Business Information
        { name: 'business:contact_data:street_address', content: 'Stamicova 21' },
        { name: 'business:contact_data:locality', content: 'Praha 6, Petřiny' },
        { name: 'business:contact_data:postal_code', content: '162 00' },
        { name: 'business:contact_data:country_name', content: 'Česká republika' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.ocnipetriny.cz/' },
        // Favicons and App Icons
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
        // PWA Manifest
        { rel: 'manifest', href: '/manifest.json' },
        // Preconnect for Performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&subset=latin-ext' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&subset=latin-ext' },
        { rel: 'preconnect', href: 'https://maps.google.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
      ],
      script: [
        // Organization/Eye Clinic Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Optician', 'MedicalOrganization', 'LocalBusiness'],
            '@id': 'https://www.ocnipetriny.cz/#organization',
            name: 'Oční Petřiny',
            alternateName: 'Oční Petřiny s.r.o.',
            legalName: 'Oční Petřiny s.r.o.',
            url: 'https://www.ocnipetriny.cz',
            logo: 'https://www.ocnipetriny.cz/logo.png',
            image: 'https://www.ocnipetriny.cz/images/preview.png',
            description: 'Moderní oční ordinace v Praze 6 Petřiny specializující se na komplexní oftalmologickou péči, diagnostiku očních onemocnění s moderními technologiemi OCT, perimetr, tonometr, pachymetr. Poskytujeme komplexní zákroky, preventivní prohlídky a péči o váš zrak s lidským přístupem.',
            slogan: 'Moderní péče o váš zrak s lidským přístupem',
            telephone: '+420734554553',
            email: 'sestra@ocnipetriny.cz',
            priceRange: '$$',
            currenciesAccepted: 'CZK',
            paymentAccepted: 'Cash, Credit Card',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Stamicova 21',
              addressLocality: 'Praha 6',
              addressRegion: 'Praha',
              postalCode: '162 00',
              addressCountry: 'CZ'
            },
            areaServed: {
              '@type': 'City',
              name: 'Praha'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 50.0969,
              longitude: 14.3197
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday'],
                opens: '08:00',
                closes: '11:30'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday'],
                opens: '12:30',
                closes: '17:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Wednesday', 'Thursday'],
                opens: '07:30',
                closes: '11:30'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Wednesday', 'Thursday'],
                opens: '12:30',
                closes: '14:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Friday',
                opens: '07:30',
                closes: '12:00'
              }
            ],
            medicalSpecialty: ['Ophthalmology'],
            employee: [
              {
                '@type': 'Physician',
                '@id': 'https://www.ocnipetriny.cz/#doctor-petrikova',
                name: 'MUDr. Drahoslava Petříková',
                jobTitle: 'Oční lékařka',
                medicalSpecialty: ['Ophthalmology'],
                description: 'Odbornice s dlouholetými zkušenostmi v oftalmologii, zaměřená na komplexní péči o zrak a diagnostiku očních onemocnění'
              },
              {
                '@type': 'Person',
                '@id': 'https://www.ocnipetriny.cz/#nurse-vorlova',
                name: 'Hana Vorlová',
                jobTitle: 'Zdravotní sestra',
                description: 'Profesionální péče a podpora pacientů, zajišťující hladký průběh vyšetření a komfort v ordinaci'
              }
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Oftalmologické služby',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Komplexní oční vyšetření',
                    description: 'Kompletní oftalmologické vyšetření včetně měření zrakové ostrosti a vyšetření očního pozadí'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Diagnostika očních onemocnění',
                    description: 'Profesionální diagnostika a vyšetření očních onemocnění'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Preventivní péče o zrak',
                    description: 'Pravidelné preventivní kontroly a péče o zdraví vašich očí'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Vyšetření zrakové ostrosti',
                    description: 'Měření zrakové ostrosti a předpis brýlí či kontaktních čoček'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'OCT vyšetření',
                    description: 'Moderní diagnostika pomocí optické koherentní tomografie pro přesné zobrazení sítnice'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Vyšetření perimetrem',
                    description: 'Vyšetření zorného pole pro diagnostiku glaukomu a neurologických onemocnění'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Měření nitroočního tlaku',
                    description: 'Tonometrické vyšetření pro včasnou diagnostiku glaukomu'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Preventivní prohlídky',
                    description: 'Vyšetření na řidičský průkaz, zbrojní průkaz a další preventivní prohlídky'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'MedicalProcedure',
                    name: 'Aplikace kontaktních čoček',
                    description: 'Odborné vyšetření, aplikace a pravidelné kontroly kontaktních čoček'
                  }
                }
              ]
            },
            hasMap: 'https://maps.google.com/?q=Stamicova+21,+Praha+6',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              bestRating: '5',
              worstRating: '1',
              reviewCount: '1'
            },
            sameAs: []
          })
        },
        // Doctor Person Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Physician',
            '@id': 'https://www.ocnipetriny.cz/#doctor-petrikova',
            name: 'MUDr. Drahoslava Petříková',
            honorificPrefix: 'MUDr.',
            jobTitle: 'Oční lékařka',
            medicalSpecialty: ['Ophthalmology'],
            worksFor: {
              '@id': 'https://www.ocnipetriny.cz/#organization'
            },
            description: 'Odbornice s dlouholetými zkušenostmi v oftalmologii, zaměřená na komplexní péči o zrak a diagnostiku očních onemocnění'
          })
        },
        // WebSite Schema with Search Action
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://www.ocnipetriny.cz/#website',
            url: 'https://www.ocnipetriny.cz',
            name: 'Oční Petřiny',
            description: 'Moderní oční ordinace Praha 6',
            publisher: {
              '@id': 'https://www.ocnipetriny.cz/#organization'
            },
            inLanguage: 'cs-CZ'
          })
        },
        // BreadcrumbList Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Domů',
                item: 'https://www.ocnipetriny.cz/'
              }
            ]
          })
        },
        // FAQ Schema
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Kde se nachází Oční Petřiny?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oční Petřiny se nachází na adrese Stamicova 21, Praha 6 - Petřiny, 162 00. Jsme snadno dostupní MHD i autem.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jaká je ordinační doba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ordinujeme Po-Út od 8:00 do 11:30 a od 12:30 do 17:00, St-Čt od 7:30 do 11:30 a od 12:30 do 14:00, Pá od 7:30 do 12:00. Objednání na tel.: +420 734 554 553 nebo email: sestra@ocnipetriny.cz'
                }
              },
              {
                '@type': 'Question',
                name: 'Jaké služby poskytujete?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Poskytujeme komplexní oftalmologickou péči včetně očních vyšetření, diagnostiky očních onemocnění, preventivní péče o zrak a vyšetření zrakové ostrosti.'
                }
              },
              {
                '@type': 'Question',
                name: 'Kdo je váš oční lékař?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Naší oční lékařkou je MUDr. Drahoslava Petříková, odbornice s dlouholetými zkušenostmi v oftalmologii, zaměřená na komplexní péči o zrak a diagnostiku očních onemocnění.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jaké moderní technologie používáte?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Disponujeme nejmodernějším vybavením včetně OCT (optická koherentní tomografie), perimetru pro vyšetření zorného pole, aplanačního tonometru pro měření nitroočního tlaku, pachymetru a autokeratorefraktometru pro komplexní diagnostiku.'
                }
              },
              {
                '@type': 'Question',
                name: 'Jaké zákroky provádíte?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Poskytujeme komplexní oční vyšetření, diagnostiku chorob očního segmentu, vyšetření a přípravu k operacím katarakty a glaukomu, preventivní prohlídky na řidičský a zbrojní průkaz, aplikaci kontaktních čoček a nadstandardní diagnostická vyšetření.'
                }
              }
            ]
          })
        }
      ]
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // CSS optimization
  css: [],

  // Build optimizations
  build: {
    transpile: [],
    analyze: false
  },

  // Router optimization
  router: {
    prefetchLinks: true
  },

  // Image optimization
  image: {
    formats: ['webp', 'avif', 'jpg'],
    quality: 80
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: 'https://www.ocnipetriny.cz',
      siteName: 'Oční Petřiny',
      siteDescription: 'Moderní oční ordinace v Praze 6 s profesionální oftalmologickou péčí a lidským přístupem'
    }
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  // Additional SEO and performance features
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  }
};
