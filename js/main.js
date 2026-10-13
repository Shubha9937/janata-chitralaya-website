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

  // Catalog Dataset
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

  // DOM Elements
  const costumeGridEl = document.getElementById('costumeGrid');
  const catalogSearchInput = document.getElementById('catalogSearch');
  const categoryTabs = document.querySelectorAll('.category-tab-btn');
  const bookingModal = document.getElementById('bookingModal');
  const bookingForm = document.getElementById('bookingForm');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCostumeNameInput = document.getElementById('modalCostumeName');
  const branchChips = document.querySelectorAll('.branch-chip');

  // Mobile Navigation
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');

  let activeCategory = 'all';
  let searchQuery = '';

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
        
        // Close other items
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
    initEvents();
  });
})();
