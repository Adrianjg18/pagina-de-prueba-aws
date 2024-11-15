const ipServidor = document.getElementById("ip-server");
const nombreServidor = document.getElementById("name-server");

fetch("/server-ip")
  .then((response) => response.json())
  .then((data) => {
    ipServidor.textContent = data.ip;
  })
  .catch((error) => console.error("Error obteniendo la IP:", error));

nombreServidor.textContent = window.location.hostname;
