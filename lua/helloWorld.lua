print("Hello World!");

local function fact(n)
  if n == 0 then
    return 1
  else
    return n * fact(n-1)
  end
end

-- this is a comment

--[[
   multi line comment  // block comment
--]]

print("enter a number");
local a = io.read("*n");
print(fact(a))
