# desafio-web-full-stack

<h2>Passos Iniciais</h2>

1. Clone o Repositório;
2. Extraia os arquivos de react-frontend.tar.gz:
  $ tar -xzf react-frontend.tar.gz
  
3. Configure o ambiente.

<h2>Configurando o ambiente</h2>

1. Instalar o Eclipse:
  $ sudo snap install eclipse --classic
  
2. Instalar o Visual Studio Code:
  $ sudo snap install code --classic
  
3. Instalar Java:
  $ sudo apt install -y openjdk-18-jdk
  $ sudo apt install -y openjdk-18-jre
  
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
   5.1 Open project from file system -> selecionar arquivo 'springboot-backend' do diretório
   
6. Instalar o MySql:
    $ sudo apt update
    $ sudo apt install mysql-server
    $ sudo systemctl start mysql.service
    $ sudo mysql
      > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root197319';
      > exit

    $ mysql -u root -p
    $ senha: root197319

      > ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;
      > exit

7. Instalar o MySql Workbench:
    $ sudo apt update
    $ systemctl is-active mysql
    $ sudo snap install mysql-workbench-community
    $ sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service

8. Abrir o MySql Workbench e entrar no localhost:3306 e digitar a senha 'root197319'.

9. Instalar Node js e Npm:
    $ sudo apt update
    $ sudo apt install nodejs npm

<h2>Rodando o Sistema</h2>

1. Rodar no Eclipse o arquivo 'SpringbootBackendApplication.java'
2. Abrir o arquivo 'react-frontend' no Visual Studio Code, e, no terminal do Visual Studio Code, e digitar o comando:
    $ npm start
    
E o site irá abrir funcionando!
