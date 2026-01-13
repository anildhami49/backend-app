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
          nohup node app.js >/dev/null 2>&1 &
        """
      }
    }

  }
}
