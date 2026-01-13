pipeline {
  agent any

  environment {
    IMAGE = "anildhami007/backend:latest"
    CONTAINER = "backend"
  }

  stages {
    stage("Checkout") {
      steps {
        git branch: 'main',
            url: 'https://github.com/<your-username>/backend-repo.git'
      }
    }

    stage("Build Image") {
      steps {
        sh "docker build -t $IMAGE ."
      }
    }

    stage("Push Image") {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'USER',
          passwordVariable: 'PASS'
        )]) {
          sh """
            echo $PASS | docker login -u $USER --password-stdin
            docker push $IMAGE
          """
        }
      }
    }

    stage("Deploy") {
      steps {
        sh """
          docker pull $IMAGE
          docker rm -f $CONTAINER || true
          docker run -d --name $CONTAINER -p 5000:5000 $IMAGE
        """
      }
    }
  }
}
