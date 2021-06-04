pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        zsh build.zsh
      }
    }

    stage('Test') {
      steps {
        zsh test.zsh
      }
    }

    stage('Deploy') {
      steps {
        zsh deploy.zsh
      }
    }

  }
}
