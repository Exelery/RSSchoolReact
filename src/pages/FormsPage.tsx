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
    id: number;
  }
> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
      id: 0,
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(item: IItem) {
    item.id = this.state.id;
    this.setState({
      items: [...this.state.items, item],
    });
    this.setState((prev) => ({ id: prev.id + 1 }));
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
