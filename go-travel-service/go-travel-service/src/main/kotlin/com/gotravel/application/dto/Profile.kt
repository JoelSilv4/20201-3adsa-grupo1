package com.gotravel.application.dto

import com.gotravel.domain.entities.User

data class Profile(var username: String?,
                   var bio: String?,
                   var image: String?,
                   var following: Boolean) {
    companion object {
        fun fromUser(user: User, currentUser: User, image: String?): Profile {
            return Profile(username = user.userName, bio = user.bio, image = image,
                    following = currentUser.follows.contains(user))
        }
    }
}