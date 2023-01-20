package ru.nsu.ccfit.hawebapp.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.nsu.ccfit.hawebapp.feign.HaLogicClient;

@Service
@Slf4j
@RequiredArgsConstructor
public class GreetingMessageService {
    private final HaLogicClient haLogicClient;

    public String getGreetingMessage() {
        String greetingMessageResponse = haLogicClient.getGreetingMessage();
        log.info("Receiving greeting message: {}", greetingMessageResponse);
        return greetingMessageResponse;
    }
}
