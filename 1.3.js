const preguntas = [
  {
    pregunta: "Cuantos lados tiene un triangulo?",
    opciones: ["2", "3", "4", "5"],
    respuestaCorrecta: "3"
  },
  {
    pregunta: "Que figura tiene cuatro lados iguales y cuatro angulos rectos?",
    opciones: ["Rectangulo", "Cuadrado", "Rombo", "Trapecio"],
    respuestaCorrecta: "Cuadrado"
  },
  {
    pregunta: "Como se llama una figura que tiene tres lados?",
    opciones: ["Cuadrilatero", "Pentagono", "Triangulo", "Hexagono"],
    respuestaCorrecta: "Triangulo"
  },
  {
    pregunta: "Cual es la figura que no tiene lados rectos?",
    opciones: ["Circulo", "Cuadrado", "Triangulo", "Rombo"],
    respuestaCorrecta: "Circulo"
  },
  {
    pregunta: "Que figura geometrica parece una pelota?",
    opciones: ["Cubo", "Esfera", "Prisma", "Piramide"],
    respuestaCorrecta: "Esfera"
  },
  {
    pregunta: "Cuantas caras tiene un cubo?",
    opciones: ["4", "6", "8", "12"],
    respuestaCorrecta: "6"
  },
  {
    pregunta: "Como se llama el cuerpo geometrico que parece una caja?",
    opciones: ["Esfera", "Cilindro", "Cubo", "Cono"],
    respuestaCorrecta: "Cubo"
  },
  {
    pregunta: "Que cuerpo geometrico tiene una base circular y termina en punta?",
    opciones: ["Cubo", "Piramide", "Cilindro", "Cono"],
    respuestaCorrecta: "Cono"
  },
  {
    pregunta: "Que figura tiene forma de rueda?",
    opciones: ["Circulo", "Ovalo", "Cuadrado", "Triangulo"],
    respuestaCorrecta: "Circulo"
  },
  {
    pregunta: "Cuantos vertices tiene un cuadrado?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "4"
  },
  {
    pregunta: "Que figura tiene seis caras cuadradas?",
    opciones: ["Piramide", "Prisma rectangular", "Cubo", "Cilindro"],
    respuestaCorrecta: "Cubo"
  },
  {
    pregunta: "Cual es el nombre del cuerpo geometrico que parece una lata?",
    opciones: ["Esfera", "Cilindro", "Cono", "Cubo"],
    respuestaCorrecta: "Cilindro"
  },
  {
    pregunta: "Cuantos lados tiene un pentagono?",
    opciones: ["3", "4", "5", "6"],
    respuestaCorrecta: "5"
  },
  {
    pregunta: "Que figura tiene cinco puntas iguales y lados del mismo tamano?",
    opciones: ["Pentagono", "Estrella", "Hexagono", "Octogono"],
    respuestaCorrecta: "Estrella"
  },
  {
    pregunta: "Que cuerpo geometrico tiene una sola cara curva y dos bases circulares?",
    opciones: ["Esfera", "Piramide", "Cilindro", "Cono"],
    respuestaCorrecta: "Cilindro"
  },
  {
    pregunta: "Que figura tiene cuatro lados, pero no todos son iguales?",
    opciones: ["Cuadrado", "Rectangulo", "Triangulo", "Circulo"],
    respuestaCorrecta: "Rectangulo"
  },
  {
    pregunta: "Cual figura tiene exactamente un par de lados paralelos?",
    opciones: ["Cuadrado", "Rombo", "Trapecio", "Triangulo"],
    respuestaCorrecta: "Trapecio"
  },
  {
    pregunta: "Como se llama una figura que tiene seis lados?",
    opciones: ["Pentagono", "Hexagono", "Heptagono", "Octogono"],
    respuestaCorrecta: "Hexagono"
  },
  {
    pregunta: "Que figura tiene tres vertices y tres lados?",
    opciones: ["Cuadrado", "Rombo", "Rectangulo", "Triangulo"],
    respuestaCorrecta: "Triangulo"
  },
  {
    pregunta: "Que figura tiene mas lados: un cuadrado o un hexagono?",
    opciones: ["Cuadrado", "Hexagono", "Ambos tienen igual", "Ninguno tiene lados"],
    respuestaCorrecta: "Hexagono"
  },
  {
    pregunta: "Que es un plano en geometria?",
    opciones: ["Una linea recta", "Una superficie plana infinita", "Un punto", "Un angulo"],
    respuestaCorrecta: "Una superficie plana infinita"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById("quizForm");
  const totalPreguntas = preguntas.length;
  const valorPorPregunta = 10 / totalPreguntas;

  // Crear las preguntas en el formulario
  preguntas.forEach((pregunta, index) => {
    const div = document.createElement("div");
    div.className = "question";
    
    const titulo = document.createElement("p");
    titulo.textContent = `${index + 1}. ${pregunta.pregunta}`;
    div.appendChild(titulo);
    
    pregunta.opciones.forEach((opcion, opcionIndex) => {
      const opcionDiv = document.createElement("div");
      opcionDiv.className = "option";
      
      const input = document.createElement("input");
      input.type = "radio";
      input.id = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
      input.name = `pregunta${index + 1}`;
      input.value = opcion;
      
      const label = document.createElement("label");
      label.htmlFor = `pregunta${index + 1}_opcion${opcionIndex + 1}`;
      label.textContent = opcion;
      
      opcionDiv.appendChild(input);
      opcionDiv.appendChild(label);
      div.appendChild(opcionDiv);
    });
    
    formulario.appendChild(div);
  });
});

let tiempoRestante = 30 * 60;
let timer;

function iniciarTemporizador() {
  const temporizadorElemento = document.getElementById("temporizador");
  timer = setInterval(() => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    temporizadorElemento.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`;

    if (tiempoRestante <= 0) {
      clearInterval(timer);
      mostrarResultados();
    }

    tiempoRestante--;
  }, 1000);
}

function mostrarResultados() {
  clearInterval(timer);

  const respuestas = [];
  let respuestasCorrectas = 0;

  preguntas.forEach((pregunta, index) => {
    const seleccionadas = document.querySelectorAll(`input[name="pregunta${index + 1}"]:checked`);
    let respuestaSeleccionada = "";
    
    if (seleccionadas.length > 0) {
      respuestaSeleccionada = seleccionadas[0].value;
      if (respuestaSeleccionada === pregunta.respuestaCorrecta) {
        respuestasCorrectas++;
      }
    }
    
    respuestas.push(respuestaSeleccionada);
  });

  const incompletas = respuestas.filter(resp => resp === "").length;

  if (incompletas > 0) {
    document.getElementById("resultados").textContent = `Te faltan ${incompletas} preguntas por responder.`;
  } else {
    const calificacion = (respuestasCorrectas * valorPorPregunta).toFixed(2);
    
    let resultadoHTML = `
      <p>Muy bien! Has completado todas las preguntas.</p>
      <p><strong>Tu calificacion es:</strong> ${calificacion} / 10</p>
      <p><strong>Respuestas correctas:</strong> ${respuestasCorrectas} de ${totalPreguntas}</p>
      <p><strong>Tus respuestas:</strong></p>
      <ul>`;
      
    preguntas.forEach((pregunta, index) => {
      const respuestaUsuario = respuestas[index];
      const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;
      const estilo = esCorrecta ? "color: green;" : "color: red;";
      
      resultadoHTML += `
        <li style="${estilo}">
          <strong>${index + 1}. ${pregunta.pregunta}</strong><br>
          Tu respuesta: ${respuestaUsuario || "No respondida"}<br>
          Respuesta correcta: ${pregunta.respuestaCorrecta}<br>
          ${esCorrecta ? "✓ Correcto" : "✗ Incorrecto"}
        </li>`;
    });
    
    resultadoHTML += "</ul>";
    document.getElementById("resultados").innerHTML = resultadoHTML;
  }
}

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "anto pat" && contrasena === "1517") {
    document.getElementById("loginContainer").classList.add("oculto");
    document.getElementById("cuestionarioContainer").classList.remove("oculto");
    iniciarTemporizador(); 
  } else {
    document.getElementById("loginError").textContent = "Usuario o contrasena incorrectos.";
  }
}