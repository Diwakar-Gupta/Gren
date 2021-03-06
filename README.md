# π³ GREN - Making Lifestyle Sustainable π

## π‘Inspiration
_Stat:_ <br/> 
π Mother nature is already taking hits from the poor choices of us human beings where we leave behind Carbon Footprints from the food we consume to the Toilet paper we use. <br/>
π Do you know? Just one liter of Coke costs us **346 gm** of Carbon Dioxide from manufacture to our refrigerator and Mega roll of Ultra Smooth Toilet paper leaves **771 gm** CO2β¦ Yes! Twice than Coke.  <br/>
<br/>
_Survey:_ <br/> 
π Figures like these ignited curiosity and got us thinking if Big MNCs are adopting low Carbon goods then why canβt we?  <br/>
π On doing a quick local survey we found out 7 in 10 people didnβt know about alternatives at all or where to buy them. <br/>
<br/>
_Approach:_ <br/> 
π So we Solved this exact problem by introducing our product **GREN -  Making Lifestyle Sustainable** <br/>

## β»οΈ What it does
**GREN** provides a one-stop solution for all the daily needs by suggesting eco alternatives based on the product's Carbon Footprint while promoting Recycling of Waste.
<br/><br/>
**We have the following features:** <br/>
1. Product listings with their Carbon Footprint UI for a better choice <br/>
2. ECO IMPACT description to let the user know about the impact on the environment <br/>
3. **Alternative** ECO Product Suggestion with comparison

## π οΈ How we built it
**Ideation** <br/>
π Each member put forward their perspective and we collectively brainstormed towards the solution using flashcards and micro pitching. <br/><br/>
**Extension** <br/>
π We build a browser extension that integrates with the E-commerce sites and provides description about products. <br/><br/>
**Deep Learning Model** <br/>
π We used Xception Net CNN architecture to perform Product Recognition.

## π» Challenges we ran into
* To come up with a suitable metric for product evaluation and gathering relevant data.<br/>
* To come up with a practical idea that would create a positive impact on the environment while keeping it feasible.<br/>
* Implementing the solution from an idea to working application. <br/>
* The most challenging part of our project designing frontend for better user experience. <br/>

## π Accomplishments that we're proud of
* Completing the project that is important to the earth, despite all the challenges mentioned.  <br/>
* Even if we manage to bring positive change in ourselves towards the cause it's a big achievement for us. <br/>
 
## π What we learned
* Teamwork and commitment towards the goal <br/>
* Time management and the importance of effective communication. <br/>
* Change in perspective towards products we use. <br/>

## π What's next for GREN - Making Lifestyle Sustainable
* Creating a social community with users' social carbon footprint ratings.
* NLP based product recognition.

## Built With
- machine-learning
- python
- javascript
- flask

## Try it out links
* <a href="https://github.com/Diwakar-Gupta/Gren/">Code Base</a>

## Use in Local System
Clone the repository
```
git clone https://github.com/Diwakar-Gupta/Gren.git
cd Gren
```
Start the backend
```
pip install ./backend/requirements.txt
FLASK_APP=backend/app flask run
```
Install Chrome Extension in browser
1. open tab **chrome://extensions** in chrome browser
2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
3. Click the **Load unpacked** button and select the *extension* directory

Now to use the extension in browser
1. open any e-commerce site and search for your product
2. click on the extension
3. click on monitor button
4. now when you hover on product images search button should appear click on that and wait a little
5. extension will request server for details and it will appear on the image.
