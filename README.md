# ionic-poc

## Buildar:
npm install
ionic cordova platform add android
ionic cordova build android
- vai gerar o apk em: C:\Projects\iot\desk4me\poc-ionic\ionic-poc\deskformepoc\platforms\android\app\build\outputs\apk\debug

## Rodar:
ionic serve
    - http://localhost:8101/
ionic cordova run android


#Instalar android studio e baixar o SDK.
- abrir o android studio para gerar a licensa

# ANDROID_HOME
- colocar no path:
C:\Users\edmar\AppData\Local\Android\Sdk
- echo %ANDROID_HOME%
C:\Program Files\Java\jdk...
- ver se o "javac -help" funciona

# Debug?
chrome://inspect/#devices

## QR CODE:
- [ionic](https://ionicframework.com/docs/native/qr-scanner/)
- [GITHUB](https://github.com/bitpay/cordova-plugin-qrscanner/blob/20d8009a267b272e450b631cffd55fcd45f11bc5/tests/library/index.html)
- [exemplo](https://github.com/tomatobang/tomato-ionic)
