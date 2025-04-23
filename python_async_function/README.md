# Python - Async

## Description
This project focuses on asynchronous programming in Python. You will learn how to use `async` and `await` syntax, execute asynchronous programs with `asyncio`, run concurrent coroutines, create asyncio tasks, and work with the `random` module.

## Learning Objectives
- Understand and use `async` and `await` syntax.
- Execute asynchronous programs using `asyncio`.
- Run multiple coroutines concurrently.
- Create and manage asyncio tasks.
- Use the `random` module for generating random values.

## Requirements
- Python 3.9
- All files must be executable and end with a new line.
- Code must follow the `pycodestyle` style (version 2.5.x).
- All functions and coroutines must be type-annotated.
- All modules and functions must have proper documentation.

## Project Structure
1. **`0-basic_async_syntax.py`**:
   - Function `wait_random`: Waits for a random delay and returns it.

2. **`1-concurrent_coroutines.py`**:
   - Function `wait_n`: Runs `wait_random` multiple times concurrently and returns a list of delays in ascending order.

3. **`2-measure_runtime.py`**:
   - Function `measure_time`: Measures the total execution time of `wait_n` and returns the average time per coroutine.

4. **`3-tasks.py`**:
   - Function `task_wait_random`: Creates and returns an `asyncio.Task` for `wait_random`.

5. **`4-tasks.py`**:
   - Function `task_wait_n`: Similar to `wait_n`, but uses `task_wait_random` instead of `wait_random`.
