// utils/mostrar.js
// Módulo con funciones para mostrar y buscar planetas en consola

// Función para mostrar todos los planetas
function mostrarPlanetas(planetas) {
  planetas.forEach((planeta, i) => {
    console.log(`${i + 1}. ${planeta.nombre} - ${planeta.descripcion}`);
  });
}

// Función para buscar planeta por nombre
function buscarPlaneta(planetas, nombre) {
  const encontrado = planetas.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  if (encontrado) {
    console.log(`✅ Encontrado: ${encontrado.nombre} - ${encontrado.descripcion}`);
  } else {
    console.log(`❌ No se encontró el planeta "${nombre}"`);
  }
}

module.exports = { mostrarPlanetas, buscarPlaneta };
