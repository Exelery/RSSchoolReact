import React from 'react';
import Header from '../components/Header';
import '../styles/forms.scss';
import { IItem } from '../utils/types';
import CardsList from '../components/CardsList';
import FormComponent from '../components/form/FormComponent';

export default class FormsPage extends React.Component<
  object,
  {
    items: IItem[];
  }
> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(item: IItem) {
    this.setState({
      items: [...this.state.items, item],
    });
  }

  render() {
    return (
      <div className="w-full">
        <Header title="Forms" />
        <div className="Forms flex md:flex-wrap m-8 gap-8">
          <FormComponent addCard={this.addCard} />
          <CardsList items={this.state.items} />
        </div>
      </div>
    );
  }
}
