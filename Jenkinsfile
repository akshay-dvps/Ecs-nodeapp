/* Requires the Docker Pipeline plugin */
pipeline {
    agent { any { image 'python:3.12.1-alpine3.19' } }
    stages {
        stage('build') {
            steps {
                sh 'python3 --version'
                sh  'mkdir /tmp/pipeline'
		sh  'sudo apt update'
		sh  'sudo apt install apache2'
		sh  'sudo systemctl start apache2'
		sh   'sudo systemctl enable apache2'
            }
        }
    }
}
