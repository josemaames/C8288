import fetch from "node-fetch";

const routeHello = () => "Hello World!";
const routeAPINames = async () => {
const url = "https://www.usemodernfullstack.dev/api/v1/users";

let data;
try {
const response = await fetch(url);
data = await response.json();
} catch (err) {
return err;
}
const names = data
.map((item) => id: ${item.id}, name: ${item.name})
.join("<br>");
return names;
};
export { routeHello, routeAPINames };

/* El elemento HTML line break <br> produce un salto de línea en el texto (retorno de carro). Es útil para escribir un poema o una dirección, donde la división de las líneas es significante.
/*