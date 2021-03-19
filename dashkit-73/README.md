# Dashkit 7.3 Page Fragments

This project is a collection of Page Fragments that are organized into different 
categories, like Dashboard, Banner, etc.  Here is a link to the official [Liferay documentation](https://github.com/liferay/generator-liferay-fragments)

###### Collections
Fragments are always grouped inside collections. To create a collection, run add-colllection
```
yarn run add-collection
```
###### Add Fragments
Once a collection has been created, you can add as many fragments as needed using the add-fragment command
```
yarn run add-fragment
```
###### Deploy
When you are ready to import your Fragments run the compress command, which will create a file call
liferay-fragments.zip in the build folder.  Import the .zip into your Liferay instance.
```
yarn run compress
```