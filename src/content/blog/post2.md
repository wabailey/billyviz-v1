---
title: "Web scraping with Python, Pandas, and Beautiful Soup"
description: "The most efficient way, I have found, when collecting large amounts of football data from fbref.com, is web scraping with Python."
pubDate: "Feb 11 2024"
heroImage: "/blog_imgs/post2/hero_img.webp"
blogLink: "https://github.com/wabailey"
---

The most efficient way, I have found, when collecting large amounts of football data from fbref.com, is web scraping with Python utilising the Pandas library and the Beautiful Soup package. The following example showcases how I use this method to extract data from tables and import it into csv files for later analysis.

The first step is to add the url of the webpage we want to scrape to a variable, we do this with the requests package.

> `import requests`  
> `url = 'https://fbref.com/en/comps/9/Premier-League-Stats'`  
> `response = requests.get(url)`

Running the response should return the page content in a mess of html, we use Beautiful Soup to help parse the content properly and convert it into a more useable state.

> `soup = BeautifulSoup(response.content)`

If you have previous with html documents, running the soup variable at this point should now make the page content look much more familiar. This isn't the only way in which Beautiful Soup will help us though, the real utility comes from the way in which it parses the webpage and allows us to extract information from the elements within the page.

This new parsed information is what gets saved to our soup variable, it's called a Beautiful Soup object, we can use the `find()` and `select()` methods on this object to find the elements that we want.

> `standings_table = soup.select('table.stats_table')[0]`  
> `links = standings_table.find_all('a')`

Using these methods I can collect the links that lead to all the pages with tables I want data from on fbref.com.

> `links = [l.get("href") for l in links]`  
> `links = [l for l in links if '/squads/' in l]`  
> `team_urls = [f"https://fbref.com{l}" for l in links]`  
> `data = requests.get(team_urls[0])`

In order to extract this data we use the Pandas library.

> `import pandas as pd`  
> `match_stats = pd.read_html(data.text, match='Scores & Fixtures')[0]`

This reads the html for tables and the match option lets us extract the specific table based on the inputted string or regex.

> `match_stats[0]`

Running the match_stats variable now shows us a pandas DataFrame with our selected table. We can now extract this DataFrame to a csv file using the to_csv pandas function.

> `matches_table = match_stats[0]`  
> `matches_table.to_csv("matches.csv")`

Using these methods we can create a loop that goes through all the team urls and scrapes all the match stats for each team from the standings table. With our new csv file we are ready for analysis, modeling, or visualisation depending on what is needed.
