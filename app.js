// app.js
// Punto de entrada para registrar y mostrar planetas favoritos

// Paso 1: Mensaje de inicio
console.log('✅ Iniciando aplicación...');

try {
  // Paso 2: Intentar importar los módulos
  const planetas = require('./data/planetas'); // Importa lista de planetas
  console.log('✅ Módulo planetas cargado correctamente.');

  const { mostrarPlanetas, buscarPlaneta } = require('./utils/mostrar'); // Importa funciones
  console.log('✅ Funciones mostrarPlanetas y buscarPlaneta cargadas correctamente.');

  // Paso 3: Mostrar planetas
  console.log('\n🌌 Tus planetas favoritos son:');
  mostrarPlanetas(planetas);

  // Paso 4: Buscar un planeta específico
  console.log('\n🔍 Buscando planeta "Marte":');
  buscarPlaneta(planetas, 'Marte');

  // Paso final
  console.log('\n✅ Aplicación finalizada correctamente.');
  
} catch (error) {
  // Mostrar error si algo falla
  console.error('❌ Error en la ejecución de la app:', error.message);
}
