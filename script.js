/* ============================================================
   TANGIER FURNISH — script.js
   Full frontend logic: products, cart, filters, routing
============================================================ */

'use strict';

/* ─── PRODUCT DATA (70+ unique products) ─── */
const PRODUCTS = [

  /* ════════════════════════ SALON ════════════════════════ */
  {
    id: 1,
    name: 'Canapé Riad Crème',
    category: 'Salon',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 8900,
    oldPrice: null,
    rating: 4.8,
    reviews: 42,
    badge: 'Bestseller',
    isNew: false,
    stock: 3,
    image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6835057/pexels-photo-6835057.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Un canapé d\'exception en tissu tissé main, inspiré de l\'architecture des riads de Tanger. Sa structure en bois massif de cèdre et ses coussins en velours naturel en font une pièce intemporelle. Fabrication artisanale, finition soignée.',
    colors: ['#f5f0e8', '#d4c4a0', '#8b7355', '#5c4a3a'],
  },
  {
    id: 2,
    name: 'Fauteuil Palmier',
    category: 'Salon',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 4800,
    oldPrice: null,
    rating: 4.7,
    reviews: 67,
    badge: 'Nouveau',
    isNew: true,
    stock: 8,
    image: 'https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Fauteuil d\'inspiration scandinave aux lignes pures, fabriqué en rotin et tissu de laine naturelle. Pieds en frêne massif huilé. Léger et élégant, il apporte une touche contemporaine à tout intérieur.',
    colors: ['#f5f0e8', '#c4a882', '#7a8c78'],
  },
  {
    id: 3,
    name: 'Canapé Velours Sable',
    category: 'Salon',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 11200,
    oldPrice: 13500,
    rating: 4.9,
    reviews: 31,
    badge: 'Exclusif',
    isNew: false,
    stock: 2,
    image: 'https://images.pexels.com/photos/6835057/pexels-photo-6835057.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6835057/pexels-photo-6835057.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Canapé 3 places en velours côtelé sable, structure en bois de chêne massif aux pieds fuselés. Un meuble qui allie confort absolu et raffinement visuel, parfait pour un salon contemporain.',
    colors: ['#d4b896', '#a08060', '#6b4f35'],
  },
  {
    id: 4,
    name: 'Méridienne Jasmin',
    category: 'Salon',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 6300,
    oldPrice: null,
    rating: 4.6,
    reviews: 24,
    badge: 'Nouveau',
    isNew: true,
    stock: 4,
    image: 'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Méridienne lounge en tissu bouclé naturel avec assise extra-profonde. Dossier asymétrique inclinable pour une relaxation optimale. Pieds en laiton brossé. Édition limitée.',
    colors: ['#f0ebe0', '#c9bfaa', '#8c7d6a'],
  },
  {
    id: 5,
    name: 'Pouf Cuir Artisanal',
    category: 'Salon',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 1850,
    oldPrice: null,
    rating: 4.8,
    reviews: 112,
    badge: null,
    isNew: false,
    stock: 20,
    image: 'https://images.pexels.com/photos/4846106/pexels-photo-4846106.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4846106/pexels-photo-4846106.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Pouf en cuir véritable tanné végétal, brodé à la main par des artisanes de Marrakech. Motifs géométriques traditionnels en fils de soie. Double usage : siège et table d\'appoint.',
    colors: ['#c4703a', '#8b6914', '#f5f0e8', '#5c4a3a'],
  },
  {
    id: 6,
    name: 'Table Basse Médina',
    category: 'Salon',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 3400,
    oldPrice: 3900,
    rating: 4.7,
    reviews: 38,
    badge: null,
    isNew: false,
    stock: 6,
    image: 'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Table basse en marbre blanc de Carrare et structure en laiton bruni. Plateau biface avec insert en zellige bleu de Fès. Une pièce maîtresse qui dialogue entre tradition et modernité.',
    colors: ['#e8e2d9', '#c8a84b', '#2c2018'],
  },
  {
    id: 7,
    name: 'Canapé d\'Angle Ksar',
    category: 'Salon',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 18500,
    oldPrice: 22000,
    rating: 4.9,
    reviews: 17,
    badge: 'Premium',
    isNew: false,
    stock: 1,
    image: 'https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7018389/pexels-photo-7018389.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Grand canapé d\'angle modulable, revêtu de tissu structuré grège. Profondeur d\'assise généreuse, coussins de dossier en plumes naturelles. Finition sur mesure disponible.',
    colors: ['#e8e0d0', '#c0b49a', '#8b7b65'],
  },
  {
    id: 101,
    name: 'Meuble TV Bois & Métal',
    category: 'Salon',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 5200,
    oldPrice: null,
    rating: 4.6,
    reviews: 28,
    badge: null,
    isNew: false,
    stock: 5,
    image: 'https://images.pexels.com/photos/6835179/pexels-photo-6835179.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6835179/pexels-photo-6835179.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Meuble TV bas en chêne naturel et métal laqué noir. 3 niches ouvertes et 2 tiroirs avec fermeture douce. Design contemporain, pieds coniques en bois massif.',
    colors: ['#c4a882', '#2c2018', '#8b8b8b'],
  },
  {
    id: 102,
    name: 'Canapé 2 Places Bohème',
    category: 'Salon',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 7400,
    oldPrice: 8900,
    rating: 4.7,
    reviews: 45,
    badge: null,
    isNew: false,
    stock: 4,
    image: 'https://images.pexels.com/photos/4915583/pexels-photo-4915583.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4915583/pexels-photo-4915583.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Canapé 2 places en tissu naturel texturé, couleurs chaudes terracotta. Assise moelleuse, dossiers inclinables. Structure en bois de pin massif, pieds coniques naturels.',
    colors: ['#c4703a', '#d4b896', '#8b7355'],
  },
  {
    id: 103,
    name: 'Table d\'Appoint Laiton',
    category: 'Salon',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 1900,
    oldPrice: null,
    rating: 4.5,
    reviews: 33,
    badge: 'Nouveau',
    isNew: true,
    stock: 12,
    image: 'https://images.pexels.com/photos/5490369/pexels-photo-5490369.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490369/pexels-photo-5490369.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Table d\'appoint ronde en laiton doré brossé et plateau en marbre blanc. Diamètre 45 cm. Parfaite à côté d\'un canapé ou d\'un fauteuil, elle ajoute une touche glamour.',
    colors: ['#c8a84b', '#e8e2d9'],
  },

  /* ════════════════════════ CHAMBRE ════════════════════════ */
  {
    id: 8,
    name: 'Lit Kasbah Cèdre',
    category: 'Chambre',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 16800,
    oldPrice: null,
    rating: 4.9,
    reviews: 19,
    badge: 'Premium',
    isNew: false,
    stock: 1,
    image: 'https://images.pexels.com/photos/7614416/pexels-photo-7614416.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7614416/pexels-photo-7614416.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lit en bois de cèdre massif sculpté à la main, avec tête de lit aux motifs des kasbahs du Sud marocain. Finition à la cire d\'abeille naturelle. Pièce unique, signature de l\'artisan.',
    colors: ['#8b6914', '#5c4a3a', '#f5f0e8'],
  },
  {
    id: 9,
    name: 'Commode Sculptée Andalouse',
    category: 'Chambre',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 7200,
    oldPrice: null,
    rating: 4.7,
    reviews: 26,
    badge: 'Nouveau',
    isNew: true,
    stock: 3,
    image: 'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Commode 5 tiroirs en noyer massif, ornée de sculptures géométriques inspirées de l\'architecture andalouse. Poignées en laiton massif forgé à la main. Finition teinte miel.',
    colors: ['#8b6914', '#5c4a3a', '#c4a882'],
  },
  {
    id: 10,
    name: 'Table de Nuit Atlas',
    category: 'Chambre',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 2800,
    oldPrice: null,
    rating: 4.6,
    reviews: 44,
    badge: null,
    isNew: false,
    stock: 7,
    image: 'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Table de chevet en frêne cendré avec tiroir unique et tablette inférieure ouverte. Design épuré aux proportions justes. Disponible en version droite ou gauche.',
    colors: ['#e8dfd2', '#b8a898', '#8b7b65'],
  },
  {
    id: 11,
    name: 'Lit Double avec Rangement Intégré',
    category: 'Chambre',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 12400,
    oldPrice: 14800,
    rating: 4.8,
    reviews: 33,
    badge: 'Exclusif',
    isNew: false,
    stock: 2,
    image: 'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lit plateforme en bois de teck massif, tête de lit en tissu lin naturel matelassé. Finition naturelle préservant les veines du bois. Coffre de rangement intégré sous l\'assise.',
    colors: ['#f5f0e8', '#c9b99a', '#6b5640'],
  },
  {
    id: 12,
    name: 'Armoire Cèdre Atlas 4 Portes',
    category: 'Chambre',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 21500,
    oldPrice: null,
    rating: 4.9,
    reviews: 11,
    badge: 'Premium',
    isNew: false,
    stock: 1,
    image: 'https://images.pexels.com/photos/6487951/pexels-photo-6487951.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6487951/pexels-photo-6487951.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Grande armoire 4 portes en cèdre de l\'Atlas, essence au parfum naturel et aux propriétés antimites. Intérieur avec penderie et rangements ajustables. Façades ornées de moucharabieh sculpté.',
    colors: ['#8b6914', '#c4a882', '#f5f0e8'],
  },
  {
    id: 150,
    name: 'Lit Tête Rembourrée Luxe',
    category: 'Chambre',
    vendor: 'Atelier Benali',
    vendorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80',
    city: 'Tanger',
    price: 9800,
    oldPrice: 11500,
    rating: 4.8,
    reviews: 37,
    badge: null,
    isNew: false,
    stock: 3,
    image: 'https://images.pexels.com/photos/7614416/pexels-photo-7614416.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7614416/pexels-photo-7614416.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lit king size avec tête de lit rembourrée en velours gris perle. Structure en bois massif peint blanc mat. Pieds dorés cylindriques. Idéal pour une chambre élégante et moderne.',
    colors: ['#d8d0c8', '#f5f0e8', '#c8a84b'],
  },
  {
    id: 151,
    name: 'Miroir Chambre Grand Format',
    category: 'Chambre',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 2400,
    oldPrice: null,
    rating: 4.6,
    reviews: 52,
    badge: 'Nouveau',
    isNew: true,
    stock: 8,
    image: 'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Grand miroir pleine longueur à cadre en laiton doré brossé. Dimensions 180×80 cm. Peut être posé au sol ou fixé au mur. Agrandit visuellement la chambre.',
    colors: ['#c8a84b', '#8b6914'],
  },
  {
    id: 152,
    name: 'Coiffeuse avec Miroir Éclairé',
    category: 'Chambre',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 4600,
    oldPrice: null,
    rating: 4.5,
    reviews: 29,
    badge: null,
    isNew: false,
    stock: 5,
    image: 'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Coiffeuse en bois blanc laqué avec miroir intégré et éclairage LED. 3 tiroirs et tablettes de rangement. Design moderne et élégant pour chambre adulte.',
    colors: ['#f5f0e8', '#e8e2d9', '#c8a84b'],
  },

  /* ════════════════════════ SALLE À MANGER ════════════════════════ */
  {
    id: 14,
    name: 'Table Salle à Manger 8 Pers.',
    category: 'Salle à manger',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 9800,
    oldPrice: null,
    rating: 4.6,
    reviews: 22,
    badge: 'Nouveau',
    isNew: true,
    stock: 4,
    image: 'https://images.pexels.com/photos/7045924/pexels-photo-7045924.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7045924/pexels-photo-7045924.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Table de salle à manger 8 personnes en chêne blanc massif, plateau sobre avec bords légèrement arrondis. Pieds en épingle en acier laqué noir mat. Design contemporain intemporel.',
    colors: ['#d8cfc0', '#8b8b8b', '#2c2018'],
  },
  {
    id: 15,
    name: 'Buffet Médina Noyer',
    category: 'Salle à manger',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 8600,
    oldPrice: null,
    rating: 4.7,
    reviews: 19,
    badge: null,
    isNew: false,
    stock: 3,
    image: 'https://images.pexels.com/photos/5825363/pexels-photo-5825363.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5825363/pexels-photo-5825363.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Buffet deux corps en noyer massif, façades ornées de motifs géométriques découpés inspirés du moucharabieh traditionnel. 4 portes, 2 tiroirs, intérieur avec étagères ajustables.',
    colors: ['#5c4a3a', '#8b6914', '#e8dfd2'],
  },
  {
    id: 16,
    name: 'Chaises Design Chêne — Lot 4',
    category: 'Salle à manger',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Fès',
    price: 5600,
    oldPrice: null,
    rating: 4.8,
    reviews: 47,
    badge: null,
    isNew: false,
    stock: 12,
    image: 'https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Set de 4 chaises en bois de frêne avec assise et dossier cannés. Structure légère et solide, empilables. Finition teinte naturelle ou noire au choix. Prix pour le set complet.',
    colors: ['#d8cfc0', '#c4a882', '#2c2018'],
  },
  {
    id: 153,
    name: 'Ensemble Table 6 Places',
    category: 'Salle à manger',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 15800,
    oldPrice: 19000,
    rating: 4.9,
    reviews: 15,
    badge: 'Premium',
    isNew: false,
    stock: 2,
    image: 'https://images.pexels.com/photos/6180674/pexels-photo-6180674.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6180674/pexels-photo-6180674.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Ensemble complet table extensible 6-8 personnes et 6 chaises rembourrées en lin. Table en chêne massif, plateau stratifié céramique. Livraison et montage inclus.',
    colors: ['#d8cfc0', '#c4a882', '#8b8b8b'],
  },
  {
    id: 154,
    name: 'Vaisselier Moderne Chêne',
    category: 'Salle à manger',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 6900,
    oldPrice: null,
    rating: 4.5,
    reviews: 31,
    badge: null,
    isNew: false,
    stock: 4,
    image: 'https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Vaisselier 2 corps en chêne naturel et verre trempé. Partie basse avec portes et tiroirs, partie haute vitrée pour exposer votre vaisselle. Design épuré et fonctionnel.',
    colors: ['#c4a882', '#f5f0e8', '#8b8b8b'],
  },

  /* ════════════════════════ ÉCLAIRAGE ════════════════════════ */
  {
    id: 23,
    name: 'Suspension Laiton Ciselé',
    category: 'Éclairage',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 2200,
    oldPrice: null,
    rating: 4.6,
    reviews: 93,
    badge: null,
    isNew: false,
    stock: 15,
    image: 'https://images.pexels.com/photos/518973/pexels-photo-518973.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/518973/pexels-photo-518973.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Suspension en laiton ciselé à la main, inspirée des motifs géométriques de l\'architecture islamique. Les ombres projetées créent une atmosphère envoûtante. Câble textile tressé, ampoule E27 incluse.',
    colors: ['#c8a84b', '#c8844b', '#8b6914'],
  },
  {
    id: 24,
    name: 'Suspension Cuivre Martelé',
    category: 'Éclairage',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 3400,
    oldPrice: null,
    rating: 4.8,
    reviews: 41,
    badge: 'Nouveau',
    isNew: true,
    stock: 9,
    image: 'https://images.pexels.com/photos/788855/pexels-photo-788855.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/788855/pexels-photo-788855.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Suspension en cuivre martelé à la main, finition patinée naturelle. Abat-jour hémisphérique projetant une lumière douce vers le bas. Câble textile tressé. Ampoule LED E27 incluse.',
    colors: ['#c8844b', '#8b6914'],
  },
  {
    id: 25,
    name: 'Lanterne Fès Ciselée',
    category: 'Éclairage',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Fès',
    price: 1680,
    oldPrice: null,
    rating: 4.7,
    reviews: 78,
    badge: null,
    isNew: false,
    stock: 18,
    image: 'https://images.pexels.com/photos/1393363/pexels-photo-1393363.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1393363/pexels-photo-1393363.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lanterne traditionnelle de Fès en fer forgé et panneaux de verre coloré. Motifs étoilés découpés à la main. Utilisable en suspension ou en lampe à poser. Compatible LED E14.',
    colors: ['#c8a84b', '#2c2018'],
  },
  {
    id: 26,
    name: 'Lustre Géométrique Multi-Branches',
    category: 'Éclairage',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 4800,
    oldPrice: 5600,
    rating: 4.9,
    reviews: 29,
    badge: 'Exclusif',
    isNew: false,
    stock: 5,
    image: 'https://images.pexels.com/photos/3747103/pexels-photo-3747103.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3747103/pexels-photo-3747103.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lustre architectural en laiton doré, composé de 12 branches articulées avec diffuseurs en verre soufflé ambré. Chaque pièce est assemblée à la main. Effet spectaculaire dans un grand espace.',
    colors: ['#c8a84b', '#8b6914', '#e8d8a0'],
  },
  {
    id: 27,
    name: 'Lampadaire Lin & Laiton',
    category: 'Éclairage',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 2800,
    oldPrice: null,
    rating: 4.5,
    reviews: 36,
    badge: null,
    isNew: false,
    stock: 8,
    image: 'https://images.pexels.com/photos/6970077/pexels-photo-6970077.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6970077/pexels-photo-6970077.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Lampadaire sur pied en laiton satiné avec abat-jour en lin naturel crème. Hauteur ajustable de 140 à 180 cm. Interrupteur pied intégré. Design minimaliste et élégant.',
    colors: ['#c8a84b', '#f5f0e8', '#8b8b8b'],
  },
  {
    id: 155,
    name: 'Applique Murale Rotin',
    category: 'Éclairage',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 1200,
    oldPrice: null,
    rating: 4.6,
    reviews: 54,
    badge: 'Nouveau',
    isNew: true,
    stock: 22,
    image: 'https://images.pexels.com/photos/5998240/pexels-photo-5998240.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5998240/pexels-photo-5998240.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Applique murale en rotin naturel tressé à la main. Diffuseur en verre opale blanc pour une lumière douce. Compatible ampoule E14 LED. Idéal en chambre ou couloir.',
    colors: ['#c4a882', '#f5f0e8'],
  },
  {
    id: 156,
    name: 'Guirlande Lumineuse LED Or',
    category: 'Éclairage',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 480,
    oldPrice: null,
    rating: 4.4,
    reviews: 198,
    badge: null,
    isNew: false,
    stock: 50,
    image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Guirlande LED 10 m, 100 ampoules dorées, câble cuivré souple. Lumière chaude 2700 K. Usage intérieur et extérieur. Idéale pour terrasse, chambre, salon.',
    colors: ['#c8a84b', '#f5f0e8'],
  },

  /* ════════════════════════ DÉCORATION ════════════════════════ */
  {
    id: 19,
    name: 'Vase Céramique Safi',
    category: 'Décoration',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Safi',
    price: 680,
    oldPrice: null,
    rating: 4.8,
    reviews: 89,
    badge: null,
    isNew: false,
    stock: 25,
    image: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Vase en céramique de Safi, façonné au tour par un maître potier. Glaçure mate texturée en dégradé de terracotta et ivoire. Disponible en 3 hauteurs. Chaque pièce est unique.',
    colors: ['#c4703a', '#d4a882', '#f5f0e8'],
  },
  {
    id: 20,
    name: 'Coussin Brodé Berbère',
    category: 'Décoration',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 420,
    oldPrice: null,
    rating: 4.6,
    reviews: 143,
    badge: null,
    isNew: false,
    stock: 35,
    image: 'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Coussin 50×50 cm en laine de mouton brodée à la main avec des motifs berbères traditionnels. Rembourrage en plumes et fibres naturelles. Housse amovible, lavable à 30°.',
    colors: ['#f5f0e8', '#c4703a', '#8b7355', '#7a8c78'],
  },
  {
    id: 21,
    name: 'Miroir Arabesque Doré',
    category: 'Décoration',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 2900,
    oldPrice: null,
    rating: 4.7,
    reviews: 52,
    badge: 'Nouveau',
    isNew: true,
    stock: 6,
    image: 'https://images.pexels.com/photos/6492396/pexels-photo-6492396.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6492396/pexels-photo-6492396.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Miroir à cadre en laiton doré brossé, ornement sculpté à la main de motifs arabesques. Diamètre 80 cm. Idéal comme pièce maîtresse dans un couloir, une chambre ou un salon.',
    colors: ['#c8a84b', '#8b6914'],
  },
  {
    id: 22,
    name: 'Plateau Tadelakt Noir',
    category: 'Décoration',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 850,
    oldPrice: null,
    rating: 4.5,
    reviews: 67,
    badge: null,
    isNew: false,
    stock: 14,
    image: 'https://images.pexels.com/photos/6492405/pexels-photo-6492405.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6492405/pexels-photo-6492405.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Plateau en tadelakt, enduit traditionnel marocain à la chaux et imperméabilisé à l\'huile d\'olive. Finition lisse et brillante, coloris noir profond. Imperméable et résistant.',
    colors: ['#1c1915', '#3a3530'],
  },
  {
    id: 158,
    name: 'Plante Verte Intérieure',
    category: 'Décoration',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 750,
    oldPrice: null,
    rating: 4.4,
    reviews: 61,
    badge: null,
    isNew: false,
    stock: 20,
    image: 'https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3952034/pexels-photo-3952034.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Plante verte intérieure en pot de céramique mate ivoire. Entretien facile, lumière indirecte. Hauteur 60 cm. Idéale pour apporter une touche de nature à votre intérieur.',
    colors: ['#7a8c78', '#f5f0e8', '#c4703a'],
  },
  {
    id: 159,
    name: 'Bougeoirs Trio Laiton',
    category: 'Décoration',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 1200,
    oldPrice: null,
    rating: 4.6,
    reviews: 44,
    badge: null,
    isNew: false,
    stock: 16,
    image: 'https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Set de 3 bougeoirs en laiton doré brossé, de hauteurs différentes (15, 22, 30 cm). Base circulaire stable, finition martelée artisanale. Idéal sur table basse ou étagère.',
    colors: ['#c8a84b', '#8b6914'],
  },
  {
    id: 160,
    name: 'Tableau Calligraphie Arabe',
    category: 'Décoration',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Fès',
    price: 2400,
    oldPrice: null,
    rating: 4.8,
    reviews: 72,
    badge: 'Bestseller',
    isNew: false,
    stock: 8,
    image: 'https://images.pexels.com/photos/3356173/pexels-photo-3356173.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3356173/pexels-photo-3356173.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tableau de calligraphie arabe, encre de Chine sur papier Wasli. Verse du Coran en lettres dorées sur fond ivoire. Cadre en bois sculpté laqué or. Format 50×70 cm.',
    colors: ['#c8a84b', '#2c2018', '#f5f0e8'],
  },

  /* ════════════════════════ BUREAU ════════════════════════ */
  {
    id: 28,
    name: 'Bureau Médina Noyer',
    category: 'Bureau',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 6400,
    oldPrice: 7200,
    rating: 4.5,
    reviews: 34,
    badge: null,
    isNew: false,
    stock: 4,
    image: 'https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Bureau en noyer et acier brossé, alliance parfaite du traditionnel et du contemporain. Grand plateau de travail, tiroirs coulissants à fermeture douce. Fabriqué dans les ateliers de la médina de Fès.',
    colors: ['#5c4a3a', '#8b8b8b', '#2c2018'],
  },
  {
    id: 29,
    name: 'Bibliothèque Chêne Massif',
    category: 'Bureau',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 9200,
    oldPrice: null,
    rating: 4.8,
    reviews: 22,
    badge: 'Nouveau',
    isNew: true,
    stock: 3,
    image: 'https://images.pexels.com/photos/5490167/pexels-photo-5490167.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490167/pexels-photo-5490167.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Grande bibliothèque modulable en chêne massif et métal laqué blanc. 5 niveaux d\'étagères réglables. Assemblage sans vis apparent, livraison et montage inclus.',
    colors: ['#f5f0e8', '#8b8b8b'],
  },
  {
    id: 30,
    name: 'Bureau Secrétaire Wengé',
    category: 'Bureau',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Casablanca',
    price: 8100,
    oldPrice: null,
    rating: 4.7,
    reviews: 18,
    badge: null,
    isNew: false,
    stock: 2,
    image: 'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Bureau secrétaire en wengé massif avec abattant d\'écriture et rangements intérieurs. Façades en bois de wengé aux veines sombres et profondes. Un meuble fonctionnel et décoratif.',
    colors: ['#2c2018', '#5c4a3a', '#8b6914'],
  },
  {
    id: 161,
    name: 'Chaise Bureau Ergonomique',
    category: 'Bureau',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 4200,
    oldPrice: 5100,
    rating: 4.6,
    reviews: 89,
    badge: 'Bestseller',
    isNew: false,
    stock: 15,
    image: 'https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Chaise de bureau ergonomique à dossier en résille respirante. Hauteur et accoudoirs ajustables, support lombaire intégré. Roues silencieuses sur parquet. Garantie 3 ans.',
    colors: ['#2c2018', '#8b8b8b', '#f5f0e8'],
  },
  {
    id: 162,
    name: 'Bureau Compact Home Office',
    category: 'Bureau',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 3800,
    oldPrice: null,
    rating: 4.5,
    reviews: 41,
    badge: null,
    isNew: false,
    stock: 8,
    image: 'https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Bureau compact en chêne massif avec tablette latérale et rangement sous plateau. Idéal pour un home office ou un espace de travail dans une chambre. Dimension 120×60 cm.',
    colors: ['#c4a882', '#2c2018'],
  },

  /* ════════════════════════ CUISINE ════════════════════════ */
  {
    id: 163,
    name: 'Îlot Cuisine Central',
    category: 'Cuisine',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Casablanca',
    price: 18500,
    oldPrice: 22000,
    rating: 4.8,
    reviews: 14,
    badge: 'Premium',
    isNew: false,
    stock: 2,
    image: 'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Îlot central de cuisine en chêne massif avec plan de travail en granit noir. 6 tiroirs spacieux, 2 portes de rangement. Dimensions 160×90 cm. Installation sur mesure disponible.',
    colors: ['#c4a882', '#1c1915', '#f5f0e8'],
  },
  {
    id: 164,
    name: 'Cuisine Équipée Chêne',
    category: 'Cuisine',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 24000,
    oldPrice: 28000,
    rating: 4.9,
    reviews: 8,
    badge: 'Exclusif',
    isNew: false,
    stock: 1,
    image: 'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Cuisine complète équipée, façades en chêne naturel, plan de travail en quartz blanc. Meubles hauts et bas, hotte intégrée. Montage et livraison inclus.',
    colors: ['#c4a882', '#f5f0e8', '#8b8b8b'],
  },
  {
    id: 165,
    name: 'Tabouret de Bar Chêne',
    category: 'Cuisine',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 1600,
    oldPrice: null,
    rating: 4.5,
    reviews: 67,
    badge: null,
    isNew: false,
    stock: 20,
    image: 'https://images.pexels.com/photos/6585767/pexels-photo-6585767.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6585767/pexels-photo-6585767.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tabouret de bar en chêne massif huilé, hauteur 75 cm. Assise ronde avec repose-pieds en métal chromé. Design épuré et résistant, idéal pour îlot ou comptoir.',
    colors: ['#c4a882', '#8b8b8b'],
  },
  {
    id: 166,
    name: 'Table Cuisine avec Banc',
    category: 'Cuisine',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 8900,
    oldPrice: null,
    rating: 4.7,
    reviews: 23,
    badge: 'Nouveau',
    isNew: true,
    stock: 5,
    image: 'https://images.pexels.com/photos/6636302/pexels-photo-6636302.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6636302/pexels-photo-6636302.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Ensemble table de cuisine 4 places avec banc en pin massif et 2 chaises. Style campagne naturel. Table 120×75 cm, banc 100 cm. Finition vernis incolore résistant.',
    colors: ['#c4a882', '#f5f0e8'],
  },
  {
    id: 167,
    name: 'Meubles Cuisine Blanc Laqué',
    category: 'Cuisine',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 6400,
    oldPrice: 7800,
    rating: 4.6,
    reviews: 19,
    badge: null,
    isNew: false,
    stock: 6,
    image: 'https://images.pexels.com/photos/7060820/pexels-photo-7060820.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7060820/pexels-photo-7060820.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Set de meubles hauts de cuisine en MDF blanc laqué. 4 éléments de 60 cm, portes avec fermeture soft-close. Montage rapide, livraison à domicile incluse.',
    colors: ['#f5f0e8', '#8b8b8b'],
  },
  {
    id: 168,
    name: 'Étagère Ouverte Cuisine',
    category: 'Cuisine',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 2800,
    oldPrice: null,
    rating: 4.4,
    reviews: 38,
    badge: null,
    isNew: false,
    stock: 10,
    image: 'https://images.pexels.com/photos/7005291/pexels-photo-7005291.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7005291/pexels-photo-7005291.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Étagère ouverte murale en chêne et métal noir, 3 niveaux. Idéale pour exposer vaisselle et aromates. Largeur 90 cm. Fixation murale solide, charge max 25 kg par étagère.',
    colors: ['#c4a882', '#2c2018'],
  },
  {
    id: 169,
    name: 'Cuisine Minimaliste Complète',
    category: 'Cuisine',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 32000,
    oldPrice: null,
    rating: 4.9,
    reviews: 6,
    badge: 'Premium',
    isNew: true,
    stock: 1,
    image: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Cuisine complète minimaliste avec façades laquées mat, plan de travail en marbre blanc. Îlot central avec rangements intégrés. Éclairage LED sous meuble inclus. Livraison et montage.',
    colors: ['#f5f0e8', '#1c1915', '#c8a84b'],
  },

  /* ════════════════════════ SALLE DE BAIN ════════════════════════ */
  {
    id: 170,
    name: 'Meuble Vasque Double Teck',
    category: 'Salle de bain',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 14500,
    oldPrice: 17000,
    rating: 4.8,
    reviews: 16,
    badge: 'Premium',
    isNew: false,
    stock: 3,
    image: 'https://images.pexels.com/photos/7045358/pexels-photo-7045358.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7045358/pexels-photo-7045358.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7534564/pexels-photo-7534564.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Meuble vasque double 120 cm en teck naturel huilé, 2 vasques encastrées en céramique blanche. 4 tiroirs à fermeture douce. Traitement résistant à l\'humidité, garantie 5 ans.',
    colors: ['#c4a882', '#f5f0e8', '#2c2018'],
  },
  {
    id: 171,
    name: 'Miroir Salle de Bain LED',
    category: 'Salle de bain',
    vendor: 'Luminaires Tanger',
    vendorImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80',
    city: 'Tanger',
    price: 3800,
    oldPrice: null,
    rating: 4.7,
    reviews: 42,
    badge: 'Nouveau',
    isNew: true,
    stock: 12,
    image: 'https://images.pexels.com/photos/7045310/pexels-photo-7045310.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7045310/pexels-photo-7045310.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Miroir de salle de bain avec éclairage LED intégré, antibuée. Dimensions 80×60 cm. Cadre en aluminium brossé. Interrupteur tactile, intensité réglable. IP44.',
    colors: ['#8b8b8b', '#f5f0e8'],
  },
  {
    id: 172,
    name: 'Armoire Salle de Bain Blanc',
    category: 'Salle de bain',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 4200,
    oldPrice: null,
    rating: 4.5,
    reviews: 28,
    badge: null,
    isNew: false,
    stock: 7,
    image: 'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Armoire de salle de bain suspendue en MDF blanc laqué, 2 portes miroir et 3 étagères internes. Dimensions 60×70 cm. Traitement anti-humidité garanti 5 ans.',
    colors: ['#f5f0e8', '#8b8b8b'],
  },
  {
    id: 173,
    name: 'Ensemble Bain Tadelakt',
    category: 'Salle de bain',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 5600,
    oldPrice: null,
    rating: 4.9,
    reviews: 12,
    badge: 'Exclusif',
    isNew: false,
    stock: 4,
    image: 'https://images.pexels.com/photos/6980725/pexels-photo-6980725.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6980725/pexels-photo-6980725.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Ensemble d\'accessoires salle de bain en tadelakt artisanal : porte-savon, distributeur, verre. Finition lisse et brillante. Imperméable à l\'eau. Chaque pièce est unique.',
    colors: ['#c4703a', '#f5f0e8', '#8b7355'],
  },
  {
    id: 174,
    name: 'Salle de Bain Complète',
    category: 'Salle de bain',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 8900,
    oldPrice: null,
    rating: 4.6,
    reviews: 21,
    badge: null,
    isNew: false,
    stock: 5,
    image: 'https://images.pexels.com/photos/6934184/pexels-photo-6934184.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6934184/pexels-photo-6934184.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Meuble de salle de bain avec vasque encastrée, meuble sous-vasque à tiroirs et miroir assorti. Finition chêne clair et blanc mat. Livraison et montage inclus.',
    colors: ['#c4a882', '#f5f0e8', '#8b8b8b'],
  },
  {
    id: 175,
    name: 'Baignoire Îlot Moderne',
    category: 'Salle de bain',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 19500,
    oldPrice: null,
    rating: 4.8,
    reviews: 9,
    badge: 'Premium',
    isNew: true,
    stock: 2,
    image: 'https://images.pexels.com/photos/7534564/pexels-photo-7534564.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/7534564/pexels-photo-7534564.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Baignoire îlot autoportante en acrylique renforcé, forme ovale. Dimensions 170×80 cm. Finition blanc brillant ou mat. Robinetterie sur montage au sol disponible en option.',
    colors: ['#f5f0e8', '#8b8b8b'],
  },

  /* ════════════════════════ TAPIS ════════════════════════ */
  {
    id: 176,
    name: 'Tapis Zellige Berbère',
    category: 'Tapis',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 3600,
    oldPrice: null,
    rating: 4.7,
    reviews: 58,
    badge: null,
    isNew: false,
    stock: 7,
    image: 'https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tapis berbère tissé à la main par des artisanes de la région de l\'Atlas. Laine naturelle teinte aux plantes, motifs géométriques traditionnels. Chaque tapis est une œuvre unique.',
    colors: ['#f5f0e8', '#c4703a', '#7a8c78', '#8b7355'],
  },
  {
    id: 177,
    name: 'Tapis Berbère Azilal',
    category: 'Tapis',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 4800,
    oldPrice: null,
    rating: 4.9,
    reviews: 34,
    badge: 'Exclusif',
    isNew: false,
    stock: 3,
    image: 'https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tapis authentique de la tribu Azilal, en laine vierge de haute montagne. Fond ivoire avec dessins abstraits en couleurs naturelles. Tissage irrégulier propre à cette tradition unique.',
    colors: ['#f5ede0', '#c4703a', '#8b7355', '#7a8c78'],
  },
  {
    id: 178,
    name: 'Tapis Salon Géométrique',
    category: 'Tapis',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 2900,
    oldPrice: 3400,
    rating: 4.5,
    reviews: 87,
    badge: null,
    isNew: false,
    stock: 15,
    image: 'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tapis de salon en laine et viscose, motif géométrique moderne. Dimensions 200×300 cm. Texture haute densité, doux au toucher. Disponible en plusieurs coloris.',
    colors: ['#d8d0c8', '#c4a882', '#f5f0e8'],
  },
  {
    id: 179,
    name: 'Tapis Shaggy Doux',
    category: 'Tapis',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 1900,
    oldPrice: null,
    rating: 4.6,
    reviews: 112,
    badge: null,
    isNew: false,
    stock: 25,
    image: 'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tapis shaggy en polyester ultra-doux, coloris blanc nacre. Poils de 5 cm, densité 2500 g/m². Idéal pour chambre ou salon. Facile d\'entretien, lavable en machine.',
    colors: ['#f5f0e8', '#e8e2d9'],
  },
  {
    id: 180,
    name: 'Tapis Entrée Artisanal',
    category: 'Tapis',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 890,
    oldPrice: null,
    rating: 4.7,
    reviews: 156,
    badge: 'Bestseller',
    isNew: false,
    stock: 40,
    image: 'https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tapis d\'entrée en coton tissé à plat, motifs rayures naturelles. Dimensions 60×90 cm. Antidérapant, résistant aux passages fréquents. Lavable en machine à 40°.',
    colors: ['#c4703a', '#f5f0e8', '#8b7355'],
  },
  {
    id: 181,
    name: 'Tapis Scandinave Moderne',
    category: 'Tapis',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 2200,
    oldPrice: null,
    rating: 4.5,
    reviews: 63,
    badge: 'Nouveau',
    isNew: true,
    stock: 18,
    image: 'https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Tapis scandinave motif losanges, tissage plat, coloris naturels beige et blanc. Dimensions 160×230 cm. En polyester recyclé. Style épuré et intemporel.',
    colors: ['#f5f0e8', '#d8d0c8', '#c4a882'],
  },

  /* ════════════════════════ RIDEAUX ════════════════════════ */
  {
    id: 182,
    name: 'Rideau Lin Naturel',
    category: 'Rideaux',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 1800,
    oldPrice: null,
    rating: 4.7,
    reviews: 67,
    badge: null,
    isNew: false,
    stock: 30,
    image: 'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Rideau en pur lin lavé, coloris naturel ivoire. Largeur 140 cm, hauteur sur mesure. Texture douce et tombé élégant. Passants doubles à 8 cm. Lavable à 40°.',
    colors: ['#f5f0e8', '#e8dfd2', '#d4c4a0'],
  },
  {
    id: 183,
    name: 'Store Enrouleur Bambou',
    category: 'Rideaux',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 950,
    oldPrice: null,
    rating: 4.5,
    reviews: 93,
    badge: null,
    isNew: false,
    stock: 45,
    image: 'https://images.pexels.com/photos/6835179/pexels-photo-6835179.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6835179/pexels-photo-6835179.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Store enrouleur en bambou naturel, tressage fin. Mécanisme enrouleur silencieux. Sur mesure jusqu\'à 200 cm de large. Filtre la lumière tout en laissant entrer une lumière dorée.',
    colors: ['#c4a882', '#d8cfc0'],
  },
  {
    id: 184,
    name: 'Rideau Occultant Velours',
    category: 'Rideaux',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 2400,
    oldPrice: 2800,
    rating: 4.8,
    reviews: 44,
    badge: null,
    isNew: false,
    stock: 18,
    image: 'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490384/pexels-photo-5490384.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Rideau occultant en velours texturé, coloris beige doux. Bloque 99% de la lumière. Thermique et isolant phonique. Largeur 140 cm, hauteur 260 cm. Idéal chambre à coucher.',
    colors: ['#d4c4a0', '#c4a882', '#8b7355'],
  },
  {
    id: 185,
    name: 'Voilage Transparent Coton',
    category: 'Rideaux',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Rabat',
    price: 680,
    oldPrice: null,
    rating: 4.4,
    reviews: 118,
    badge: null,
    isNew: false,
    stock: 60,
    image: 'https://images.pexels.com/photos/6835057/pexels-photo-6835057.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6835057/pexels-photo-6835057.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Voilage en coton naturel, légèrement transparent. Laisse passer la lumière douce. Largeur 140 cm, hauteur 240 cm. Passants cachés, lavable en machine à 40°.',
    colors: ['#f5f0e8', '#ffffff'],
  },
  {
    id: 186,
    name: 'Rideau Panneau Japonais',
    category: 'Rideaux',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 1400,
    oldPrice: null,
    rating: 4.6,
    reviews: 39,
    badge: 'Nouveau',
    isNew: true,
    stock: 22,
    image: 'https://images.pexels.com/photos/6598909/pexels-photo-6598909.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6598909/pexels-photo-6598909.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Panneau japonais en lin et coton mélangés, système glissant. Largeur 60 cm, hauteur 250 cm. S\'associe par lots pour couvrir de grandes baies. Rendu épuré et contemporain.',
    colors: ['#f5f0e8', '#d4c4a0', '#c4a882'],
  },

  /* ════════════════════════ RANGEMENT ════════════════════════ */
  {
    id: 187,
    name: 'Dressing Modulable Chêne',
    category: 'Rangement',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 9800,
    oldPrice: 12000,
    rating: 4.7,
    reviews: 31,
    badge: null,
    isNew: false,
    stock: 4,
    image: 'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Dressing modulable en chêne blanc, avec penderie, tiroirs et étagères. Largeur totale 200 cm. Nombreuses configurations possibles. Montage inclus, livraison à domicile.',
    colors: ['#f5f0e8', '#c4a882', '#8b8b8b'],
  },
  {
    id: 189,
    name: 'Meuble Chaussures 16 Paires',
    category: 'Rangement',
    vendor: 'Design Nordik Maroc',
    vendorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80',
    city: 'Casablanca',
    price: 2600,
    oldPrice: null,
    rating: 4.5,
    reviews: 78,
    badge: null,
    isNew: false,
    stock: 12,
    image: 'https://images.pexels.com/photos/4857781/pexels-photo-4857781.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/4857781/pexels-photo-4857781.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Meuble à chaussures 4 abattants en MDF blanc laqué. Capacité 16 paires. Poignées dorées. Design épuré, adapté à toutes les entrées. Montage facile avec notice.',
    colors: ['#f5f0e8', '#c8a84b'],
  },
  {
    id: 190,
    name: 'Cubes de Rangement Empilables',
    category: 'Rangement',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 1400,
    oldPrice: null,
    rating: 4.4,
    reviews: 92,
    badge: null,
    isNew: false,
    stock: 30,
    image: 'https://images.pexels.com/photos/5490167/pexels-photo-5490167.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490167/pexels-photo-5490167.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Set de 6 cubes de rangement empilables en chêne massif. Dimensions 30×30 cm chacun. Modulables à l\'infini, avec ou sans panier en osier. Parfait salon, chambre ou bureau.',
    colors: ['#c4a882', '#f5f0e8'],
  },
  {
    id: 191,
    name: 'Coffre Ottoman Multifonction',
    category: 'Rangement',
    vendor: 'Artisanat Marrakech',
    vendorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&q=80',
    city: 'Marrakech',
    price: 2100,
    oldPrice: null,
    rating: 4.7,
    reviews: 46,
    badge: null,
    isNew: false,
    stock: 8,
    image: 'https://images.pexels.com/photos/5490167/pexels-photo-5490167.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5490167/pexels-photo-5490167.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Coffre-ottoman multifonction : siège, table basse et rangement. Structure en bois, revêtement en cuir synthétique grainé. Dimensions 90×45 cm. Intérieur capitonné, charnières silencieuses.',
    colors: ['#c4703a', '#8b7355', '#f5f0e8'],
  },
  {
    id: 192,
    name: 'Commode 6 Tiroirs Naturelle',
    category: 'Rangement',
    vendor: 'Menuiserie El Fassi',
    vendorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80',
    city: 'Fès',
    price: 4800,
    oldPrice: 5600,
    rating: 4.6,
    reviews: 35,
    badge: null,
    isNew: false,
    stock: 5,
    image: 'https://images.pexels.com/photos/6487951/pexels-photo-6487951.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/6487951/pexels-photo-6487951.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'Commode 6 tiroirs en chêne naturel massif. Poignées en laiton brossé. Dimensions 100×80 cm. Tiroirs à guide métal à fermeture douce. Idéale pour chambre ou couloir.',
    colors: ['#c4a882', '#c8a84b', '#f5f0e8'],
  },
];

/* ─── STATE ─── */
let cart = JSON.parse(localStorage.getItem('tf_cart') || '[]');
let activeFilters = { cat: '', city: '', minPrice: 0, maxPrice: Infinity, inStock: false, search: '' };
let currentSort = 'default';
let currentProductId = null;
let currentQty = 1;
let wishlist = JSON.parse(localStorage.getItem('tf_wishlist') || '[]');
let lastOrder = null;
let isLoggedIn = !!sessionStorage.getItem('tf_user');
let pendingReturnPage = null;

/* ─── CART HELPERS ─── */
function saveCart() {
  localStorage.setItem('tf_cart', JSON.stringify(cart));
}
function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}
function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}
function updateCartUI() {
  const count = getCartCount();
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    if (count > 0) {
      countEl.textContent = count;
      countEl.style.display = 'flex';
    } else {
      countEl.style.display = 'none';
    }
  }
  renderCartItems();
}

function addToCart(productId, qty = 1, sourceEl = null) {
  if (!isLoggedIn) {
    pendingReturnPage = 'marketplace';
    showToast('Connectez-vous pour ajouter au panier.', 'info');
    setTimeout(() => showPage('auth'), 600);
    return;
  }
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: product.id, name: product.name, vendor: product.vendor, price: product.price, image: product.image, qty });
  }
  saveCart();
  updateCartUI();
  showToast(`"${product.name}" ajouté au panier`, 'success');
  if (sourceEl) flyToCart(sourceEl);
  else bounceCartIcon();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) { removeFromCart(productId); return; }
  item.qty = newQty;
  saveCart();
  updateCartUI();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const emptyEl = document.getElementById('cartEmpty');
  if (!container) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    if (footer) footer.style.display = 'none';
    container.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  if (footer) footer.style.display = 'block';
  container.querySelectorAll('.cart-item').forEach(el => el.remove());

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.dataset.id = item.id;
    el.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-vendor">${item.vendor}</div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="cart-qty-value">${item.qty}</span>
          <button class="cart-qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <button class="cart-remove-btn" data-id="${item.id}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
          Retirer
        </button>
      </div>
    `;
    container.appendChild(el);
  });

  // Delegate events
  container.querySelectorAll('.cart-qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateCartQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
  });
  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });

  const total = getCartTotal();
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  if (subtotalEl) subtotalEl.textContent = formatPrice(total);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── CHECKOUT ─── */
function handleCheckout() {
  if (cart.length === 0) return;
  if (!isLoggedIn) {
    closeCart();
    pendingReturnPage = 'checkout';
    showToast('Connectez-vous pour finaliser votre commande.', 'info');
    setTimeout(() => showPage('auth'), 600);
    return;
  }
  closeCart();
  renderCheckoutSummary();
  showPage('checkout');
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutOrderItems');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const totalEl = document.getElementById('checkoutTotal');
  if (!container) return;

  const subtotal = getCartTotal();
  container.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <div class="checkout-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="checkout-item-qty">${item.qty}</span>
      </div>
      <div class="checkout-item-info">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-vendor">${item.vendor}</div>
      </div>
      <div class="checkout-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  updateCheckoutDelivery();
}

function updateCheckoutDelivery() {
  const deliveryEl = document.querySelector('input[name="delivery"]:checked');
  const deliveryFeeEl = document.getElementById('checkoutDeliveryFee');
  const totalEl = document.getElementById('checkoutTotal');
  const subtotal = getCartTotal();
  let fee = 0;
  if (deliveryEl && deliveryEl.value === 'express') fee = 150;
  if (deliveryFeeEl) deliveryFeeEl.textContent = fee > 0 ? formatPrice(fee) : 'Gratuite';
  if (totalEl) totalEl.textContent = formatPrice(subtotal + fee);
}

function handlePlaceOrder() {
  const firstName = document.getElementById('checkoutFirstName');
  const lastName = document.getElementById('checkoutLastName');
  const phone = document.getElementById('checkoutPhone');
  const address = document.getElementById('checkoutAddress');
  const city = document.getElementById('checkoutCity');

  const errors = [];
  [firstName, lastName, phone, address, city].forEach(el => {
    if (el && !el.value.trim()) {
      el.classList.add('input-error');
      errors.push(el);
    } else if (el) {
      el.classList.remove('input-error');
    }
  });

  if (errors.length > 0) {
    showToast('Veuillez remplir tous les champs obligatoires.', 'error');
    errors[0].focus();
    return;
  }

  const deliveryEl = document.querySelector('input[name="delivery"]:checked');
  const fee = deliveryEl && deliveryEl.value === 'express' ? 150 : 0;

  const orderItems = cart.map(item => ({ ...item }));
  const orderTotal = getCartTotal() + fee;
  const orderNum = 'TF-' + new Date().getFullYear() + '-' + String(Date.now()).slice(-5);

  lastOrder = {
    number: orderNum,
    items: orderItems,
    total: orderTotal,
    date: new Date(),
    delivery: deliveryEl ? deliveryEl.value : 'standard',
    address: `${address.value}, ${city.value}`,
  };

  cart = [];
  saveCart();
  updateCartUI();

  renderConfirmationPage(lastOrder);
  showPage('confirmation');
  showToast('Commande confirmée ! Merci pour votre achat.', 'success');
}

function renderConfirmationPage(order) {
  const numEl = document.getElementById('confirmOrderNumber');
  const summaryEl = document.getElementById('confirmOrderItems');
  const totalEl = document.getElementById('confirmOrderTotal');

  if (numEl) numEl.textContent = '#' + order.number;
  if (summaryEl) {
    summaryEl.innerHTML = order.items.map(item => `
      <div class="confirm-item">
        <img src="${item.image}" alt="${item.name}" class="confirm-item-img" loading="lazy" />
        <div class="confirm-item-info">
          <span class="confirm-item-name">${item.name}</span>
          <span class="confirm-item-vendor">${item.vendor}</span>
        </div>
        <div class="confirm-item-meta">
          <span class="confirm-item-qty">×${item.qty}</span>
          <span class="confirm-item-price">${formatPrice(item.price * item.qty)}</span>
        </div>
      </div>
    `).join('');
  }
  if (totalEl) totalEl.textContent = formatPrice(order.total);
}

/* ─── FORMATTING ─── */
function formatPrice(price) {
  return price.toLocaleString('fr-MA') + ' MAD';
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) {
      html += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    } else if (i === full && half) {
      html += `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="opacity:0.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    } else {
      html += `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    }
  }
  return html;
}

/* ─── PRODUCT CARD ─── */
function createProductCard(product, skeletonMode = false) {
  if (skeletonMode) {
    const el = document.createElement('div');
    el.className = 'product-card skeleton';
    el.innerHTML = `
      <div class="product-card-image"><div class="skeleton-block" style="width:100%;height:100%;"></div></div>
      <div class="product-card-body" style="display:flex;flex-direction:column;gap:8px;">
        <div class="skeleton-block" style="height:12px;width:60%;"></div>
        <div class="skeleton-block" style="height:18px;width:85%;"></div>
        <div class="skeleton-block" style="height:12px;width:50%;"></div>
        <div class="skeleton-block" style="height:24px;width:40%;margin-top:8px;"></div>
      </div>
    `;
    return el;
  }

  const isWishlisted = wishlist.includes(product.id);
  const el = document.createElement('div');
  el.className = 'product-card';

  const discountPct = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  el.innerHTML = `
    <div class="product-card-image">
      ${product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />` : ''}
      ${product.badge ? `<span class="product-badge${product.isNew ? ' new' : ''}">${product.badge}</span>` : ''}
      ${discountPct > 0 ? `<span class="product-badge discount">-${discountPct}%</span>` : ''}
      <button class="product-wishlist-btn${isWishlisted ? ' active' : ''}" data-id="${product.id}" aria-label="Favoris">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      </button>
      <div class="product-card-overlay"><span>Voir le produit</span></div>
    </div>
    <div class="product-card-body">
      <div class="product-meta">
        <span class="product-category">${product.category}</span>
        <span class="product-city">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${product.city}
        </span>
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-vendor">${product.vendor}</div>
      <div class="product-rating">
        <div class="product-stars">${renderStars(product.rating)}</div>
        <span class="product-rating-count">(${product.reviews})</span>
      </div>
      <div class="product-card-footer">
        <div class="product-price-wrap">
          <div class="product-price">${formatPrice(product.price)}</div>
          ${product.oldPrice ? `<div class="product-price-old">${formatPrice(product.oldPrice)}</div>` : ''}
        </div>
        <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Ajouter au panier">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </button>
      </div>
    </div>
  `;

  // Events
  el.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product.id, 1, e.currentTarget);
  });
  el.querySelector('.product-wishlist-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWishlistCard(e.currentTarget, product.id);
  });
  el.addEventListener('click', () => openProduct(product.id));

  return el;
}

function toggleWishlistCard(btn, productId) {
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
    showToast('Ajouté à votre liste de souhaits', 'success');
  } else {
    wishlist.splice(idx, 1);
    showToast('Retiré de votre liste de souhaits');
  }
  localStorage.setItem('tf_wishlist', JSON.stringify(wishlist));
  updateWishlistNavCount();
  const isWishlisted = wishlist.includes(productId);
  // Update ALL wishlist buttons for this product across the page
  document.querySelectorAll(`.product-wishlist-btn[data-id="${productId}"]`).forEach(b => {
    b.classList.toggle('active', isWishlisted);
    const svg = b.querySelector('svg');
    if (svg) svg.setAttribute('fill', isWishlisted ? 'currentColor' : 'none');
  });
  // Also update the detail page wishlist button if it's for this product
  const detailBtn = document.getElementById('wishlistDetailBtn');
  if (detailBtn && currentProductId === productId) {
    const svg = detailBtn.querySelector('svg');
    if (svg) {
      svg.setAttribute('fill', isWishlisted ? 'var(--accent)' : 'none');
      svg.setAttribute('stroke', isWishlisted ? 'var(--accent)' : 'currentColor');
    }
  }
}

/* ─── FEATURED GRID ─── */
function renderFeaturedGrid() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 0; i < 6; i++) grid.appendChild(createProductCard(null, true));

  setTimeout(() => {
    grid.innerHTML = '';
    const priority = PRODUCTS.filter(p => p.badge || p.isNew);
    const others   = PRODUCTS.filter(p => !p.badge && !p.isNew);
    const featured = [...priority, ...others].slice(0, 6);
    featured.forEach((p, i) => {
      const card = createProductCard(p);
      card.classList.add('reveal-up');
      card.style.setProperty('--delay', `${0.1 + i * 0.08}s`);
      grid.appendChild(card);
    });
    initRevealObserver();
  }, 500);
}

/* ─── SEARCH ─── */
let searchInitialized = false;
let searchDebounceTimer = null;
function initSearch() {
  if (searchInitialized) return;
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  if (!searchInput) return;
  searchInitialized = true;

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim();
    if (searchClear) searchClear.classList.toggle('visible', val.length > 0);
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      activeFilters.search = val.toLowerCase();
      applyFilters();
    }, 300);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      clearTimeout(searchDebounceTimer);
      searchInput.value = '';
      activeFilters.search = '';
      if (searchClear) searchClear.classList.remove('visible');
      applyFilters();
    }
  });

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      clearTimeout(searchDebounceTimer);
      searchInput.value = '';
      activeFilters.search = '';
      searchClear.classList.remove('visible');
      searchInput.focus();
      applyFilters();
    });
  }
}

/* ─── NAVBAR SEARCH WITH DROPDOWN ─── */
function initNavSearch() {
  const wrap     = document.getElementById('navSearchWrap');
  const btn      = document.getElementById('navSearchBtn');
  const panel    = document.getElementById('navSearchPanel');
  const input    = document.getElementById('navSearchInput');
  const closeBtn = document.getElementById('navSearchClose');
  const dropdown = document.getElementById('navSearchDropdown');
  const overlay  = document.getElementById('navSearchOverlay');
  if (!btn || !panel || !input) return;

  const MAX_RESULTS = 6;
  let navTimer = null;
  let focusedIdx = -1;

  /* ── Open/Close ── */
  function openNavSearch() {
    panel.hidden = false;
    overlay.hidden = false;
    requestAnimationFrame(() => panel.classList.add('open'));
    btn.setAttribute('aria-expanded', 'true');
    input.focus();
  }

  function closeNavSearch() {
    panel.classList.remove('open');
    overlay.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    clearTimeout(navTimer);
    panel.addEventListener('transitionend', () => {
      panel.hidden = true;
      dropdown.hidden = true;
      dropdown.innerHTML = '';
      input.value = '';
      focusedIdx = -1;
    }, { once: true });
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.contains('open') ? closeNavSearch() : openNavSearch();
  });
  closeBtn.addEventListener('click', closeNavSearch);
  overlay.addEventListener('click', closeNavSearch);

  /* ── Debounced input ── */
  input.addEventListener('input', () => {
    const q = input.value.trim();
    focusedIdx = -1;
    clearTimeout(navTimer);
    if (q.length < 2) {
      dropdown.hidden = true;
      dropdown.innerHTML = '';
      return;
    }
    navTimer = setTimeout(() => runNavSearch(q), 280);
  });

  /* ── Keyboard navigation ── */
  input.addEventListener('keydown', (e) => {
    const items = [...dropdown.querySelectorAll('.nav-search-result')];
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusedIdx = Math.min(focusedIdx + 1, items.length - 1);
      updateFocus(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusedIdx = Math.max(focusedIdx - 1, -1);
      updateFocus(items);
    } else if (e.key === 'Enter') {
      if (focusedIdx >= 0 && items[focusedIdx]) {
        items[focusedIdx].click();
      } else if (input.value.trim().length >= 2) {
        goToMarketplaceWithQuery(input.value.trim());
      }
    } else if (e.key === 'Escape') {
      closeNavSearch();
    }
  });

  function updateFocus(items) {
    items.forEach((item, i) => {
      item.classList.toggle('focused', i === focusedIdx);
      if (i === focusedIdx) item.scrollIntoView({ block: 'nearest' });
    });
  }

  /* ── Search + render ── */
  function runNavSearch(query) {
    const q = query.toLowerCase();
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.vendor && p.vendor.toLowerCase().includes(q))
    ).slice(0, MAX_RESULTS);
    renderNavResults(results, query);
  }

  function highlight(text, query) {
    const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${esc})`, 'gi'), '<mark>$1</mark>');
  }

  function renderNavResults(results, query) {
    dropdown.innerHTML = '';
    dropdown.hidden = false;

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="nav-search-empty">Aucun résultat pour <strong>« ${query} »</strong></div>`;
      return;
    }

    results.forEach(product => {
      const item = document.createElement('div');
      item.className = 'nav-search-result';
      item.setAttribute('role', 'option');
      item.dataset.id = product.id;
      item.innerHTML = `
        <img class="nav-search-thumb" src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="nav-search-info">
          <div class="nav-search-name">${highlight(product.name, query)}</div>
          <div class="nav-search-meta">${product.category} · ${product.city}</div>
        </div>
        <div class="nav-search-price">${formatPrice(product.price)}</div>
      `;
      item.addEventListener('click', () => {
        closeNavSearch();
        openProduct(product.id);
        showPage('product');
      });
      dropdown.appendChild(item);
    });

    // "See all" footer when there might be more results
    const totalMatches = PRODUCTS.filter(p => {
      const q = query.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }).length;
    if (totalMatches > MAX_RESULTS) {
      const footer = document.createElement('div');
      footer.className = 'nav-search-footer';
      footer.textContent = `Voir les ${totalMatches} résultats pour « ${query} »`;
      footer.addEventListener('click', () => goToMarketplaceWithQuery(query));
      dropdown.appendChild(footer);
    }
  }

  function goToMarketplaceWithQuery(query) {
    closeNavSearch();
    showPage('marketplace');
    requestAnimationFrame(() => {
      const ms = document.getElementById('searchInput');
      const mc = document.getElementById('searchClear');
      if (ms) {
        ms.value = query;
        if (mc) mc.classList.toggle('visible', query.length > 0);
        activeFilters.search = query.toLowerCase();
        applyFilters();
        ms.focus();
      }
    });
  }
}

/* ─── FILTERS ─── */
function setFilter(key, value) {
  if (key === 'cat') {
    activeFilters.cat = value;
    document.querySelectorAll('input[name="cat"]').forEach(r => { r.checked = r.value === value; });
  }
  applyFilters();
}

function applyFilters() {
  const catEl = document.querySelector('input[name="cat"]:checked');
  const cityEl = document.querySelector('input[name="city"]:checked');
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  const inStockEl = document.getElementById('inStockOnly');
  const sortEl = document.getElementById('sortSelect');

  activeFilters.cat = catEl ? catEl.value : '';
  activeFilters.city = cityEl ? cityEl.value : '';
  activeFilters.minPrice = minEl && minEl.value ? parseInt(minEl.value) : 0;
  activeFilters.maxPrice = maxEl && maxEl.value ? parseInt(maxEl.value) : Infinity;
  activeFilters.inStock = inStockEl ? inStockEl.checked : false;
  currentSort = sortEl ? sortEl.value : 'default';

  let filtered = PRODUCTS.filter(p => {
    if (activeFilters.cat && p.category !== activeFilters.cat) return false;
    if (activeFilters.city && p.city !== activeFilters.city) return false;
    if (p.price < activeFilters.minPrice) return false;
    if (p.price > activeFilters.maxPrice) return false;
    if (activeFilters.inStock && p.stock === 0) return false;
    if (activeFilters.search && !p.name.toLowerCase().includes(activeFilters.search)
        && !p.vendor.toLowerCase().includes(activeFilters.search)
        && !p.category.toLowerCase().includes(activeFilters.search)) return false;
    return true;
  });

  if (currentSort === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (currentSort === 'rating')     filtered.sort((a, b) => b.rating - a.rating);
  if (currentSort === 'newest')     filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

  renderMarketplaceGrid(filtered);
  updateActiveFilterTags();

  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.textContent = `${filtered.length} produit${filtered.length !== 1 ? 's' : ''}`;
}

function resetFilters() {
  activeFilters = { cat: '', city: '', minPrice: 0, maxPrice: Infinity, inStock: false, search: '' };
  document.querySelectorAll('input[name="cat"]').forEach(r => { r.checked = r.value === ''; });
  document.querySelectorAll('input[name="city"]').forEach(r => { r.checked = r.value === ''; });
  const minEl = document.getElementById('priceMin');
  const maxEl = document.getElementById('priceMax');
  const inStockEl = document.getElementById('inStockOnly');
  const searchEl = document.getElementById('searchInput');
  if (minEl) minEl.value = '';
  if (maxEl) maxEl.value = '';
  if (inStockEl) inStockEl.checked = false;
  if (searchEl) searchEl.value = '';
  const searchClear = document.getElementById('searchClear');
  if (searchClear) searchClear.classList.remove('visible');
  // Reset slider to full range
  const sRange = document.getElementById('priceSliderRange');
  const sMin   = document.getElementById('priceThumbMin');
  const sMax   = document.getElementById('priceThumbMax');
  const lMin   = document.getElementById('priceSliderLabelMin');
  const lMax   = document.getElementById('priceSliderLabelMax');
  if (sRange) { sRange.style.left = '0%'; sRange.style.width = '100%'; }
  if (sMin)   { sMin.style.left = '0%'; sMin.setAttribute('aria-valuenow', 0); }
  if (sMax)   { sMax.style.left = '100%'; sMax.setAttribute('aria-valuenow', 50000); }
  if (lMin)   lMin.textContent = '0 MAD';
  if (lMax)   lMax.textContent = '50 000 MAD';
  applyFilters();
}

/* ─── PRICE RANGE SLIDER ─── */
const PRICE_SLIDER_MIN = 0;
const PRICE_SLIDER_MAX = 50000;

function initPriceSlider() {
  const track    = document.getElementById('priceSliderTrack');
  const range    = document.getElementById('priceSliderRange');
  const thumbMin = document.getElementById('priceThumbMin');
  const thumbMax = document.getElementById('priceThumbMax');
  const labelMin = document.getElementById('priceSliderLabelMin');
  const labelMax = document.getElementById('priceSliderLabelMax');
  const inputMin = document.getElementById('priceMin');
  const inputMax = document.getElementById('priceMax');
  if (!track || !thumbMin || !thumbMax) return;

  let valMin = PRICE_SLIDER_MIN;
  let valMax = PRICE_SLIDER_MAX;
  const GAP  = 500; // minimum MAD gap between handles

  function pctOf(v) {
    return ((v - PRICE_SLIDER_MIN) / (PRICE_SLIDER_MAX - PRICE_SLIDER_MIN)) * 100;
  }
  function valOfPct(p) {
    return Math.round((p / 100) * (PRICE_SLIDER_MAX - PRICE_SLIDER_MIN) + PRICE_SLIDER_MIN);
  }
  function clamp(v, lo, hi) { return Math.min(Math.max(v, lo), hi); }

  function updateUI() {
    const pMin = pctOf(valMin);
    const pMax = pctOf(valMax);
    range.style.left  = pMin + '%';
    range.style.width = (pMax - pMin) + '%';
    thumbMin.style.left = pMin + '%';
    thumbMax.style.left = pMax + '%';
    thumbMin.setAttribute('aria-valuenow', valMin);
    thumbMax.setAttribute('aria-valuenow', valMax);
    labelMin.textContent = valMin <= PRICE_SLIDER_MIN
      ? '0 MAD' : valMin.toLocaleString('fr-MA') + ' MAD';
    labelMax.textContent = valMax >= PRICE_SLIDER_MAX
      ? '50 000 MAD' : valMax.toLocaleString('fr-MA') + ' MAD';
    if (inputMin) inputMin.value = valMin <= PRICE_SLIDER_MIN ? '' : valMin;
    if (inputMax) inputMax.value = valMax >= PRICE_SLIDER_MAX ? '' : valMax;
  }

  function makeDraggable(thumb, isMin) {
    thumb.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      thumb.setPointerCapture(e.pointerId);
      thumb.classList.add('dragging');

      function onMove(ev) {
        const rect = track.getBoundingClientRect();
        const pct  = clamp(((ev.clientX - rect.left) / rect.width) * 100, 0, 100);
        const newV = valOfPct(pct);
        if (isMin) {
          valMin = clamp(newV, PRICE_SLIDER_MIN, valMax - GAP);
        } else {
          valMax = clamp(newV, valMin + GAP, PRICE_SLIDER_MAX);
        }
        updateUI();
        // Live filter update — update activeFilters directly
        activeFilters.minPrice = valMin <= PRICE_SLIDER_MIN ? 0 : valMin;
        activeFilters.maxPrice = valMax >= PRICE_SLIDER_MAX ? Infinity : valMax;
        applyFilters();
      }

      function onUp() {
        thumb.classList.remove('dragging');
        thumb.removeEventListener('pointermove', onMove);
        thumb.removeEventListener('pointerup', onUp);
      }

      thumb.addEventListener('pointermove', onMove);
      thumb.addEventListener('pointerup', onUp);
    });

    // Keyboard: arrow keys move by 500 MAD
    thumb.addEventListener('keydown', (e) => {
      const STEP = 500;
      let changed = false;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        if (isMin) valMin = clamp(valMin - STEP, PRICE_SLIDER_MIN, valMax - GAP);
        else       valMax = clamp(valMax - STEP, valMin + GAP, PRICE_SLIDER_MAX);
        changed = true;
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        if (isMin) valMin = clamp(valMin + STEP, PRICE_SLIDER_MIN, valMax - GAP);
        else       valMax = clamp(valMax + STEP, valMin + GAP, PRICE_SLIDER_MAX);
        changed = true;
      }
      if (changed) {
        e.preventDefault();
        updateUI();
        activeFilters.minPrice = valMin <= PRICE_SLIDER_MIN ? 0 : valMin;
        activeFilters.maxPrice = valMax >= PRICE_SLIDER_MAX ? Infinity : valMax;
        applyFilters();
      }
    });
  }

  makeDraggable(thumbMin, true);
  makeDraggable(thumbMax, false);

  // Sync slider when text inputs are typed manually
  function syncFromInput() {
    const rawMin = inputMin && inputMin.value !== '' ? parseInt(inputMin.value) : PRICE_SLIDER_MIN;
    const rawMax = inputMax && inputMax.value !== '' ? parseInt(inputMax.value) : PRICE_SLIDER_MAX;
    valMin = clamp(isNaN(rawMin) ? PRICE_SLIDER_MIN : rawMin, PRICE_SLIDER_MIN, PRICE_SLIDER_MAX);
    valMax = clamp(isNaN(rawMax) ? PRICE_SLIDER_MAX : rawMax, PRICE_SLIDER_MIN, PRICE_SLIDER_MAX);
    if (valMin > valMax - GAP) valMin = Math.max(PRICE_SLIDER_MIN, valMax - GAP);
    updateUI();
  }
  if (inputMin) inputMin.addEventListener('input', syncFromInput);
  if (inputMax) inputMax.addEventListener('input', syncFromInput);

  updateUI();
}

function updateActiveFilterTags() {
  const wrap = document.getElementById('activeFilters');
  const tags = document.getElementById('activeFilterTags');
  if (!wrap || !tags) return;

  const activeTags = [];
  if (activeFilters.cat) activeTags.push({ label: activeFilters.cat, key: 'cat' });
  if (activeFilters.city) activeTags.push({ label: activeFilters.city, key: 'city' });
  if (activeFilters.minPrice > 0) activeTags.push({ label: `Min: ${formatPrice(activeFilters.minPrice)}`, key: 'min' });
  if (activeFilters.maxPrice < Infinity) activeTags.push({ label: `Max: ${formatPrice(activeFilters.maxPrice)}`, key: 'max' });
  if (activeFilters.inStock) activeTags.push({ label: 'En stock', key: 'stock' });
  if (activeFilters.search) activeTags.push({ label: `"${activeFilters.search}"`, key: 'search' });

  wrap.style.display = activeTags.length > 0 ? 'flex' : 'none';
  tags.innerHTML = activeTags.map(tag => `
    <span class="filter-tag">
      ${tag.label}
      <button class="filter-tag-remove" data-key="${tag.key}">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </span>
  `).join('');

  tags.querySelectorAll('.filter-tag-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFilterTag(btn.dataset.key));
  });
}

function removeFilterTag(key) {
  const reset = {
    cat: () => { activeFilters.cat = ''; document.querySelectorAll('input[name="cat"]').forEach(r => { r.checked = r.value === ''; }); },
    city: () => { activeFilters.city = ''; document.querySelectorAll('input[name="city"]').forEach(r => { r.checked = r.value === ''; }); },
    min: () => { activeFilters.minPrice = 0; const el = document.getElementById('priceMin'); if (el) el.value = ''; },
    max: () => { activeFilters.maxPrice = Infinity; const el = document.getElementById('priceMax'); if (el) el.value = ''; },
    stock: () => { activeFilters.inStock = false; const el = document.getElementById('inStockOnly'); if (el) el.checked = false; },
    search: () => { activeFilters.search = ''; const el = document.getElementById('searchInput'); if (el) el.value = ''; const cl = document.getElementById('searchClear'); if (cl) cl.classList.remove('visible'); },
  };
  if (reset[key]) reset[key]();
  applyFilters();
}

function renderMarketplaceGrid(products) {
  const grid = document.getElementById('marketplaceGrid');
  const empty = document.getElementById('emptyState');
  if (!grid) return;
  grid.innerHTML = '';
  if (products.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  products.forEach(p => grid.appendChild(createProductCard(p)));
}

/* ─── MOBILE FILTERS ─── */
function openMobileFilters() {
  document.getElementById('filtersSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
  const overlay = document.createElement('div');
  overlay.id = 'mobileFilterOverlay';
  overlay.className = 'mobile-filter-overlay';
  overlay.addEventListener('click', closeMobileFilters);
  document.body.appendChild(overlay);
}
function closeMobileFilters() {
  document.getElementById('filtersSidebar').classList.remove('open');
  document.body.style.overflow = '';
  const overlay = document.getElementById('mobileFilterOverlay');
  if (overlay) overlay.remove();
}

/* ─── PRODUCT DETAIL ─── */
function openProduct(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  currentProductId = productId;
  currentQty = 1;

  const breadcrumbEl = document.getElementById('breadcrumbProduct');
  if (breadcrumbEl) breadcrumbEl.textContent = product.name;

  const content = document.getElementById('productDetailContent');
  if (content) {
    const discountPct = product.oldPrice
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

    // Generate dimension values based on category
    const dims = {
      'Salon':        { l: '220', p: '90', h: '82', unit: 'cm' },
      'Chambre':      { l: '180', p: '200', h: '120', unit: 'cm' },
      'Salle à manger': { l: '160', p: '90', h: '76', unit: 'cm' },
      'Bureau':       { l: '140', p: '70', h: '75', unit: 'cm' },
      'Éclairage':    { l: '40', p: '40', h: '60', unit: 'cm' },
      'Décoration':   { l: '45', p: '30', h: '35', unit: 'cm' },
    };
    const d = dims[product.category] || { l: '120', p: '60', h: '75', unit: 'cm' };

    // Generate material info based on description keywords
    const desc = product.description.toLowerCase();
    const matList = [];
    if (desc.includes('cèdre') || desc.includes('bois'))   matList.push({ name: 'Bois massif', detail: 'Cèdre ou noyer sélectionné', icon: 'tree' });
    if (desc.includes('velours') || desc.includes('tissu')) matList.push({ name: 'Tissu premium', detail: 'Velours ou lin naturel', icon: 'layers' });
    if (desc.includes('cuir'))   matList.push({ name: 'Cuir véritable', detail: 'Tannage végétal artisanal', icon: 'shield' });
    if (desc.includes('laiton') || desc.includes('métal')) matList.push({ name: 'Métal brossé', detail: 'Laiton ou acier inoxydable', icon: 'zap' });
    if (desc.includes('marbre')) matList.push({ name: 'Marbre naturel', detail: 'Extraction locale, poli main', icon: 'hexagon' });
    if (desc.includes('rotin') || desc.includes('naturel')) matList.push({ name: 'Fibres naturelles', detail: 'Rotin ou osier tressé main', icon: 'wind' });
    if (matList.length < 2) {
      matList.push({ name: 'Finition artisanale', detail: 'Cire d\'abeille ou huile naturelle', icon: 'star' });
      matList.push({ name: 'Assemblage à la main', detail: 'Ateliers certifiés Maroc', icon: 'tool' });
    }

    const matIconSvg = (icon) => {
      const icons = {
        tree:    `<path d="M17 22v-7M7 22v-7M12 22V12M12 12L4 18M12 12l8 6M12 12V2M5 9l7-7 7 7"/>`,
        layers:  `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
        shield:  `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
        zap:     `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
        hexagon: `<polygon points="21 16 21 8 12 3 3 8 3 16 12 21 21 16"/>`,
        wind:    `<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>`,
        star:    `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
        tool:    `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
      };
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">${icons[icon] || icons.shield}</svg>`;
    };

    content.dataset.noGallery = product.images.length === 0 ? 'true' : 'false';

    content.innerHTML = `
      ${product.images.length > 0 ? `
      <div class="product-gallery product-gallery-sticky">
        <div class="product-gallery-main" style="cursor:grab">
          <img src="${product.images[0]}" alt="${product.name}" id="mainGalleryImg" />
          ${discountPct > 0 ? `<span class="gallery-badge">-${discountPct}%</span>` : ''}
          ${product.images.length > 1 ? `<div class="gallery-360-badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg> 360°</div>` : ''}
        </div>
        <div class="product-gallery-thumbs">
          ${product.images.map((img, i) => `
            <div class="thumb-img ${i === 0 ? 'active' : ''}" data-src="${img}">
              <img src="${img}" alt="${product.name}" loading="lazy" />
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}

      <div class="product-info"${product.images.length === 0 ? ' style="grid-column:1/-1;max-width:680px;margin:0 auto;"' : ''}>
        <div class="product-info-category">${product.category}</div>
        <h1 class="product-info-name">${product.name}</h1>
        <div class="product-info-rating">
          <div class="product-stars">${renderStars(product.rating)}</div>
          <span style="font-size:0.85rem;color:var(--text-secondary)">${product.rating} (${product.reviews} avis)</span>
          <span style="color:var(--border-strong)">·</span>
          <span style="font-size:0.82rem;color:${product.stock > 0 ? 'var(--sage)' : '#c44'}">
            ${product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
          </span>
        </div>
        <div class="product-info-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
        </div>
        <p class="product-info-desc">${product.description}</p>

        ${product.colors.length > 0 ? `
          <div class="product-options">
            <div class="product-options-label">Coloris disponibles</div>
            <div class="color-options">
              ${product.colors.map((c, i) => `
                <div class="color-swatch ${i === 0 ? 'active' : ''}" style="background:${c}" title="${c}" data-color="${c}"></div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div style="margin-bottom:var(--space-lg)">
          <div class="product-options-label">Quantité</div>
          <div class="quantity-selector">
            <button class="qty-btn" id="qtyMinus" aria-label="Moins">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            <span class="qty-value" id="qtyDisplay">1</span>
            <button class="qty-btn" id="qtyPlus" aria-label="Plus">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
        </div>

        <div class="product-actions">
          <button class="btn-primary large" id="addToCartBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Ajouter au panier
          </button>
          <button class="btn-outline wishlist-circle" id="wishlistDetailBtn" aria-label="Favoris">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${wishlist.includes(product.id) ? 'var(--accent)' : 'none'}" stroke="${wishlist.includes(product.id) ? 'var(--accent)' : 'currentColor'}" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
        </div>

        <div class="product-vendor-card">
          <img src="${product.vendorImg}" alt="${product.vendor}" class="product-vendor-avatar" />
          <div class="product-vendor-info">
            <h4>${product.vendor}</h4>
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-2px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${product.city}, Maroc
            </span>
          </div>
        </div>

        <!-- ── PRODUCT INFO TABS ── -->
        <div class="product-tabs">
          <div class="product-tabs-nav">
            <button class="product-tab-btn active" data-tab="materials">Matériaux</button>
            <button class="product-tab-btn" data-tab="dimensions">Dimensions</button>
            <button class="product-tab-btn" data-tab="delivery">Livraison</button>
          </div>

          <div class="product-tab-panel active" id="tab-materials">
            <div class="materials-list">
              ${matList.slice(0, 4).map(m => `
                <div class="material-item">
                  <div class="material-icon">${matIconSvg(m.icon)}</div>
                  <div class="material-label">
                    <strong>${m.name}</strong>
                    <span>${m.detail}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="product-tab-panel" id="tab-dimensions">
            <div class="dimensions-grid">
              <div class="dimension-card">
                <span class="dimension-value">${d.l}</span>
                <span class="dimension-unit">${d.unit}</span>
                <span class="dimension-label">Longueur</span>
              </div>
              <div class="dimension-card">
                <span class="dimension-value">${d.p}</span>
                <span class="dimension-unit">${d.unit}</span>
                <span class="dimension-label">Profondeur</span>
              </div>
              <div class="dimension-card">
                <span class="dimension-value">${d.h}</span>
                <span class="dimension-unit">${d.unit}</span>
                <span class="dimension-label">Hauteur</span>
              </div>
            </div>
            <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.6">
              Les dimensions peuvent varier légèrement selon les spécifications de fabrication artisanale. Sur mesure disponible sur demande.
            </p>
          </div>

          <div class="product-tab-panel" id="tab-delivery">
            <div class="delivery-list">
              <div class="delivery-item">
                <div class="delivery-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </div>
                <div class="delivery-text">
                  <strong>Livraison à domicile offerte</strong>
                  <span>Dans toutes les villes du Maroc — délai 5 à 10 jours ouvrés selon votre région.</span>
                </div>
              </div>
              <div class="delivery-item">
                <div class="delivery-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="delivery-text">
                  <strong>Emballage protection premium</strong>
                  <span>Chaque pièce est emballée avec soin dans des matériaux recyclables pour un transport sans risque.</span>
                </div>
              </div>
              <div class="delivery-item">
                <div class="delivery-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div class="delivery-text">
                  <strong>Retrait chez l'artisan possible</strong>
                  <span>Venez découvrir l'atelier et récupérer votre commande directement auprès de ${product.vendor} à ${product.city}.</span>
                </div>
              </div>
              <div class="delivery-item">
                <div class="delivery-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4"/></svg>
                </div>
                <div class="delivery-text">
                  <strong>Retours acceptés — 14 jours</strong>
                  <span>Pas satisfait ? Retournez le produit sous 14 jours pour un remboursement intégral, sans conditions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Gallery thumb click
    content.querySelectorAll('.thumb-img').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const mainImg = document.getElementById('mainGalleryImg');
        if (mainImg) {
          mainImg.style.opacity = '0';
          setTimeout(() => {
            mainImg.src = thumb.dataset.src;
            mainImg.style.opacity = '1';
          }, 150);
        }
        content.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // 360° drag-to-cycle gallery images
    const galleryMain = content.querySelector('.product-gallery-main');
    const mainImg360 = document.getElementById('mainGalleryImg');
    if (galleryMain && mainImg360 && product.images.length > 0) {
      let g360StartX = null;
      let g360ImgIdx = 0;
      const imgs = product.images;

      galleryMain.addEventListener('mousedown', e => { g360StartX = e.clientX; });
      galleryMain.addEventListener('touchstart', e => { g360StartX = e.touches[0].clientX; }, { passive: true });

      const onCycleEnd = (endX) => {
        if (g360StartX === null) return;
        const diff = endX - g360StartX;
        g360StartX = null;
        if (Math.abs(diff) < 25) return;
        g360ImgIdx = diff < 0
          ? (g360ImgIdx + 1) % imgs.length
          : (g360ImgIdx - 1 + imgs.length) % imgs.length;
        const dir = diff > 0 ? 1 : -1;
        mainImg360.style.opacity = '0';
        mainImg360.style.transform = `translateX(${dir * -20}px)`;
        setTimeout(() => {
          mainImg360.src = imgs[g360ImgIdx];
          mainImg360.style.opacity = '1';
          mainImg360.style.transform = '';
          content.querySelectorAll('.thumb-img').forEach((t, i) => {
            t.classList.toggle('active', i === g360ImgIdx);
          });
        }, 160);
      };

      window.addEventListener('mouseup', e => onCycleEnd(e.clientX));
      galleryMain.addEventListener('touchend', e => onCycleEnd(e.changedTouches[0].clientX));
    }

    // Product info tabs
    content.querySelectorAll('.product-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        content.querySelectorAll('.product-tab-btn').forEach(b => b.classList.remove('active'));
        content.querySelectorAll('.product-tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = content.querySelector(`#tab-${tab}`);
        if (panel) panel.classList.add('active');
      });
    });

    // Color swatch click
    content.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        content.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
      });
    });

    // Qty buttons
    document.getElementById('qtyMinus').addEventListener('click', () => {
      currentQty = Math.max(1, currentQty - 1);
      document.getElementById('qtyDisplay').textContent = currentQty;
    });
    document.getElementById('qtyPlus').addEventListener('click', () => {
      currentQty = Math.min(product.stock || 99, currentQty + 1);
      document.getElementById('qtyDisplay').textContent = currentQty;
    });

    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
      addToCart(product.id, currentQty);
    });

    // Wishlist
    document.getElementById('wishlistDetailBtn').addEventListener('click', (e) => {
      toggleWishlistCard(e.currentTarget, product.id);
    });
  }

  // Related products
  const relatedGrid = document.getElementById('relatedGrid');
  if (relatedGrid) {
    relatedGrid.innerHTML = '';
    const related = PRODUCTS.filter(p => p.id !== productId && p.category === product.category).slice(0, 4);
    const others = PRODUCTS.filter(p => p.id !== productId && p.category !== product.category);
    [...related, ...others].slice(0, 4).forEach(p => relatedGrid.appendChild(createProductCard(p)));
  }

  showPage('product');
}

/* ─── WISHLIST PAGE ─── */
function renderWishlistPage() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  const countEl = document.getElementById('wishlistCount');
  if (!grid) return;

  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  if (countEl) {
    countEl.textContent = `${wishlistProducts.length} produit${wishlistProducts.length !== 1 ? 's' : ''} sauvegardé${wishlistProducts.length !== 1 ? 's' : ''}`;
  }

  if (wishlistProducts.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';
  grid.innerHTML = '';
  wishlistProducts.forEach(p => grid.appendChild(createProductCard(p)));
}

function updateWishlistNavCount() {
  const el = document.getElementById('wishlistNavCount');
  if (!el) return;
  if (wishlist.length > 0) {
    el.textContent = wishlist.length;
    el.style.display = 'flex';
  } else {
    el.style.display = 'none';
  }
}

/* ─── CONTACT FORM ─── */
function handleContactSubmit() {
  const firstName = document.getElementById('contactFirstName');
  const lastName = document.getElementById('contactLastName');
  const email = document.getElementById('contactEmail');
  const subject = document.getElementById('contactSubject');
  const message = document.getElementById('contactMessage');

  const errors = [];
  [firstName, lastName, email, message].forEach(el => {
    if (el && !el.value.trim()) {
      el.classList.add('input-error');
      errors.push(el);
    } else if (el) {
      el.classList.remove('input-error');
    }
  });

  if (errors.length > 0) {
    showToast('Veuillez remplir tous les champs obligatoires.', 'error');
    return;
  }

  showToast('Message envoyé ! Nous vous répondrons sous 24h.', 'success');
  [firstName, lastName, email, subject, message].forEach(el => { if (el) el.value = ''; });
}

/* ─── TRACKING PAGE ─── */
function renderTrackingPage() {
  const order = lastOrder;
  const numEl = document.getElementById('trackingOrderNumber');
  const itemsEl = document.getElementById('trackingItems');
  const totalEl = document.getElementById('trackingTotal');

  if (numEl) numEl.textContent = order ? '#' + order.number : '#TF-2025-0001';

  if (itemsEl) {
    if (order) {
      itemsEl.innerHTML = order.items.map(item => `
        <div class="tracking-order-item">
          <img src="${item.image}" alt="${item.name}" class="tracking-item-img" loading="lazy" />
          <div>
            <div class="tracking-item-name">${item.name}</div>
            <div class="tracking-item-meta">${item.vendor}${item.qty > 1 ? ' · ×' + item.qty : ''} · ${formatPrice(item.price * item.qty)}</div>
          </div>
        </div>
      `).join('');
    } else {
      itemsEl.innerHTML = '<p style="color:var(--text-muted);font-size:0.88rem;text-align:center;padding:var(--space-xl)">Aucune commande en cours</p>';
    }
  }

  if (totalEl) totalEl.textContent = order ? formatPrice(order.total) : '—';

  // Animate step connectors — step 0 (Confirmé) is done, step 1 (Préparation) is active
  setTimeout(() => {
    const fill = document.getElementById('trackingBarFill');
    if (fill) fill.style.width = '33%'; // between step 1 and 2 out of 4 steps
    const c1 = document.getElementById('connectorFill1');
    if (c1) c1.style.width = '100%'; // connector between Confirmé→Préparation complete
  }, 400);
}

/* ─── PAGE NAVIGATION ─── */
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`page-${pageName}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Hide navbar on vendor dashboard and auth page; show on all other pages
  const nav = document.getElementById('mainNav');
  if (nav) {
    if (pageName === 'vendor' || pageName === 'auth') {
      nav.style.display = 'none';
    } else {
      nav.style.display = '';
      // Transparent on home hero, opaque everywhere else
      nav.classList.toggle('nav-opaque', pageName !== 'home');
    }
  }

  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    const pages = ['home', 'marketplace', 'vendor'];
    a.classList.toggle('active', a.dataset.page === pageName && pages.includes(pageName));
  });

  if (pageName === 'home') {
    renderFeaturedGrid();
    setTimeout(initRevealObserver, 100);
  }
  if (pageName === 'marketplace') {
    applyFilters();
    initSearch();
  }
  if (pageName === 'vendor') {
    // Security guard: redirect to auth if session expired
    if (!isLoggedIn || !sessionStorage.getItem('tf_user')) {
      isLoggedIn = false;
      pendingReturnPage = 'vendor';
      setTimeout(() => showPage('auth'), 0);
      return;
    }
    switchVendorTab('overview');
    renderAnalyticsChart();
    renderVendorTopProducts();
  }
  if (pageName === 'tracking') {
    renderTrackingPage();
  }
  if (pageName === 'wishlist') {
    renderWishlistPage();
  }
  if (pageName === 'checkout') {
    renderCheckoutSummary();
  }
}

function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ─── AUTH TABS ─── */
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.authTab === tab);
  });
  const loginForm = document.getElementById('authLoginForm');
  const registerForm = document.getElementById('authRegisterForm');
  if (loginForm) loginForm.style.display = tab === 'login' ? 'block' : 'none';
  if (registerForm) registerForm.style.display = tab === 'register' ? 'block' : 'none';
}

function handleLogin() {
  const emailEl = document.getElementById('loginEmail');
  const email = emailEl ? emailEl.value.trim() : 'utilisateur';
  const name = email.split('@')[0] || 'utilisateur';
  sessionStorage.setItem('tf_user', JSON.stringify({ name }));
  isLoggedIn = true;
  updateAuthNav();
  showToast('Connexion réussie ! Bienvenue.', 'success');
  const returnTo = pendingReturnPage || 'home';
  pendingReturnPage = null;
  setTimeout(() => {
    if (returnTo === 'checkout') { renderCheckoutSummary(); }
    // After login, go to vendor dashboard if that was the intent
    showPage(returnTo === 'vendor' ? 'vendor' : returnTo);
  }, 900);
}
function handleRegister() {
  const nameEl = document.getElementById('registerName');
  const emailEl = document.getElementById('registerEmail');
  const name = (nameEl ? nameEl.value.trim() : '') || 'utilisateur';
  sessionStorage.setItem('tf_user', JSON.stringify({ name }));
  isLoggedIn = true;
  updateAuthNav();
  showToast('Compte créé avec succès ! Bienvenue sur Tangier Furnish.', 'success');
  const returnTo = pendingReturnPage || 'home';
  pendingReturnPage = null;
  setTimeout(() => showPage(returnTo), 900);
}
function handleLogout() {
  sessionStorage.removeItem('tf_user');
  isLoggedIn = false;
  updateAuthNav();
  showToast('Déconnexion réussie. À bientôt !', 'info');
  // Clear session and return to homepage
  setTimeout(() => showPage('home'), 600);
}
function updateAuthNav() {
  const user = isLoggedIn ? JSON.parse(sessionStorage.getItem('tf_user') || '{}') : null;
  const loginBtn = document.querySelector('.nav-actions .btn-outline[data-page="auth"]');
  const registerBtn = document.querySelector('.nav-actions .btn-primary[data-page="auth"]');
  if (loginBtn && registerBtn) {
    if (isLoggedIn && user) {
      loginBtn.textContent = user.name || 'Mon compte';
      loginBtn.removeAttribute('data-page');
      loginBtn.onclick = () => showPage('home');
      registerBtn.textContent = 'Déconnexion';
      registerBtn.removeAttribute('data-page');
      registerBtn.onclick = handleLogout;
    } else {
      loginBtn.textContent = 'Connexion';
      loginBtn.setAttribute('data-page', 'auth');
      loginBtn.onclick = null;
      registerBtn.textContent = 'S\'inscrire';
      registerBtn.setAttribute('data-page', 'auth');
      registerBtn.onclick = null;
    }
  }
}

/* ─── ROLE OPTIONS ─── */
document.addEventListener('click', (e) => {
  const roleBtn = e.target.closest('.role-option');
  if (roleBtn) {
    roleBtn.parentElement.querySelectorAll('.role-option').forEach(b => b.classList.remove('active'));
    roleBtn.classList.add('active');
  }
  // Global navigation via data-page attribute
  const pageEl = e.target.closest('[data-page]');
  if (pageEl && !pageEl.closest('.vendor-nav') && !pageEl.hasAttribute('data-vendor-tab')) {
    e.preventDefault();
    const page = pageEl.dataset.page;
    const cat = pageEl.dataset.cat;
    if (cat) {
      showPage('marketplace');
      setFilter('cat', cat);
    } else if (page === 'how-it-works') {
      showPage('home');
      scrollToSection('how-it-works');
    } else if (page === 'vendor') {
      // Guard: redirect to login if not authenticated
      if (!isLoggedIn) {
        pendingReturnPage = 'vendor';
        showToast('Connectez-vous pour accéder au tableau de bord.', 'info');
        setTimeout(() => showPage('auth'), 400);
      } else {
        showPage('vendor');
      }
    } else {
      showPage(page);
    }
    if (pageEl.dataset.mobile) closeMobileMenu();
  }
  // Vendor tab navigation
  const vendorTabEl = e.target.closest('[data-vendor-tab]');
  if (vendorTabEl) {
    e.preventDefault();
    switchVendorTab(vendorTabEl.dataset.vendorTab);
  }
  // Auth tabs
  const authTabEl = e.target.closest('[data-auth-tab]');
  if (authTabEl) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    authTabEl.classList.add('active');
    const tab = authTabEl.dataset.authTab;
    const loginForm = document.getElementById('authLoginForm');
    const registerForm = document.getElementById('authRegisterForm');
    if (loginForm) loginForm.style.display = tab === 'login' ? 'block' : 'none';
    if (registerForm) registerForm.style.display = tab === 'register' ? 'block' : 'none';
  }
});

/* ─── VENDOR TABS ─── */
function switchVendorTab(tab) {
  document.querySelectorAll('.vendor-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.vendor-nav-item').forEach(a => a.classList.remove('active'));
  const target = document.getElementById(`tab-${tab}`);
  if (target) target.style.display = 'block';
  const navItem = document.querySelector(`.vendor-nav-item[data-vendor-tab="${tab}"]`);
  if (navItem) navItem.classList.add('active');
  if (tab === 'products') renderVendorProductsGrid();
  if (tab === 'analytics') renderAnalyticsChart();
}

function renderVendorProductsGrid() {
  const grid = document.getElementById('vendorProductsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  // Show vendor's own products (Atelier Benali for this demo)
  PRODUCTS.filter(p => p.vendor === 'Atelier Benali').forEach(p => grid.appendChild(createProductCard(p)));
}

function renderVendorTopProducts() {
  const list = document.getElementById('topProductsList');
  if (!list) return;
  const viewCounts = [1240, 980, 876, 754, 612];
  const top = PRODUCTS.slice(0, 5);
  list.innerHTML = top.map((p, i) => `
    <div class="top-product-item">
      <img src="${p.image}" alt="${p.name}" class="top-product-img" loading="lazy" />
      <div class="top-product-info">
        <div class="top-product-name">${p.name}</div>
        <div class="top-product-views">${viewCounts[i]} vues ce mois</div>
      </div>
      <div class="top-product-rank">#${i + 1}</div>
    </div>
  `).join('');
}

function renderAnalyticsChart() {
  const chart = document.getElementById('analyticsChart');
  if (!chart) return;
  const months = ['Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  const values = [45, 68, 55, 82, 74, 91];
  const max = Math.max(...values);
  chart.innerHTML = months.map((m, i) => `
    <div class="chart-bar-wrap">
      <div class="chart-bar" style="height:${(values[i] / max) * 160}px" title="${values[i]}k MAD"></div>
      <span class="chart-month">${m}</span>
    </div>
  `).join('');
}

function handleAddProduct() {
  showToast('Produit publié avec succès !', 'success');
  setTimeout(() => switchVendorTab('products'), 1200);
}

/* ─── MOBILE MENU ─── */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.getElementById('mobileToggle');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open', isOpen);
}
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const toggle = document.getElementById('mobileToggle');
  if (menu) menu.classList.remove('open');
  if (toggle) toggle.classList.remove('open');
}

/* ─── NAVBAR SCROLL ─── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);

  // Subtle parallax on shop-the-room image
  const roomImg = document.querySelector('.shop-room-img');
  if (roomImg) {
    const section = roomImg.closest('.shop-room-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const pct = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        roomImg.style.transform = `scale(1.04) translateY(${(pct - 0.5) * 30}px)`;
      }
    }
  }
}, { passive: true });

/* ─── TOAST NOTIFICATIONS ─── */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    error:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  };

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  // Trigger entrance animation
  requestAnimationFrame(() => toast.classList.add('show'));

  // Auto-dismiss after 3 seconds with fade+slide exit
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ─── FLY-TO-CART ANIMATION ─── */
function flyToCart(sourceEl) {
  const card   = sourceEl.closest('.product-card');
  if (!card) { bounceCartIcon(); return; }
  const imgEl  = card.querySelector('.product-card-image img');
  const cartBtn = document.getElementById('navCartBtn');
  if (!imgEl || !cartBtn) { bounceCartIcon(); return; }

  const src  = imgEl.getBoundingClientRect();
  const dest = cartBtn.getBoundingClientRect();
  const dx   = (dest.left + dest.width  / 2) - (src.left + src.width  / 2);
  const dy   = (dest.top  + dest.height / 2) - (src.top  + src.height / 2);

  const clone = document.createElement('div');
  clone.className = 'fly-clone';
  clone.style.cssText = `left:${src.left}px;top:${src.top}px;width:${src.width}px;height:${src.height}px;`;
  const cloneImg = document.createElement('img');
  cloneImg.src = imgEl.src;
  cloneImg.alt = '';
  clone.appendChild(cloneImg);
  document.body.appendChild(clone);

  const anim = clone.animate([
    { transform: 'translate(0,0) scale(1)',           opacity: 1,   borderRadius: '8px' },
    { transform: `translate(${dx*.5}px,${dy*.3}px) scale(.7)`,  opacity: .85, offset: .45 },
    { transform: `translate(${dx}px,${dy}px) scale(.12)`, opacity: 0,   borderRadius: '50%' }
  ], { duration: 680, easing: 'cubic-bezier(.25,.46,.45,.94)', fill: 'forwards' });

  anim.onfinish = () => { clone.remove(); bounceCartIcon(); };
}

function bounceCartIcon() {
  const btn = document.getElementById('navCartBtn');
  if (!btn) return;
  btn.classList.remove('bounce');
  void btn.offsetWidth; // force reflow to restart animation
  btn.classList.add('bounce');
  btn.addEventListener('animationend', () => btn.classList.remove('bounce'), { once: true });
}

/* ─── SCROLL REVEAL ─── */
function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up:not(.visible)').forEach(el => observer.observe(el));
}

/* ─── PARALLAX EFFECT (removed — hero is now 3D) ─── */
function initParallax() { /* no-op */ }

/* ─── CUSTOM CURSOR ─── */
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = -200, my = -200, rx = -200, ry = -200;
  let visible = false;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    if (!visible) {
      visible = true;
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    }
  }, { passive: true });

  (function animateRing() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    visible = false;
  });
  document.addEventListener('mouseenter', () => {
    if (mx > -200) {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
      visible = true;
    }
  });

  // Expand ring on interactive elements
  document.addEventListener('mouseover', e => {
    const interactive = e.target.closest('button, a, .product-card, .hero-hotspot, .room-hotspot, .category-card, .how-card, .testimonial-card, .color-swatch, .thumb-img');
    document.body.classList.toggle('cursor-hover', !!interactive);
  });
}

/* ─── ANIMATED COUNTER ─── */
function animateCounters() {
  document.querySelectorAll('.hero-stat-number').forEach((el, i) => {
    const text = el.textContent.trim();
    const num = parseInt(text.replace(/[^0-9]/g, ''));
    const suffix = text.replace(/[0-9]/g, '').replace(/\s/g, '');
    if (!num) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * num).toLocaleString('fr-FR') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    setTimeout(() => requestAnimationFrame(step), 600 + i * 150);
  });
}

/* ─── DYNAMIC CATEGORY COUNTS ─── */
function initCategoryCountsDOM() {
  document.querySelectorAll('[data-cat-count]').forEach(el => {
    const cat = el.dataset.catCount;
    const count = PRODUCTS.filter(p => p.category === cat).length;
    el.textContent = `${count} pièce${count !== 1 ? 's' : ''}`;
  });
}

/* ─── LOADER ─── */
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      animateCounters();
    }, 1600);
  }
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
  showPage('home');
  updateCartUI();
  updateWishlistNavCount();
  updateAuthNav();
  initCategoryCountsDOM();
  initParallax();
  initSearch();
  initNavSearch();
  initRevealObserver();
  initFilterListeners();
  initPriceSlider();
  wireStaticButtons();
  initCursor();

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeMobileMenu();
      closeMobileFilters();
      // Close navbar search if open
      const navPanel = document.getElementById('navSearchPanel');
      if (navPanel && navPanel.classList.contains('open')) {
        const navClose = document.getElementById('navSearchClose');
        if (navClose) navClose.click();
      }
    }
  });
});

function wireStaticButtons() {
  // Cart
  const cartOverlay = document.getElementById('cartOverlay');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const navCartBtn = document.getElementById('navCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const cartEmptyBrowseBtn = document.getElementById('cartEmptyBrowseBtn');

  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (navCartBtn) navCartBtn.addEventListener('click', openCart);
  if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);
  if (cartEmptyBrowseBtn) cartEmptyBrowseBtn.addEventListener('click', () => { closeCart(); showPage('marketplace'); });

  // Nav logo
  const navLogo = document.getElementById('navLogo');
  if (navLogo) navLogo.addEventListener('click', () => showPage('home'));

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  if (mobileToggle) mobileToggle.addEventListener('click', toggleMobileMenu);

  // Mobile filters
  const mobileFiltersBtn = document.getElementById('mobileFiltersBtn');
  const mobileFilterApply = document.getElementById('mobileFilterApply');
  if (mobileFiltersBtn) mobileFiltersBtn.addEventListener('click', openMobileFilters);
  if (mobileFilterApply) mobileFilterApply.addEventListener('click', closeMobileFilters);

  // Auth buttons
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  if (loginBtn) loginBtn.addEventListener('click', handleLogin);
  if (registerBtn) registerBtn.addEventListener('click', handleRegister);

  // Vendor sidebar logout button — clears session and forces re-login
  const vendorLogoutBtn = document.getElementById('vendorLogoutBtn');
  if (vendorLogoutBtn) vendorLogoutBtn.addEventListener('click', handleLogout);

  // Demo account: fill credentials automatically (button removed from UI)
  // Kept for programmatic use only — no DOM binding needed

  // Social login buttons (UI demo — trigger standard login flow)
  const googleBtn = document.getElementById('googleLoginBtn');
  const appleBtn  = document.getElementById('appleLoginBtn');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      const emailEl = document.getElementById('loginEmail');
      if (emailEl) emailEl.value = 'google.user@gmail.com';
      showToast('Connexion Google simulée…', 'info');
      setTimeout(handleLogin, 600);
    });
  }
  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      const emailEl = document.getElementById('loginEmail');
      if (emailEl) emailEl.value = 'apple.user@icloud.com';
      showToast('Connexion Apple simulée…', 'info');
      setTimeout(handleLogin, 600);
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);

  // Vendor add product
  const addProductBtn = document.getElementById('addProductBtn');
  if (addProductBtn) addProductBtn.addEventListener('click', handleAddProduct);

  // Filters (reset buttons)
  const resetBtn = document.getElementById('resetFiltersBtn');
  const resetEmptyBtn = document.getElementById('resetFiltersEmptyBtn');
  if (resetBtn) resetBtn.addEventListener('click', resetFilters);
  if (resetEmptyBtn) resetEmptyBtn.addEventListener('click', resetFilters);

  // Confirmation page tracking button
  const viewTrackingBtn = document.getElementById('viewTrackingBtn');
  if (viewTrackingBtn) viewTrackingBtn.addEventListener('click', () => showPage('tracking'));

  // Wishlist nav button
  const navWishlistBtn = document.getElementById('navWishlistBtn');
  if (navWishlistBtn) navWishlistBtn.addEventListener('click', () => showPage('wishlist'));

  // Checkout page buttons
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  if (placeOrderBtn) placeOrderBtn.addEventListener('click', handlePlaceOrder);

  const backToCartBtn = document.getElementById('backToCartBtn');
  if (backToCartBtn) backToCartBtn.addEventListener('click', () => { showPage('marketplace'); openCart(); });

  // Delivery option change → update fee
  document.querySelectorAll('input[name="delivery"]').forEach(radio => {
    radio.addEventListener('change', updateCheckoutDelivery);
  });

  // Contact form
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');
  if (contactSubmitBtn) contactSubmitBtn.addEventListener('click', handleContactSubmit);
}

function initFilterListeners() {
  document.querySelectorAll('input[name="cat"], input[name="city"]').forEach(el => {
    el.addEventListener('change', applyFilters);
  });
  const priceMin = document.getElementById('priceMin');
  const priceMax = document.getElementById('priceMax');
  const inStockOnly = document.getElementById('inStockOnly');
  if (priceMin) priceMin.addEventListener('input', applyFilters);
  if (priceMax) priceMax.addEventListener('input', applyFilters);
  if (inStockOnly) inStockOnly.addEventListener('change', applyFilters);
}

/* ============================================================
   TANGIER FURNISH — ENHANCED ANIMATIONS v2.0
============================================================ */

/* ─── LAZY IMAGE LOADING ENHANCEMENT ─── */
(function initLazyLoad() {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px 0px' });
    imgs.forEach(img => imgObserver.observe(img));
  }
})();

/* ─── BUTTON PRESS EFFECT ─── */
document.addEventListener('mousedown', (e) => {
  const btn = e.target.closest('.btn-primary, .btn-outline');
  if (btn) {
    btn.style.transform = 'scale(0.97)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  }
});

/* ─── WISHLIST HEART ANIMATION ─── */
document.addEventListener('click', (e) => {
  const wishBtn = e.target.closest('.product-wishlist-btn');
  if (wishBtn && wishBtn.classList.contains('active')) {
    wishBtn.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.4)' },
      { transform: 'scale(1)' }
    ], { duration: 350, easing: 'ease-out' });
  }
});

/* ─── SMOOTH NAV LINK UNDERLINE ─── */
(function enhanceNavLinks() {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.style.transition = 'color 0.22s ease';
  });
})();

