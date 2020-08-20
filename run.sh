#!/bin/bash
echo ""
echo ""
echo "##########################################"
echo "# Creating infrastrucuture for test-ppro #"
echo "##########################################"
kubectl apply -f boostrap/01-mysql-deployment.yaml
kubectl create ns argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
sleep 360

kubectl apply -f boostrap/

sleep 240
echo ""
echo ""
echo "###################"
echo "# Endpoint Argocd #"
echo "###################"
kubectl -n argocd get ep argocd-server

echo ""
echo ""
echo "###########################"
echo "# Password admin - Argocd #"
echo "###########################"
kubectl get pods -n argocd -l app.kubernetes.io/name=argocd-server -o name | cut -d'/' -f 2

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
kubectl -n dev get ep

echo ""
echo "###########################"
echo "# Endpoint test-ppro PROD #"
echo "###########################"
kubectl -n prod get ep
