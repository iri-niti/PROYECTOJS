/* ══════════════════════════════════════════
    AVES DE MALLORCA — script.js
   ══════════════════════════════════════════ */

/* ────────────────────────────────────────
    DATOS MOCKEADOS — Zonas del mapa
──────────────────────────────────────── */

const zones = {
    tramuntana: {
        name: "Sierra de Tramuntana",
        desc: "Cadena montañosa del noroeste declarada Patrimonio de la Humanidad por la UNESCO. Bosques de pinos y encinas, acantilados vertiginosos y torrentes profundos. Hábitat privilegiado para aves rapaces y pájaros de bosque.",
        color: "#4A7A50",
        birds: ['mila', 'aguila', 'corb']
    },
    albufera: {
        name: "S'Albufera y Alcúdia",
        desc: "La zona húmeda más importante de las Islas Baleares, al noreste de la isla. Carrizales densos, lagunas de agua dulce y salobre. Lugar imprescindible para la observación de aves acuáticas en paso e invernada.",
        color: "#2E7A8E",
        birds: ['agro', 'fotja', 'busqueta']
    },
    pla: {
        name: "Pla de Mallorca",
        desc: "Zona central llana dominada por olivares milenarios, almendros floridos y campos de cultivo. El mosaico agrícola favorece una gran diversidad de aves esteparias, insectívoras y rapaces menores.",
        color: "#8B7A45",
        birds: ['xoriguer', 'puput', 'sebelli']
    },
    llevant: {
        name: "Levante y Costa Este",
        desc: "Acantilados abruptos y pinares de la costa oriental. Los cabos rocosos actúan como puntos estratégicos de paso migratorio. Las aves marinas anidan en los acantilados inaccesibles del litoral.",
        color: "#A06040",
        birds: ['baldritja', 'falco', 'roquero']
    },
    migjorn: {
        name: "Migjorn y Salinas",
        desc: "Costa sur con las emblemáticas Salinas de s'Avall y zonas de marismas costeras. Punto de descanso indispensable para aves migratorias e invernantes procedentes del continente africano.",
        color: "#A87C20",
        birds: ['flamenc', 'gavina', 'chortilejo']
    }
};

/* ────────────────────────────────────────
    DATOS MOCKEADOS — Catálogo de aves
──────────────────────────────────────── */
const birds = {
    mila: {
        name: "Milano Real",
        latin: "Milvus milvus",
        emoji: "🦅",
        zone: "tramuntana",
        desc: "Gran rapaz inconfundible por su cola ahorquillada de color rojizo. Planea majestuosamente sobre los valles de la Tramuntana aprovechando las térmicas. Especie protegida con una importante colonia mallorquina.",
        habitat: "Bosque mediterráneo y zonas abiertas de montaña",
        sound: 'whistle'
    },
    aguila: {
        name: "Águila-azor Perdicera",
        latin: "Aquila fasciata",
        emoji: "🦅",
        zone: "tramuntana",
        desc: "Una de las águilas más raras de Europa, presente en los riscos de la Sierra de Tramuntana. Cría en parejas muy territoriales en los acantilados. Es el único águila nidificante en Mallorca y goza de protección estricta.",
        habitat: "Riscos rocosos y bosques de montaña",
        sound: 'hawk'
    },
    corb: {
        name: "Cuervo",
        latin: "Corvus corax",
        emoji: "🐦‍⬛",
        zone: "tramuntana",
        desc: "El mayor córvido europeo, inteligente y omnívoro. En Mallorca habita las zonas de montaña y los acantilados costeros donde anida. Su grave grito «graaj» resuena por los barrancos de la Tramuntana. Forma parejas estables para toda la vida.",
        habitat: "Montañas, acantilados y bosques",
        sound: 'crow'
    },
    agro: {
        name: "Garceta Grande",
        latin: "Ardea alba",
        emoji: "🦢",
        zone: "albufera",
        desc: "Ardeida elegante de plumaje completamente blanco y pico amarillo intenso. Muy común en S'Albufera donde se alimenta de peces en los bordes de las lagunas. En invierno llegan ejemplares del norte de Europa, aumentando mucho los efectivos.",
        habitat: "Zonas húmedas, lagunas y canales",
        sound: 'heron'
    },
    fotja: {
        name: "Focha Común",
        latin: "Fulica atra",
        emoji: "🐧",
        zone: "albufera",
        desc: "Ave acuática inconfundible por su plumaje negro y el escudo frontal blanco característico. Muy abundante en S'Albufera donde forma grandes agrupaciones. Anida entre la vegetación acuática densa y es muy territorial durante la cría.",
        habitat: "Lagunas, estanques y canales",
        sound: 'coot'
    },
    busqueta: {
        name: "Cetia Ruiseñor",
        latin: "Cettia cetti",
        emoji: "🐦",
        zone: "albufera",
        desc: "Pequeño pájaro de carrizal con un canto fuerte, explosivo y absolutamente inconfundible: una ráfaga rápida de notas que se detiene bruscamente. A pesar de ser difícil de ver entre los carrizos, su canto lo delata enseguida. Residente permanente.",
        habitat: "Carrizales y vegetación de ribera",
        sound: 'warbler'
    },
    xoriguer: {
        name: "Cernícalo Vulgar",
        latin: "Falco tinnunculus",
        emoji: "🦅",
        zone: "pla",
        desc: "Pequeño halcón fácilmente reconocible por su técnica de cernirse (vuelo estacionario batiendo las alas rápidamente). Habitual en los márgenes de carreteras y campos del Pla de Mallorca. El macho adulto tiene la cabeza gris y la cola también gris.",
        habitat: "Campos abiertos, zonas agrícolas y bordes de caminos",
        sound: 'kestrel'
    },
    puput: {
        name: "Abubilla",
        latin: "Upupa epops",
        emoji: "🐦",
        zone: "pla",
        desc: "Ave absolutamente inconfundible por su gran cresta de plumas erectiles y el plumaje marrón, negro y blanco. Habitual en los campos de olivos y almendros del Pla. Su canto repetitivo «up-up-up» es la banda sonora de la primavera mallorquina.",
        habitat: "Olivos, almendros y zonas agrícolas",
        sound: 'hoopoe'
    },
    sebelli: {
        name: "Alcaraván Común",
        latin: "Burhinus oedicnemus",
        emoji: "🐦",
        zone: "pla",
        desc: "Ave de zonas áridas y pedregosas con hábitos crepusculares y nocturnos. Sus ojos amarillos y grandes están perfectamente adaptados a la oscuridad. Durante el día permanece inmóvil entre las piedras, perfectamente camuflado. El canto nocturno es muy estridente.",
        habitat: "Garrigas áridas, pedregales y eriales",
        sound: 'curlew'
    },
    baldritja: {
        name: "Pardela Mediterránea",
        latin: "Puffinus yelkouan",
        emoji: "🐦",
        zone: "llevant",
        desc: "Procelariforme especializada en volar planeando rasante sobre las olas durante horas. Anida en grietas de los acantilados de la costa este. De día se aleja al mar para pescar. De noche regresa a los nidos con unos gritos ensordecedores.",
        habitat: "Acantilados costeros y mar abierto",
        sound: 'seabird'
    },
    falco: {
        name: "Halcón de Eleonor",
        latin: "Falco eleonorae",
        emoji: "🦅",
        zone: "llevant",
        desc: "Elegante halcón migratorio que elige los acantilados costeros de Mallorca para criar. Especialista en capturar pequeñas aves migratorias durante el otoño. Llega en primavera desde Madagascar y regresa allí hacia noviembre.",
        habitat: "Acantilados costeros y espacios aéreos",
        sound: 'falcon'
    },
    roquero: {
        name: "Roquero solitario",
        latin: "Monticola solitarius",
        emoji: "🐦",
        zone: "llevant",
        desc: "De color azul oscuro en los machos y pardo en las hembras, es un habitante típico de zonas rocosas y acantilados. Se posa en piedras elevadas desde donde canta con un tono melancólico. Busca insectos y pequeños invertebrados entre grietas. Su presencia aporta un toque muy mediterráneo al paisaje.",
        habitat: "Acantilados costeros",
        sound: 'roquero'
    },
    flamenc: {
        name: "Flamenco Común",
        latin: "Phoenicopterus roseus",
        emoji: "🦩",
        zone: "migjorn",
        desc: "El ave icónica e inolvidable de las salinas mallorquinas. Su color rosado se intensifica gracias a la dieta de crustáceos y algas. Filtra el agua con su singular pico curvado y con la cabeza invertida. Las Salinas de s'Avall acogen concentraciones espectaculares.",
        habitat: "Salinas, lagunas y marismas costeras",
        sound: 'flamingo'
    },
    gavina: {
        name: "Gaviota Patiamarilla",
        latin: "Larus michahellis",
        emoji: "🐦",
        zone: "migjorn",
        desc: "La gaviota más abundante y omnipresente de Mallorca, presente en todas las costas y puertos. Muy adaptable y oportunista, anida en acantilados, tejados y canteras. Su potente grito inconfundible es la música de fondo de cualquier costa de la isla.",
        habitat: "Todas las costas, puertos y zonas urbanas costeras",
        sound: 'seagull'
    },
    chortilejo: {
        name: "Chorlitejo patinegro",
        latin: "Charadrius alexandrinus",
        emoji: "🐦",
        zone: "migjorn",
        desc: "Pequeño limícola que cría directamente sobre la arena de las playas, camuflándose perfectamente. Corre en pequeños tramos para capturar insectos y crustáceos. Es muy sensible a la presencia humana y depende de dunas y playas tranquilas. Su comportamiento discreto y su plumaje claro lo hacen difícil de detectar.",
        habitat: "Playas y zonas dunares entre abril y julio",
        sound: 'chortilejo'
    }

};

/* ════════════════════════════════════════
    RENDER — Tarjetas de aves
════════════════════════════════════════ */

// Gradientes de fondo por zona para la imagen de la tarjeta
const bgGrads = {
    tramuntana: 'linear-gradient(145deg,#1E3A22 0%,#4A7A50 100%)',
    albufera:   'linear-gradient(145deg,#0E3A4A 0%,#2E7A8E 100%)',
    pla:        'linear-gradient(145deg,#3A2E0E 0%,#8B7A45 100%)',
    llevant:    'linear-gradient(145deg,#3A1C08 0%,#A06040 100%)',
    migjorn:    'linear-gradient(145deg,#3A2A04 0%,#A87C20 100%)'
    };

    function renderBirds(filter = 'all') {
    const grid = document.getElementById('birds-grid');
    grid.innerHTML = '';

    Object.entries(birds).forEach(([key, b]) => {
        const z = zones[b.zone];
        const card = document.createElement('div');
        card.className = 'bird-card' + (filter !== 'all' && b.zone !== filter ? ' hidden' : '');
        card.dataset.zone = b.zone;

        card.innerHTML = `
        <div class="bird-illus" style="background:${bgGrads[b.zone]}">
            <span class="bird-emoji-xl">${b.emoji}</span>
        </div>
        <div class="bird-body">
            <span class="bird-zone-tag" style="background:${z.color}">${z.name}</span>
            <h3 class="bird-name">${b.name}</h3>
            <p class="bird-latin">${b.latin}</p>
            <p class="bird-desc">${b.desc}</p>
        </div>
        <div class="bird-foot">
            <span class="bird-habitat">🌿 ${b.habitat}</span>
            <button class="btn-snd" onclick="playBirdSound('${b.sound}', this)">🔊 Canto</button>
        </div>`;

        grid.appendChild(card);
    });
}

/* ════════════════════════════════════════
    INTERACCIÓN — Mapa por zonas
════════════════════════════════════════ */
function selectZone(zoneId) {
  // Quitar selección anterior y marcar la nueva zona
    document.querySelectorAll('.zone-area').forEach(el => el.classList.remove('active'));
    const za = document.querySelector('.zone-area[data-zone="' + zoneId + '"]');
    if (za) za.classList.add('active');

    const z = zones[zoneId];
    if (!z) return;

    // Mostrar panel de información
    document.getElementById('info-placeholder').style.display = 'none';
    const detail = document.getElementById('zone-detail');
    detail.style.display = 'block';
    document.getElementById('zone-title').textContent = z.name;
    document.getElementById('zone-desc-text').textContent = z.desc;

    // Rellenar la lista de aves de esa zona
    const panelBirds = document.getElementById('panel-birds');
    panelBirds.innerHTML = '';

    z.birds.forEach(bKey => {
        const b = birds[bKey];
        if (!b) return;

        const item = document.createElement('div');
        item.className = 'panel-bird';
        item.innerHTML = `
        <span class="panel-bird-emoji">${b.emoji}</span>
        <div>
            <div class="panel-bird-name">${b.name}</div>
            <div class="panel-bird-latin">${b.latin}</div>
        </div>
        <button class="btn-snd-sm" title="Escuchar canto" onclick="playBirdSound('${b.sound}', this)">🔊</button>`;

        // Al hacer clic en el nombre, filtra el catálogo y hace scroll hasta la tarjeta
        item.querySelector('div').addEventListener('click', () => {
        filterBirds(zoneId);
        setTimeout(() => {
            const cards = document.querySelectorAll('#birds-grid .bird-card');
            for (const card of cards) {
            if (card.querySelector('.bird-name')?.textContent === b.name) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            }
            }
        }, 300);
        });

        panelBirds.appendChild(item);
    });
    }

    /* ════════════════════════════════════════
    INTERACCIÓN — Filtro de aves por zona
    ════════════════════════════════════════ */
    function filterBirds(filter) {
    // Actualizar estado visual de los botones de filtro
    document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.classList.toggle('active', btn.dataset.filter === filter));

    // Mostrar u ocultar tarjetas según la zona
    document.querySelectorAll('#birds-grid .bird-card').forEach(card => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.zone !== filter);
    });
}

/* ════════════════════════════════════════
    INICIALIZACIÓN — DOMContentLoaded
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Renderizar contenido generado por JavaScript
    renderBirds();
    renderRoutes();

    // Clic en zonas del mapa SVG
    document.querySelectorAll('.zone-area').forEach(el =>
        el.addEventListener('click', () => selectZone(el.dataset.zone)));

    // Clic en leyenda del mapa
    document.querySelectorAll('#map-legend .leg-item[data-zone]').forEach(el =>
        el.addEventListener('click', () => selectZone(el.dataset.zone)));

  // Botones de filtro del catálogo
    document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.addEventListener('click', () => filterBirds(btn.dataset.filter)));

    // Navegación con scroll suave
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        });
    });

    // Actualizar nav activo al hacer scroll
    const navLinks = document.querySelectorAll('nav a');
    const sections = ['sec-mapa', 'sec-aus', 'sec-rutes'].map(id => document.getElementById(id));

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        let current = sections[0];
        sections.forEach(sec => {
        if (sec && sec.offsetTop <= scrollY) current = sec;
        });
        navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current?.id);
        });
    }, { passive: true });

});