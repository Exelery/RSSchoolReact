import React from 'react';
import Header from '../components/Header';
import '../styles/forms.scss';
import { IItem } from '../utils/types';
import CardsList from '../components/CardsList';
import FormComponent from '../components/form/FormComponent';
import Notification from '../components/form/Notification';

export default class FormsPage extends React.Component<
  object,
  {
    items: IItem[];
    notificationVisible: boolean;
  }
> {
  timer: ReturnType<typeof setTimeout> | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
      notificationVisible: false,
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(item: IItem) {
    this.setState({
      items: [...this.state.items, item],
    });
    this.showNotification();
  }
  showNotification() {
    if (this.timer) clearTimeout(this.timer);
    this.setState({ notificationVisible: true });
    this.timer = setTimeout(() => {
      this.setState({ notificationVisible: false });
    }, 3000);
  }

  render() {
    return (
      <div className="w-full">
        <Header title="Forms" />
        <div className="Forms flex md:flex-wrap m-8 gap-8">
          <FormComponent addCard={this.addCard} />
          <CardsList items={this.state.items} />
        </div>
        {this.state.notificationVisible ? <Notification message="Card Added" /> : null}
      </div>
    );
  }
}
