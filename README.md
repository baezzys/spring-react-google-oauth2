# spring-react-google-oauth2

Google Oauth2 login scenario with Spring boot + React

Below diagram is based on oauth implicit flow.

![oauthFlow](https://user-images.githubusercontent.com/55564829/172382434-48ed0c73-dadb-4b85-ab22-19d9e1b89033.png)

## Result

![google-oauth-login](https://user-images.githubusercontent.com/55564829/172130755-ab1dc492-0686-407a-8d64-ba9816f941a4.gif)


# How to start

## Prerequiste

You have to make a Google oauth credential first.

This reference will be helpful.

<link>https://docs.retool.com/docs/google-oauth-credentials</link>

##### Caution

When setting up the 'Authorized JavaScript origins' in the Google Developer Console's Credential settings. You have to adding both http://localhost and http://localhost:3000.


<img width="561" alt="스크린샷 2023-12-07 오후 2 25 27" src="https://github.com/baezzys/spring-react-google-oauth2/assets/55564829/284556b1-4c70-4c65-9384-df1e6dc37893">


## Spring boot

1. Edit the value of `app: googleClientId` to your google client id and `app: jwtSecret` to your secret which can be any string longer than 256 bits for security in `application.yml`.

```yaml
app:
  jwtSecret: "String longer than 256 bits"
  googleClientId: "your google client id"
```

2. Type command in terminal
```shell
cd spring-oauth

./gradlew build

cd build/libs

java -jar oauth-0.0.1-SNAPSHOW.jar
```

### The whole process is described below

1. Verify Id token received from the client.

2. Make an account using the information of the id token.

3. Save account to DB using Spring-Data-JPA and H2 database.

4. Make custom JWT.

5. Send cookie including custom JWT to the client.

6. Requesting to API should contain JWT in the request header.

7. JWT filter validates jwt in the request header for every request from the client.

## REACT

1. Edit the value of `REACT_APP-GOOGLE_GOOGLE_CLIENT_ID` in `react-oauth/.env` to your google client id.

```js
REACT_APP_API_URL="http://localhost:8080"
REACT_APP_GOOGLE_CLIENT_ID="your google client-id"
```

2. Type command in terminal
```shell
cd react-oauth

npm install

npm start
```

### The whole process is described below

1. Login with your existing google account.

2. Get an ID token from google.

3. Send ID token to server for login.

4. Get a cookie that contains jwt made by the server.

5. Request user info to the server with a cookie.

6. Show user info.


