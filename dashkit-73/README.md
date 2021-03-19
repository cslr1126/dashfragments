# Dashkit 7.3 Fragments

This project is a collection of Page Fragments that are organized into different 
categories, like Dashboard, Banner, etc.

Fragments are always grouped inside collections. To create a collection, run

yarn run add-collection

Once a collection has been created, you can add as many fragments as desired inside by running

yarn run add-fragment

When you are ready to import your Fragments run the compress command, which will create a file call
liferay-fragments.zip in the build folder.  Import the .zip into your Liferay instance.

yarn run compress