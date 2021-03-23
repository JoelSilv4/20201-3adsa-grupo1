package com.example.app_go.screens

import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.NavController
import androidx.navigation.findNavController
import com.example.app_go.R
import com.jaeger.library.StatusBarUtil

class PostScreen : AppCompatActivity() {

    lateinit var navController: NavController

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_post_screen)
        StatusBarUtil.setTransparent(this)


        navController = findNavController(R.id.navHostFragment)

    }

    override fun onSupportNavigateUp(): Boolean {
        return navController.navigateUp() || super.onSupportNavigateUp()
    }


    fun back_home(view: View) {
        val intent = Intent(this, HomeScreen::class.java)
        startActivity(intent)
    }


}