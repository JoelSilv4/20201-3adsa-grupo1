package com.gotravel.application.dto

import java.util.*
import javax.validation.constraints.NotEmpty

data class Filter (
    val id: String? = UUID.randomUUID().toString(),
    @get:NotEmpty(message = "Name cannot be empty")
    val name: String,
    @get:NotEmpty(message = "Latitude cannot be empty")
    val latitude: String,
    @get:NotEmpty(message = "Longitude cannot be empty")
    val longitude: String,
    val image: String
)
