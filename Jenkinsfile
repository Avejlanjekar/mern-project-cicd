pipeline {
    agent any

    environment {
        MONGO_URI = credentials('mongo-uri')
    }

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/yourusername/mern-cicd.git', branch: 'main'
            }
        }

        stage('Prepare Frontend Env') {
            steps {
                sh '''
                echo "REACT_APP_API_URL=http://3.110.160.208:5000/api" > client/.env
            
                '''
            }
        }

        stage('Build & Deploy') {
            steps {
                sh """
                docker-compose down || true
                docker-compose up -d --build
                """
            }
        }
    }
}