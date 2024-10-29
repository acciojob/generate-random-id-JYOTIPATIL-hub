function makeid(l) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < l; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Examples
console.log(makeid(5));   // e.g., "K3f2G"
console.log(makeid(10));  // e.g., "aB9EfgT2X1"
