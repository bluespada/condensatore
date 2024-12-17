package pkg

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/bytedance/sonic"
    "io"
)


func Exec(){
    
    server := gin.Default()
    
    api := server.Group("/api")
    {
        v1 := api.Group("/v1")
        {
            v1.GET("", func(c *gin.Context){
                c.JSON(http.StatusAccepted, map[string]interface{}{
                    "error": false,
                    "messages": "",
                    "data": map[string]interface{}{
                        "version": "1.0.0",
                        "docs": "https://github.com/mathca-labs/condensatore/blob/main/docs/api.md",
                        "repo": "https://github.com/mathca-labs/condensatore",
                    },
                })
            })

            v1.POST("", func(c *gin.Context){
                body, _ := io.ReadAll(c.Request.Body)
                jsonBody := make(map[string]interface{})
                sonic.Unmarshal(body, &jsonBody)
                c.JSON(http.StatusAccepted, map[string]interface{}{
                    "error": false,
                    "messages": "",
                    "data": map[string]interface{}{
                        "version": "1.0.0",
                        "docs": "https://github.com/mathca-labs/condensatore/blob/main/docs/api.md",
                        "repo": "https://github.com/mathca-labs/condensatore",
                        "your_data": jsonBody,
                    },
                })
            })
        }
    }

    server.Run(":3001")
}
