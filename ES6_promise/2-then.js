// utlisiation function prototype
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('Got a response from the API'));
      }
    });
  }
  if (error) {
    resolve ('Got a response from the API');
  }