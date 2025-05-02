#!/usr/bin/env python3
""" Update topics by name """

def update_topics(mongo_collection, name, topics):
    """Update topics of a school by name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )