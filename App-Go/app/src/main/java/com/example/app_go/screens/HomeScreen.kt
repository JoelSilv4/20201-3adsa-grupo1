package com.example.app_go.screens

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.app_go.R
import com.jaeger.library.StatusBarUtil

class HomeScreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home_screen)
        StatusBarUtil.setTranslucent(this)
    }

    fun post(view: View) {val intent = Intent(this, PostScreen::class.java)
        startActivity(intent)}
}