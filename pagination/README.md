# Pagination

## Description
This project focuses on implementing pagination in Python. You will learn how to paginate datasets with simple parameters, add hypermedia metadata, and handle deletion-resilient pagination.

## Learning Objectives
- How to paginate a dataset with simple `page` and `page_size` parameters.
- How to paginate a dataset with hypermedia metadata.
- How to paginate in a deletion-resilient manner.

## Requirements
- Python 3.9
- All files must be executable and end with a new line.
- Code must follow the `pycodestyle` style (version 2.5.x).
- All functions and coroutines must be type-annotated.
- All modules and functions must have proper documentation.

## Project Structure
1. **`0-simple_helper_function.py`**:
   - Function `index_range`: Returns the start and end index for pagination.

2. **`1-simple_pagination.py`**:
   - Class `Server`: Implements simple pagination for a dataset.

3. **`2-hypermedia_pagination.py`**:
   - Class `Server`: Adds hypermedia metadata to pagination.

4. **`3-hypermedia_del_pagination.py`**:
   - Class `Server`: Implements deletion-resilient pagination.