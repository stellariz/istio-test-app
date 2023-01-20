package ru.nsu.ccfit.halogic.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class GreetingMessageProducer {
    private final String greetingMessage = "Hello";

    public String getGreetingMessage() {
        log.info("Returning greeting message: {}", greetingMessage);
        return greetingMessage;
    }
}
