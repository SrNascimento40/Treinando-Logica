function podeDirigir (idade) {
    return 'você ${idade < 18 ? "não " : ""}pode dirigir';
};

console.log(podeDirigir(15));