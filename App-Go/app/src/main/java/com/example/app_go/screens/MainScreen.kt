package com.example.app_go.screens

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.app_go.R
import com.jaeger.library.StatusBarUtil

class MainScreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        StatusBarUtil.setTransparent(this)

    }

    fun login(view: View) {
        val intent = Intent(this, LoginScreen::class.java)
        startActivity(intent)
    }

    fun signup(view: View) {
        val intent = Intent(this, SignUpScreen::class.java)
        startActivity(intent)
    }
}