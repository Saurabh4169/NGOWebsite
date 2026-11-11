/**
 * =============================================================================
 * FRIENDSHIP GOALS SOCIETY CARAGA-BUTUAN INC. (FGSCBI)
 * Website Content & Configuration Data
 * =============================================================================
 * Non-developers: You can edit texts, news items, and gallery entries here.
 * Items with `visible: false` can be turned on by setting them to `true`.
 */

const FGSCBI_DATA = {
  // General Organization Details
  organization: {
    name: "Friendship Goals Society Caraga-Butuan Inc.",
    shortName: "FGSCBI",
    tagline: "Building Stronger Communities in Caraga",
    subtitle: "A non-governmental organization dedicated to youth empowerment, coastal environmental care, sustainable livelihood, and private sector representation in the Caraga Regional Development Council (RDC).",
    category: "Non-Governmental Organisation (Social Services and Community Development)",
    role: "Private Sector Representative (Fishery Sector) — Regional Development Council (RDC) Caraga",
    
    // Registration & Office Details (clean, neutral, no visible placeholders)
    secRegistration: "Details available on request",
    secRegistrationVisible: false,
    yearFounded: "2021",
    yearFoundedVisible: true,
    officeAddress: "Butuan City, Agusan del Norte, Caraga Region 8600, Philippines",
    phone: "+63 909 987 3083",
    phoneRaw: "+639099873083",
    email: "contact@fgscbi.org",
    emailVisible: false,
    facebookUrl: "https://facebook.com",
    facebookVisible: false,
    websiteUrl: "https://fgscbi.org"
  },

  // Hero Carousel Slides (3 Authentic Project Slides with unique headline & subtext)
  heroSlides: [
    {
      id: "slide-cleanup",
      image: "assets/images/hero-cleanup.jpg",
      badge: "Coastal & Environmental Care",
      headline: "Building Stronger Communities in Caraga",
      subtext: "Empowering grassroots families, safeguarding coastal waters, and mobilizing community volunteers for clean shorelines across Butuan Bay and the Caraga Region.",
      alt: "Community volunteers participating in a coastal shoreline clean-up drive"
    },
    {
      id: "slide-rdc-meeting",
      image: "assets/images/hero-rdc-meeting.jpg",
      badge: "Regional Policy & Governance",
      headline: "Representing Fishery Sectors in RDC Caraga",
      subtext: "Serving as the accredited Private Sector Representative (PSR) for the Fishery Sector in the Caraga Regional Development Council, bringing artisanal fisherfolk voices to the policymaking table.",
      alt: "FGSCBI representative with Council members at the 122nd Caraga RDC Full Council Meeting"
    },
    {
      id: "slide-rdc-plaque",
      image: "assets/images/hero-rdc-hall.jpg",
      badge: "Civic Dedication & Recognition",
      headline: "Honoring Dedicated Service to Caraga",
      subtext: "Conferred Plaques of Appreciation and official citations from regional councils and national agencies for steadfast commitment to social development.",
      alt: "Regional assembly at the formal Caraga RDC Plaque of Appreciation awarding ceremony"
    }
  ],

  // Verifiable Factual Stats (No invented numbers)
  stats: [
    {
      value: "2021",
      label: "Active Civic Service",
      description: "Milestone participation in National Youth Commission initiatives."
    },
    {
      value: "6",
      label: "Partner Institutions",
      description: "Collaborations with regional line agencies, CSOs, and councils."
    },
    {
      value: "5",
      label: "Core Program Areas",
      description: "Youth education, coastal care, livelihoods, human rights, and governance."
    },
    {
      value: "1",
      label: "RDC Fishery PSR Seat",
      description: "Accredited Private Sector Representative in RDC Caraga."
    }
  ],

  // Recognized By & Participating Agency Badges (Factual & Neutral wording)
  agencies: [
    {
      name: "National Youth Commission",
      acronym: "NYC",
      relationship: "I DARE Youth Project Participant",
      date: "2021"
    },
    {
      name: "Regional Development Council Caraga",
      acronym: "RDC Caraga",
      relationship: "Private Sector Representative (Fishery Sector)",
      date: "2023–2025"
    },
    {
      name: "DOLE Regional Office Caraga",
      acronym: "DOLE Caraga",
      relationship: "DILP Livelihood Program Partner",
      date: "2025"
    },
    {
      name: "Commission on Human Rights",
      acronym: "CHR",
      relationship: "Digital Advocacy Workshop Participant",
      date: "2025"
    },
    {
      name: "Friedrich Naumann Foundation",
      acronym: "FNF Philippines",
      relationship: "Human Rights Digital Advocacy Partner",
      date: "2025"
    },
    {
      name: "DSWD Caraga 4Ps Division",
      acronym: "DSWD Caraga",
      relationship: "Social Protection Consulted CSO",
      date: "2025"
    },
    {
      name: "Brain Trust Inc.",
      acronym: "Brain Trust",
      relationship: "4Ps Assessment Study Consulted CSO",
      date: "2025"
    }
  ],

  // Programs and Projects
  programs: [
    {
      id: "youth-anti-drug",
      title: "Youth Anti-Drug Abuse Resistance Education",
      shortTitle: "Youth & Anti-Drug Education",
      partner: "National Youth Commission (NYC), Office of the President",
      category: "Youth Empowerment",
      image: "assets/images/cert-nyc-idare-2021.jpg",
      imageAlt: "Official Certificate of Participation from National Youth Commission for I DARE Youth project",
      summary: "Equipping young leaders with drug abuse resistance education and positive peer leadership skills.",
      description: "In November 2021, FGSCBI participated in the nationwide 'Search for Outstanding Illegal Drug Abuse Resistance Education Projects for the Youth' (I DARE Youth), spearheaded by the National Youth Commission (Office of the President). The initiative reinforces community-level drug abuse resistance education, youth development, and proactive engagement to keep Caraga's youth resilient, healthy, and purpose-driven.",
      dateInfo: "Certificate awarded 24 November 2021",
      highlights: [
        "Participated in National Youth Commission's I DARE Youth nationwide search",
        "Focused on preventive education, peer mentoring, and healthy community alternatives",
        "Promoting youth civic participation and leadership throughout Butuan City"
      ]
    },
    {
      id: "coastal-cleanup",
      title: "Environmental and Coastal Care",
      shortTitle: "Coastal & Environmental Care",
      partner: "Community Barangays, Fisherfolk & Local Volunteers",
      category: "Environment",
      image: "assets/images/hero-cleanup.jpg",
      imageAlt: "Community volunteers participating in a coastal clean-up drive along the beach",
      summary: "Grassroots shoreline clean-ups, mangrove protection, and waste reduction for coastal Butuan.",
      description: "Caraga is home to rich coastlines and river basins. FGSCBI organizes hands-on shoreline sanitation drives, plastic recovery actions, and environmental awareness campaigns in coastal barangays. We actively engage youth, artisanal fisherfolk, and neighborhood volunteers to safeguard marine habitats and promote sustainable coastal ecology.",
      dateInfo: "Ongoing Community Initiatives",
      highlights: [
        "Community-led shoreline clean-up drives along Butuan Bay and Agusan waterways",
        "Engaging youth volunteers and artisanal fishing communities",
        "Promoting marine biodiversity conservation and eco-stewardship"
      ]
    },
    {
      id: "livelihood-soap",
      title: "Community Livelihood: Soap Making & Marketing",
      shortTitle: "Livelihood: Soap Making",
      partner: "DOLE Regional Office Caraga (DILP) & Butuan City PESO",
      category: "Livelihood",
      image: "assets/images/livelihood-soap-making-workshop.jpg",
      imageAlt: "Community participants learning hands-on soap formulating and mixing in Brgy. J.P. Rizal",
      summary: "Hands-on skills training in household and personal soap making for sustainable family income.",
      description: "Implemented in partnership with the Department of Labor and Employment (DOLE) Regional Office Caraga under the DOLE Integrated Livelihood Program (DILP) and the Butuan City Public Employment Service Office (PESO), this community livelihood project launched in Brgy. J.P. Rizal, Butuan City. The training provides grassroots beneficiaries with practical skills in producing quality detergent and hygiene soap products, along with basic inventory, packaging, and micro-enterprise marketing to augment household income.",
      dateInfo: "Launched May 1, 2025 at Brgy. J.P. Rizal, Butuan City",
      highlights: [
        "Hands-on formulation of hygiene and cleaning soap products",
        "Supported under the DOLE Integrated Livelihood Program (DILP) in coordination with Butuan PESO",
        "Micro-enterprise marketing guidance for sustainable supplemental income"
      ]
    },
    {
      id: "human-rights-digital",
      title: "Human Rights Go Digital: Regional CSO Advocacy",
      shortTitle: "Human Rights & Digital Advocacy",
      partner: "Commission on Human Rights (CHR) & Friedrich Naumann Foundation",
      category: "Civic Advocacy",
      image: "assets/images/human-rights-go-digital-2025.jpg",
      imageAlt: "Participants attending the Human Rights Go Digital Regional Advocacy Workshop in Butuan City",
      summary: "Building civil society digital capacity to amplify grassroots voices and protect human dignity.",
      description: "FGSCBI participated in 'Human Rights Go Digital: Regional Digital Advocacy Workshop for Civil Society Organizations (CSOs)' held in Butuan City, co-organized by the Commission on Human Rights (CHR) and the Friedrich Naumann Foundation (FNF) Philippines. The workshop equipped regional civil society advocates with digital storytelling, content strategy, online safety, and rights-based communication skills to advocate effectively for vulnerable sectors.",
      dateInfo: "Conducted July 2025 in Butuan City",
      highlights: [
        "Regional digital advocacy and content planning for civil society organizations",
        "Empowering grassroots advocates to champion human dignity and community rights",
        "Collaborative network with regional CSOs across Caraga"
      ]
    },
    {
      id: "rdc-participation",
      title: "Regional Development Council (RDC) Caraga Representation",
      shortTitle: "Regional Governance Participation",
      partner: "Caraga Regional Development Council (RDC) & NEDA Caraga",
      category: "Civic Governance",
      image: "assets/images/hero-rdc-meeting.jpg",
      imageAlt: "FGSCBI representative with Caraga RDC Council Members at the 122nd Full Council Meeting",
      summary: "Serving as Private Sector Representative for the fishery sector in regional policy and planning.",
      description: "FGSCBI actively represents the private fishery sector within the Regional Development Council (RDC) Caraga—the highest socio-economic policy-making body in the region. Through attendance in Full Council Meetings (such as the 122nd Second Quarter 2025 Full Council Meeting) and Sectoral Development Committees, FGSCBI elevates the concerns, livelihoods, and sustainable development priorities of Caraga's coastal and artisanal fisherfolk directly into regional development plans.",
      dateInfo: "Active Representation (122nd Full Council Meeting, July 2025)",
      highlights: [
        "Accredited Private Sector Representative (PSR) for Fishery Sector in RDC Caraga",
        "Active participant in the 122nd Full Council Meeting and sectoral deliberations",
        "Bridging grassroots coastal community voices into regional government policymaking"
      ]
    },
    {
      id: "social-protection-research",
      title: "Social Protection Research & 4Ps Assessment",
      shortTitle: "4Ps Social Protection Research",
      partner: "Brain Trust Inc. / Department of Social Welfare and Development (DSWD)",
      category: "Social Services",
      image: "assets/images/cert-braintrust-4ps-study.jpg",
      imageAlt: "Certificate of Participation for Focus Group Discussion on 4Ps Assessment Study",
      summary: "Sharing grassroots civil society perspectives in evaluating national poverty alleviation programs.",
      description: "FGSCBI participated as a civil society stakeholder in the Focus Group Discussion (FGD) for the assessment study entitled 'Assessment of Pantawid Pamilyang Pilipino Program (4Ps) and Other Existing Social Protection Programs in the Philippines and their Contribution to Poverty Alleviation', conducted by Brain Trust: Knowledge and Options for Sustainable Development, Inc., on behalf of the Department of Social Welfare and Development (DSWD).",
      dateInfo: "Consultation Study Stakeholder",
      highlights: [
        "Provided frontline civil society insights on social protection delivery",
        "Contributed to evidence-based assessment of 4Ps poverty alleviation impact",
        "Advocated for inclusive coverage for vulnerable coastal and urban poor households"
      ]
    }
  ],

  // Recognitions & Certificates
  recognitions: [
    {
      id: "rec-nyc-2021",
      title: "Certificate of Participation — I DARE Youth Search",
      issuingAgency: "National Youth Commission, Office of the President",
      date: "24 November 2021",
      year: "2021",
      image: "assets/images/cert-nyc-idare-2021.jpg",
      imageAlt: "Certificate of Participation presented to Friendship Goals Society Caraga-Butuan Inc. by National Youth Commission",
      signatories: "Asec. Laurence Anthony D. Diestro & Asec. Ronald Gian Carlo L. Cardema",
      description: "Awarded to Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) in Manila, Philippines, for active participation in the nationwide 'Search for Outstanding Illegal Drug Abuse Resistance Education Projects for the Youth' (I DARE Youth).",
      badge: "National Youth Recognition"
    },
    {
      id: "rec-rdc-plaque-2025",
      title: "Plaque of Appreciation — Regional Development Council Caraga",
      issuingAgency: "Regional Development Council (RDC) Caraga Region",
      date: "July 2025",
      year: "2025",
      image: "assets/images/rdc-plaque-awarding-group.jpg",
      imageAlt: "Plaque of Appreciation awarding ceremony for outgoing RDC Officials and Private Sector Representatives",
      signatories: "Caraga Regional Development Council Officials",
      description: "Conferred during the ceremonial awarding of Plaques of Appreciation honoring the dedicated service, leadership, and policy contributions of outgoing Caraga RDC Officials and Private Sector Representatives (PSRs) representing the fishery sector.",
      badge: "Regional Governance Plaque"
    },
    {
      id: "rec-dswd-4ps-2025",
      title: "Certificate of Appreciation — DSWD Caraga 4Ps Division",
      issuingAgency: "Department of Social Welfare and Development (DSWD) Caraga 4Ps Division",
      date: "July 2025",
      year: "2025",
      image: "assets/images/cert-braintrust-4ps-study.jpg",
      imageAlt: "DSWD Caraga 4Ps Division Recognition and Social Protection Research Consultations",
      signatories: "DSWD Regional Field Office Caraga / Study Team",
      description: "Recognizing FGSCBI's valuable partnership, civic stakeholder participation, and insights provided during regional social protection assessments and community welfare dialogues.",
      badge: "Social Protection Partner"
    },
    {
      id: "rec-braintrust-2025",
      title: "Certificate of Participation — 4Ps & Social Protection Assessment Study",
      issuingAgency: "Brain Trust Inc. (on behalf of DSWD)",
      date: "2025",
      year: "2025",
      image: "assets/images/cert-braintrust-4ps-study.jpg",
      imageAlt: "Certificate of Participation from Brain Trust Inc. for Focus Group Discussion",
      signatories: "Dr. Cielito F. Habito & Ellamelides S. Antonio",
      description: "For participating in the Focus Group Discussion for the national research study: 'Assessment of Pantawid Pamilyang Pilipino Program (4Ps) and Other Existing Social Protection Programs in the Philippines and their Contribution to Poverty Alleviation'.",
      badge: "Research Consultation"
    }
  ],

  // Timeline Milestones (2021 to 2025)
  timeline: [
    {
      year: "2021",
      date: "November 24, 2021",
      title: "National Youth Commission I DARE Youth Participation",
      category: "Youth Empowerment",
      description: "Participated in the Office of the President's National Youth Commission 'I DARE Youth' initiative in Manila, establishing FGSCBI's community youth drug resistance advocacy."
    },
    {
      year: "2023",
      date: "2023",
      title: "Accreditation as Fishery Sector PSR in RDC Caraga",
      category: "Regional Governance",
      description: "Represented the private fishery sector in the Caraga Regional Development Council, bringing coastal fisherfolk priorities to regional development planning."
    },
    {
      year: "2024",
      date: "2024",
      title: "Coastal Clean-Ups & Barangay Community Outreach",
      category: "Environment",
      description: "Conducted coastal sanitation drives, riverbank waste cleanups, and youth volunteer mobilization across coastal Butuan and nearby communities."
    },
    {
      year: "2025",
      date: "May 1, 2025",
      title: "DOLE DILP Soap Making Livelihood Project Launched",
      category: "Livelihood",
      description: "Initiated a community skills training in soap formulation and micro-enterprise marketing in Brgy. J.P. Rizal, supported by DOLE Regional Office Caraga and Butuan City PESO."
    },
    {
      year: "2025",
      date: "July 2025",
      title: "122nd Caraga RDC Meeting & Plaque of Appreciation",
      category: "Regional Governance",
      description: "Attended the 122nd Full Council Meeting of RDC Caraga and received a Plaque of Appreciation for outstanding service as Private Sector Representative."
    },
    {
      year: "2025",
      date: "July 2025",
      title: "DSWD 4Ps Poverty Alleviation Study Consultations",
      category: "Social Protection",
      description: "Participated in Focus Group Discussions with Brain Trust Inc. and DSWD Caraga evaluating 4Ps and social protection impacts in regional communities."
    },
    {
      year: "2025",
      date: "August 2025",
      title: "Human Rights Go Digital Regional CSO Workshop",
      category: "Advocacy",
      description: "Engaged in specialized digital advocacy training co-hosted by CHR and Friedrich Naumann Foundation to empower regional civil society online campaigns."
    }
  ],

  // News and Updates
  news: [
    {
      id: "news-hr-digital-2025",
      title: "FGSCBI Participates in 'Human Rights Go Digital' Regional Advocacy Workshop",
      date: "August 12, 2025",
      dateIso: "2025-08-12",
      category: "Advocacy",
      categorySlug: "advocacy",
      image: "assets/images/human-rights-go-digital-2025.jpg",
      imageAlt: "Participants in session at the Human Rights Go Digital workshop in Butuan City",
      excerpt: "Regional CSOs gathered in Butuan City for an intensive workshop organized by the Commission on Human Rights and Friedrich Naumann Foundation Philippines.",
      content: `
        <p>In August 2025, representatives from Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) joined fellow civil society advocates in Butuan City for <em>Human Rights Go Digital: Regional Digital Advocacy Workshop for Civil Society Organizations (CSOs)</em>.</p>
        <p>Co-organized by the <strong>Commission on Human Rights (CHR)</strong> and the <strong>Friedrich Naumann Foundation (FNF) Philippines</strong>, the multi-day seminar focused on harnessing digital tools, ethical storytelling, and online campaign strategies to defend human dignity and champion vulnerable community sectors.</p>
        <p>Speakers emphasized consistency in public communication and rights-based message design. FGSCBI will incorporate these digital advocacy insights into its coastal community outreach and youth empowerment programs across the Caraga Region.</p>
      `
    },
    {
      id: "news-rdc-plaque-2025",
      title: "Caraga RDC Confers Plaque of Appreciation to FGSCBI for Fishery Sector Representation",
      date: "July 24, 2025",
      dateIso: "2025-07-24",
      category: "Recognition",
      categorySlug: "recognition",
      image: "assets/images/rdc-plaque-awarding-group.jpg",
      imageAlt: "Caraga RDC officials and Private Sector Representatives receiving Plaques of Appreciation on stage",
      excerpt: "During the 122nd Full Council Meeting, the Regional Development Council Caraga recognized FGSCBI for dedicated service as Private Sector Representative for the Fishery Sector.",
      content: `
        <p>The Caraga Regional Development Council (RDC) formally presented a <strong>Plaque of Appreciation</strong> to Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) during the 122nd (Second Quarter 2025) Full Council Meeting held in Butuan City.</p>
        <p>The recognition honors FGSCBI's active participation as the accredited <strong>Private Sector Representative (PSR) for the Fishery Sector</strong>. Through regular council sessions and committee deliberations, FGSCBI has been a steadfast voice for artisanal fisherfolk, coastal sustainability, and inclusive economic policies in Caraga.</p>
        <p>FGSCBI expressed gratitude to the Council and reaffirmed its commitment to championing regional development policies that protect coastal environments and uplift marginalized livelihoods.</p>
      `
    },
    {
      id: "news-dswd-recognition-2025",
      title: "DSWD Caraga 4Ps Division Recognizes Civil Society Dialogue on Social Protection",
      date: "July 15, 2025",
      dateIso: "2025-07-15",
      category: "Recognition",
      categorySlug: "recognition",
      image: "assets/images/cert-braintrust-4ps-study.jpg",
      imageAlt: "Certificate of participation for social protection assessment study",
      excerpt: "FGSCBI contributed grassroots stakeholder feedback during the DSWD Caraga 4Ps assessment study organized by Brain Trust Inc. to evaluate poverty alleviation programs.",
      content: `
        <p>FGSCBI participated in a comprehensive stakeholder Focus Group Discussion on the <em>Pantawid Pamilyang Pilipino Program (4Ps) and Other Existing Social Protection Programs in the Philippines</em>, led by Brain Trust Inc. on behalf of the Department of Social Welfare and Development (DSWD).</p>
        <p>The consultation evaluated the real-world contributions of social protection programs to poverty reduction in Caraga communities. FGSCBI highlighted the economic vulnerabilities of coastal households, seasonal fishing challenges, and the vital role of grassroots livelihood supplements.</p>
        <p>DSWD Caraga 4Ps Division recognized civil society partners for their constructive inputs toward improving program delivery for Filipino families.</p>
      `
    },
    {
      id: "news-soap-livelihood-2025",
      title: "Community Soap Making and Marketing Training Commences in Brgy. J.P. Rizal",
      date: "May 1, 2025",
      dateIso: "2025-05-01",
      category: "Livelihood",
      categorySlug: "livelihood",
      image: "assets/images/livelihood-soap-making-workshop.jpg",
      imageAlt: "Participants mixing ingredients during the hands-on soap making livelihood training",
      excerpt: "A DOLE-assisted community livelihood project was launched in Brgy. J.P. Rizal, Butuan City, providing hands-on training in soap production and marketing.",
      content: `
        <p>On May 1, 2025, FGSCBI facilitated the commencement of a community livelihood project in <strong>Brgy. J.P. Rizal, Butuan City</strong>, supported by the <strong>DOLE Regional Office Caraga</strong> under the DOLE Integrated Livelihood Program (DILP), in coordination with the <strong>Butuan City Public Employment Service Office (PESO)</strong>.</p>
        <p>Community participants received hands-on coaching in compounding eco-friendly liquid detergents, household cleaners, and personal hygiene soaps. The module covers raw material sourcing, safety handling, packaging, and basic cost analysis to support micro-enterprise viability.</p>
        <p>This initiative helps grassroots households develop home-based, sustainable income streams to improve family economic resilience.</p>
      `
    },
    {
      id: "news-youth-empowerment",
      title: "Empowering Youth: FGSCBI Builds on National Drug Abuse Resistance Milestones",
      date: "Ongoing Initiative",
      dateIso: "2025-04-10",
      category: "Advocacy",
      categorySlug: "advocacy",
      image: "assets/images/cert-nyc-idare-2021.jpg",
      imageAlt: "National Youth Commission I DARE Youth participation certificate",
      excerpt: "Reflecting on its national participation in the NYC 'I DARE Youth' search, FGSCBI continues to promote peer education and healthy alternatives for youth in Caraga.",
      content: `
        <p>Following its formal participation in the National Youth Commission's <em>Search for Outstanding Illegal Drug Abuse Resistance Education Projects for the Youth (I DARE Youth)</em>, FGSCBI remains steadfast in steering Butuan youth away from harmful habits through positive civic engagement.</p>
        <p>Through community environmental clean-ups, peer education, and leadership workshops, FGSCBI creates safe, constructive spaces where young people can thrive, build lasting friendships, and contribute actively to regional nation-building.</p>
      `
    }
  ],

  // Gallery items for masonry grid & lightbox
  gallery: [
    {
      id: "gal-1",
      title: "Hands-on Soap Making Livelihood Training",
      category: "Livelihood",
      categorySlug: "livelihood",
      image: "assets/images/livelihood-soap-making-workshop.jpg",
      date: "May 2025",
      location: "Brgy. J.P. Rizal, Butuan City",
      caption: "Participants engaged in formulation and batch mixing during the DOLE-assisted community soap making workshop."
    },
    {
      id: "gal-2",
      title: "Human Rights Go Digital Advocacy Workshop",
      category: "Advocacy",
      categorySlug: "advocacy",
      image: "assets/images/human-rights-go-digital-2025.jpg",
      date: "July 2025",
      location: "Butuan City",
      caption: "Civil society representatives participating in digital storytelling and rights advocacy sessions co-organized by CHR and Friedrich Naumann Foundation."
    },
    {
      id: "gal-3",
      title: "122nd Caraga RDC Full Council Meeting",
      category: "Governance",
      categorySlug: "governance",
      image: "assets/images/hero-rdc-meeting.jpg",
      date: "July 2025",
      location: "Butuan City",
      caption: "FGSCBI representative with fellow council members and Private Sector Representatives at the 122nd (2nd Quarter 2025) Caraga RDC Full Council Meeting."
    },
    {
      id: "gal-4",
      title: "Awarding of Plaques of Appreciation — RDC Stage Lineup",
      category: "Recognition",
      categorySlug: "recognition",
      image: "assets/images/rdc-plaque-awarding-group.jpg",
      date: "July 2025",
      location: "Grand Ballroom, Butuan City",
      caption: "Outgoing RDC officials and Private Sector Representatives holding Plaques of Appreciation in recognition of their public service."
    },
    {
      id: "gal-5",
      title: "RDC Plaque Ceremony — Grand Hall Gathering",
      category: "Governance",
      categorySlug: "governance",
      image: "assets/images/hero-rdc-hall.jpg",
      date: "July 2025",
      location: "Butuan City",
      caption: "Wide perspective of the regional assembly during the formal recognition of civil society leaders and council officials."
    },
    {
      id: "gal-6",
      title: "Caraga RDC Stage Presentation & Sectoral Service",
      category: "Governance",
      categorySlug: "governance",
      image: "assets/images/rdc-stage-ceremony.jpg",
      date: "July 2025",
      location: "Butuan City",
      caption: "Formal stage presentation honoring dedicated private sector leadership in Caraga regional socioeconomic development."
    },
    {
      id: "gal-7",
      title: "National Youth Commission Certificate (I DARE Youth)",
      category: "Recognition",
      categorySlug: "recognition",
      image: "assets/images/cert-nyc-idare-2021.jpg",
      date: "November 2021",
      location: "Manila, Philippines",
      caption: "Official Certificate of Participation awarded to FGSCBI by the National Youth Commission, Office of the President."
    },
    {
      id: "gal-8",
      title: "Social Protection Assessment Consultation Certificate",
      category: "Recognition",
      categorySlug: "recognition",
      image: "assets/images/cert-braintrust-4ps-study.jpg",
      date: "2025",
      location: "Caraga Region",
      caption: "Certificate of Participation for the 4Ps Assessment Study Focus Group Discussion conducted by Brain Trust Inc. on behalf of DSWD."
    },
    {
      id: "gal-9",
      title: "Community Coastal Clean-up & Shoreline Care",
      category: "Environment",
      categorySlug: "environment",
      image: "assets/images/hero-cleanup.jpg",
      date: "Community Initiatives",
      location: "Butuan Bay Coastline",
      caption: "Community volunteers participating in coastal sanitation, plastic recovery, and marine environment protection along Butuan Bay."
    }
  ],

  // Leadership Team / Board (Polished neutral representation)
  leadership: [
    {
      name: "Lead Representative",
      role: "President & Lead Representative",
      sector: "Fishery Sector Private Sector Representative, RDC Caraga",
      bio: "Dedicated grassroots civic advocate steering community development, coastal care, and youth initiatives across Butuan City."
    },
    {
      name: "Executive Officer",
      role: "Vice President",
      sector: "Community Development & Operations",
      bio: "Overseeing field operations, volunteer mobilization, and partnership coordination with regional government agencies."
    },
    {
      name: "Secretariat Lead",
      role: "Corporate Secretary",
      sector: "Governance & Documentation",
      bio: "Managing official institutional records, SEC compliance, and stakeholder correspondence."
    },
    {
      name: "Finance Officer",
      role: "Treasurer & Finance Officer",
      sector: "Financial Stewardship",
      bio: "Ensuring transparent accounting, financial accountability, and proper stewardship of donor and program resources."
    }
  ]
};

// Export for module systems or attach to global window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FGSCBI_DATA;
} else if (typeof window !== 'undefined') {
  window.FGSCBI_DATA = FGSCBI_DATA;
}
