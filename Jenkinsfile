pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the Git repository
                git 'https://github.com/CodeByDeepak/sample-web-application.git'
            }
        }
        stage('Deploy Application') {
            steps {
                // Directly execute SSH commands
                sh '''
                    ssh ubuntu@54.172.49.172 'rm -rf sample-web-application'
                    ssh ubuntu@54.172.49.172 'git clone https://github.com/CodeByDeepak/sample-web-application.git'
                    ssh ubuntu@54.172.49.172 'cd sample-web-application && pm2 stop 0'
                    ssh ubuntu@54.172.49.172 'cd sample-web-application && pm2 start index.js'
                '''
            }
        }
    }
}
