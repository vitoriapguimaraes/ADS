let minhaPromessa = new Promise((resolve, reject) => {

    let sucesso = true;

    if (sucesso) {

        resolve("Sucesso!");

    } else {

        reject("Erro!");
    }

});

minhaPromessa.then(result => {

    console.log(result);

}).catch(error => {

    console.error(error);

}).finally(() => {

    console.log("Operação concluída");

});