package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
)

type js struct {
	X int `json:"x"`
	Y int `json:"y"`
}

func main() {
	http.HandleFunc("/api", myHandler)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func myHandler(w http.ResponseWriter, r *http.Request) {
	//отсылаем 2 числа
	x := rand.Intn(50)
	y := rand.Intn(50)

	data := js{x, y}
	fmt.Println(data)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(data)
}
