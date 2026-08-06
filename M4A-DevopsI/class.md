# Cronologia dos projetos

## 3. Front-end, back-end e persistência de dados

### 3.1. Exemplo rápido de front-end

Aprindo projeto framework react

```bash
cd cicd_frontend\reactsite
npm install
npm start
```

Acesso em `localhost:3000`

### 3.2. Integrações com API

Import data do postman em `M4A-DevopsI\cicd_backend\PostmanEcho.postman_collection.json`

### 3.3. Exemplo rápido de back-end: API

Aprindo projeto java com framework springboot

```bash
cd cicd_backend\springbootapi

# 1 - rodas direto
.\mvnw.cmd spring-boot:run

# ou 2 - gerar JAR e executar
.\mvnw.cmd clean package
java -jar target\springbootapi-1.0.0.jar
```

Import data do postman em `M4A-DevopsI\cicd_backend\Descomplica.postman_collection.json`

### 3.4. Acessando banco de dados

Acesso do banco de dados em `localhost:3000/h2-console`

## 5. Construindo nossa imagem

Acesso aos arquivos de teste `docker\01-Dockerfile`

```bash
docker build -t meunginx:latest .

docker image ls
docker container ls

docker run --name MeuBuildNginx -p 8080:80 -d meunginx:latest
```

## 6. Mexendo com arquivos/pastas e volumes

### 6.1. Subindo um "Olá mundo!" com Nginx

Acesso aos arquivos de teste `docker\02-Volumes`

O seguinte comando cria um container simples à partir da imagem do Nginx, sem uso de volume nenhum:

`docker run --name NginxSemVolume -p 9080:80 -d nginx:latest`

Aqui ao acessar a aplicação no browser através do endereço localhost:9080, você verá uma página padrão que já vem com o Nginx, é uma página de boas vindas.

Se quisermos alterar essa página padrão de boas vindas, podemos criar um volume e anexá-lo ao container, fazendo da forma indicada abaixo conseguimos "dizer" ao Nginx para usar uma página nossa, ao invés da página de boas vindas padrão:

`docker run --name NginxComVolume -v /D/temp/docker:/usr/share/nginx/html -p 9180:80 -d nginx:latest`

No Windows, a forma correta de referenciar o diretório atual muda dependendo do terminal. Além disso, como você já está dentro da pasta `02-Volumes` no seu terminal, você deve referenciar apenas o diretório atual, sem adicionar `\docker\02-Volumes` novamente.

Para mapear a pasta atual para o Nginx:

**Se estiver usando PowerShell:**
`docker run --name NginxComVolume -v "${PWD}:/usr/share/nginx/html" -p 9180:80 -d nginx:latest`

**Se estiver usando o Command Prompt (CMD):**
`docker run --name NginxComVolume -v "%cd%:/usr/share/nginx/html" -p 9180:80 -d nginx:latest`

**Se estiver usando o Git Bash ou WSL:**
`docker run --name NginxComVolume -v "$(pwd):/usr/share/nginx/html" -p 9180:80 -d nginx:latest`

> **Aviso:** Como o container `NginxComVolume` já falhou ou foi criado na tentativa anterior, você precisará removê-lo antes de tentar novamente. Você pode fazer isso com o comando: `docker rm -f NginxComVolume`

### 6.2. Subindo um banco de dados

`docker run --name MySQL -p 3306:3306 -e MYSQL_ROOT_PASSWORD=minhaSenha -e MYSQL_USER=meuUsuario -e MYSQL_PASSWORD=usuarioSenha -d mysql:latest`

Criando esquema no MySQL e perdendo dados.
Mas como fazer para não perder os dados ao recriar o container? Indicar pasta para volumes.

`docker run --name MySQLPersistente -v C:\temp\docker:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=minhaSenha -e MYSQL_USER=meuUsuario -e MYSQL_PASSWORD=usuarioSenha -d mysql:latest`

As variaveis e imagens devem ser puxadas na primeira vez, depois nao precisa mais:

`docker run --name MySQLPersistente -v C:\temp\docker:/var/lib/mysql -p 3306:3306 -d mysql:latest`
