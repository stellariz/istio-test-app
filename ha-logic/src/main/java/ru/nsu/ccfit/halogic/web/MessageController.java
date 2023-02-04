package ru.nsu.ccfit.halogic.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nsu.ccfit.halogic.service.GreetingMessageProducer;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MessageController {
    private final GreetingMessageProducer greetingMessageProducer;

    @GetMapping("/get_message")
    public String getMessage() {
        return greetingMessageProducer.getGreetingMessage();
    }
}
