package ru.nsu.ccfit.hawebapp.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "haLogicClient",
             url = "${ha.logic.api.url}")
public interface HaLogicClient {
    @GetMapping("/get_message")
    String getGreetingMessage();
}
