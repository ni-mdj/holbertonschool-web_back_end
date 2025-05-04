#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Returns dictionary with pagination data that is resilient to deletions.

        Args:
            index: The current start index of the return page
            page_size: The current page size

        Returns:
            Dictionary with index, next_index, page_size, and data
        """
        indexed_dataset = self.indexed_dataset()
        dataset_size = len(indexed_dataset)

        if index is None:
            index = 0

        assert isinstance(index, int) and 0 <= index < dataset_size

        data = []
        current_idx = index
        count = 0

        while count < page_size and current_idx < dataset_size:
            if current_idx in indexed_dataset:
                data.append(indexed_dataset[current_idx])
                count += 1
            current_idx += 1

        next_idx = current_idx

        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_idx
        }
