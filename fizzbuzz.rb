# ==== Proposed Solution ====

puts "\nFizzBuzz started"

(1..100).each{ |i|
  puts i % 15 == 0 ? 'FizzBuzz' :i %3 == 0 ? 'Fizz' :i % 5 ==0 ? 'Buzz' :i }

puts "\nFizzBuzz finished"