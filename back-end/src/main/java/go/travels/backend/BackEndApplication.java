package go.travels.backend;

import go.travels.backend.document.User;
import go.travels.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class  BackEndApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	@Autowired
	UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		userRepository.deleteAll();

		User us = new User(
			"Kaique",
				"adm@empresa.com",
				"123456"
		);

		userRepository.save(us);
		User email = userRepository.findByEmail(us.getEmail());
		System.out.println(email.getEmail());
	}
}
