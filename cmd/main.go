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
package main

import (
    "github.com/gin-gonic/gin"
    "github.com/mathca-labs/condensatore/internal/api"
    ihttp "github.com/mathca-labs/condensatore/internal/http"
)

func main(){
    // set the gin server to run in production
    // gin.SetMode(gin.ReleaseMode)
    // create a base gin gonic server http
    server := gin.Default()

    // attach http routes
    ihttp.RouteAttach(server)

    // attach the api routes
    api.RouteAttach(server)

    // run the server
    server.Run(":8000")
}
