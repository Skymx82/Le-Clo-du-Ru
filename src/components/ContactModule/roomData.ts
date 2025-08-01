import { RoomType } from "./types";

// Données de démonstration pour les chambres
export const roomTypes: RoomType[] = [
  {
    id: 1,
    name: "Chambre Double 1",
    description: "18 m² avec lit double 160x200cm et vue sur jardin",
    price: 110,
    capacity: 2,
    image: "/image/Chambre N°1/7544E1C4-8274-4C26-BC2C-F644F2CF1A13-1441-000000A6248AA623.jpg",
  },
  {
    id: 2,
    name: "Chambre Double 2",
    description: "20 m² avec lit double 160x200cm et lit d'appoint 80x220cm",
    price: 120,
    capacity: 3,
    image: "/image/Chambre N°2/P1090414.jpg",
  },
  {
    id: 3,
    name: "Chambre Double 3",
    description: "40 m² avec 1 lit king-size et 2 lits simples dans une pièce séparée",
    price: 130,
    capacity: 4,
    image: "/image/Chambre N°3/IMG_3655.jpeg",
  },
];
