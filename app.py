import os
from flask import Flask, render_template
if os.path.exists("env.py"):
    import env


app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")


@app.route("/")
@app.route("/home")
def home():
    # function renders index.html
    return render_template("index.html")


@app.route("/cv")
def cv():
    # function renders cv.html
    return render_template("cv.html")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=False)