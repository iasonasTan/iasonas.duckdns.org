#!/bin/bash

EXE_FILE_PATH="/home/iasonas/Downloads/GameEXE.zip"
DEB_FILE_PATH="/home/iasonas/Downloads/GameDEB.zip"
JAR_FILE_PATH="/home/iasonas/Downloads/GameJar.zip"

echo "Copying archives..."
sudo mv $EXE_FILE_PATH $DEB_FILE_PATH $JAR_FILE_PATH files/

echo "Unzipping archives into /files/..."
sudo unzip files/GameEXE.zip -d files/
sudo unzip files/GameDEB.zip -d files/
sudo unzip files/GameJar.zip -d files/

echo "Deleting archives..."
sudo find files/ -type f -name "*.zip" -delete

echo "Ranaming files..."
sudo mv files/Vouli-Game-1.0.exe files/Game.exe
sudo mv files/vouli-game_1.0-1_amd64.deb files/Game.deb
sudo mv files/Vouli-Game.jar files/Game.jar