from flask import Flask, render_template
from requests_cache import CachedSession
import requests

app = Flask(__name__)

# Cache for the apod
session = CachedSession(
    cache_name='apod_cache',
    # Cache expires after 1 hour
    expire_after=60 * 60,
)

def get_response(url):

    try:
        response = session.get(url)
        # Raise an exception if http error code
        response.raise_for_status()
        # Turns the response into json
        json_data = response.json()
        return json_data

    # If error print error
    except Exception as error:
        print(f'Error: {error}')
        return None


@app.route("/")
def index():

    # Call request with cache
    apod_data = get_response('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        
    return render_template("index.html", apod_data=apod_data)
        


if __name__ == "__main__":
    app.run(debug=False)
