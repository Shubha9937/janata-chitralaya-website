/**
 * Janata Chitralaya - Main Application Script
 * Secure, Vanilla JavaScript without third-party runtime dependencies
 * Adheres strictly to secure DOM manipulation and data encoding guidelines
 */

(function () {
  'use strict';

  // Branch Contact Directory
  const BRANCHES = {
    'unit8': {
      name: 'Unit-8 Flagship Complex',
      address: 'Shop No. KXS-15, Kalyani Market Complex, Unit-8, Bhubaneswar, Odisha 751012',
      phone: '+919348995465',
      altPhone: '+919937558221',
      mapQuery: 'Janata+Chitralaya+Kalyani+Market+Complex+Unit+8+Bhubaneswar'
    },
    'patia': {
      name: 'Patia / Nandan Vihar Branch',
      address: 'Near Subhadra Apartment, Nandankanan Road, Star City, Patia, Bhubaneswar, Odisha',
      phone: '+917735663429',
      altPhone: '+919937558221',
      mapQuery: 'Janata+Chitralaya+Patia+Bhubaneswar'
    },
    'nuagaon': {
      name: 'Nuagaon Cultural Center',
      address: 'Nuagaon Main Road, Bhubaneswar, Odisha',
      phone: '+919348205465',
      altPhone: '+919937558221',
      mapQuery: 'Janata+Chitralaya+Nuagaon+Bhubaneswar'
    }
  };

  // Catalog Dataset (Clean Heritage Portfolio)
  const COSTUMES_DATA = [
    {
      id: 'costume-odissi-full',
      title: 'Classical Odissi Dance Ensemble',
      category: 'dance',
      categoryLabel: 'Classical Dance',
      price: '₹750 / day',
      priceVal: 750,
      image: 'assets/images/costume-odissi.jpg',
      description: 'Authentic Sambalpuri/silk Odissi dance dress with complete silver filigree headpiece (tahiya), waist belt, and ghungroos.',
      tags: ['Odissi', 'Classical', 'Stage-Ready', 'Ornaments Included'],
      available: 'Available in all sizes'
    },
    {
      id: 'costume-mythological-raja',
      title: 'Mythological King & Warrior Drama Attire',
      category: 'mythological',
      categoryLabel: 'Mythological & Jatra',
      price: '₹850 / day',
      priceVal: 850,
      image: 'assets/images/costume-mythological.jpg',
      description: 'Grand Ramayana/Mahabharata epic king costume featuring an ornate handcrafted golden mukut, embroidered royal silk robe, and sword.',
      tags: ['Drama & Jatra', 'Handmade Mukut', 'Sword & Shield', 'Royal Velvet'],
      available: 'Sizes: S, M, L, XL, XXL'
    },
    {
      id: 'costume-school-krishna-netaji',
      title: 'School Kids Krishna & Netaji Freedom Fighter Set',
      category: 'school',
      categoryLabel: 'School & Fancy Dress',
      price: '₹350 / day',
      priceVal: 350,
      image: 'assets/images/costume-kids.jpg',
      description: 'Ideal for school annual days and competitions. Includes bright yellow pitambari silk dhoti, peacock crown, and authentic Netaji military uniform.',
      tags: ['Annual Day', 'Ages 3 - 15', '100% Sanitized', 'Props Included'],
      available: 'Kids Sizes: 2 to 14 years'
    },
    {
      id: 'costume-prewedding-royal-set',
      title: 'Royal Couple Pre-Wedding & Model Shoot Outfit',
      category: 'shoots',
      categoryLabel: 'Pre-Wedding & Models',
      price: '₹1,500 / day',
      priceVal: 1500,
      image: 'assets/images/costume-prewedding.jpg',
      description: 'Designer royal blue embroidered sherwani with turban for groom and opulent Odisha red-gold handloom bridal saree with temple jewelry.',
      tags: ['Couple Shoot', 'Cinema Look', 'Temple Jewelry', 'High Fashion'],
      available: 'Tailored fit available'
    },
    {
      id: 'costume-stage-makeup-pro',
      title: 'Rabindra Mandap Stage Makeup & Greenroom Kit',
      category: 'makeup',
      categoryLabel: 'Stage Makeup',
      price: '₹500 / kit',
      priceVal: 500,
      image: 'assets/images/stage-makeup.jpg',
      description: 'Stage-certified drama and dance makeup kit with high-pigment face colors, tilak pastes, brushes, and behind-the-scenes transformation styling.',
      tags: ['Non-Allergic', 'HD Stage Look', 'Artist Assistance', 'Dance & Drama'],
      available: 'In-store & On-site support'
    },
    {
      id: 'costume-mukut-weapons-props',
      title: 'Handcrafted Golden Mukuts & Royal Weapons',
      category: 'props',
      categoryLabel: 'Mukut & Props',
      price: '₹300 / day',
      priceVal: 300,
      image: 'assets/images/costume-mythological.jpg',
      description: 'Signature Odisha artisan-crafted stage crowns (Chitra Mukuts), gada (maces), bows and arrows, royal shields, and traditional wigs.',
      tags: ['Artisan Crafted', 'Lightweight', 'Historical Replicas', 'Jatra Quality'],
      available: 'Ready for pickup'
    },
    {
      id: 'costume-sambalpuri-folk',
      title: 'Sambalpuri & Regional Folk Dance Attire',
      category: 'dance',
      categoryLabel: 'Folk Dance',
      price: '₹450 / day',
      priceVal: 450,
      image: 'assets/images/hero-banner.jpg',
      description: 'Vibrant Sambalpuri ikat kurtas, traditional red-black checked dhotis, pagdi turbans, peacock feathers, and dhol/madal props.',
      tags: ['Folk Fest', 'Bulk School Teams', 'Breathable Fabric', 'Authentic Ikat'],
      available: 'Bulk group sets in stock'
    },
    {
      id: 'costume-freedom-fighters-heroes',
      title: 'Patriotic Freedom Fighters & Leaders (Set of 10)',
      category: 'school',
      categoryLabel: 'School & Fancy Dress',
      price: '₹350 / day',
      priceVal: 350,
      image: 'assets/images/costume-kids.jpg',
      description: 'Independence & Republic Day character sets: Mahatma Gandhi, Bhagat Singh, Rani Laxmibai, Sardar Patel, and Indian Army uniforms.',
      tags: ['Patriotic', 'School Competitions', 'Neatly Ironed', 'Instant Fit'],
      available: 'Complete group sets'
    }
  ];

  // Real In-Store & Event Photographs for Continuous Carousel Slider
  const REAL_CAROUSEL_DATA = [
    {
      id: 'real-hanuman-shop',
      title: 'Mahavira Hanuman Theatrical Attire & Mukut',
      location: 'Kalyani Market Flagship Store',
      tag: 'In-Store Fitting',
      image: 'assets/images/real/janata-gallery-1.jpg',
      caption: 'Full Ramayana stage costume with handcrafted golden Mukut, shoulder guards, and heavy Gada inside our Kalyani Market Complex shop.'
    },
    {
      id: 'real-odissi-tahiya',
      title: 'Classical Odissi Dancer with Silver Tahiya',
      location: 'Bhubaneswar Dance Auditions',
      tag: 'Classical Odissi',
      image: 'assets/images/real/Rectangle-174.jpg',
      caption: 'Young Odissi dancer in red Sambalpuri ikat saree with authentic silver sponge-wood Tahiya crown, matha patti, and stage makeup.'
    },
    {
      id: 'real-jagannath-prop',
      title: 'Lord Jagannath Stage Costume Prop & Mudra',
      location: 'Janata Chitralaya Production Studio',
      tag: 'Heritage Prop',
      image: 'assets/images/real/janata-gallery-4.jpg',
      caption: 'Signature life-size Lord Jagannath theatrical costume in sacred yellow silk beside young dancer performing classical mudras.'
    },
    {
      id: 'real-makeup-master',
      title: 'Veteran Makeup Master Live Greenroom Artistry',
      location: 'Rabindra Mandap Greenroom',
      tag: 'Backstage Makeup',
      image: 'assets/images/real/WhatsApp-Image-2025-06-19-at-1.13.53-PM.jpg',
      caption: 'Janata Chitralaya senior makeup artist hand-painting delicate stage eyes and forehead chandan on a young dancer.'
    },
    {
      id: 'real-krishna-fancy',
      title: 'Kids Lord Krishna with Mor Pankh & Flute',
      location: 'School Janmashtami Fittings',
      tag: 'School Fancy Dress',
      image: 'assets/images/real/Rectangle-165.jpg',
      caption: 'Child customer fitted for school Janmashtami competition with yellow pitambari silk dhoti, peacock feather crown, and bansuri.'
    },
    {
      id: 'real-prewedding-couple',
      title: 'Royal Couple Pre-Wedding in Odisha Handloom',
      location: 'Outdoor Cinematic Photoshoot',
      tag: 'Pre-Wedding Shoot',
      image: 'assets/images/real/WhatsApp-Image-2025-06-19-at-12.56.26-PM-1.jpg',
      caption: 'Groom in royal blue embroidered kurta and bride in traditional red-and-blue Odisha handloom silk saree with temple ornaments.'
    },
    {
      id: 'real-mukut-handcrafted',
      title: 'Handcrafted Golden Royal Mukut (Crown)',
      location: 'In-House Artisan Workshop',
      tag: 'Store Craftsmanship',
      image: 'assets/images/real/Rectangle-156.jpg',
      caption: 'Artisan-sculpted royal crown with ruby and emerald gemstone inlays resting on authentic Sambalpuri handloom fabric.'
    },
    {
      id: 'real-warrior-senapati',
      title: 'Historical Commander with Studded Armor & Turban',
      location: 'Theatrical Drama Fitting',
      tag: 'Historical Drama',
      image: 'assets/images/real/WhatsApp-Image-2025-06-19-at-12.50.18-PM-2.jpg',
      caption: 'Historical battle play attire featuring studded chest armor, silk dhoti, leather bracers, royal pagdi turban, and sword.'
    },
    {
      id: 'real-kali-deity',
      title: 'Goddess Kali Character with Blue Face Art & Sword',
      location: 'Mythological Stage Production',
      tag: 'Mythological Drama',
      image: 'assets/images/real/WhatsApp-Image-2025-06-19-at-1.13.57-PM.jpg',
      caption: 'Fierce mythological deity transformation with blue stage makeup, third eye, skull garland (Mundamala), and khadga sword.'
    },
    {
      id: 'real-folk-dancers-pair',
      title: 'Sambalpuri Dalkhai Performers with Silver Khagla',
      location: 'Odisha Folk Dance Festival',
      tag: 'Folk Performance',
      image: 'assets/images/real/Rectangle-182.jpg',
      caption: 'Traditional handloom checked folk sarees, silver neck torque (khagla), armlets, and forehead chandan art on performers.'
    },
    {
      id: 'real-army-officer',
      title: 'Patriotic Indian Army Officer Uniform',
      location: 'School Republic Day Event',
      tag: 'Patriotic Uniform',
      image: 'assets/images/real/WhatsApp-Image-2025-06-19-at-1.14.06-PM.jpg',
      caption: 'Authentic military khaki uniform with medal ribbon bars, shoulder stars, red beret, and Ashoka lion emblem.'
    },
    {
      id: 'real-rishi-talapatra',
      title: 'Vedic Sage / Chaitanya Rishi with Tala Patra',
      location: 'Cultural Fest Fancy Dress',
      tag: 'Fancy Dress Fitting',
      image: 'assets/images/real/WhatsApp-Image-2025-06-19-at-1.13.48-PM.jpg',
      caption: 'School fancy dress customer holding authentic palm-leaf manuscript (Tala Patra), writing stylus, rudraksha mala, and dhoti.'
    },
    {
      id: 'real-durga-trishula',
      title: 'Goddess Durga Mahishasuramardini with Trishula',
      location: 'Jatra & Drama Production',
      tag: 'Mythological Drama',
      image: 'assets/images/real/Rectangle-159.jpg',
      caption: 'Theatrical Durga attire with grand Mukut, Trishula (trident), nose ring, and embroidered red-green silk in costume aisle.'
    },
    {
      id: 'real-odissi-shop-aisle',
      title: 'Odissi Dancer Fitting in Unit-8 Showroom',
      location: 'Kalyani Market Showroom',
      tag: 'In-Store Fitting',
      image: 'assets/images/real/Rectangle-162.jpg',
      caption: 'Classical red silk dance dress with temple gold necklace, waistband, and floral head accessory amidst costume racks.'
    },
    {
      id: 'real-silver-jewelry',
      title: 'Temple & Tribal Silver Stage Jewelry Collection',
      location: 'Store Ornaments Archive',
      tag: 'Stage Ornaments',
      image: 'assets/images/real/Rectangle-148.jpg',
      caption: 'Extensive in-store collection of silver filigree armlets, antique necklaces, turquoise rings, and hair clips.'
    },
    {
      id: 'real-comedy-fitting',
      title: 'Stage Performance Costume Fitting at Kalyani Market',
      location: 'Unit-8 Front Porch Fitting',
      tag: 'Real Store Life',
      image: 'assets/images/real/Rectangle-173.jpg',
      caption: 'Smiling customer trying on flashy stage costume with the official Janata Chitralaya shop board visible in background.'
    }
  ];

  // DOM Elements
  const costumeGridEl = document.getElementById('costumeGrid');
  const catalogSearchInput = document.getElementById('catalogSearch');
  const categoryTabs = document.querySelectorAll('.category-tab-btn');
  const bookingModal = document.getElementById('bookingModal');
  const bookingForm = document.getElementById('bookingForm');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCostumeNameInput = document.getElementById('modalCostumeName');
  const branchChips = document.querySelectorAll('.branch-chip');

  // Carousel DOM Elements
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselPrevBtn = document.getElementById('carouselPrevBtn');
  const carouselNextBtn = document.getElementById('carouselNextBtn');
  const carouselDots = document.getElementById('carouselDots');
  const realCarouselWrapper = document.getElementById('realCarouselWrapper');

  // Lightbox DOM Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxBookBtn = document.getElementById('lightboxBookBtn');

  // Mobile Navigation
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');

  let activeCategory = 'all';
  let searchQuery = '';
  let carouselIndex = 0;
  let carouselInterval = null;

  // Safe SVG Helper
  function createSvgIcon(pathD, viewBox = '0 0 24 24') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', viewBox);
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathD);
    svg.appendChild(path);
    return svg;
  }

  // Safe Catalog Rendering (complies with mandatory-secure-web-skills XSS prevention)
  function renderCostumes() {
    if (!costumeGridEl) return;
    
    // Clear safely using replaceChildren
    costumeGridEl.replaceChildren();

    const filtered = COSTUMES_DATA.filter(item => {
      const matchCat = (activeCategory === 'all' || item.category === activeCategory);
      const matchQuery = (searchQuery.trim() === '' || 
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery))
      );
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'empty-results';
      emptyBox.style.gridColumn = '1 / -1';
      emptyBox.style.textAlign = 'center';
      emptyBox.style.padding = '60px 20px';

      const emptyTitle = document.createElement('h3');
      emptyTitle.textContent = 'No matching costumes found';
      emptyTitle.style.color = '#1C2433';
      emptyTitle.style.marginBottom = '8px';

      const emptyText = document.createElement('p');
      emptyText.textContent = 'Try searching with another keyword or explore our full collection.';
      emptyText.style.color = '#64748B';

      emptyBox.appendChild(emptyTitle);
      emptyBox.appendChild(emptyText);
      costumeGridEl.appendChild(emptyBox);
      return;
    }

    filtered.forEach(costume => {
      const card = document.createElement('div');
      card.className = 'costume-card';

      // Image Box
      const imgBox = document.createElement('div');
      imgBox.className = 'card-image-box';

      const img = document.createElement('img');
      img.src = costume.image;
      img.alt = costume.title;
      img.loading = 'lazy';
      imgBox.appendChild(img);

      const catBadge = document.createElement('span');
      catBadge.className = 'card-category-badge';
      catBadge.textContent = costume.categoryLabel;
      imgBox.appendChild(catBadge);

      const statusBadge = document.createElement('span');
      statusBadge.className = 'card-status-badge';
      statusBadge.textContent = 'In Stock';
      imgBox.appendChild(statusBadge);

      card.appendChild(imgBox);

      // Card Body
      const body = document.createElement('div');
      body.className = 'card-body';

      const title = document.createElement('h3');
      title.textContent = costume.title;
      body.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = costume.description;
      body.appendChild(desc);

      // Tags
      const metaBox = document.createElement('div');
      metaBox.className = 'card-meta';
      costume.tags.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'meta-tag';
        tag.textContent = t;
        metaBox.appendChild(tag);
      });
      body.appendChild(metaBox);

      // Footer
      const footer = document.createElement('div');
      footer.className = 'card-footer';

      const priceBox = document.createElement('div');
      priceBox.className = 'card-price';
      const priceLabel = document.createElement('span');
      priceLabel.className = 'price-label';
      priceLabel.textContent = 'Rental Rate';
      const priceAmount = document.createElement('span');
      priceAmount.className = 'price-amount';
      priceAmount.textContent = costume.price;
      priceBox.appendChild(priceLabel);
      priceBox.appendChild(priceAmount);
      footer.appendChild(priceBox);

      const rentBtn = document.createElement('button');
      rentBtn.className = 'btn btn-primary';
      rentBtn.type = 'button';
      rentBtn.textContent = 'Rent via WhatsApp';
      rentBtn.addEventListener('click', () => {
        openBookingModal(costume.title);
      });
      footer.appendChild(rentBtn);

      body.appendChild(footer);
      card.appendChild(body);

      costumeGridEl.appendChild(card);
    });
  }

  // Booking Modal Management
  function openBookingModal(preselectedCostume = '') {
    if (!bookingModal) return;
    if (modalCostumeNameInput) {
      modalCostumeNameInput.value = preselectedCostume;
    }
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // WhatsApp Order Submission Handler
  function handleBookingSubmit(e, explicitTarget) {
    if (e && e.preventDefault) e.preventDefault();

    const name = (document.getElementById('bookingName')?.value || '').trim();
    const phone = (document.getElementById('bookingPhone')?.value || '').trim();
    const costume = (document.getElementById('modalCostumeName')?.value || '').trim();
    const date = (document.getElementById('bookingDate')?.value || '').trim();
    const duration = (document.getElementById('bookingDuration')?.value || '1').trim();
    const branchKey = document.getElementById('bookingBranch')?.value || 'unit8';
    const notes = (document.getElementById('bookingNotes')?.value || '').trim();
    const selectedWa = document.getElementById('bookingWaNumber')?.value || '919937558221';

    const branch = BRANCHES[branchKey] || BRANCHES['unit8'];

    // Construct formatted message
    let message = `Namaste Janata Chitralaya!\n\n`;
    message += `I would like to inquire about costume rental:\n`;
    message += `• Customer Name: ${name || 'Interested Customer'}\n`;
    if (phone) message += `• Contact Phone: ${phone}\n`;
    message += `• Costume / Requirement: ${costume || 'General Inquiry'}\n`;
    message += `• Event Date: ${date || 'Upcoming'}\n`;
    message += `• Rental Duration: ${duration} Day(s)\n`;
    message += `• Preferred Branch: ${branch.name}\n`;
    if (notes) message += `• Additional Notes: ${notes}\n`;
    message += `\nPlease let me know the availability and booking procedure. Thank you!`;

    // Secure URL building
    const targetPhone = explicitTarget || selectedWa || '919937558221';
    const sanitizedTarget = targetPhone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${sanitizedTarget}?text=${encodeURIComponent(message)}`;

    closeBookingModal();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }

  // Helper to determine visible cards based on viewport
  function getCardsPerView() {
    const width = window.innerWidth;
    if (width <= 640) return 1;
    if (width <= 991) return 2;
    return 3;
  }

  // Update carousel transform and active dot indicator
  function updateCarousel(instant = false) {
    if (!carouselTrack || carouselTrack.children.length === 0) return;
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, REAL_CAROUSEL_DATA.length - cardsPerView);
    if (carouselIndex > maxIndex) carouselIndex = 0;
    if (carouselIndex < 0) carouselIndex = maxIndex;

    const firstCard = carouselTrack.children[0];
    const gap = 24;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const moveAmount = (cardWidth + gap) * carouselIndex;

    if (instant) {
      carouselTrack.style.transition = 'none';
    } else {
      carouselTrack.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
    }
    carouselTrack.style.transform = `translateX(-${moveAmount}px)`;

    // Update active dot
    if (carouselDots) {
      const dots = carouselDots.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === carouselIndex);
      });
    }
  }

  // Render dynamic dot indicators
  function renderCarouselDots() {
    if (!carouselDots) return;
    carouselDots.replaceChildren();
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, REAL_CAROUSEL_DATA.length - cardsPerView);
    const totalDots = maxIndex + 1;

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `carousel-dot ${i === carouselIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        carouselIndex = i;
        updateCarousel();
        restartCarouselTimer();
      });
      carouselDots.appendChild(dot);
    }
  }

  // Slide forward
  function slideNext() {
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, REAL_CAROUSEL_DATA.length - cardsPerView);
    if (carouselIndex >= maxIndex) {
      carouselIndex = 0;
    } else {
      carouselIndex++;
    }
    updateCarousel();
  }

  // Slide backward
  function slidePrev() {
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(0, REAL_CAROUSEL_DATA.length - cardsPerView);
    if (carouselIndex <= 0) {
      carouselIndex = maxIndex;
    } else {
      carouselIndex--;
    }
    updateCarousel();
  }

  // Auto-slide Timer Management
  function startCarouselTimer() {
    stopCarouselTimer();
    carouselInterval = setInterval(() => {
      slideNext();
    }, 3500);
  }

  function stopCarouselTimer() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      carouselInterval = null;
    }
  }

  function restartCarouselTimer() {
    stopCarouselTimer();
    startCarouselTimer();
  }

  // Render Real Photos Carousel (Safe DOM construction, zero innerHTML injection)
  function renderRealCarousel() {
    if (!carouselTrack) return;
    carouselTrack.replaceChildren();

    REAL_CAROUSEL_DATA.forEach(item => {
      const card = document.createElement('div');
      card.className = 'carousel-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${item.title}`);

      // Image Frame
      const imgFrame = document.createElement('div');
      imgFrame.className = 'carousel-image-frame';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;
      img.className = 'carousel-img';
      img.loading = 'lazy';
      imgFrame.appendChild(img);

      const pill = document.createElement('span');
      pill.className = 'carousel-pill-badge';
      pill.textContent = item.tag;
      imgFrame.appendChild(pill);

      const zoomHint = document.createElement('div');
      zoomHint.className = 'carousel-zoom-hint';
      zoomHint.textContent = '🔍 Click to Enlarge';
      imgFrame.appendChild(zoomHint);

      card.appendChild(imgFrame);

      // Card Body with Description
      const body = document.createElement('div');
      body.className = 'carousel-card-body';

      const title = document.createElement('h3');
      title.className = 'carousel-card-title';
      title.textContent = item.title;
      body.appendChild(title);

      const desc = document.createElement('p');
      desc.className = 'carousel-card-desc';
      desc.textContent = item.caption;
      body.appendChild(desc);

      // Footer
      const footer = document.createElement('div');
      footer.className = 'carousel-card-footer';

      const loc = document.createElement('span');
      loc.className = 'carousel-card-location';
      loc.textContent = `📍 ${item.location}`;
      footer.appendChild(loc);

      const inquireBtn = document.createElement('button');
      inquireBtn.type = 'button';
      inquireBtn.className = 'carousel-card-btn';
      inquireBtn.textContent = 'Inquire Look →';
      inquireBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openBookingModal(item.title);
      });
      footer.appendChild(inquireBtn);

      body.appendChild(footer);
      card.appendChild(body);

      // Card Click Handler opens Lightbox
      const handleOpen = () => openLightboxModal(item);
      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });

      carouselTrack.appendChild(card);
    });

    renderCarouselDots();
    updateCarousel(true);
    startCarouselTimer();
  }

  // Lightbox Modal Handlers
  function openLightboxModal(item) {
    if (!lightboxModal || !lightboxImg || !lightboxTitle || !lightboxDesc) return;
    stopCarouselTimer();
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.caption;
    if (lightboxBookBtn) {
      lightboxBookBtn.setAttribute('data-costume', item.title);
    }
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightboxModal() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
    startCarouselTimer();
  }

  // Initialize Event Listeners
  function initEvents() {
    // Category Tabs
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.getAttribute('data-category') || 'all';
        renderCostumes();
      });
    });

    // Search Input
    if (catalogSearchInput) {
      catalogSearchInput.addEventListener('input', (e) => {
        searchQuery = (e.target.value || '').trim().toLowerCase();
        renderCostumes();
      });
    }

    // Carousel Navigation Arrows
    if (carouselPrevBtn) {
      carouselPrevBtn.addEventListener('click', () => {
        slidePrev();
        restartCarouselTimer();
      });
    }

    if (carouselNextBtn) {
      carouselNextBtn.addEventListener('click', () => {
        slideNext();
        restartCarouselTimer();
      });
    }

    // Pause on Hover & Focus
    if (realCarouselWrapper) {
      realCarouselWrapper.addEventListener('mouseenter', stopCarouselTimer);
      realCarouselWrapper.addEventListener('mouseleave', startCarouselTimer);
      realCarouselWrapper.addEventListener('focusin', stopCarouselTimer);
      realCarouselWrapper.addEventListener('focusout', startCarouselTimer);

      // Touch Swipe Support
      let touchStartX = 0;
      let touchEndX = 0;

      realCarouselWrapper.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length > 0) {
          touchStartX = e.touches[0].clientX;
        }
        stopCarouselTimer();
      }, { passive: true });

      realCarouselWrapper.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          touchEndX = e.changedTouches[0].clientX;
          const diff = touchEndX - touchStartX;
          if (diff < -40) {
            slideNext();
          } else if (diff > 40) {
            slidePrev();
          }
        }
        restartCarouselTimer();
      }, { passive: true });
    }

    // Window Resize Recalculation
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        renderCarouselDots();
        updateCarousel(true);
      }, 150);
    });

    // Lightbox Booking Button
    if (lightboxBookBtn) {
      lightboxBookBtn.addEventListener('click', () => {
        const costumeName = lightboxBookBtn.getAttribute('data-costume') || 'Costume Inquiry';
        closeLightboxModal();
        openBookingModal(costumeName);
      });
    }

    // Modal Triggers
    const openModalBtns = document.querySelectorAll('.open-booking-modal');
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const costumeName = btn.getAttribute('data-costume') || '';
        openBookingModal(costumeName);
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeBookingModal);
    }

    if (bookingModal) {
      bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
          closeBookingModal();
        }
      });
    }

    // Lightbox Controls
    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener('click', closeLightboxModal);
    }

    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
          closeLightboxModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightboxModal();
        closeBookingModal();
      } else if (e.key === 'ArrowLeft') {
        if (!lightboxModal.classList.contains('active')) {
          slidePrev();
          restartCarouselTimer();
        }
      } else if (e.key === 'ArrowRight') {
        if (!lightboxModal.classList.contains('active')) {
          slideNext();
          restartCarouselTimer();
        }
      }
    });

    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => handleBookingSubmit(e));
    }

    const btnSubmitWa1 = document.getElementById('btnSubmitWa1');
    const btnSubmitWa2 = document.getElementById('btnSubmitWa2');
    if (btnSubmitWa1) {
      btnSubmitWa1.addEventListener('click', (e) => handleBookingSubmit(e, '919937558221'));
    }
    if (btnSubmitWa2) {
      btnSubmitWa2.addEventListener('click', (e) => handleBookingSubmit(e, '919692691800'));
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // Branch Chips
    branchChips.forEach(chip => {
      chip.addEventListener('click', () => {
        branchChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const targetId = chip.getAttribute('data-target');
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.style.outline = '2px solid #D4AF37';
          setTimeout(() => {
            targetCard.style.outline = 'none';
          }, 2000);
        }
      });
    });

    // Mobile Navigation Toggle
    if (mobileNavToggle && mobileNavMenu) {
      mobileNavToggle.addEventListener('click', () => {
        const isShown = mobileNavMenu.style.display === 'flex';
        mobileNavMenu.style.display = isShown ? 'none' : 'flex';
      });
    }
  }

  // Run on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    renderCostumes();
    renderRealCarousel();
    initEvents();
  });
})();
