constexpr int FIZZ = 1;
constexpr int BUZZ = 2;
constexpr int FIZZBUZZ = 3;

unsigned int fizzbuzz(unsigned int n)
{
    if (n % 3 == 0 && n % 5 == 0)
    {
        return FIZZBUZZ;
    }
    else if (n % 3 == 0)
    {
        return FIZZ;
    }
    else if (n % 5 == 0)
    {
        return BUZZ;
    }
    return n;
}
