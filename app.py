from flask import Flask, send_from_directory

app = Flask(__name__)


@app.route("/")
def inicio():
    return send_from_directory(".", "diabetes2.html")


@app.route("/<path:nome_arquivo>")
def arquivos(nome_arquivo):
    return send_from_directory(".", nome_arquivo)


if __name__ == "__main__":
    app.run(debug=True, port=8000)