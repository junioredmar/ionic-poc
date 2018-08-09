# ionic-poc

## Buildar:
npm install
cordova platform add android
cordova build android
- vai gerar o apk em: C:\Projects\iot\desk4me\poc-ionic\ionic-poc\deskformepoc\platforms\android\app\build\outputs\apk\debug

###IOS:
npm install -g ios-deploy --unsafe-perm=true
cordova platform rm ios
- alterar o config.xml: ionic.starter
cordova platform add ios
ionic cordova build ios
sudo chmod -R 777 ./deskformepoc/platforms/ios

#### Xcode
abrir o projeto no xcode
trocar o destino do player para o DEVICE
Clicar no projeto - General - Signing - Team: escolher o meu
- [Code Signing error](https://stackoverflow.com/questions/37806538/code-signing-is-required-for-product-type-application-in-sdk-ios-10-0-stic)
Apertar o PLAY
- permitir acesso as chaves com a senha do pc local

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

