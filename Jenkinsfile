pipeline {

agent any

stages {

stage('Clone Repository') {
steps {
git 'https://github.com/yourusername/student-notes-portal.git'
}
}

stage('Build Docker Image') {
steps {
sh 'docker build -t notes-portal .'
}
}

stage('Run Docker Container') {
steps {
sh 'docker run -d -p 8081:80 notes-portal'
}
}

}

}