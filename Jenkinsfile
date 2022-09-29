
@Library('deploy-conf') _
node() {
    try {
        String ANSI_GREEN = "\u001B[32m"
        String ANSI_NORMAL = "\u001B[0m"
        String ANSI_BOLD = "\u001B[1m"
        String ANSI_RED = "\u001B[31m"
        String ANSI_YELLOW = "\u001B[33m"
        
        ansiColor('xterm') {
            stage('Checkout') {
                cleanWs()
                checkout scm
                commit_hash = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                artifact_version = sh(script: "echo " + params.github_release_tag.split('/')[-1] + "_" + commit_hash + "_" + env.BUILD_NUMBER, returnStdout: true).trim()
                echo "artifact_version: "+ artifact_version
            }
        }

         stage('Build') {
            sh """
              docker run -d --name discussion_UI -w /discussionUI node:latest sleep infinity
              docker cp . discussion_UI:/discussionUI/
              docker exec discussion_UI bash -x build.sh
              docker cp discussion_UI:/discussionUI/documentation.tar.gz .
              docker rm discussion_UI  --force
            """
        }

        stage('Archive artifacts'){
                 sh """
                        mkdir doc-artifacts
                        cd doc-artifacts
                        cp ../documentation.tar.gz .
                        tar -xvzf documentation.tar.gz
                        zip -r discussionUI_artifacts.zip:${artifact_version} documentation
                        cp discussionUI_artifacts.zip:${artifact_version} ../
                    """
                 
            archiveArtifacts artifacts: "discussionUI_artifacts.zip:${artifact_version}", fingerprint: true, onlyIfSuccessful: true
            sh """echo {\\"artifact_name\\" : \\"discussionUI_artifacts.zip\\", \\"artifact_version\\" : \\"${artifact_version}\\", \\"node_name\\" : \\"${env.NODE_NAME}\\"} > metadata.json"""
            archiveArtifacts artifacts: 'metadata.json', onlyIfSuccessful: true
            currentBuild.result = "SUCCESS"
            currentBuild.description = "Artifact: ${artifact_version}, Public: ${params.github_release_tag}"
        }
    }
    catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
    finally {
        slack_notify(currentBuild.result)
        email_notify()
    }
}
