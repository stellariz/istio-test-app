package ru.nsu.ccfit.hadetails.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nsu.ccfit.hadetails.service.UserDetailsService;

@RestController
@RequestMapping("/api/details")
@RequiredArgsConstructor
public class HaDetailsController {
    private final UserDetailsService userDetailsService;
    @GetMapping("/permissions")
    private String getPermissions(@RequestHeader(value="x-token") String jwt) {
        return userDetailsService.getUserPermissions(jwt);
    }
}
