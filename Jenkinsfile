pipeline {
  agent any

  environment {
    IMAGE = "anildhami007/backend-app:latest"
    DOCKERHUB = credentials('dockerhub-creds')
    EC2_IP = "54.216.31.64"
  }

  stages {

    stage("Build Image") {
      steps {
        sh "docker build -t $IMAGE ."
      }
    }

    stage("Push Image") {
      steps {
        sh """
          echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USR --password-stdin
          docker push $IMAGE
        """
      }
    }

    stage("Deploy to EC2") {
      steps {
        sh """
          ssh -o StrictHostKeyChecking=no ubuntu@$EC2_IP '
            docker pull $IMAGE &&
            docker rm -f backend || true &&
            docker run -d --name backend -p 5000:5000 $IMAGE
          '
        """
      }
    }

  }
}
