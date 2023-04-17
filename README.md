# FrontEnd

I have decided to use ReactJS and TypeScript to do the FrontEnd project.

## Usage

You have to run the command
```
npm i
```
to install all the dependencies **(you have to do it after installing the word_counter_sdk_lib dependencies)**.

To run the frontend, run this command:
```
npm start
```
it will run at http://localhost:3000/

## File structure

I have followed the following structure:

- src
  - **components**: This is where all the components of the application are located. The components are divided into folders according to their type or function in the application.
  - **context**: This is where the application context is initialised and the logic for sharing information between components is defined.
  - **enums**: This is where you find the enums needed for the different parts of the project, such as file upload states.
  - **pages**: This is where the main page of the application is located.
  - **services**: Here you will find the main service of the application, which is responsible for the text processing logic.
  - **types**: Here are the different types of data used in the application.

## General information

Upon execution, it can be observed that there are some warnings, I am aware of this. This is because in the file `src/components/select/SelectBook.tsx` there is commented code that, if uncommented, can provide an additional functionality.

It's likely that when you click the 'Count!' button, you won't have time to see the spinner or the progress, as depending on the words being searched, it can be quite fast. To be able to see this, from the 'network' section of the browser console, you can simulate a 'slow 3G connection,' and then you will be able to see the progress and the loading spinner.
