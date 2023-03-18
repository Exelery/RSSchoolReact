import React from 'react';
import '../styles/searchbar.scss';

export default class SearchBar extends React.Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(1);
    const target = e.target as HTMLInputElement;
    this.setState({
      value: target.value,
    });
  };

  componentDidMount = () => {
    window.addEventListener('beforeunload', this.saveToLocale);
    this.setState({
      value: localStorage.getItem('search') || '',
    });
  };
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.saveToLocale);
    this.saveToLocale();
  }

  saveToLocale = () => {
    localStorage.setItem('search', this.state.value);
  };

  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          key="searchBar"
          value={this.state.value}
          placeholder={'What are you looking for?'}
          onChange={this.handleChange}
        />
        <button type="submit" className="searchButton bg-sky-600 ">
          ✎
        </button>
      </div>
    );
  }
}
