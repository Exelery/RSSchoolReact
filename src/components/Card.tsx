import React from 'react';
import '../styles/card.scss';

type IItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export default function Card(props: { item: IItem }) {
  return (
    <div className="card">
      <div className="position-relative">
        <div
          className="card__overlay"
          // style={{ 'background-image': 'url(' + props.item.images[0] + ')' }}
        >
          <div className="badge">{props.item.title}</div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.item.brand}</h5>
        <h6 className="card-subtitle">{props.item.price} $</h6>
        <p className="card-text">{props.item.description}</p>
      </div>
      <div className="card-footer">
        <div className="media align-items-center">
          <div className="media-body">
            <a className="card-link text-primary read-more" href="">
              Buy
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
