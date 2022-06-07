# spring-react-google-oauth2

Google Oauth2 login scenario with Spring boot + React

You have to make a Google oauth credential first and then replace the placeholder in this example with your google client id.

This diagram is based on oauth implicit flow.

![oauthFlow](https://user-images.githubusercontent.com/55564829/172382434-48ed0c73-dadb-4b85-ab22-19d9e1b89033.png)

## Result

![google-oauth-login](https://user-images.githubusercontent.com/55564829/172130755-ab1dc492-0686-407a-8d64-ba9816f941a4.gif)


## Spring boot

### How to start

1. Edit the value of `app: googleClientId` to your google client id and `app: jwtSecret` to your secret which can be any string longer than 256 bits for security in `application.yml`.

```yaml
app:
  jwtSecret: "String lonnger than 256 bits"
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

### How to start

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


