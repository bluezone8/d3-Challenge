# d3 CHALLENGE
### Purpose
The purpose of this repository is to store files related to the  data journalism project identifying health risk factors for various demographics.
_______
### Tool Choice and Rationale
The primary requirement for this effort was to provide a visual illustration of the relationship between Smoking and Age in all 50 states. This is provided in the form of a web page accesible bubble chart.  Additionally, the user is provided the ability see the actual data values by pointing to the bubble for a given state. The tools used include:
1.  HTML as the structure of the site
2. CSS to provide the stylings for the site.
3. Javascript provides the interactivity functionality for the site.  The d3 library is the primary vector for the creation and render of the chart.  
  
___________
### Implementation
The required output for this project is the bubble chart depicting the health  risk factor (in this case Smoking) for the 50 states.  Additionally, a bonus optional inclusion was offered to include user interactivity in the form of tooltips in the chart points that depict the data for the state element selected.  Both the base requirement as well as the tootip option are included in this submission.  
A few points about the implementation are worth noting: 1. The chart was created to be large enough that overlap of the state bubbles is minimized as many of the states had data that were very close numerically.  2.  The axes are scaled to match the data and so they do not have a zero origin.  Additionally,  they were created to not overlap so that the lowest data points could be shown effectively as well as illustrate the fact that the scales are not zero to X. 3. The tooltips are a custom implementation and are intended to be a better informational source by being close to the selected state bubble as well as having a high contrast coloring and appropriate size for readability.  

________
 ### Included Items
 #### I. Site Files: 
 * index.html  - the basic html for the chart page
 * app.js  - the logic code script file to draw the chart and provide the interactivity
 * data.csv - the file containing the data for the chart
 * styles.css - the css styling script to style ceratin elements in the html 
 #### II. Information Files:
 *  Site Images - images of the site functionality in operation: 
--  Chart Image.jpg - image of the chart page 
--  ToolTip Demo.jpg - image showing a user selection of one of the state bubbles in the     chart and the resulting tootip data  
 * README.md
 
