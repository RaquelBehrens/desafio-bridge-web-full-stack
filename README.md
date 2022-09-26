# desafio-web-full-stack

Vídeo mostrando o resultado final: https://youtu.be/PshVgl6sY44

<h2>Passos Iniciais</h2>

1. Clone o Repositório;
2. Dentro da pasta react-frontend:
    <p>$ npm install</p>
  
3. Configure o ambiente.

<h2>Configurando o ambiente</h2>

1. Instalar o Eclipse:
    <p>$ sudo snap install eclipse --classic</p>
  
2. Instalar o Visual Studio Code:
    <p>$ sudo snap install code --classic</p>
  
3. Instalar Java:
    <p>$ sudo apt install -y openjdk-18-jdk</p>
    <p>$ sudo apt install -y openjdk-18-jre</p>
  
  3.1 Abrir novo terminal e:
  
    $ sudo apt update
    $ wget https://download.oracle.com/java/18/latest/jdk-18_linux-x64_bin.deb
    $ sudo apt install ./jdk-18_linux-x64_bin.deb

    $ cat <<EOF | sudo tee /etc/profile.d/jdk18.sh
      > export JAVA_HOME=/usr/lib/jvm/jdk-18
      > export PATH=\$PATH:\$JAVA_HOME/bin
      > EOF

    $ source /etc/profile.d/jdk18.sh

    $ java -version

4. Abrir o eclipse, abrir o marketplace e instalar 'spring tool 3'

5. No eclipse:
   <p>5.1 Open project from file system -> selecionar arquivo 'springboot-backend' do diretório</p>
   
6. Instalar o MySql:
    
    <p>$ sudo apt update</p>
    <p>$ sudo apt install mysql-server</p>
    <p>$ sudo systemctl start mysql.service</p>
    <p>$ sudo mysql</p>
      <p>> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root197319';</p>
      <p>> exit</p>

    <p>$ mysql -u root -p</p>
    <p>$ senha: root197319</p>

      <p>> ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;</p>
      <p>> exit</p>

7. Instalar o MySql Workbench:
    <p>$ sudo apt update</p>
    <p>$ systemctl is-active mysql</p>
    <p>$ sudo snap install mysql-workbench-community</p>
    <p>$ sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service</p>

8. Abrir o MySql Workbench e entrar no localhost:3306 e digitar a senha 'root197319'.

9. Instalar Node js e Npm:
    <p>$ sudo apt update</p>
    <p>$ sudo apt install nodejs npm</p>

<h2>Rodando o Sistema</h2>

1. Rodar no Eclipse o arquivo 'SpringbootBackendApplication.java'
2. Abrir o arquivo 'react-frontend' no Visual Studio Code, e, no terminal do Visual Studio Code, e digitar o comando:
    <p>$ npm start</p>
    
E o site irá abrir funcionando!
