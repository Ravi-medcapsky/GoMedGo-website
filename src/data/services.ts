import { Service } from "@/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Expert Caretaker",
    description: "Gentle care expert.",
    details: `
      Our expert caretakers provide personalized support with compassion and professionalism.
      They assist with daily activities such as mobility, meal preparation, companionship, 
      and medication reminders. Perfect for families looking for trusted home assistance.
    `,
    features: [
      "24/7 availability",
      "Personalized care plans",
      "Companionship & emotional support",
    ],
    image: "/hero-img.png",
  },
  {
    id: 2,
    title: "Baby Caretaker",
    description: "Caring for your little ones.",
    details: `
      Trained baby caretakers ensure your child’s safety, comfort, and growth.
      From feeding and hygiene to early learning support, our staff treats your 
      baby with the same care as you would.
    `,
    features: [
      "Infant feeding & hygiene",
      "Play & early learning activities",
      "Day & night supervision",
    ],
    image: "/hero-img.png",
  },
  {
    id: 3,
    title: "At Home Care",
    description: "Comfort of home care.",
    details: `
      We provide healthcare services at the comfort of your home, including routine 
      check-ups, assistance with recovery, and ongoing monitoring for chronic conditions.
    `,
    features: [
      "Nursing care at home",
      "Doctor visits",
      "Post-surgery recovery support",
    ],
    image: "/hero-img.png",
  },
  {
    id: 4,
    title: "Injections & Infusions",
    description: "Painless and safe delivery.",
    details: `
      Our certified nurses administer injections and IV infusions at home safely, 
      following all medical protocols. Ideal for patients requiring frequent treatments 
      without hospital visits.
    `,
    features: [
      "Safe & hygienic practices",
      "IV drip administration",
      "Doctor-supervised care",
    ],
    image: "/hero-img.png",
  },
  {
    id: 5,
    title: "Elderly Bath Hygiene",
    description: "Dignified hygiene care.",
    details: `
      Elderly bath services ensure seniors maintain personal hygiene with dignity 
      and comfort. Our caretakers assist with bathing, grooming, and dressing.
    `,
    features: [
      "Gentle bathing assistance",
      "Hair & skin care",
      "Respectful and compassionate care",
    ],
    image: "/hero-img.png",
  },
  {
    id: 6,
    title: "Dressing",
    description: "Professional wound care.",
    details: `
      Our nurses provide proper wound dressing, infection control, and healing support. 
      We use sterile techniques to ensure safety and quicker recovery.
    `,
    features: [
      "Wound cleaning & dressing",
      "Post-surgical wound care",
      "Regular monitoring",
    ],
    image: "/hero-img.png",
  },
];
