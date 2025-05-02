#!/usr/bin/env python3
""" Insert document with kwargs """

def insert_school(mongo_collection, **kwargs):
    """Insert a new document and return its _id"""
    return mongo_collection.insert_one(kwargs).inserted_id