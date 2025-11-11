#include "perfect_numbers.h"

namespace perfect_numbers {
classification classify(int n) {

  int facSum = 1;
  for (int i = 2; i < n / 2 + 1; i++) {
    if (n % i == 0) {
      facSum += i;
    }
  }

  if (n < facSum) {
    return classification::abundant;
  } else if (n == facSum) {
    return classification::perfect;
  } else if (n > facSum) {
    return classification::deficient;
  }

  return classification::perfect;
}
} // namespace perfect_numbers
