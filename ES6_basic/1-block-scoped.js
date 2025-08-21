export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   //  existent seulement dans le bloc if
    const task2 = false; // ne remplacent pas les variables extérieures
  }

  return [task, task2];
}
