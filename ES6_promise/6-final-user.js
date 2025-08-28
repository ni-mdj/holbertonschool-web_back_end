// Combine signUpUser et uploadPhoto : retourne un tableau avec le statut et la valeur/erreur de chaque Promise
import signUpUser from '/4-user-promise';
import uploadPhoto from '/5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);
}
