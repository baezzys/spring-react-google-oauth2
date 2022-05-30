package com.google.oauth.controller;

import com.google.oauth.dto.IdTokenRequestDto;
import com.google.oauth.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/v1/oauth")
public class LoginController {

    @Autowired
    AccountService accountService;

    @PostMapping("/login")
    public ResponseEntity LoginWithGoogleOauth2(@RequestBody IdTokenRequestDto requestBody, HttpServletResponse response) {
        String authToken = accountService.loginOAuthGoogle(requestBody);
        Cookie cookie = new Cookie("AUTH-TOKEN", authToken);
        cookie.setMaxAge(7 * 24 * 3600); // expires in 7 days
        // cookie.setSecure(true); // use with HTTPS
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        response.addCookie(cookie);
        return ResponseEntity.ok().build();
    }
}
