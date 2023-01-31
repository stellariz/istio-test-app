package ru.nsu.ccfit.hadetails.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserDetailsService {
    private final ObjectMapper objectMapper = new ObjectMapper();
    public String getUserPermissions(String jwt) {
        log.info("Received jwt: {}", jwt);
        try {
            String decodedJwt = new String(Base64.getDecoder().decode(jwt));
            Map<String, List<String>> jwtPayload = objectMapper.readValue(decodedJwt, Map.class);
            return Stream.of(jwtPayload.get("permissions")).map(Object::toString)
                    .collect(Collectors.joining("\n"));
        } catch (IOException e) {
            String errorMsg = String.format("Error in converting jwt: %s", e.getMessage());
            log.error(errorMsg, e);
            throw new IllegalArgumentException(errorMsg);
        }
    }
}
