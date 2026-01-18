#!/bin/bash

rm applications/*

# SnakeGame
echo "Moving snake apk..."
cp -r /home/iasonas/Projects/SnakeGameAndroid/android/build/outputs/apk/debug/android-debug.apk applications/
mv applications/android-debug.apk applications/SnakeGame.apk

# Maths App
echo "Moving maths apk..."
cp -r /home/iasonas/AndroidStudioProjects/Multiplication/app/build/outputs/apk/debug/app-debug.apk applications/
mv applications/app-debug.apk applications/MathsTrainer.apk

# Irregular Verbs Trainer
echo "Moving irregular_verbs apk..."
cp -r /home/iasonas/AndroidStudioProjects/IrreguarVerbsQuiz/app/build/outputs/apk/debug/app-debug.apk applications/
mv applications/app-debug.apk applications/IrregularVerbsTrainerApp.apk

# Toolbox App
echo "Moving toolbox apk..."
cp -r /home/iasonas/AndroidStudioProjects/Toolbox/app/build/outputs/apk/debug/app-debug.apk download_toolbox/files/
mv download_toolbos/files/app-debug.apk download_toolbox/files/ToolboxApp.apk

# Screensaver
echo "Moving screensaver apk..."
cp -r /home/iasonas/AndroidStudioProjects/Screensaver/app/build/outputs/apk/debug/app-debug.apk download_screensaver/files/
mv download_screensaver/files/app-debug.apk download_screensaver/files/ScreensaverApp.apk



echo "WARNING! Cannot copy Victims2 Game"

# echo "WARNING! Updating windows installation files requires manual moving."
# echo "Updating linux files for VIctims2_Game..."
# echo "Copying files..."
# cp -r /home/iasonas/IdeaProjects/Victims2-Lib/Victims2 desktop/victims/linux/
# echo "Packaging files into .tar.tz archive..."
# tar -cf desktop/victims/linux/Victims2_Game.tar.gz desktop/victims/linux/Victims2
# echo "Removing binary folder..."
# rm -r desktop/victims/linux/Victims2

