pipeline {
  agent any

  stages {

    stage("Update Code") {
      steps {
        sh "git pull origin main"
      }
    }

    stage("Restart Backend") {
      steps {
        sh """
          pkill node || true
          node app.js &
        """
      }
    }

  }
}
