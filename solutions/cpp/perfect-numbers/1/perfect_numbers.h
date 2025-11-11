#pragma once
#include <string>

namespace perfect_numbers {

enum classification { perfect, abundant, deficient };

classification classify(int n);
} // namespace perfect_numbers
