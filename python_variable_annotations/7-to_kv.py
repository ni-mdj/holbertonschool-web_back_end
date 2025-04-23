#!/usr/bin/env python3
"""
Module for a type-annotated function `to_kv`.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with a string and the square of an int/float as a float.
    """
    return (k, float(v ** 2))
