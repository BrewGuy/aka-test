# aka-test
Test project for AKA Media

Hey there! Here's my test submission for AKA Media. I hope you enjoy it.

A few things to note:

-- This project was built using Gulp. If you want to run it a local machine, you'll have to ensure NPM and Gulp are installed. Once they are installed and you've cloned the repo, do the following:

	1. On a command line, run "npm install" - this should install all necessary components for you to run locally.
	2. Once the installation is finished, type "gulp" and hit enter. This should fire up a local server and display the test page for you.

-- If you don't want to do all that, you can take the files in the "dist" folder and put them on any server you wish, and the page should display fine. Keep in mind though, that the files in the dist folder have been minified and compressed, so if you wish to evaluate the SASS code, have a look in the src/scss folder.

-- If you do go the Gulp route, The gulp file included here minifies the CSS and JavaScript and compresses the image files. Once you run gulp, it may take a minute or so for the images to be compressed, so the first time you run it, you may see no images. You should eventually get a message from your command line which will say "Minified 12 images" and some details. Once you see that, refresh the page and all should be fine.

The timing delay on the images is mostly because of the giant background file being used for the search header. Had this been a real project, I would have cut a separate, smaller image for mobile/tablet, as loading a background image that's over a meg in size on your phone is not exactly best practice for mobile development. :)

-- In case something goes wrong trying to get Gulp working, I've uploaded the whole thing to my own site. 

You can see it here: http://www.brewguy.ca/akatest
You can also download a zip file of everything here: http://www.brewguy.ca/akatest/akatest.zip

-- Just FYI, the styling for the sub-menu on the Mockup graphic and the styling for the sub-menu in the Style Guide were completely different from each other - I went with the stylings in the Style Guide.

-- That said, the instructions indicated not to use any JavaScript on the sub-menu. The sub-menu is indeed fully built in CSS, but the Style Guide asked for certain stylings which would only happen after a click (ie. make the sub-nav item blue when opening the second-level nav). So, for the after-click styles, JavaScript (jQuery) was used, but only to toggle CSS classes in order to achieve the result that the Style Guide asked for. That's it. Everything else is all CSS, aaaall the time. :)

-- This was tested in all modern browsers, which is to say Chrome, Firefox, and Edge - I'm on a PC at home, so I don't have an easy way to test on Safari, but everything should be OK. If it's not, by all means make fun of me. :)

If you have any questions or concerns, just let me know. Thanks very much!

-Daryl