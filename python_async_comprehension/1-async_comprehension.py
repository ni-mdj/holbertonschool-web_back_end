#!/usr/bin/env python3
"""Module for async comprehension"""
from typing import List
from async_generator import async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 numbers from async_generator using async comprehension"""
    return [i async for i in async_generator()]
