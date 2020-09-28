package go.travels.backend;

import go.travels.backend.document.Filter;
import go.travels.backend.document.User;
import go.travels.backend.repositories.FilterRepository;
import go.travels.backend.repositories.TripRepository;
import go.travels.backend.repositories.UserRepository;
import go.travels.backend.services.FilterService;
import go.travels.backend.services.TripService;
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

	@Autowired
	TripRepository tripService;

	@Autowired
	FilterRepository filterService;

	@Override
	public void run(String... args) throws Exception {

		userRepository.deleteAll();
		filterService.deleteAll();
		tripService.deleteAll();

		User us = new User(
			"Kaique",
				"adm@empresa.com",
				"123456"
		);

		Filter filter = new Filter(
				"mcdonalds",
				"-800",
				"900",
				"5f724b85b9b1ee18ffb4ac48"
		);

		filterService.save(filter);
		userRepository.save(us);

		System.out.println(filter.getId());
	}
}
