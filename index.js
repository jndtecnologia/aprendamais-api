const restify = require('restify');

function palavraprincipal(req, res, next) {
    const mensagem = {
        texto: 'teste'
    }

    res.json(mensagem);
    next();
}

const server = restify.createServer({
    name: 'servidor'
});

/* http://localhost:5000/palavraprincipal - > chamar a função palavraprincipal */
server.get('/palavra', palavraprincipal);

server.listen(5000, function(){
 console.log('Api escutando na porta 5000', server.name);
});

