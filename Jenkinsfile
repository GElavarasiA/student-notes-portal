pipeline {
    agent any

    stages {

        stage('Clone Project') {
            steps {
                echo 'Cloning project from GitHub'
            }
        }

        stage('Build') {
            steps {
                echo 'Static website build successful'
            }
        }

        stage('Run Website') {
            steps {
                bat 'start index.html'
            }
        }

    }
}