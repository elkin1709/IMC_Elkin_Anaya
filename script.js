function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estaturaCm = parseFloat(document.getElementById("estatura").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(estaturaCm) || peso <= 0 || estaturaCm <= 0) {
      resultado.textContent = "Por favor ingresa valores válidos.";
      return;
    }

    // Convertir centímetros a metros
    const estaturaM = estaturaCm / 100;

    const imc = peso / (estaturaM * estaturaM);
    let clasificacion = "";

    if (imc < 18.5) {
      clasificacion = "Bajo peso";
    } else if (imc < 24.9) {
      clasificacion = "Peso normal";
    } else if (imc < 29.9) {
      clasificacion = "Sobrepeso";
    } else {
      clasificacion = "Obesidad";
    }

    resultado.textContent = `Tu IMC es ${imc.toFixed(2)} - ${clasificacion}`;
  }