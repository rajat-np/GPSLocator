Steps to reproduce this repo:

```
react-native init reactNativeMapsExample
cd reactNativeMapsExample
rm -rf node_modules
npm i -S react-native@0.49 #at the moment of creation there was a bug React Native version mismatch
npm i
react-native link
react-native run-ios

```
[Download](https://drive.google.com/open?id=1FruH17P-1atICjAxrW3nS1kp7iPlGyqn)
There is a bug in react-native-map component which makes this app unable to run in android > 6. 
# ScreenShots

![Alt text](Screenshots/Screenshot_2018-05-28-12-30-29-504_com.gpslocator.png?raw=true "")

# After Update button clicked

![Alt text](Screenshots/Screenshot_2018-05-28-12-30-36-704_com.gpslocator.png?raw=true "")