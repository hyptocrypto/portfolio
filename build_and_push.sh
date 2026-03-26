#!/bin/bash

docker build --platform linux/amd64 . -t personal-page -f ./Dockerfile &&
    docker tag personal-page us-east1-docker.pkg.dev/proven-country-295110/personal-page/personal-page:latest &&
    docker push us-east1-docker.pkg.dev/proven-country-295110/personal-page/personal-page:latest &&
    gcloud run deploy personal-page \
        --image us-east1-docker.pkg.dev/proven-country-295110/personal-page/personal-page:latest \
        --region us-central1 \
        --platform managed \
        --allow-unauthenticated
