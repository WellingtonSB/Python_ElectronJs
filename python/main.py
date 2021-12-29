import crud as crd
import database  as db
from flask import Flask,request,jsonify

app= Flask(__name__)

@app.route('/postproduct')
def postProduct():
    data = (1,"some","somedate","23")
    return str(crd.createProducts(data))

     
@app.route('/getproducts')
def getAllProducts():
    return crd.get_products()
 
if __name__ == "__main__":
    db.start()
    app.run(debug=True,port=5000)
