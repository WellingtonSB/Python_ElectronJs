from sqlite3.dbapi2 import connect
import database  as db
import json


def createProducts(data):
    connection = db.create_connection()
    cur = connection.cursor()
    sql = """INSERT INTO products(productid,name,datetime,weight) VALUES(?,?,?,?)"""
    cur.execute(sql, data)
    connection.commit()
        
    return cur.lastrowid

def get_products():
    
    def query_db(query,one =False):
        connection = db.create_connection()
        cur = connection.cursor()
        cur.execute(query)
        ab = [dict((cur.description[i][0],value) for i,value in enumerate(row))for row in cur.fetchall()]
        cur.connection.close()
        return (ab[0] if ab else None) if one else ab
    
    my_query = query_db("""SELECT * FROM products""")
    json_output = json.dumps(my_query) 
    return json_output 