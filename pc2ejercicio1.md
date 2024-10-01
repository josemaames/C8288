// Utilización de callbacks con error para manejar el procesamiento de las solicitudes y su cola.

function primeraTarea(callback) {
    setTimeout(() => {
        console.log("Primera solicitud recibida");
        callback("datos de la primera solicitud");
    }, 1000);
}

function segundaTarea(data, callback) {
    setTimeout(() => {
        console.log("Segunda solicitud completada usando", data);
        callback("datos de la segunda solicitud");
    }, 1000);
}

function terceraTarea(data, callback) {
    setTimeout(() => {
        console.log("Tercera solicitud completada usando", data);
        callback("datos de la tercera solicitud");
    }, 1000);
}

primeraTarea((data1) => {
    segundaTarea(data1, (data2) => {
        terceraTarea(data2, (data3) => {
            console.log("Todas las solicitudes completadas con:", data3);
        });
    });
});

// Refactorización del código para hacer uso de las prommesas, eliminando los callbacks.

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        console.log("Iniciando solicitudes...");
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({ id: 1, name: "Solicitud" });
            } else {
                reject("Error: No se pudo obtener los datos.");
            }
        }, 2000);
    });
}

let promise1 = new Promise((resolve) => setTimeout(() => resolve("Primera solicitud"), 2000));
let promise2 = new Promise((resolve) => setTimeout(() => resolve("Segunda solicitud"), 2000));
let promise3 = new Promise((resolve) => setTimeout(() => resolve("Tercera solicitud"), 2000));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Todas las solicitudes completadas:", results);
    })
    .catch(error => {
        console.error("Ocurrió un error en alguna solicitud:", error);
    });

// Ahora tenemos que refactorizar todo el código nuevamente para poder utilizar async & await, de esta manera poder optimizar el control de errores y administración de solicitudes pendientes.

function getDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Solicitudes recibidas");
            } else {
                reject("Error al obtener las solicitudes");
            }
        }, 2000);
    });
}

async function fetchDataWithErrorHandling() {
    try {
        console.log("Iniciando solicitud...");
        const data = await getDataWithError();
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Solicitud completada.");
    }
}
