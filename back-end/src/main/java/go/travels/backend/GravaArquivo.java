package go.travels.backend;

import go.travels.backend.document.Trip;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class GravaArquivo {

    public static void gravaRegistro (String nomeArq, String registro) {
        BufferedWriter saida = null;
        try {
            // o argumento true é para indicar que o arquivo não será sobrescrito e sim
            // gravado com append (no final do arquivo)
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        } catch (IOException e) {
            System.err.printf("Erro na abertura do arquivo: %s.\n", e.getMessage());
        }

        try {
            saida.append(registro + "\n");
            saida.close();

        } catch (IOException e) {
            System.err.printf("Erro ao gravar arquivo: %s.\n", e.getMessage());
        }
    }



    public static void main(String[] args) {

        Trip trip1 = new Trip("123123","534534","46463523","5464342","Canada","10000");
        Trip trip2 = new Trip("34534","435453","34534","45345","Toronto","11000");
        Trip trip3 = new Trip("435345","453543","43534","45345","machupixo","12000");

        String nomeArq = "ArquivoDeViagens.txt";
        String header = "";
        String corpo = "";
        String trailer = "";
        int contRegDados = 0;

        // Monta o registro header
        Date dataDeHoje = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        header += "00VIAGEM20202";
        header += formatter.format(dataDeHoje);
        header += "01";

        // Grava o registro header
        gravaRegistro(nomeArq, header);

        // Monta o corpo

        // 1o registro de dados
        corpo += "02";
        // %-5s : para strings, usamos s
        //        - alinha para a esquerda, campo de 5 caracteres, completa
        //        espaços com brancos à direita
        corpo += String.format("%-5s" ,trip1.getDestiny());
        corpo += String.format("%-50s" , trip1.getIdUser());
        corpo += String.format("%-40s" ,trip1.getLatDestiny());
        corpo += String.format("%-40s" ,trip1.getLngDestiny());
        corpo += String.format("%-40s" ,trip1.getLatMatch());
        corpo += String.format("%-40s" ,trip1.getLngMatch());

        // incrementa o contador de registros de dados
        contRegDados++;
        // chama o método para gravar um registro
        gravaRegistro(nomeArq,corpo);

        // 2o registro de dados - OBS.: Não usar += no primeiro campo do corpo agora!
        corpo = "02";
        corpo += String.format("%-5s" , trip2.getDestiny());
        corpo += String.format("%-50s" , trip2.getIdUser());
        corpo += String.format("%-40s" ,trip2.getLatDestiny());
        corpo += String.format("%-40s" ,trip2.getLngDestiny());
        corpo += String.format("%-40s" ,trip2.getLatMatch());
        corpo += String.format("%-40s" ,trip2.getLngMatch());
        contRegDados++;
        gravaRegistro(nomeArq,corpo);

        // 3o registro de dados
        corpo = "02";
        corpo += String.format("%-5s" ,trip3.getDestiny());
        corpo += String.format("%-50s" , trip3.getIdUser());
        corpo += String.format("%-40s" ,trip3.getLatDestiny());
        corpo += String.format("%-40s" ,trip3.getLngDestiny());
        corpo += String.format("%-40s" ,trip3.getLatMatch());
        corpo += String.format("%-40s" ,trip3.getLngMatch());
        contRegDados++;
        gravaRegistro(nomeArq,corpo);


        // monta o trailer
        trailer += "01";
        trailer += String.format("%010d", contRegDados);
        gravaRegistro(nomeArq,trailer);
    }

}
