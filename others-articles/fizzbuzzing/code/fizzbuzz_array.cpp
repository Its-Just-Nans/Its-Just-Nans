constexpr int FIZZ = 1;
constexpr int BUZZ = 2;
constexpr int FIZZBUZZ = 3;

const int arr[15] = {FIZZBUZZ, 0, 0, FIZZ, 0, BUZZ, FIZZ, 0, 0, FIZZ, BUZZ, 0, FIZZ, 0, 0};

unsigned int fizzbuzz(unsigned int n)
{
    auto res = arr[n % 15];
    if (res == 0)
    {
        return n;
    }
    return res;
}
