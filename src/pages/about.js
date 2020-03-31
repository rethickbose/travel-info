import React from "react";

const About = ({ posts }) => {
  return (
    <div>
      <table class="striped">
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country Name</th>
            <th>Continent</th>
            <th>Currency Used</th>
            <th>Languages Spoken </th>
          </tr>
        </thead>
        {posts.map((article, key) => (
          <tbody>
            <tr>
              <td> {article.cityName}</td>
              <td>{article.countryName}</td>
              <td>{article.continent}</td>
              <td>{article.currencyUsed}</td>
              <td>{article.languages.map(language => `${language} `)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default About;
