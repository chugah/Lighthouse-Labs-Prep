# ==== Proposed Solution 1 ====

puts "SOLUTION 1 \n"
puts "Ruby's calculator can [*], [/], [+], [-] and [%]."
puts "Enter numbers and operator leaving a space between them."
puts "Ruby's likes 3.4 + 100 and dislikes 3.4+100 or 3.4+ 100."
print ">> "

input = gets.chomp.split(" ")

num1 = input[0].include?(".") ? input[0].to_f : input[0].to_i
operator = input[1].to_sym
num2 = input[2].include?(".") ? input[2].to_f : input[2].to_i

result = case (operator)
  when :+ then num1 + num2
  when :- then num1 - num2
  when :* then num1 * num2
  when :/ then num1 / num2
  when :% then num1 % num2
  else nil
end

puts "#{result.round(2)} \n"


# ==== Proposed Solution 2 ====

def add(a, b)
  print "#{a} + #{b} = "
  return a + b
end

def subtract(a, b)
  print "#{a} - #{b} = "
  return a - b
end

def multiply(a, b)
  print "#{a} * #{b} = "
  return a * b
end

def divide(a, b)
  print "#{a} / #{b} = "
  return a / b
end

def modulus(a, b)
  print "#{a} % #{b} = "
  return a % b
end

puts "SOLUTION 2 \n"
puts "if a = 9 and b = 6, then "
puts add(9.0, 6.0)
puts subtract(9.0, 6.0)
puts multiply(9.0, 6.0)
puts divide(9.0, 6.0)
puts modulus(9.0, 6.0)


