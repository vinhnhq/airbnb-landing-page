# readme

An AirBnb landing page sample build on NextJs

- AutoComplete

  - an auto complete to simulate the current one on AirBnb page. focus and search to appear the list countries for selecting. it allows user
    to navigate by keyboard and select by enter. click outside or select to close the list items
  - data will be fetched from this source <https://api.first.org/> and limit by 5 items per request. using Abort Controller to cancel legacy request.
    firstly, my approach is using debounce around 200ms but after researching found that way is efficiency

- Layout

  - just simple layout with flex. current do not have responsive layout

- Dark Mode

  - leverage Context to create ThemeProvider for to build a theme. could be improved by Reducer

- Testing

  - react-testing-library and jest

- Demo

  - <https://airbnb-landing-page.vercel.app/>
