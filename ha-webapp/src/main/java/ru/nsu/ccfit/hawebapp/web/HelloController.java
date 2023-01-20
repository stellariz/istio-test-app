package ru.nsu.ccfit.hawebapp.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nsu.ccfit.hawebapp.service.GreetingMessageService;

@Slf4j
@RestController
@RequestMapping("/hello")
@RequiredArgsConstructor
public class HelloController {
    private final GreetingMessageService greetingMessageService;

    @GetMapping("/greeting")
    public String getGreeting() {
        return greetingMessageService.getGreetingMessage();
    }
}
