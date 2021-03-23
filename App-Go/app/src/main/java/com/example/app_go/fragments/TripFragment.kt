package com.example.app_go.fragments

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.fragment.findNavController
import com.example.app_go.R

class TripFragment : Fragment() {

    private lateinit var btn_adicionar:Button

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val view = inflater.inflate(R.layout.fragment_trip, container, false)
        btn_adicionar = view.findViewById(R.id.btn_adicionar)

        btn_adicionar.setOnClickListener {
            findNavController().navigate(R.id.FirstToSecond)
        }

        return view
    }

}