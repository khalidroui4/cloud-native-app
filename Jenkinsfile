pipeline {

```
agent any

stages {

    stage('Build Docker Images') {
        steps {
            sh 'docker compose build'
        }
    }

    stage('Deploy') {
        steps {
            sh 'docker compose up -d'
        }
    }
}
```

}
