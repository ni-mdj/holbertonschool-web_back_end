// créer un ArrayBuffer et écrire un entier signé 8‑bits (Int8) à une position donnée
// ArrayBuffer(length) alloue une zone mémoire binaire de length octets. DataView(buffer) donne une “vue” permettant de lire/écrire divers types (Int8, Int16, Float32, etc.).
export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
  
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    view.setInt8(position, value);
    return view;
  }