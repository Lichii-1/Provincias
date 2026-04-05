// ==========================================
// INICIALIZACIÓN Y NAVEGACIÓN DE PESTAÑAS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar todas las secciones
    inicializarNavegacion();
    inicializarSeccionInfo();
    inicializarMapaInteractivo();
    inicializarJuegoCronometrado();
});

function inicializarNavegacion() {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.dataset.tab;

            // Actualizar botones
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            // Actualizar contenido
            tabContents.forEach(content => {
                content.classList.remove("active");
                if (content.id === targetTab) {
                    content.classList.add("active");
                }
            });
        });
    });
}

// ==========================================
// SECCIÓN 1: INFORMACIÓN DE PROVINCIAS
// ==========================================

function inicializarSeccionInfo() {
    const container = document.getElementById("provinces-list");
    
    provinciasData.forEach(provincia => {
        const card = crearTarjetaProvincia(provincia);
        container.appendChild(card);
    });
}

function crearTarjetaProvincia(provincia) {
    const card = document.createElement("div");
    card.className = "province-card";
    
    card.innerHTML = `
        <div class="province-card-header" onclick="toggleCard(this)">
            <div>
                <h3>${provincia.nombre}</h3>
                <span class="capital">Capital: ${provincia.capital}</span>
            </div>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="province-card-body">
            <div class="province-info-item">
                <strong>Año de Fundación</strong>
                <span>${provincia.fundacion}</span>
            </div>
            <div class="province-info-item">
                <strong>Superficie</strong>
                <span>${provincia.superficie}</span>
            </div>
            <div class="province-info-item">
                <strong>Población</strong>
                <span>${provincia.poblacion}</span>
            </div>
            <div class="province-info-item">
                <strong>Región</strong>
                <span>${provincia.region}</span>
            </div>
            <div class="province-info-item">
                <strong>Características Principales</strong>
                <span>${provincia.caracteristicas}</span>
            </div>
            <div class="province-info-item">
                <strong>Historia</strong>
                <span>${provincia.historia}</span>
            </div>
        </div>
    `;
    
    return card;
}

function toggleCard(header) {
    const card = header.parentElement;
    card.classList.toggle("expanded");
}

// ==========================================
// SECCIÓN 2: MAPA INTERACTIVO
// ==========================================

let estadoMapaInteractivo = {};
let provinciaSeleccionadaMapa = null;
let faseRespuestaMapa = "nombre"; // "nombre" o "capital"

function inicializarMapaInteractivo() {
    const svgMap = document.getElementById("argentina-map");
    const modal = document.getElementById("answer-modal");
    const modalTitle = document.getElementById("modal-title");
    const answerInput = document.getElementById("answer-input");
    const submitBtn = document.getElementById("submit-answer");
    const cancelBtn = document.getElementById("cancel-answer");
    const feedback = document.getElementById("modal-feedback");
    const resetBtn = document.getElementById("reset-map-btn");
    const progressSpan = document.getElementById("map-progress");

    // Inicializar estado de todas las provincias
    obtenerTodasLasProvinciasIds().forEach(id => {
        estadoMapaInteractivo[id] = "pendiente";
    });

    // Crear el mapa
    crearMapaSVG(svgMap, (id) => {
        if (estadoMapaInteractivo[id] === "completo") {
            return; // Ya está completa
        }
        
        provinciaSeleccionadaMapa = id;
        const provincia = obtenerProvincia(id);
        
        if (estadoMapaInteractivo[id] === "pendiente") {
            faseRespuestaMapa = "nombre";
            modalTitle.textContent = "Ingresá el nombre de la provincia";
        } else if (estadoMapaInteractivo[id] === "nombre-correcto") {
            faseRespuestaMapa = "capital";
            modalTitle.textContent = `¡Correcto! Ahora ingresá la capital de ${provincia.nombre}`;
        }
        
        answerInput.value = "";
        feedback.textContent = "";
        feedback.className = "feedback";
        modal.classList.remove("hidden");
        answerInput.focus();
    });

    // Manejar envío de respuesta
    submitBtn.addEventListener("click", verificarRespuestaMapa);
    answerInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            verificarRespuestaMapa();
        }
    });

    // Cancelar
    cancelBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        provinciaSeleccionadaMapa = null;
    });

    // Resetear mapa
    resetBtn.addEventListener("click", () => {
        obtenerTodasLasProvinciasIds().forEach(id => {
            estadoMapaInteractivo[id] = "pendiente";
        });
        resetearMapa(svgMap);
        actualizarProgresoMapa();
    });

    function verificarRespuestaMapa() {
        const respuesta = answerInput.value.trim();
        
        if (!respuesta) {
            feedback.textContent = "Por favor, ingresá una respuesta";
            feedback.className = "feedback error";
            return;
        }

        if (faseRespuestaMapa === "nombre") {
            if (validarNombreProvincia(provinciaSeleccionadaMapa, respuesta)) {
                estadoMapaInteractivo[provinciaSeleccionadaMapa] = "nombre-correcto";
                actualizarEstadoProvincia(svgMap, provinciaSeleccionadaMapa, "name-correct");
                
                // Pasar a fase capital
                faseRespuestaMapa = "capital";
                const provincia = obtenerProvincia(provinciaSeleccionadaMapa);
                modalTitle.textContent = `¡Correcto! Ahora ingresá la capital de ${provincia.nombre}`;
                answerInput.value = "";
                feedback.textContent = "¡Nombre correcto!";
                feedback.className = "feedback success";
                answerInput.focus();
            } else {
                feedback.textContent = "Nombre incorrecto. Intentá de nuevo.";
                feedback.className = "feedback error";
                answerInput.select();
            }
        } else if (faseRespuestaMapa === "capital") {
            if (validarCapital(provinciaSeleccionadaMapa, respuesta)) {
                estadoMapaInteractivo[provinciaSeleccionadaMapa] = "completo";
                actualizarEstadoProvincia(svgMap, provinciaSeleccionadaMapa, "complete");
                actualizarProgresoMapa();
                
                feedback.textContent = "¡Capital correcta! Provincia completada.";
                feedback.className = "feedback success";
                
                setTimeout(() => {
                    modal.classList.add("hidden");
                    provinciaSeleccionadaMapa = null;
                }, 1000);
            } else {
                feedback.textContent = "Capital incorrecta. Intentá de nuevo.";
                feedback.className = "feedback error";
                answerInput.select();
            }
        }
    }

    function actualizarProgresoMapa() {
        const completadas = Object.values(estadoMapaInteractivo).filter(e => e === "completo").length;
        progressSpan.textContent = completadas;
    }
}

// ==========================================
// SECCIÓN 3: JUEGO CRONOMETRADO
// ==========================================

let juegoEstado = {
    activo: false,
    provinciasRestantes: [],
    provinciaActual: null,
    faseActual: "nombre", // "nombre" o "capital"
    correctas: 0,
    rachaActual: 0,
    mejorRacha: 0,
    tiempoInicio: null,
    timerInterval: null
};

function inicializarJuegoCronometrado() {
    const startBtn = document.getElementById("start-game-btn");
    const restartBtn = document.getElementById("restart-game-btn");
    const nextBtn = document.getElementById("next-province-btn");
    const provinceInput = document.getElementById("province-input");
    const capitalInput = document.getElementById("capital-input");
    const gameMap = document.getElementById("game-map");

    // Crear mapa del juego (sin eventos de click)
    crearMapaSVG(gameMap, null);

    startBtn.addEventListener("click", iniciarJuego);
    restartBtn.addEventListener("click", iniciarJuego);
    nextBtn.addEventListener("click", siguienteProvincia);

    provinceInput.addEventListener("input", () => {
        if (juegoEstado.faseActual === "nombre" && provinceInput.value.trim()) {
            verificarRespuestaJuego("nombre", provinceInput.value.trim());
        }
    });

    provinceInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && provinceInput.value.trim()) {
            verificarRespuestaJuego("nombre", provinceInput.value.trim());
        }
    });

    capitalInput.addEventListener("input", () => {
        if (juegoEstado.faseActual === "capital" && capitalInput.value.trim()) {
            verificarRespuestaJuego("capital", capitalInput.value.trim());
        }
    });

    capitalInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && capitalInput.value.trim()) {
            verificarRespuestaJuego("capital", capitalInput.value.trim());
        }
    });
}

function iniciarJuego() {
    const startScreen = document.getElementById("game-start-screen");
    const playScreen = document.getElementById("game-play-screen");
    const endScreen = document.getElementById("game-end-screen");
    const gameMap = document.getElementById("game-map");

    // Resetear estado
    juegoEstado = {
        activo: true,
        provinciasRestantes: mezclarArray(obtenerTodasLasProvinciasIds()),
        provinciaActual: null,
        faseActual: "nombre",
        correctas: 0,
        rachaActual: 0,
        mejorRacha: 0,
        tiempoInicio: Date.now(),
        timerInterval: null
    };

    // Resetear mapa
    resetearMapa(gameMap);

    // Actualizar UI
    actualizarEstadisticasJuego();
    
    // Mostrar pantalla de juego
    startScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    playScreen.classList.remove("hidden");

    // Iniciar cronómetro
    juegoEstado.timerInterval = setInterval(actualizarCronometro, 1000);

    // Mostrar primera provincia
    siguienteProvincia();
}

function siguienteProvincia() {
    const provinceInput = document.getElementById("province-input");
    const capitalInput = document.getElementById("capital-input");
    const nextBtn = document.getElementById("next-province-btn");
    const provinceStatus = document.getElementById("province-status");
    const capitalStatus = document.getElementById("capital-status");
    const gameMap = document.getElementById("game-map");

    if (juegoEstado.provinciasRestantes.length === 0) {
        finalizarJuego();
        return;
    }

    // Obtener siguiente provincia
    juegoEstado.provinciaActual = juegoEstado.provinciasRestantes.shift();
    juegoEstado.faseActual = "nombre";

    // Resetear inputs
    provinceInput.value = "";
    provinceInput.disabled = false;
    provinceInput.classList.remove("correct", "incorrect");
    provinceInput.focus();

    capitalInput.value = "";
    capitalInput.disabled = true;
    capitalInput.classList.remove("correct", "incorrect");

    provinceStatus.textContent = "";
    capitalStatus.textContent = "";

    nextBtn.classList.add("hidden");

    // Resaltar provincia en el mapa
    resaltarProvincia(gameMap, juegoEstado.provinciaActual);
}

function verificarRespuestaJuego(fase, respuesta) {
    const provinceInput = document.getElementById("province-input");
    const capitalInput = document.getElementById("capital-input");
    const nextBtn = document.getElementById("next-province-btn");
    const provinceStatus = document.getElementById("province-status");
    const capitalStatus = document.getElementById("capital-status");
    const gameMap = document.getElementById("game-map");

    if (fase === "nombre") {
        if (validarNombreProvincia(juegoEstado.provinciaActual, respuesta)) {
            // Nombre correcto
            provinceInput.classList.add("correct");
            provinceInput.disabled = true;
            provinceStatus.textContent = "✓";
            provinceStatus.style.color = "#16a34a";

            // Actualizar mapa
            actualizarEstadoProvincia(gameMap, juegoEstado.provinciaActual, "name-correct");

            // Pasar a capital
            juegoEstado.faseActual = "capital";
            capitalInput.disabled = false;
            capitalInput.focus();
        }
    } else if (fase === "capital") {
        if (validarCapital(juegoEstado.provinciaActual, respuesta)) {
            // Capital correcta
            capitalInput.classList.add("correct");
            capitalInput.disabled = true;
            capitalStatus.textContent = "✓";
            capitalStatus.style.color = "#16a34a";

            // Actualizar mapa
            actualizarEstadoProvincia(gameMap, juegoEstado.provinciaActual, "complete");

            // Actualizar estadísticas
            juegoEstado.correctas++;
            juegoEstado.rachaActual++;
            if (juegoEstado.rachaActual > juegoEstado.mejorRacha) {
                juegoEstado.mejorRacha = juegoEstado.rachaActual;
            }
            actualizarEstadisticasJuego();

            // Mostrar botón siguiente o finalizar
            if (juegoEstado.provinciasRestantes.length > 0) {
                nextBtn.classList.remove("hidden");
                nextBtn.focus();
            } else {
                setTimeout(finalizarJuego, 500);
            }
        }
    }
}

function actualizarCronometro() {
    if (!juegoEstado.activo) return;

    const tiempoTranscurrido = Math.floor((Date.now() - juegoEstado.tiempoInicio) / 1000);
    const minutos = Math.floor(tiempoTranscurrido / 60).toString().padStart(2, "0");
    const segundos = (tiempoTranscurrido % 60).toString().padStart(2, "0");

    document.getElementById("timer").textContent = `${minutos}:${segundos}`;
}

function actualizarEstadisticasJuego() {
    document.getElementById("correct-count").textContent = `${juegoEstado.correctas}/24`;
    document.getElementById("streak").textContent = juegoEstado.rachaActual;
}

function finalizarJuego() {
    const startScreen = document.getElementById("game-start-screen");
    const playScreen = document.getElementById("game-play-screen");
    const endScreen = document.getElementById("game-end-screen");

    // Detener cronómetro
    juegoEstado.activo = false;
    if (juegoEstado.timerInterval) {
        clearInterval(juegoEstado.timerInterval);
    }

    // Calcular tiempo final
    const tiempoFinal = Math.floor((Date.now() - juegoEstado.tiempoInicio) / 1000);
    const minutos = Math.floor(tiempoFinal / 60).toString().padStart(2, "0");
    const segundos = (tiempoFinal % 60).toString().padStart(2, "0");

    // Mostrar estadísticas finales
    document.getElementById("final-time").textContent = `${minutos}:${segundos}`;
    document.getElementById("final-score").textContent = `${juegoEstado.correctas}/24`;
    document.getElementById("final-streak").textContent = juegoEstado.mejorRacha;

    // Mostrar pantalla final
    playScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
}
