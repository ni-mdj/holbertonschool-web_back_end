#!/usr/bin/env python3
"""
Module for a simple helper function `index_range`.
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Returns tuple containing start and end index for given page and page size.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index