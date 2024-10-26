<<<<<<< HEAD
# curso-devops-docker
Necesitamos dockerizar la API base que tenemos y estamos usando desde el inicio del curso. Entonces, se va a compartir el código de Dockerfile.
 
1) Necesitamos hacer build de la imagen de docker.
2) Necesitamos hacer run de la imagen de docker
3) Necesitamos que la imagen de docker, al hacer build, ejecute los tests. Si los test no funcionan la imagen no se 'compilará'
 
Comandos a ejecutar:
 
docker build -t ...(El resto lo debéis poner vosotros)
 
docker run -p <>:<> y falta el nombre de la imagen
=======
Necesitamos hacer un CI con jenkins
Pasos
    1) Tener un repo nuevo que se llame curso-devops-jenkins Si ya teneis repo para jenkins no hace falta crear uno nuevo.
    2) Nos clonamos en local este repo
    3) Pegamos las carpetas src y tests y los archivos jest.config.js, package.json y README.md del proyecto base.
    4) Creamos nuestro Jenkinsfile
       1) Necesitamos tener 2 stages. Uno para hacer instalación de dependencias y otro para ejecutar los tests
       2) Recordad poner una tool de nodejs que se llama 'nodejs-18'
       3) También debemos poner los triggers necesarios...
    5) Configurar nuestro repositorio para que ejecute un webhook cada vez que haya un evento nuevo. Recordad el formato de la url... /github.......poner la de ngrok
    6) Una vez configurado el webhook nos vamos a jenkins
    7) En jenkins creamos nuestro job con el template de pipeline
    8) Recordad que en las opciones que nos da a continuación en 'Build triggers' debemos seleccionar Github SCM...
    9) En el apartado de 'Pipeline' debemos introducir la URL del repositorio y MUY IMPORTANTE el escribir la rama donde vamos a hacer los cambios
 
TIP: EL REPO DEBE SER PUBLICO
>>>>>>> bf4d04ca2bfbd2673672cd6db95cbc0e5a5875ce
