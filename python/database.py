import sqlite3, os
from sqlite3 import Error
from pathlib import Path


def create_connection():
    root = os.path.dirname(os.path.realpath(__file__))
    datebase = os.path.join(root, "invmgm.db")
    mydb = Path(root + "invmgm.db")
    dbconn = None

    try:
        dbconn = sqlite3.connect(datebase)
    except Error as e:
        print(e)

    if mydb.exists():
        return dbconn
    else:
        return dbconn


def create_table(connection, create_table_sql):
    try:
        conn = connection.cursor()
        conn.execute(create_table_sql)
    except Error as e:
        print(e)


def start():
    sql_products_table = """CREATE TABLE IF NOT EXISTS products (id integer PRIMARY KEY,productid text NOT NULL,name text NOT NULL, datetime text NOT NULL,weight text NOT NULL);"""
    sql_customers_table = """CREATE TABLE IF NOT EXISTS customers (id integer PRIMARY KEY,customerid text NOT NULL,name text NOT NULL, datetime text NOT NULL,weight text NOT NULL);"""
    sql_suppliers_table = """CREATE TABLE IF NOT EXISTS suppliers (id integer PRIMARY KEY,supplierid text NOT NULL,name text NOT NULL, datetime text NOT NULL,weight text NOT NULL);"""

    create_table(create_connection(), sql_products_table)
    create_table(create_connection(), sql_customers_table)
    create_table(create_connection(), sql_suppliers_table)
