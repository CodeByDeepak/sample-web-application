pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Repository checked out successfully.' 
            }
        }

        stage('Deploy Application') {
            steps {
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
