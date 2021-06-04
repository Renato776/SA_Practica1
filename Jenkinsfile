pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo hello world && echo pwd && whoami'
      }
    }

    stage('Test') {
      steps {
        sh 'echo testing && pwd && ls && whoami && touch test.txt && ls &&  echo success'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo performing deployment && ls && pwd && whomai && echo alright'
      }
    }

  }
}