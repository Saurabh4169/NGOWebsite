export interface RecognitionItem {
  id: string;
  title: string;
  issuingAgency: string;
  date: string;
  year: string;
  image: string;
  imageAlt: string;
  signatories?: string;
  description: string;
  badge?: string;
}

export const recognitions: RecognitionItem[] = [
  {
    "id": "rec-nyc-2021",
    "title": "Certificate of Participation — I DARE Youth Search",
    "issuingAgency": "National Youth Commission, Office of the President",
    "date": "24 November 2021",
    "year": "2021",
    "image": "assets/images/cert-nyc-idare-2021.jpg",
    "imageAlt": "Certificate of Participation presented to Friendship Goals Society Caraga-Butuan Inc. by National Youth Commission",
    "signatories": "Asec. Laurence Anthony D. Diestro & Asec. Ronald Gian Carlo L. Cardema",
    "description": "Awarded to Friendship Goals Society Caraga-Butuan Inc. (FGSCBI) in Manila, Philippines, for active participation in the nationwide 'Search for Outstanding Illegal Drug Abuse Resistance Education Projects for the Youth' (I DARE Youth).",
    "badge": "National Youth Recognition"
  },
  {
    "id": "rec-rdc-plaque-2025",
    "title": "Plaque of Appreciation — Regional Development Council Caraga",
    "issuingAgency": "Regional Development Council (RDC) Caraga Region",
    "date": "July 2025",
    "year": "2025",
    "image": "assets/images/rdc-plaque-awarding-group.jpg",
    "imageAlt": "Plaque of Appreciation awarding ceremony for outgoing RDC Officials and Private Sector Representatives",
    "signatories": "Caraga Regional Development Council Officials",
    "description": "Conferred during the ceremonial awarding of Plaques of Appreciation honoring the dedicated service, leadership, and policy contributions of outgoing Caraga RDC Officials and Private Sector Representatives (PSRs) representing the fishery sector.",
    "badge": "Regional Governance Plaque"
  },
  {
    "id": "rec-dswd-4ps-2025",
    "title": "Certificate of Appreciation — DSWD Caraga 4Ps Division",
    "issuingAgency": "Department of Social Welfare and Development (DSWD) Caraga 4Ps Division",
    "date": "July 2025",
    "year": "2025",
    "image": "assets/images/cert-braintrust-4ps-study.jpg",
    "imageAlt": "DSWD Caraga 4Ps Division Recognition and Social Protection Research Consultations",
    "signatories": "DSWD Regional Field Office Caraga / Study Team",
    "description": "Recognizing FGSCBI's valuable partnership, civic stakeholder participation, and insights provided during regional social protection assessments and community welfare dialogues.",
    "badge": "Social Protection Partner"
  },
  {
    "id": "rec-braintrust-2025",
    "title": "Certificate of Participation — 4Ps & Social Protection Assessment Study",
    "issuingAgency": "Brain Trust Inc. (on behalf of DSWD)",
    "date": "2025",
    "year": "2025",
    "image": "assets/images/cert-braintrust-4ps-study.jpg",
    "imageAlt": "Certificate of Participation from Brain Trust Inc. for Focus Group Discussion",
    "signatories": "Dr. Cielito F. Habito (Chairperson & Study Team Leader) & Ellamelides S. Antonio (President & CEO)",
    "description": "For participating in the Focus Group Discussion for the national research study: 'Assessment of Pantawid Pamilyang Pilipino Program (4Ps) and Other Existing Social Protection Programs in the Philippines and their Contribution to Poverty Alleviation'. Note: Displayed subject to client confirmation because the uploaded copy has a blank recipient line.",
    "badge": "Research Consultation",
    "verificationNote": "Client verification notice: The uploaded physical copy contains a blank recipient line; certificate is cataloged pending client's confirmed copy."
  }
];
