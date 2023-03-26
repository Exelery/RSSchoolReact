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
      <div className="Forms">
        <Header title="Forms" />
        <FormComponent addCard={this.addCard} />
        <CardsList items={this.state.items} />
      </div>
    );
  }
}
