import { type AppItem } from '../types/appTypes.ts';

//import PhoneMockup from '../assets/phone_apps.png';
import PhoneMockupFortuna from '../assets/mockup_phone_fortuna.png';
import PhoneMockupRifitas from '../assets/mockup_phone_rifitas.png';
import PhoneMockupDimaPlay from '../assets/mockup_tv_dimaplay.png';

export const appsData: AppItem[] = [
  {
    id: 1,
    name: "Fortuna Números de la suerte",
    description: "Generador práctico de números de la suerte con diseño intuitivo y resultados instantáneos.",
    category: "Entretenimiento",
    rating: 4.5,
    downloads: "10K+",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.camadi.fortunenumerosuerte&pcampaignid=web_share",
    appStoreLink: "#",
    mockupImage: PhoneMockupFortuna // Usamos la variable importada
  },
  {
    id: 2,
    name: "DIMAPLAY IPTV",
    description: "Plataforma IPTV eficiente y ligera, diseñada para ofrecer reproducción estable y sin complicaciones.",
    category: "Entretenimiento",
    rating: 4.5,
    downloads: "1k+",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.camadi.mitvs&pcampaignid=web_share",
    appStoreLink: "#",
    mockupImage: PhoneMockupDimaPlay // Usamos la variable importada
  },
  {
    id: 3,
    name: "Rifitas",
    description: "Solución digital para gestionar rifas con control, orden y facilidad desde tu dispositivo.",
    category: "Herramientas",
    rating: 5.0,
    downloads: "500+",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.camadi.rifitas&pcampaignid=web_share",
    appStoreLink: "#",
    mockupImage: PhoneMockupRifitas // Usamos la variable importada
  }
  ];