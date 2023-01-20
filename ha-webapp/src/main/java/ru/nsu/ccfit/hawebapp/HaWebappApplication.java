package ru.nsu.ccfit.hawebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class HaWebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(HaWebappApplication.class, args);
	}

}
