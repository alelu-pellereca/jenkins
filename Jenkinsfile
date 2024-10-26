pipeline {
    agent any
 
    environment {
        FLY_API_TOKEN=credentials('FLY_API_TOKEN_J')
    }
 
    tools {
        nodejs "nodejs-18"
    }
 
    triggers{
        githubPush()
    }
    
    stages {
 
        stage('Install Fly.io') {
            steps {
                echo 'Installing Fly.io....'
                withCredentials([string(credentialsId: 'FLY_API_TOKEN_J', variable: 'FLY_API_TOKEN_J')]) {
                    sh '''
                        # Instalar flyctl si no está ya disponible
                        curl -L https://fly.io/install.sh | sh
                        export FLYCTL_INSTALL="/var/jenkins_home/.fly"
                        export PATH="$FLYCTL_INSTALL/bin:$PATH"
                        # Autenticarse con Fly.io
                        fly auth token $FLY_API_TOKEN_J
                    '''
                }
            }
        }
        stage('Install dependencies'){
            steps {
                echo 'Installing...'
                sh 'npm install'
            }
        }
        stage('Deploy to Fly.io') {
            steps {
                echo 'Deploying the project to Fly.io...'
                sh '/var/jenkins_home/.fly/bin/flyctl deploy --app mi-primer-cicd-completo'
            }
        }
    }
}