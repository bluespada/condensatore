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
package http

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func RouteAttach(app *gin.Engine){
    // set html index from app.LoadHTMLFiles("index.html")
    app.NoRoute(func(c *gin.Context){
        c.String(http.StatusOK, "Hello")
    })
}
