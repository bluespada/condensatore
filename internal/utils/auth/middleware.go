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
    "github.com/gin-gonic/gin"
    "net/http"
)

func Handler(json bool) gin.HandlerFunc {
    return func(c *gin.Context){
        // before route
        c.Next()
        // after route we need make unsure authorization
        // is validated, if authorization is not validated
        // we will prevent the route to render the data.
        // do business login here
        authorization := c.GetHeader("Authorization")
        if authorization == "" && json {
            c.JSON(http.StatusUnauthorized, map[string]interface{}{
                "error": true,
                "messages": "Unauthorized",
                "data": nil,
            })
        }
        if authorization == "" {
            c.Redirect(http.StatusTemporaryRedirect, "/signin")
        }
    }
}
