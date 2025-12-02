path = "/Users/keenan/Dev/GitHub/AdventOfCode/2025/Day2/input.txt"
ranges = open(path, "r").read().strip().split(",")

parsed = []


for r in ranges:
    nums = list(map(int, r.split("-")))
    parsed.append(nums)

parsed_valid = [x for x in parsed if str(x[0])[0] != "0"]

def has_repeating_pattern_twice(n):
    s = str(n)
    length = len(s)

    if length % 2 != 0:
        return False  

    half = length // 2
    pattern = s[:half]

    if pattern * 2 == s:
        return True
    return False

repeats = []

print(parsed_valid)
for item in parsed_valid:
    lower = item[0]
    upper = item[1]

    for r in range(lower, upper+1):
        if has_repeating_pattern_twice(str(r)):
            repeats.append(r)

ans = sum(repeats)
print(ans)

repeats = []

# Got the idea for this from https://www.geeksforgeeks.org/python/python-check-if-string-repeats-itself/
def has_repeating_pattern(n):
    s = str(n)
    length = len(s)

    for i in range(1, length // 2 + 1):
        if length % i != 0: 
            continue
        pattern = s[:i]
        if pattern * (length // i) == s:
            return True
    return False

for item in parsed_valid:
    lower = item[0]
    upper = item[1]

    for r in range(lower, upper+1):
        if has_repeating_pattern(str(r)):
            repeats.append(r)

            ans = sum(repeats)
print(ans)
