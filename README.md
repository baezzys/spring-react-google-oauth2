# spring-react-google-oauth2

Google Oauth2 login scenario with Spring boot + React

You have to make a Google oauth credential first and then replace placeholder in this example with your google cliend id.

This diagram based on oauth implicit flow.

![googleOauth drawio (1)](https://user-images.githubusercontent.com/55564829/170871906-d3beb965-bd0b-49cc-a1ad-4ce1e0a1ef29.png)



## Result

![google-oauth-login](https://user-images.githubusercontent.com/55564829/172130755-ab1dc492-0686-407a-8d64-ba9816f941a4.gif)


## Spring boot

### How to start

Edit value of `app: googleClientId` to your google client id and `app: jwtSecret` to your secret which can be any string lonnger than 256 bits for security in `application.yml`.


```shell
cd spring-oauth

./gradlew build

cd build/libs

java -jar oauth-0.0.1-SNAPSHOW.jar
```

### The whole process is described below

1. Verify Id token received from client.

2. Make account using information of id token.

3. Save account to DB using Spring-Data-JPA and H2 database.

4. Make custom JWT.

5. Send cookie including custome JWT to client.

6. Requesting to API should be contain JWT in request header.

7. JWT filter validates jwt in reqeust header for every reqeusts from client.

## REACT

### How to start

Edit value of `REACT_APP-GOOGLE_GOOGLE_CLIENT_ID` in `react-oauth/.env` to your google client id.

```shell
cd react-oauth

npm install

npm start
```

### The whole process is described below

1. Login with your existing google account.

2. Get a ID token from google.

3. Send ID token to server for login.

4. Get a cookie which contains jwt made by server.

5. Request user info to server with cookie.

6. Show user info.


