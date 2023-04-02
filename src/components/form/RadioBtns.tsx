import React from 'react';
import ErrorMessage from '../ErrorMessage';

type IRadiProps = {
  names: string[];
  isError: boolean;
  style: string;
};

export default class RadioBtns extends React.Component<IRadiProps> {
  radio: React.RefObject<HTMLInputElement>[];
  constructor(props: IRadiProps) {
    super(props);
    this.radio = this.props.names.map(() => React.createRef<HTMLInputElement>());
  }

  getValue() {
    return this.radio
      .map((el) => {
        return el.current?.checked ? el.current.value : '';
      })
      .filter((el) => !!el)[0];
  }
  render() {
    return (
      <div className="switch-field">
        {this.props.names.map((el, index) => (
          <label htmlFor={`switch_${el}`} key={el}>
            <input
              type="radio"
              id={`switch_${el}`}
              name="switchToggle"
              value={el}
              ref={this.radio[index]}
            />
            <span className={`solid border-[1px] cursor-pointer ${this.props.style}`}>{el}</span>
          </label>
        ))}
        <ErrorMessage error={this.props.isError}> Select one option! </ErrorMessage>
      </div>
    );
  }
}
