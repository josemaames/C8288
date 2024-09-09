import fetch from "node-fetch";

// Función para la ruta /hello
const routeHello = () => "Hello World!";

// Función para la ruta /api/names
const routeAPINames = async () => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";

  let data;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
  } catch (err) {
    // Manejar el error y devolver un mensaje adecuado
    return `Error fetching data: ${err.message}`;
  }

  // Asegurarse de que 'data' sea un array antes de mapear
  if (!Array.isArray(data)) {
    return 'Unexpected response format';
  }

  const names = data
    .map((item) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");

  return names;
};

// Exportar las funciones
export { routeHello, routeAPINames };



/* explicacion 

Importación de node-fetch: El módulo fetch se importa desde node-fetch, que es necesario para realizar solicitudes HTTP en Node.js.

routeHello: Esta función devuelve un simple mensaje de saludo.

routeAPINames: Esta función realiza una solicitud a la API externa y procesa la respuesta.


/* El elemento HTML line break <br> produce un salto de línea en el texto (retorno de carro). Es útil para escribir un poema o una dirección, donde la división de las líneas es significante.