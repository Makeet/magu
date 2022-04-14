#Local에서 Https 링크 적용하기

###keytool을 이용하여 파일을 생성한다.

프로젝트의 최상위 루트에 다음과 같은 명령어를 터미널/커맨드에 입력합니다.
```
keytool -genkey -alias bns-ssl -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore keystore.p12 -validity 3650
```
- keystore.p12: 파일명
- bns-ssl: key-alias 에 입력할 값
- PKC12: type인데 타입을 찾을 수 없다고 떠서 application.properties에는 추가하지 않았다

추후 application.properties에 아래의 값을 입력합니다.
```
server.ssl.enabled=true
server.ssl.key-store=keystore.p12   #파일명
server.ssl.key-store-password=      #.p12 생성시에 입력한 비밀번호
server.ssl.key-alias=bns-ssl
```