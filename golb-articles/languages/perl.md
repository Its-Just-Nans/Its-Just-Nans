---
title: Perl
---

## Lint

```perl
#!/usr/bin/perl

# sudo cpan install Perl::Critic

use Perl::Critic;
my $file = shift;
my $critic = Perl::Critic->new(-severity => 'brutal');
my @violations = $critic->critique($file);
print @violations;
```

> <https://stackoverflow.com/a/5982807>
