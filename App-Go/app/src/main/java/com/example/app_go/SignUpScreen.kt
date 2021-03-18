package com.example.app_go

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast

class SignUpScreen : AppCompatActivity() {

    lateinit  var etNome: EditText
    lateinit  var etEmail: EditText
    lateinit  var etPassword: EditText

    var valido = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sign_up_screen)

        etNome = findViewById(R.id.et_name)
        etEmail = findViewById(R.id.et_email)
        etPassword = findViewById(R.id.et_password)

    }

    fun validar(){

        valido = true

        if(etNome.text.toString().length < 1){
            etNome.error = "O nome não ser vazio"
            valido = false
        }

        if(etEmail.text.toString().length < 1){
            etEmail.error = "O email não ser vazio"
            valido = false
        }

        if(etPassword.text.toString().length < 1){
            etPassword.error = "O nome não pode estar vazio"
            valido = false
        }
    }

    fun login(view: View) {
        val intent = Intent(this, LoginScreen::class.java)
        startActivity(intent)
    }

    fun create_acc(view: View) {
        validar()

        if(valido){
            Toast.makeText(this, "Está tudo certo", Toast.LENGTH_SHORT).show()
        }
        else{
            Toast.makeText(this, "Algum campo está inválido", Toast.LENGTH_SHORT).show()
        }
    }
}