---
title: "Predicting Football Matches with Python & Machine Learning"
description: "Utilising machine learning in Python, to predict football match winners using historical data."
pubDate: "Feb 29 2024"
heroImage: "/blog_imgs/post4/hero_img.webp"
blogLink: "https://github.com/wabailey/football-match-prediction"
---

This project utilised machine learning in Python, aiming to predict football match winners using historical data. The data scraped was from fbref.com, it included the 21-22, 22-23, and 23-24 seasons. Generally speaking a larger amount of data increases the potential richness of the training dataset which will have an influence in the accuracy of the final model. This does not ring completely true for football, as there are many variables we are not taking into consideration within our dataset that have influence over match results, variables such as player fatigue, injuries, and new player acqusitions, to name but a few.

The scraped data included match results of all twenty premier league teams and the shooting stats from each match. This involved grabbing the links to each team from the season standings table, then scraping the data from the scores & fixtures table to get the match results data. In order to get the shooting stats we use the same process but scrape our data from the shooting table, which includes stats such as total shots, shots on target, and expected goals. Then merge the shooting table with the match results, using the date column to match the shooting stats with the correct match result. By creating a for loop we can automate the process of scraping each match results and shooting table, merging both together, cleaning and formatting our data and outputting it to a csv file that can be used by the random forest machine learning algorithm.

To finish formatting the data, the columns required by the prediction model were converted into integer formats, this is because the algorithm has no means of analysing string data. The random forest model was imported with the Scikit-learn python library and the data was prepared by being split into two, a training subset and a testing subset. The training subset would be used to train the predicitve model, and the testing subset would be the data that the model would try to predict the outcome of, this allows us to then compare the models predictions against the actual outcomes of each match, and we can test the accuracy of the results from the model.

The next step was to try and improve the accuracy of the model, to do this I first grouped the matches by team which allows us to create one dataframe for every team in our data in order to look at a single teams results. From these team tables we can look at previous match stats and calculate averages of these stats as a prediction for the stats in the next match, this is where the shooting stats come into play, as the rolling averages are taken from these columns and should improve the accuracy of our prediction model. I can now execute the rolling averages function on each team table, which will add shooting stats to every match in our data.

With these new columns of data I can now make a new set of predictions which will include the new predictors and from our initial precision score of 47% we have increased the accuracy of our model to 55%. While a 55% precision score may not seem like a resounding victory, it represents a crucial first step in understanding the power of machine learning. Even with a single algorithm, the Random Forest, the model was able to identify patterns and trends within the data, revealing valuable insights into the factors influencing match outcomes.

More importantly, this project served as a springboard into the world of predictive modeling. It allowed me to gain hands-on experience; from data scraping and cleaning, to feature engineering and model training, this project provided a practical understanding of the entire machine learning workflow. It illuminates the power of data; witnessing how historical data can be leveraged to predict future events, highlighting the potential of data analysis.

#### My next steps may involve:

- **Experimenting with different algorithms:** Comparing the performance of various machine learning models could potentially improve accuracy and reveal new insights.
- **Adding more features:** Incorporating factors like weather conditions, player fatigue, or transfer market activity could provide a more holistic picture of potential influences.
- **Applying the model to different sports:** Testing the model's predictive power on other sports like basketball or baseball could broaden its scope and reveal generalizable patterns.

There are many possibilities, and discovering what insights lie within datasets is great motivation to keep on learning. This project has been a launchpad into the world of machine learning, and I'm eager to incorporate it into my next project.
