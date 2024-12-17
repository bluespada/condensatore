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
package api

import (
    "github.com/gin-gonic/gin"
    iauth "github.com/mathca-labs/condensatore/internal/utils/auth"
)

func RouteAttach(app *gin.Engine){
    // Do create route from multiple api
    v1 := app.Group("/api");
    v1.GET("/", func(ctx *gin.Context){
        ctx.JSON(200, map[string]interface{}{
            "error": false,
            "messages": "",
            "data": map[string]interface{}{
                "version": "0.0.1",
            },
        })
    })

    auth := v1.Group("/auth")
    auth.Use(iauth.Handler(false))
    {
        auth.POST("/signin", func(c *gin.Context){
        })
        auth.POST("/signout", func(c *gin.Context){
        })
        auth.POST("/session", func(c *gin.Context){
        })
    }
}

