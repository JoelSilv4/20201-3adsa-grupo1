package com.example.app_go.screens

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.app_go.R
import com.jaeger.library.StatusBarUtil

class LoginScreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login_screen)
        StatusBarUtil.setTransparent(this)
    }

    fun signup(view: View) {
        val intent = Intent(this, SignUpScreen::class.java)
        startActivity(intent)
    }

    fun login(view: View) {
        val intent = Intent(this, HomeScreen::class.java)
        startActivity(intent)
    }
}