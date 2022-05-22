# spring-react-google-oauth2

Google Oauth2 login scenario with Spring boot + React

You have to make a Google oauth credential first and then replace placeholder in this example with your google cliend id.

This diagram based on oauth implicit flow.

![googleOauth drawio](https://user-images.githubusercontent.com/55564829/169686208-1b2926c0-b27e-4154-9853-a4a8ffec286c.png)



### Spring boot

***

The whole process is described below.

1. Verify Id token received from SPA

2. Make account using information of id token

3. Save account to DB using Spring-Data-JPA and H2 database.

4. Make custom JWT

5. Send cookie including custome JWT to client (SPA)

6. Request to API without login should be validated before API request at JWT filter.


