#!/usr/bin/env python3
"""Module to measure runtime of async comprehensions in parallel"""
import asyncio
import time
from async_comprehension import async_comprehension


async def measure_runtime() -> float:
    """Run async_comprehension 4 times in parallel and measure total runtime"""
    start = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time.perf_counter()
    return end - start
