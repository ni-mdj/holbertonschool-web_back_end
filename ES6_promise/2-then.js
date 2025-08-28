// Gère une Promise : retourne un objet si success, une erreur sinon, et loggue toujours un message
export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => new Error())
      .finally(() => {
        console.log('Got a response from the API');
      });
  }