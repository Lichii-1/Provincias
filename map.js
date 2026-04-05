const provinciasPaths = {
    "jujuy": { name: "Jujuy", capital: "San Salvador de Jujuy" },
    "salta": { name: "Salta", capital: "Salta" },
    "formosa": { name: "Formosa", capital: "Formosa" },
    "tucuman": { name: "Tucumán", capital: "San Miguel de Tucumán" },
    "chaco": { name: "Chaco", capital: "Resistencia" },
    "catamarca": { name: "Catamarca", capital: "San Fernando del Valle de Catamarca" },
    "santiagodelestero": { name: "Santiago del Estero", capital: "Santiago del Estero" },
    "misiones": { name: "Misiones", capital: "Posadas" },
    "corrientes": { name: "Corrientes", capital: "Corrientes" },
    "larioja": { name: "La Rioja", capital: "La Rioja" },
    "sanjuan": { name: "San Juan", capital: "San Juan" },
    "entrerios": { name: "Entre Ríos", capital: "Paraná" },
    "santafe": { name: "Santa Fe", capital: "Santa Fe" },
    "cordoba": { name: "Córdoba", capital: "Córdoba" },
    "mendoza": { name: "Mendoza", capital: "Mendoza" },
    "sanluis": { name: "San Luis", capital: "San Luis" },
    "buenosaires": { name: "Buenos Aires", capital: "La Plata" },
    "caba": { name: "Ciudad de Buenos Aires", capital: "Buenos Aires" },
    "lapampa": { name: "La Pampa", capital: "Santa Rosa" },
    "neuquen": { name: "Neuquén", capital: "Neuquén" },
    "rionegro": { name: "Río Negro", capital: "Viedma" },
    "chubut": { name: "Chubut", capital: "Rawson" },
    "santacruz": { name: "Santa Cruz", capital: "Río Gallegos" },
    "tierradelfuego": { name: "Tierra del Fuego", capital: "Ushuaia" }
};

// Mapeo de IDs del SVG de Simplemaps a nuestros IDs internos
const svgIdToInternalId = {
    "ARY": "jujuy",
    "ARA": "salta",
    "ARP": "formosa",
    "ART": "tucuman",
    "ARH": "chaco",
    "ARN": "misiones",
    "ARW": "corrientes",
    "ARG": "santiagodelestero",
    "ARK": "catamarca",
    "ARS": "santafe",
    "ARE": "entrerios",
    "ARF": "larioja",
    "ARJ": "sanjuan",
    "ARX": "cordoba",
    "ARM": "mendoza",
    "ARD": "sanluis",
    "ARB": "buenosaires",
    "ARC": "caba",
    "ARL": "lapampa",
    "ARQ": "neuquen",
    "ARR": "rionegro",
    "ARU": "chubut",
    "ARZ": "santacruz",
    "ARV": "tierradelfuego"
};

// Funcion para crear el mapa SVG cargando el archivo externo
async function crearMapaSVG(container, onClick) {
    try {
        // Cargar el SVG real de Argentina
        const response = await fetch('ar.svg');
        const svgText = await response.text();
        
        // Insertar el SVG en el contenedor
        container.innerHTML = svgText;
        
        const svgElement = container.querySelector('svg');
        if (svgElement) {
            // Configurar estilos del SVG
            svgElement.style.width = '100%';
            svgElement.style.height = '100%';
            svgElement.style.maxHeight = '600px';
            svgElement.setAttribute('viewBox', '0 0 1000 1000');
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            
            // Procesar cada path del SVG
            const paths = svgElement.querySelectorAll('path');
            paths.forEach(path => {
                const svgId = path.getAttribute('id');
                const internalId = svgIdToInternalId[svgId];
                
                if (internalId) {
                    // Agregar clases y atributos para interactividad
                    path.classList.add('province-path');
                    path.setAttribute('data-id', internalId);
                    path.id = `province-${internalId}`;
                    
                    // Agregar evento de click si se proporciona
                    if (onClick) {
                        path.addEventListener('click', () => onClick(internalId));
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error cargando el mapa SVG:', error);
        // Fallback: mostrar mensaje de error
        container.innerHTML = '<p style="color: red;">Error cargando el mapa. Por favor recarga la página.</p>';
    }
}

// Actualizar estado visual de una provincia
function actualizarEstadoProvincia(container, id, estado) {
    const path = container.querySelector(`#province-${id}`);
    if (!path) return;
    
    path.classList.remove('name-correct', 'complete', 'highlighted');
    if (estado) {
        path.classList.add(estado);
    }
}

// Resaltar una provincia
function resaltarProvincia(container, id) {
    const allPaths = container.querySelectorAll('.province-path');
    allPaths.forEach(p => p.classList.remove('highlighted'));
    
    const path = container.querySelector(`#province-${id}`);
    if (path) {
        path.classList.add('highlighted');
    }
}

// Resetear todos los estados
function resetearMapa(container) {
    const allPaths = container.querySelectorAll('.province-path');
    allPaths.forEach(path => {
        path.classList.remove('name-correct', 'complete', 'highlighted');
    });
}

// Obtener IDs de todas las provincias
function obtenerTodasLasProvinciasIds() {
    return Object.keys(provinciasPaths);
}

// Mezclar array (Fisher-Yates)
function mezclarArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}