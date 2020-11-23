package go.travels.backend.archive;

import java.io.IOException;

public class TesteArchive {
    public static void main(String args[]) throws IOException {
        String path = "arquivo-teste.txt";

        FileHandler.escritor(path);
        FileHandler.leitor(path);

    }
}
