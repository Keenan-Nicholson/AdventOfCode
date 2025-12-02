package main

import (
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	f, err := os.Open("day2.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer f.Close()

	content, err := io.ReadAll(f)
	if err != nil {
		log.Fatal(err)
	}

	reports_txt := string(content)

	reports_array := strings.Split(reports_txt, "\n")

	var reports [][]int

	for _, el := range reports_array {

		split := strings.Split(el, " ")

		var inner_array []int
		for _, part := range split {
			num, err := strconv.Atoi(part)
			if err != nil {
				fmt.Println("Error converting to integer:", err)
				continue
			}
			inner_array = append(inner_array, num)

		}
		reports = append(reports, inner_array)
	}

	safe := 0
	for _, arr := range reports {
		count := 0
		fmt.Printf("Reports: %v\n", arr)
		for i := 0; i < len(arr)-1; i++ {
			if (arr[i+1] < arr[i]) && (arr[i+1] > arr[i]-3) {
				count += 1
			} else if (arr[i+1] > arr[i]) && (arr[i+1] < arr[i]+3) {
				count += 1
			} else {
				break
			}
		}
		if len(arr)-1 == count {
			fmt.Println(len(arr)-1 == count)
			safe += 1
		}
	}
	fmt.Println(safe)
}
