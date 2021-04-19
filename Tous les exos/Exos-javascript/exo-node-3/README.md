# exo-node-3

## Server.js

Serveur express qui gère certaines erreurs avec .status(400)
Page d'accueil http://localhost:3333/calc/

Le serveur propose de tester son fonctionnement au demarage ('node server.js'), avec la possibilité de lui faire iterer (boucle for) des add, sub, mul... aléatoirement. Si 0 iterations, le serveur se lance simplement.

Des objets seront retournés pour chaque itérations.

## client.js

client.js sera executé sur server.js lors du lancement, pas besoin de l'executer indépendament.

## web-info.js

Lors de l'execution de web-info.js, il sera demandé l'url du site visé, ainsi que le nom du fichier json à créer. Il n'est pas nécessaire de spécifier l'extension, elle sera en .json par défaut.
6 éléments seront renvoyés ( url, contentlength, title, nbUrls, nbImgs, nbDivs)
