import React, { Component } from 'react';
import IllustrationMoon from '../Shared/IllustrationMoon';

class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.largeStars = 25;
    this.smallStars = 100;
  }

  render() {
    return (
      <section className="hero illustration space full-y">
        <div className="body">
          <div className="container">
            <h1 className="title">404</h1>
          </div>
        </div>
        {[...Array(this.largeStars)].map((e, i) => (
          <span className="star lg" key={i} />
        ))}
        {[...Array(this.smallStars)].map((e, i) => (
          <span className="star" key={i} />
        ))}
        <div className="moon">
          <IllustrationMoon />
        </div>
      </section>
    );
  }
}

export default PageNotFound;
