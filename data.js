// Datos de las provincias argentinas
const provinciasData = [
    {
        id: "buenosaires",
        nombre: "Buenos Aires",
        capital: "La Plata",
        fundacion: "1882 (La Plata)",
        superficie: "307.571 km²",
        poblacion: "17.541.141 habitantes",
        region: "Pampeana",
        caracteristicas: "Es la provincia más poblada de Argentina. Posee extensas llanuras pampeanas, costa atlántica y el principal cordón industrial del país.",
        historia: "Creada en 1820 tras la disolución del gobierno central. La ciudad de La Plata fue fundada en 1882 por Dardo Rocha como nueva capital provincial, tras la federalización de Buenos Aires."
    },
    {
        id: "caba",
        nombre: "Ciudad Autónoma de Buenos Aires",
        capital: "Buenos Aires",
        fundacion: "1536 (primera fundación) / 1580 (segunda fundación)",
        superficie: "203 km²",
        poblacion: "3.075.646 habitantes",
        region: "Pampeana",
        caracteristicas: "Capital federal de Argentina. Centro político, económico y cultural del país. Conocida por su arquitectura europea, el tango y su vida cultural.",
        historia: "Fundada dos veces, primero por Pedro de Mendoza en 1536 y luego por Juan de Garay en 1580. Fue federalizada en 1880 y obtuvo autonomía en 1994."
    },
    {
        id: "catamarca",
        nombre: "Catamarca",
        capital: "San Fernando del Valle de Catamarca",
        fundacion: "1683",
        superficie: "102.602 km²",
        poblacion: "415.438 habitantes",
        region: "Noroeste (NOA)",
        caracteristicas: "Provincia montañosa con importantes yacimientos mineros. Destaca por la producción de aceitunas, nueces y tejidos artesanales de lana de vicuña.",
        historia: "Fundada por Fernando de Mendoza y Mate de Luna en 1683. Su nombre proviene del quechua y significa 'fortaleza en la ladera'."
    },
    {
        id: "chaco",
        nombre: "Chaco",
        capital: "Resistencia",
        fundacion: "1878",
        superficie: "99.633 km²",
        poblacion: "1.204.541 habitantes",
        region: "Noreste (NEA)",
        caracteristicas: "Región de bosques y esteros. Principal productor de algodón del país. Posee el Parque Nacional Chaco y el Impenetrable Chaqueño.",
        historia: "Territorio Nacional desde 1872, fue provincializado en 1951. Su nombre deriva de la palabra quechua 'chacu' que significa 'territorio de cacería'."
    },
    {
        id: "chubut",
        nombre: "Chubut",
        capital: "Rawson",
        fundacion: "1865 (colonización galesa)",
        superficie: "224.686 km²",
        poblacion: "618.994 habitantes",
        region: "Patagonia",
        caracteristicas: "Destaca por la Península Valdés (Patrimonio de la Humanidad), avistaje de ballenas, pingüinos y lobos marinos. Importante producción lanera y petrolera.",
        historia: "Colonizada por galeses en 1865, quienes fundaron ciudades como Trelew y Puerto Madryn. Fue provincializada en 1955."
    },
    {
        id: "cordoba",
        nombre: "Córdoba",
        capital: "Córdoba",
        fundacion: "1573",
        superficie: "165.321 km²",
        poblacion: "3.760.450 habitantes",
        region: "Pampeana",
        caracteristicas: "Segunda provincia más poblada. Posee las Sierras de Córdoba, importante destino turístico. Centro industrial automotriz y tecnológico.",
        historia: "Fundada por Jerónimo Luis de Cabrera en 1573. Alberga la Universidad Nacional de Córdoba, la más antigua del país (1613) y una de las primeras de América."
    },
    {
        id: "corrientes",
        nombre: "Corrientes",
        capital: "Corrientes",
        fundacion: "1588",
        superficie: "88.199 km²",
        poblacion: "1.120.801 habitantes",
        region: "Noreste (NEA)",
        caracteristicas: "Provincia de los Esteros del Iberá, uno de los humedales más grandes del mundo. Rica tradición cultural guaranítica y chamamecera.",
        historia: "Fundada por Juan Torres de Vera y Aragón en 1588. Fue escenario importante de las guerras de independencia y civiles del siglo XIX."
    },
    {
        id: "entrerios",
        nombre: "Entre Ríos",
        capital: "Paraná",
        fundacion: "1813",
        superficie: "78.781 km²",
        poblacion: "1.385.961 habitantes",
        region: "Pampeana",
        caracteristicas: "Mesopotámica, entre los ríos Paraná y Uruguay. Termas, playas de río y Parque Nacional El Palmar. Cuna de Justo José de Urquiza.",
        historia: "Declarada provincia en 1813. Paraná fue capital provisional de la Confederación Argentina entre 1853 y 1861."
    },
    {
        id: "formosa",
        nombre: "Formosa",
        capital: "Formosa",
        fundacion: "1879",
        superficie: "72.066 km²",
        poblacion: "605.193 habitantes",
        region: "Noreste (NEA)",
        caracteristicas: "Clima subtropical. Posee el Bañado La Estrella, uno de los humedales más grandes de Sudamérica. Importante presencia de comunidades originarias.",
        historia: "Fundada en 1879 durante la campaña militar al Chaco. Fue Territorio Nacional hasta 1955, cuando se provincializó."
    },
    {
        id: "jujuy",
        nombre: "Jujuy",
        capital: "San Salvador de Jujuy",
        fundacion: "1593",
        superficie: "53.219 km²",
        poblacion: "779.212 habitantes",
        region: "Noroeste (NOA)",
        caracteristicas: "Provincia andina con paisajes como la Quebrada de Humahuaca (Patrimonio de la Humanidad), Salinas Grandes y Cerro de los Siete Colores.",
        historia: "Fundada por Francisco de Argañaraz en 1593. Escenario del Éxodo Jujeño de 1812, gesta heroica de la independencia argentina."
    },
    {
        id: "lapampa",
        nombre: "La Pampa",
        capital: "Santa Rosa",
        fundacion: "1884",
        superficie: "143.440 km²",
        poblacion: "358.428 habitantes",
        region: "Pampeana",
        caracteristicas: "Llanuras pampeanas en el este y zona semiárida hacia el oeste. Parque Nacional Lihué Calel. Importante producción ganadera y agrícola.",
        historia: "Territorio Nacional desde 1884, fue provincializado en 1951. Originalmente habitada por pueblos ranqueles y tehuelches."
    },
    {
        id: "larioja",
        nombre: "La Rioja",
        capital: "La Rioja",
        fundacion: "1591",
        superficie: "89.680 km²",
        poblacion: "393.531 habitantes",
        region: "Noroeste (NOA)",
        caracteristicas: "Provincia montañosa con el Parque Nacional Talampaya (Patrimonio de la Humanidad). Producción de aceitunas y vinos de altura.",
        historia: "Fundada por Juan Ramírez de Velasco en 1591. Cuna de líderes federales como Facundo Quiroga y del expresidente Carlos Menem."
    },
    {
        id: "mendoza",
        nombre: "Mendoza",
        capital: "Mendoza",
        fundacion: "1561",
        superficie: "148.827 km²",
        poblacion: "2.010.363 habitantes",
        region: "Cuyo",
        caracteristicas: "Principal región vitivinícola del país. Posee el Aconcagua (6.962 m), la montaña más alta de América. Importante centro de turismo aventura.",
        historia: "Fundada por Pedro del Castillo en 1561. Fue el punto de partida del Ejército de los Andes liderado por San Martín en 1817."
    },
    {
        id: "misiones",
        nombre: "Misiones",
        capital: "Posadas",
        fundacion: "1881",
        superficie: "29.801 km²",
        poblacion: "1.261.294 habitantes",
        region: "Noreste (NEA)",
        caracteristicas: "Selva paranaense y Cataratas del Iguazú (Maravilla del Mundo). Tierra colorada, yerba mate y ruinas jesuíticas.",
        historia: "Debe su nombre a las misiones jesuíticas del siglo XVII. Fue Territorio Nacional desde 1881 y se provincializó en 1953."
    },
    {
        id: "neuquen",
        nombre: "Neuquén",
        capital: "Neuquén",
        fundacion: "1904",
        superficie: "94.078 km²",
        poblacion: "664.057 habitantes",
        region: "Patagonia",
        caracteristicas: "Importante producción de hidrocarburos (Vaca Muerta). Turismo de nieve en Chapelco y Villa La Angostura. Descubrimientos paleontológicos.",
        historia: "Territorio Nacional desde 1884, fue provincializado en 1955. Su nombre proviene del mapudungún y significa 'audaz' o 'arrogante'."
    },
    {
        id: "rionegro",
        nombre: "Río Negro",
        capital: "Viedma",
        fundacion: "1878",
        superficie: "203.013 km²",
        poblacion: "747.610 habitantes",
        region: "Patagonia",
        caracteristicas: "Diversidad de paisajes: estepa, lagos, montañas y costa atlántica. Bariloche es el principal centro turístico. Valle frutícola del Alto Valle.",
        historia: "Territorio Nacional desde 1878, fue provincializado en 1955. San Carlos de Bariloche se convirtió en importante centro turístico desde principios del siglo XX."
    },
    {
        id: "salta",
        nombre: "Salta",
        capital: "Salta",
        fundacion: "1582",
        superficie: "155.488 km²",
        poblacion: "1.424.397 habitantes",
        region: "Noroeste (NOA)",
        caracteristicas: "Conocida como 'La Linda'. Arquitectura colonial, valles Calchaquíes, Tren a las Nubes. Producción de tabaco, vino y legumbres.",
        historia: "Fundada por Hernando de Lerma en 1582. Escenario de la Batalla de Salta (1813), victoria crucial en la guerra de independencia."
    },
    {
        id: "sanjuan",
        nombre: "San Juan",
        capital: "San Juan",
        fundacion: "1562",
        superficie: "89.651 km²",
        poblacion: "781.055 habitantes",
        region: "Cuyo",
        caracteristicas: "Zona sísmica activa. Valle de la Luna (Ischigualasto), Patrimonio de la Humanidad. Producción vitivinícola y olivícola. Energía solar.",
        historia: "Fundada por Juan Jufré en 1562. Cuna de Domingo Faustino Sarmiento, presidente y educador. Reconstruida tras el terremoto de 1944."
    },
    {
        id: "sanluis",
        nombre: "San Luis",
        capital: "San Luis",
        fundacion: "1594",
        superficie: "76.748 km²",
        poblacion: "508.328 habitantes",
        region: "Cuyo",
        caracteristicas: "Sierras centrales, Villa de Merlo como destino turístico. Parque Nacional Sierra de las Quijadas. Desarrollo de industria tecnológica.",
        historia: "Fundada por Luis Jufré en 1594. Tierra de pueblos originarios huarpes y ranqueles. Se destacó en las últimas décadas por políticas de industrialización."
    },
    {
        id: "santacruz",
        nombre: "Santa Cruz",
        capital: "Río Gallegos",
        fundacion: "1884",
        superficie: "243.943 km²",
        poblacion: "365.698 habitantes",
        region: "Patagonia",
        caracteristicas: "Glaciar Perito Moreno y Parque Nacional Los Glaciares (Patrimonio de la Humanidad). Producción petrolera y ovina.",
        historia: "Territorio Nacional desde 1884, fue provincializado en 1957. Explorada por navegantes como Magallanes y Darwin."
    },
    {
        id: "santafe",
        nombre: "Santa Fe",
        capital: "Santa Fe",
        fundacion: "1573",
        superficie: "133.007 km²",
        poblacion: "3.556.522 habitantes",
        region: "Pampeana",
        caracteristicas: "Tercera provincia más poblada. Puerto de Rosario, el más importante del país. Gran producción agrícola-ganadera e industrial.",
        historia: "Fundada por Juan de Garay en 1573. En Santa Fe se sancionó la Constitución Nacional de 1853. Rosario es cuna de la bandera argentina."
    },
    {
        id: "santiagodelestero",
        nombre: "Santiago del Estero",
        capital: "Santiago del Estero",
        fundacion: "1553",
        superficie: "136.351 km²",
        poblacion: "978.313 habitantes",
        region: "Noroeste (NOA)",
        caracteristicas: "La ciudad más antigua del país. Termas de Río Hondo, importante centro turístico. Folklore santiagueño con chacarera y zamba.",
        historia: "Fundada por Francisco de Aguirre en 1553, es la 'Madre de Ciudades'. Desde aquí partieron las expediciones fundadoras de otras ciudades coloniales."
    },
    {
        id: "tierradelfuego",
        nombre: "Tierra del Fuego",
        capital: "Ushuaia",
        fundacion: "1884",
        superficie: "21.571 km² (sector argentino)",
        poblacion: "190.641 habitantes",
        region: "Patagonia",
        caracteristicas: "Provincia más austral. Ushuaia es la ciudad más al sur del mundo. Parque Nacional Tierra del Fuego. Turismo antártico.",
        historia: "Territorio Nacional desde 1884, provincializado en 1990 con el nombre completo 'Tierra del Fuego, Antártida e Islas del Atlántico Sur'."
    },
    {
        id: "tucuman",
        nombre: "Tucumán",
        capital: "San Miguel de Tucumán",
        fundacion: "1565",
        superficie: "22.524 km²",
        poblacion: "1.687.305 habitantes",
        region: "Noroeste (NOA)",
        caracteristicas: "Provincia más pequeña pero densamente poblada. 'Jardín de la República'. Principal productor de limones y caña de azúcar del país.",
        historia: "Fundada por Diego de Villarroel en 1565. En la Casa Histórica de Tucumán se declaró la Independencia Argentina el 9 de julio de 1816."
    }
];

// Nombres alternativos para validación (con y sin tildes, abreviaturas comunes)
const nombresAlternativos = {
    "buenosaires": ["buenos aires", "bs as", "bsas", "provincia de buenos aires"],
    "caba": ["ciudad autonoma de buenos aires", "ciudad autónoma de buenos aires", "caba", "capital federal", "buenos aires"],
    "catamarca": ["catamarca", "san fernando del valle de catamarca"],
    "chaco": ["chaco", "el chaco"],
    "chubut": ["chubut"],
    "cordoba": ["cordoba", "córdoba"],
    "corrientes": ["corrientes"],
    "entrerios": ["entre rios", "entre ríos", "entrerios", "entreríos"],
    "formosa": ["formosa"],
    "jujuy": ["jujuy"],
    "lapampa": ["la pampa", "lapampa"],
    "larioja": ["la rioja", "larioja"],
    "mendoza": ["mendoza"],
    "misiones": ["misiones"],
    "neuquen": ["neuquen", "neuquén"],
    "rionegro": ["rio negro", "río negro", "rionegro"],
    "salta": ["salta"],
    "sanjuan": ["san juan", "sanjuan"],
    "sanluis": ["san luis", "sanluis"],
    "santacruz": ["santa cruz", "santacruz"],
    "santafe": ["santa fe", "santafe"],
    "santiagodelestero": ["santiago del estero", "santiagodeletero", "sgo del estero"],
    "tierradelfuego": ["tierra del fuego", "tierradelfuego", "tdf"],
    "tucuman": ["tucuman", "tucumán", "san miguel de tucuman", "san miguel de tucumán"]
};

// Capitales alternativas para validación
const capitalesAlternativas = {
    "buenosaires": ["la plata"],
    "caba": ["buenos aires", "caba", "capital federal"],
    "catamarca": ["san fernando del valle de catamarca", "catamarca", "san fernando"],
    "chaco": ["resistencia"],
    "chubut": ["rawson"],
    "cordoba": ["cordoba", "córdoba"],
    "corrientes": ["corrientes"],
    "entrerios": ["parana", "paraná"],
    "formosa": ["formosa"],
    "jujuy": ["san salvador de jujuy", "jujuy", "san salvador"],
    "lapampa": ["santa rosa"],
    "larioja": ["la rioja", "larioja"],
    "mendoza": ["mendoza"],
    "misiones": ["posadas"],
    "neuquen": ["neuquen", "neuquén"],
    "rionegro": ["viedma"],
    "salta": ["salta"],
    "sanjuan": ["san juan", "sanjuan"],
    "sanluis": ["san luis", "sanluis"],
    "santacruz": ["rio gallegos", "río gallegos"],
    "santafe": ["santa fe", "santafe"],
    "santiagodelestero": ["santiago del estero"],
    "tierradelfuego": ["ushuaia"],
    "tucuman": ["san miguel de tucuman", "san miguel de tucumán", "tucuman", "tucumán"]
};

// Función para normalizar texto (quitar tildes y pasar a minúsculas)
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// Función para validar nombre de provincia
function validarNombreProvincia(id, respuesta) {
    const respuestaNormalizada = normalizarTexto(respuesta);
    const alternativas = nombresAlternativos[id] || [];
    
    for (const alt of alternativas) {
        if (normalizarTexto(alt) === respuestaNormalizada) {
            return true;
        }
    }
    
    // También comparar con el nombre oficial
    const provincia = provinciasData.find(p => p.id === id);
    if (provincia && normalizarTexto(provincia.nombre) === respuestaNormalizada) {
        return true;
    }
    
    return false;
}

// Función para validar capital
function validarCapital(id, respuesta) {
    const respuestaNormalizada = normalizarTexto(respuesta);
    const alternativas = capitalesAlternativas[id] || [];
    
    for (const alt of alternativas) {
        if (normalizarTexto(alt) === respuestaNormalizada) {
            return true;
        }
    }
    
    // También comparar con la capital oficial
    const provincia = provinciasData.find(p => p.id === id);
    if (provincia && normalizarTexto(provincia.capital) === respuestaNormalizada) {
        return true;
    }
    
    return false;
}

// Obtener provincia por ID
function obtenerProvincia(id) {
    return provinciasData.find(p => p.id === id);
}
