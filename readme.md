
## Simple Password Rules

Does your application require a way to implement password policies?

This module attempts to make that simple!


```
import { password, min, max, hasDigits, hasSpecial } from 'simple-password-rules'


const check = password(
    min(8),
    max(32),
    hasDigits(1)
    hasSpecial(1)
)
```