---
title: Operators
---

## Binary Operators
Arithmetic operations are fundamental mathematical operations available in any programming language. <br/>
But in Zeen binary operations are not only arithmetic.

Table of supported binary operators:
| Operator | Name | Description |
|----------|------|-------------|
| `+` | `Add` | Addition operator |
| `-` | `Sub` | Substraction operator |
| `*` | `Mul` | Multiplication operator |
| `/` | `Div` | Division operator (divison by 0 panics) |
| `%` | `Mod` | Modulus operator (division by 0 panics) |
|     |     |     |
| `==` | `Eq` | Equality comparison |
| `!=` | `Ne` | Negated equality comparison |
| `<` | `Lt` | `true` if **left** less than **right** |
| `>` | `Gt` | `true` if **left** greater than **right** |
| `<=` | `Le` | `true` if **left** less or equals **right** |
| `>=` | `Ge` | `true` if **left** greater or equals **right** |
|     |     |     |
| `&&` | `LogicalAnd` | `true` if both sides are `true` |
| `\|\|` | `LogicalOr` | `true` if either side is `true` |
|     |     |     |
| `&` | `BitAnd` | Bits level AND operation |
| `\|` | `BitOr` | Bits level OR operation |
| `^` | `BitXor` | Bits level XOR operation |
| `<<` | `BitShl` | Shift **left** by **N right** bits to left |
| `>>` | `BitShr` | Shift **left** by **N right** bits to right |

`&&` and `||` always evaluate both sides (no short-circuit).

## Overloading
Overloadable operators map to interfaces (`< > <= >= && ||` are not):

| Operator | Interface | Method |
|----------|-----------|--------|
| `+` | `Add` | `add` |
| `-` | `Sub` | `sub` |
| `*` | `Mul` | `mul` |
| `/` | `Div` | `div` |
| `%` | `Mod` | `mod` |
| `==` `!=` | `Eq` | `eq` |
| `&` | `BitAnd` | `bit_and` |
| `\|` | `BitOr` | `bit_or` |
| `^` | `BitXor` | `bit_xor` |
| `<<` | `BitShl` | `bit_shl` |
| `>>` | `BitShr` | `bit_shr` |
| `-EXPR` | `Neg` | `neg` |
| `!EXPR` | `Not` | `not` |
| `~EXPR` | `BitNot` | `bit_not` |
| `*EXPR` | `Deref` | `deref` |

## Unary Operations
Unary operations involve single operand instruction.

Table of supported unary operators:
| Operator | Name | Description |
|----------|------|-------------|
| `-EXPR` | `Neg` | Negates operand |
| `!EXPR` | `Not` | Boolean NOT operation |
| `~EXPR` | `BitNot` | Bitwise NOT operation |
| `*EXPR` | `Deref` | Dereference operation (for pointers) |
| `&EXPR` | `AddrOf` | Take address of expression (returns `*T` type) |
