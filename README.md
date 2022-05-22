# spring-react-google-oauth2

Google Oauth2 login scenario with Spring boot + React

This diagram based on oauth implicit flow.

![googleOauth drawio](https://user-images.githubusercontent.com/55564829/169686208-1b2926c0-b27e-4154-9853-a4a8ffec286c.png)

You have to make a Google oauth credential first and then replace placeholder in this example with your google cliend id.

### Spring boot

***

This Spring example is based on jwt filter not session.

Every request must contain jwt spring makes.

That jwt is made after process verifying id token.

Spring makes account using information of payload in id token.

The whole process is described below.

1. Verify Id token received from SPA

2. Make account using information of id token

3. Save account to DB using Spring-Data-JPA and H2 database.

4. Make custom JWT

5. Send cookie including custome JWT to client (SPA)

6. Request after login should be validated before API request at JWT filter.


