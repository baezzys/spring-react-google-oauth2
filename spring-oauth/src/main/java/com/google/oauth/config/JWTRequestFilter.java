package com.google.oauth.config;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

@Component
public class JWTRequestFilter extends OncePerRequestFilter {

    private final JWTUtils jwtUtils;

    public JWTRequestFilter(JWTUtils jwtUtils) {
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        Cookie[] cookies = request.getCookies();
        Cookie authCookie = cookies == null ? null : Arrays.stream(cookies)
                .filter(cookie -> cookie.getName().equals("AUTH-TOKEN"))
                .findAny().orElse(null);
        Authentication authentication;
        if (authCookie != null && (authentication = jwtUtils.verifyAndGetAuthentication(authCookie.getValue())) != null) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }
}

