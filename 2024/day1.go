package main

import (
	"fmt"
	"io"
	"log"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
    f, err := os.Open("day1p2.txt")
    if err != nil {
        log.Fatal(err)
    }
    defer f.Close()

    content, err := io.ReadAll(f)
    if err != nil {
        log.Fatal(err)
    }

    location_IDs_txt := string(content)

    location_IDs_array := strings.Split(location_IDs_txt, "\n")

    var location_IDs_array_clean [][]string

    for _, el := range location_IDs_array{ 
        part := strings.Split(el, "   ")
        location_IDs_array_clean = append(location_IDs_array_clean, part)
    }

    var left_ids []int
    var right_ids []int

    for _, el := range location_IDs_array_clean {
        left_part, err1 := strconv.Atoi(el[0])
        right_part, err2 := strconv.Atoi(el[1])

        if err1 != nil || err2 != nil {
			fmt.Println("Error converting string to int:", err1, err2)
			continue
		}

        left_ids = append(left_ids, left_part)
        right_ids = append(right_ids, right_part)
    }

    sort.Ints(left_ids)
    sort.Ints(right_ids)

    result := 0

    for i:=0;i<len(left_ids);i++ {
        dist := math.Abs(float64(left_ids[i] - right_ids[i]))
        result += int(dist)
    }

    fmt.Println("Part 1: ", result)

    score := 0

    for i:= 0;i<len(left_ids);i++ {
        count := 0
        for j:=0;j<len(right_ids);j++ {
            if left_ids[i] == right_ids[j] {
                count += 1
            }
        }
        score += left_ids[i] * count
    }

    fmt.Println("Part 2: ", score)

}