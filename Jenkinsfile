pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/khalidroui4/cloud-native-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}