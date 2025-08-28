// Retourne Promise qui se résout ou se rejette selon la valeur du 'paramètre' success
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }