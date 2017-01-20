var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather app built on React. I built this for the <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/">Complete React Web App Developer Course</a> on Udemy. I learned a lot while building it!</p>
      <p>Here are some of the tools I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework I used. I learned all about what makes React great and how to use its awesome features, including React Router.
          </li>
          <li>
            <a href="https://webpack.github.io/">Webpack</a> - I used this build tool during the development process.
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - The app was styled using the responsive front-end framework Foundation. I also built a custom error modal using Foundation components.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name. Note that Open Weather Map is very liberal with approximate matching of search strings, so you may need to play around to get the custom error modal to appear. This is a problem with the API!
          </li>
        </ul>
    </div>
  )
};
module.exports = About;
