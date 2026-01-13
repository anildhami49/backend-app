pipeline {
  agent any

  stages {
    stage("Update Code") {
      steps {
        sh """
          cd /home/ubuntu/backend-app
          git pull origin main
        """
      }
    }

    stage("Restart Backend") {
      steps {
        sh """
          pkill node || true
          node /home/ubuntu/backend-app/app.js &
        """
      }
    }
  }
}
