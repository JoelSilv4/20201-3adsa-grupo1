package go.travels.backend;

import go.travels.backend.document.User;
import go.travels.backend.repositories.PostRepository;
import go.travels.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class  BackEndApplication implements CommandLineRunner {

	@Autowired
	UserRepository userRepository;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user = new User(
				"Kaique",
				"kaique@gmail.com",
				bCryptPasswordEncoder.encode("123456")
		);

		userRepository.deleteAll();
		userRepository.save(user);
	}
}
