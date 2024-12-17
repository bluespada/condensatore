/**
 * Copyright (C) 2024 Condensatore Contributor
 * Copyright (C) 2024 Bluespada <pentingmain@gmail.com>
 *
 * This file is part of Condensatore.
 *
 * Condensatore is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License.
 *
 * You should have received a copy of the MIT License along with Condensatore.
 * If not, see <https://mit-license.org/>.
 *
 */
package auth

import (
)

type group struct {}

// Initialize New Group for checking users session
// @params session UsersSession
func NewGroup() *group {
    return &group{}
}


