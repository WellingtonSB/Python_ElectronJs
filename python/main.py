import crud as crd
import database  as db
from flask import Flask,request,jsonify

app= Flask(__name__)

@app.route('/postproduct',methods =['POST'])
def postProduct():
    
    productname = request.form.get('productname')
    datetime = request.form.get('datetime')
    productweigth = request.form.get('productweigth')
    
    data = (1,productname,datetime,productweigth)
    
    if isinstance(crd.createProducts(data),int):
        return 'success'
    else:
        return 'failed'
     
@app.route('/getproducts',methods =['GET'])
def getAllProducts():
    return crd.get_products()
 
if __name__ == "__main__":
    db.start()
    app.run(debug=True,port=5000)
