# CadastroLoginPerfil

# Instruções para a inicialização!

1. Baixar o arquivo Zip e extrair;
2. Inicializar o Xamp ou o Laragon;
3. Abrir o MySQL Workbanch e criar uma nova conexao sem senha;
4. Colar esse código no Workbanch;

"drop database appdelivery;

create database appdelivery;

use appdelivery;


CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(255) NOT NULL,
    email_cliente VARCHAR(255) UNIQUE NOT NULL,
    senha_cliente VARCHAR(255) NOT NULL,
    telefone_cliente VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE restaurantes (
    id_restaurante INT AUTO_INCREMENT PRIMARY KEY,
    nome_restaurante VARCHAR(255) NOT NULL,
    telefone_restaurante VARCHAR(20),
    endereco_restaurante VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE pratos (
    id_prato INT AUTO_INCREMENT PRIMARY KEY,
    nome_prato VARCHAR(100),
    preco_prato DECIMAL(10, 2),
    categoria_prato VARCHAR(50),
    restaurante_id INT,
    FOREIGN KEY (restaurante_id) REFERENCES restaurantes(id_restaurante)
);


CREATE TABLE itens_pedido (
    id_item_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    descricao_item VARCHAR(150)
);

CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    foto_pedido BLOB,
    nome_pedido VARCHAR(100),
    preco_pedido DECIMAL(6, 2),
    restaurante_pedido INT,
    status_pedido VARCHAR(60),
    descricao_pedido VARCHAR(200),
    id_cliente INT,
    id_items_pedido INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (restaurante_pedido) REFERENCES restaurantes(id_restaurante),
    FOREIGN KEY (id_items_pedido) REFERENCES itens_pedido(id_item_pedido)
);

-- Serviço: avaliacoes
CREATE TABLE avaliacoes (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    restaurante_id INT NOT NULL,
    pedido_id INT NOT NULL,
    nota INT NOT NULL,
    comentario TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (restaurante_id) REFERENCES restaurantes(id_restaurante),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id_pedido)
);"

5. Rodar o banco de dados;
6. Ir para a pasta extraida e digitar cmd.;
7. Após abrir o prompt de comando, digitar npm start;
8. Após isso, o prompt ira te dizer em qual porta o aplicativo está rodando;
9. Em seu navegador, digitar http://localhost:3000/login;
10. Caso queira acessar o cadastro de restaurantes, apenas digite http://localhost:3000/register_restaurant.html
11. Pronto, você podera executar as funcionalidades do serviço 1.
