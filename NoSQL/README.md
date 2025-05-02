# NoSQL - MongoDB Project

This project is part of the Holberton School curriculum (Foundations - Part 3).  
It introduces the basics of **NoSQL databases** using **MongoDB**, both from the shell and via Python (`pymongo`).

## 📚 Learning Objectives

By the end of this project, you should be able to:

- Understand what **NoSQL** means and how it differs from **SQL**
- Know the characteristics of **document-based storage**
- Use the **mongo shell** to interact with a MongoDB server
- Perform CRUD operations: insert, find, update, and delete documents
- Connect to MongoDB using **PyMongo**
- Write Python scripts to manipulate MongoDB collections
- Perform queries and filter data using different operators
- Analyze and display statistics from MongoDB logs

## 📂 Project Structure

| File Name             | Description                                      |
|----------------------|--------------------------------------------------|
| `0-list_databases`   | Lists all databases in the server                |
| `1-use_or_create_database` | Uses or creates the database `my_db`     |
| `2-insert`           | Inserts a document with name `Holberton school` |
| `3-all`              | Lists all documents in the `school` collection   |
| `4-match`            | Filters documents with name `"Holberton school"` |
| `5-count`            | Counts the number of documents in `school`       |
| `6-update`           | Updates all documents with a new address field   |
| `7-delete`           | Deletes all documents with name `"Holberton school"` |
| `8-all.py`           | Python function to list all documents            |
| `9-insert_school.py` | Inserts a document using `**kwargs`              |
| `10-update_topics.py`| Updates the `topics` field by school name        |
| `11-schools_by_topic.py`| Returns schools that include a specific topic |
| `12-log_stats.py`    | Displays stats from an Nginx log collection      |

## 🛠️ Requirements

- MongoDB v4.4
- Python 3.9
- PyMongo v4.8.0
- Files must follow pycodestyle
- All shell scripts must start with a comment and end with a newline
- Python scripts must start with: `#!/usr/bin/env python3`