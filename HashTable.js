class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      return false;
    }

    return this.keyMap[index].find(keyValue => {
      return keyValue[0] === key;
    })[1];
  }

  keys() {
    const keys = [];
    for (let index of this.keyMap) {
      if (!index) continue;
      index.forEach(keyValue => {
        keys.push(keyValue[0]);
      });
    }
    return [...new Set(keys)];
  }

  values() {
    const values = [];
    for (let index of this.keyMap) {
      if (!index) continue;
      index.forEach(keyValue => {
        values.push(keyValue[1]);
      });
    }
    return [...new Set(values)];
  }

  _hash(key) {
    const PRIME = 31;
    let total = 0;
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

let hashtable = new HashTable(3);
hashtable.set('blue', 'henlo');
hashtable.set('red', 'stinky');
hashtable.set('green', 'lizard');
hashtable.set('green', 'lizard');
