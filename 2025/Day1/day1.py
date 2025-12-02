path1 = "2025/Day1/input1.txt"
path2 = "2025/Day1/input2.txt"

input1 = open(path1, "r").read().strip().splitlines()
input2 = open(path2, "r").read().strip().splitlines()

def mod100(x):
    return x%100

def convert_to_int(x):
    if x[0] == "L":
        x = x.replace("L","-")
    else:
        x = x.replace("R","")
    return int(x)

count = 0
pos = 50

for line in input1:
    comb_in = convert_to_int(line)
    pos += comb_in
    if mod100(pos) == 0:
        count += 1

print(f"Part 1: ", count)

mod_count = 0
rotations = 50  
dial_pos = rotations % 100 

for line in input2:
    comb_in = convert_to_int(line)

    prev_rotations = rotations
    rotations += comb_in

    mod_count += abs(rotations // 100 - prev_rotations // 100)

    dial_pos = rotations % 100

print("Part 2:", mod_count)
