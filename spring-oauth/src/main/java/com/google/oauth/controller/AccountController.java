package com.google.oauth.controller;

import com.google.oauth.repository.AccountRepository;
import com.google.oauth.user.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/v1/oauth")
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @GetMapping("/user/info")
    public ResponseEntity getUserInfo(Principal principal) {
        Account account = accountRepository.findById(Long.valueOf(principal.getName())).orElse(null);
        return ResponseEntity.ok().body(account.getEmail());
    }
}
