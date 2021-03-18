package com.example.app_go

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.view.WindowManager

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS)


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