#ifdef OUTPUT
#include <iostream>
#endif
constexpr int NUM = 10000000; // number of iterations

unsigned int fizzbuzz(unsigned int n);

int main()
{
    for (unsigned int i = 0; i < NUM; i++)
    {
#ifdef OUTPUT
        std::cout << fizzbuzz(i) << std::endl;
#else
        fizzbuzz(i);
#endif
    }
}