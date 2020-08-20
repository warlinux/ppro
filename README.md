# test-ppro

Project test-ppro

## Requeriments for running this project in localhost

Do you have a minikube to run this project

https://kubernetes.io/docs/tasks/tools/install-minikube/

## Usage

1 - Clone this project 
```bash
git clone https://github.com/warlinux/ppro.git
cd ppro
``` 

2 - Execute project test

```bash
./run.sh
``` 

3 - Validating the result

After finishing ./run.sh, you can open the browser using the endpoint for DEV and PROD
or use command "curl" to validate the result.

Ex:
##########################
# Endpoint test-ppro DEV #
##########################
NAME        ENDPOINTS        AGE
test-ppro   10.42.0.8:3000   117s


```bash
curl 10.42.0.8:3000
``` 

4 - Open ArgoCD Dashboard

Open browser with result Endpoint Argocd and password admin showed after finish command ./run.sh

Ex: 
###################
# Endpoint Argocd #
###################
NAME            ENDPOINTS                       AGE
argocd-server   10.42.0.6:8080,10.42.0.6:8080   81s


###########################
# Password admin - Argocd #
###########################
argocd-server-75877b6ffb-bcf4b




