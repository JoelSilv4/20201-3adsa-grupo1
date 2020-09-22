package go.travels.backend;

import go.travels.backend.document.Usuario;
import go.travels.backend.repositories.UsuarioRepository;
import go.travels.backend.utils.SenhaUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class  BackEndApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
	@Autowired
	UsuarioRepository usuarioRepository;

	@Override
	public void run(String... args) throws Exception {

		SenhaUtils su = new SenhaUtils();
		usuarioRepository.deleteAll();

		Usuario us = new Usuario(
			"Kaique",
				"adm@empresa.com",
				su.gerarBcrypt("123456")
		);

		usuarioRepository.save(us);


		System.out.println(us.getId());
	}
}
