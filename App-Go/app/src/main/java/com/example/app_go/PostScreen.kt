package com.example.app_go

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.jaeger.library.StatusBarUtil

class PostScreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_post_screen)
        StatusBarUtil.setTranslucent(this)
    }

    fun back_home(view: View) {
        val intent = Intent(this, HomeScreen::class.java)
        startActivity(intent)
    }
}