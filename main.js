const productos = {
    MX: {
        nombre: "IMMUNOCAL MX",
        texto: 'Immunocal® se distingue por ser una proteína de origen completamente natural, ostentando el valor biológico más elevado entre todas las ' +
                'proteínas disponibles para el consumo. Este suplemento ha demostrado clínicamente su capacidad para incrementar los niveles de glutatión '+
                'en el organismo.',
        imagen: 'Imagenes/MX.png',
        enlace: '#',
        color: '#00348e'
    },
    Platinum: {
        nombre: "IMMUNOCAL PLATINUM",
        texto: 'Immunocal Platinum te ofrece una solución completa que promueve un envejecimiento saludable. Esta fórmula avanzada une los beneficios fundamentales '+
                'de Immunocal con dos componentes innovadores: los Péptidos Moduladores de Citocinas (CMP)™ y la Fórmula Moduladora de Redox (RMF)™, ofreciendo un enfoque '+
                'completo hacia el bienestar y la longevidad.',
        imagen: 'Imagenes/Platinum.png',
        enlace: '#',
        color: '#6f7074'
    },
    Sport: {
        nombre: "IMMUNOCAL SPORT",
        texto: 'Esta fórmula avanzada está diseñada para ayudar a optimizar la salud inmunológica y cardiovascular, mejorando simultáneamente el rendimiento físico general. '+
                'Incorpora precursores de óxido nítrico como la citrulina y la remolacha, que inducen la vasodilatación y mejoran el flujo sanguíneo, beneficiando tanto a órganos '+
                'internos como al tejido muscular.',
        imagen: 'Imagenes/Sport.png',
        enlace: '#',
        color: '#141414'
    },
    Optimizer: {
        nombre: "IMMUNOCAL OPTIMIZER",
        texto: 'Optimizer se destaca como un superalimento excepcional, integrando una selección de más de 50 vegetales y frutas ricos en fitonutrientes. '+
                'Este concentrado de nutrientes es el aliado perfecto para ayudar a combatir el estrés oxidativo y proteger las células del daño oxidativo, así como '+
                'también puede favorecer la salud cardiovascular, lucha contra la inflamación y promueve la juventud celular.',
        imagen: 'Imagenes/Optimizer.png',        
        enlace: '#',
        color: '#5c9e1f'
    },
    Performance: {
        nombre: "IMMUNOCAL OPTIMIZER PERFORMANCE",
        texto: '¡Experimenta una revolución en energía saludable con el Optimizer Performance! Enriquecido con fuentes naturales de cafeína como el guaraná, el té '+
                'verde y el extracto de café verde, junto con selenio y vitaminas C y B12, este catalizador puede ayudarte a combatir el cansancio y la fatiga y protegerte contra el estrés oxidativo.',
        imagen: 'Imagenes/Performance.png',   
        enlace: '#',
        color: '#fe9300'
    },
    Jamaica: {
        nombre: "OPTIMIZER PERFORMANCE FLOR DE JAMAICA",
        texto: '¡Experimenta una revolución en energía saludable con el Optimizer Performance! Enriquecido con fuentes naturales de cafeína como el guaraná, el té '+
                'verde y el extracto de café verde, junto con selenio y vitaminas C y B12, este catalizador puede ayudarte a combatir el cansancio y la fatiga y protegerte contra el estrés oxidativo.',
        imagen: 'Imagenes/Jamaica.png',   
        enlace: '#',
        color: '#ed1c35'
    },
    Resveratrol: {
        nombre: "MULTI + RESVERATROL",
        texto: 'Multi+Resveratrol es una fórmula excepcional que va más allá de los multivitamínicos tradicionales. '+
                'Compuesta por 21 vitaminas, minerales y nutrientes esenciales, incluye componentes únicos como la clorela y el resveratrol.',
        imagen: 'Imagenes/Resveratrol.png',   
        enlace: '#',
        color: '#12a561'
    },
    Probiotico: {
        nombre: "PROBIOTICO 3+",
        texto: 'Probio 3+ es un simbiótico altamente efectivo que combina probióticos y extracto de arándano rojo rico '+
                'en antioxidantes para promover un sistema digestivo más saludable.',
        imagen: 'Imagenes/Probiotico.png',   
        enlace: '#',
        color: '#cc3848'
    },
    KLC:{
        nombre: "KLC-D",
        texto: 'KLC-D se distingue en el mercado de suplementos de calcio por su origen lácteo, asegurando la máxima biodisponibilidad para tu cuerpo. '+
                'Este suplemento garantiza una absorción mineral óptima, convirtiéndolo en la elección ideal para el fortalecimiento y crecimiento óseo.',
        imagen: 'Imagenes/Calcio.png',
        enlace: '#',
        color: '#d36849'
    },
    Bionutric:{
        nombre: "BIONUTRIC",
        texto: 'Bionutric es una fórmula única con seis ingredientes para ayudar a mejorar la salud de las articulaciones y frenar el deterioro articular. '+
                'Es un suplemento único, natural y completo que contribuye a unas articulaciones sanas y reduce la inflamación.',
        imagen: 'Imagenes/Bionutric.png',
        enlace: '#',
        color: '#4d1187'
    },
    Omega:{
        nombre: "OMEGA GEN V",
        texto: 'Omega Gen V, diseñado para apoyar tu salud cardíaca, cerebral y general. Fórmula de cinco componentes distingida de otros productos por incluir CoQ10, '+
            'cúrcuma, vitamina E y un 33% más de aceite de pescado con AEP, convirtiéndola en una solución superior y conveniente para el bienestar general.',
        imagen: 'Imagenes/Omega.png',
        enlace: '#',
        color: '#f5a562'
    }
}

function changeProduct(section, product){
    document.querySelector('.'+section+' #nombre').innerHTML = productos[product].nombre;
    document.querySelector('.'+section+' #texto').innerHTML = productos[product].texto;
    document.querySelector('.'+section+' #imagen').src = productos[product].imagen;
    document.querySelector('.'+section+' #enlace').href = productos[product].enlace;
    document.querySelector('.'+section).style.background = productos[product].color;
}


const cards = document.querySelectorAll(".card");
const stackArea = document.querySelector(".stack");

function updateProductPanel(productKey) {
    document.querySelector('.pastillas h2').innerHTML = productos[productKey].nombre;
    document.querySelector('.pastillas p').innerHTML = productos[productKey].texto;
    document.querySelector('.pastillas a').href = productos[productKey].enlace;
    document.querySelector('.pastillas a').style.background = productos[productKey].color;
}

function getActiveCard() {
    for (let i = 0; i < cards.length; i++) {
        if (!cards[i].classList.contains("away")) {
            return cards[i];
        }
    }
}

function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.style.transform = ` rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index;
        }
    });
}

rotateCards();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.4;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = -1 * (topVal / distance + 1);

    index = Math.floor(index);

    for (i = 0; i < cards.length; i++) {
        if (i <= index) {
          cards[i].classList.add("away");
        } else {
          cards[i].classList.remove("away");
        }
      }
    rotateCards();

    const activeCard = getActiveCard();

    if (activeCard) {
        const key = activeCard.dataset.producto;
        updateProductPanel(key);
    }
});