#!/bin/bash
echo ""
echo ""
echo "##########################################"
echo "# Creating infrastrucuture for test-ppro #"
echo "##########################################"
k3s kubectl apply -f boostrap/01-mysql-deployment.yaml
k3s kubectl create ns argocd
k3s kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
sleep 20
k3s kubectl apply -f boostrap/

sleep 60
echo ""
echo ""
echo "###################"
echo "# Endpoint Argocd #"
echo "###################"
k3s kubectl -n argocd get ep argocd-server

echo ""
echo ""
echo "###########################"
echo "# Password admin - Argocd #"
echo "###########################"
k3s kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2

echo ""
echo ""
echo "########################################"
echo "# Waiting running deployment test-ppro # "
echo "########################################"
sleep 60

echo ""
echo "##########################"
echo "# Endpoint test-ppro DEV #"
echo "##########################"
k3s kubectl -n dev get ep

echo ""
echo "###########################"
echo "# Endpoint test-ppro PROD #"
echo "###########################"
k3s kubectl -n prod get ep
