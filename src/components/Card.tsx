import React from 'react';
import '../styles/card.scss';

export default function Card() {
  return (
    <div className="card border-0 three">
      <div className="position-relative">
        <div className="card-img-overlay two">
          <span className="badge badge-light text-uppercase">FASHION</span>
        </div>
      </div>
      <div className="card-body two">
        <h5 className="card-title">Fashion today</h5>
        <h6 className="card-subtitle mb-2 text-muted">January 16 2023</h6>
        <p className="card-text mt-4">
          Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod
          proident sed excepteur excepteur magna irure ex officia ea sunt in incididunt.
        </p>
      </div>
      <div className="card-footer">
        <div className="media align-items-center">
          <div className="media-body">
            <a className="card-link text-primary read-more" href="javascript://">
              Read More
            </a>
          </div>

          <div className="footerright">
            <div className="tnlink3">
              <i className="fas fa-heart"></i>
            </div>
            <div className="tnlink3">
              <i className="fas fa-share-nodes"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
