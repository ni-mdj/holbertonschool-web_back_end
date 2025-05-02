# 🚀 Python Async Comprehension

## 📘 Overview

This project explores asynchronous programming in Python through practical tasks using **async generators**, **async comprehensions**, and **parallel execution with asyncio**.

By the end, you'll know how to write efficient asynchronous code that can handle tasks concurrently—perfect for I/O-bound operations.

---

## 🎯 Learning Objectives

You will learn how to:

- Build and use **asynchronous generators**
- Leverage **async comprehensions** to handle async iterables
- **Run multiple coroutines concurrently** with `asyncio.gather`
- Apply **type annotations** to async functions and generators

---

## 📂 Project Structure

### `0-async_generator.py`

- Defines `async_generator()`:
  - Yields 10 random numbers (between 0 and 10)
  - Waits 1 second between each yield

### `1-async_comprehension.py`

- Defines `async_comprehension()`:
  - Uses an **async list comprehension** to gather all 10 values from `async_generator()`

### `2-measure_runtime.py`

- Defines `measure_runtime()`:
  - Runs `async_comprehension()` **4 times in parallel**
  - Uses `asyncio.gather()` and returns the total runtime (~10 seconds)

---

## 🧰 Technologies & Tools

- Python 3.9
- `asyncio` for asynchronous execution
- `random` for generating random numbers
- `typing` for type annotations
- Ubuntu 20.04 LTS environment

---

## ✅ Requirements

- Code style: **PEP 8 / pycodestyle 2.5.x**
- Type annotations: ✅ Required
- Documentation: Each file and function must include a clear docstring
- All files must end with a newline
- Use only: `vi`, `vim`, or `emacs` for editing (as per Holberton rules)

---

## 🚀 How to Run

Make your test scripts executable and run them:

```bash
chmod +x 0-main.py && ./0-main.py
chmod +x 1-main.py && ./1-main.py
chmod +x 2-main.py && ./2-main.py
