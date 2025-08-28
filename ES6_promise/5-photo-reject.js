// Retourne une Promise rejetée avec une erreur contenant le fileName
export default function uploadPhoto(fileName) {
    return Promise.reject(new Error(`${fileName} cannot be processed`));
  }