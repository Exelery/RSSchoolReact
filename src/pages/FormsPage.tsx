import React, { ChangeEventHandler, FormEvent } from 'react';
import Header from '../components/Header';
import '../styles/forms.scss';
import { validFileType } from '../utils';
import ErrorMessage from '../components/ErrorMessage';
import { IItem } from '../utils/types';
import CardsList from '../components/CardsList';

export default class FormsPage extends React.Component<
  object,
  {
    img: string;
    imgName: string;
    errorSelect: boolean;
    errorTextInput: boolean;
    errorCheckboxField: boolean;
    errorFileInput: boolean;
    errorDatePicker: boolean;
    items: IItem[];
    id: number;
  }
> {
  textInput: React.RefObject<HTMLInputElement>;
  checkboxField: React.RefObject<HTMLDivElement>;
  menCheck: React.RefObject<HTMLInputElement>;
  womenCheck: React.RefObject<HTMLInputElement>;
  tagHome: React.RefObject<HTMLInputElement>;
  tagStyle: React.RefObject<HTMLInputElement>;
  tagBussines: React.RefObject<HTMLInputElement>;
  tagLife: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  datePicker: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      img: '',
      imgName: '',
      items: [],
      errorSelect: false,
      errorTextInput: false,
      errorCheckboxField: false,
      errorFileInput: false,
      errorDatePicker: false,
      id: 0,
    };
    this.textInput = React.createRef();
    this.checkboxField = React.createRef();
    this.menCheck = React.createRef();
    this.womenCheck = React.createRef();

    this.tagHome = React.createRef();
    this.tagStyle = React.createRef();
    this.tagBussines = React.createRef();
    this.tagLife = React.createRef();
    this.fileInput = React.createRef();
    this.datePicker = React.createRef();
    this.select = React.createRef();
    this.form = React.createRef();

    this.submitForm = this.submitForm.bind(this);
  }

  async submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      this.textInput.current &&
      this.select.current &&
      this.datePicker.current &&
      this.fileInput.current
    ) {
      console.log('title: ', this.textInput.current.value);
      this.setState({ errorTextInput: !this.textInput.current.value });
      this.setState({ errorSelect: !this.select.current.value });
      this.setState({ errorDatePicker: !this.datePicker.current.value });
      this.setState({ errorFileInput: !this.fileInput.current.value });
      if (this.fileInput.current.files) {
        if (validFileType(this.fileInput.current.files[0])) {
          const objectURL = window.URL.createObjectURL(this.fileInput.current.files[0]);
          this.setState({ img: objectURL, imgName: this.fileInput.current.files[0].name });
        } else {
          // this.setState((prev) => ({ errorFileInput: true }));
          this.setState({ errorFileInput: true });
          // this.setState({ errorFileInput: true });
        }
      }
      // console.log(this.getGender());
      // console.log('tags', this.getTags());
      if (
        !(
          !this.textInput.current.value ||
          !this.select.current.value ||
          !this.datePicker.current.value ||
          !this.fileInput.current.value
        ) &&
        this.fileInput.current.files
      ) {
        this.setState({
          items: [
            ...this.state.items,
            {
              id: this.state.id,
              date: this.datePicker.current.value,
              gender: this.getGender() || '',
              title: this.textInput.current.value,
              rating: this.select.current.value,
              category: this.getTags() || [],
              image: window.URL.createObjectURL(this.fileInput.current.files[0]),
            },
          ],
        });
        this.setState({ id: this.state.id + 1 });
        // this.form.current.reset();
      }
    }
  }

  getGender() {
    if (this.menCheck.current && this.womenCheck.current) {
      return this.menCheck.current.checked
        ? this.menCheck.current.value
        : this.womenCheck.current.value;
    }
  }

  getTags() {
    const tags = [];
    if (
      this.tagHome.current &&
      this.tagStyle.current &&
      this.tagLife.current &&
      this.tagBussines.current
    ) {
      this.tagHome.current.checked ? tags.push(this.tagHome.current.value) : '';
      this.tagStyle.current.checked ? tags.push(this.tagStyle.current.value) : '';
      this.tagLife.current.checked ? tags.push(this.tagLife.current.value) : '';
      this.tagBussines.current.checked ? tags.push(this.tagBussines.current.value) : '';
      return tags;
    }
  }

  borderColor(bool: boolean) {
    return bool ? 'border-red-600 hover:border-red-700' : 'border-blue-500 hover:border-blue-700';
  }

  render() {
    return (
      <div className="Forms">
        <Header title="Forms" />
        <form
          className="flex flex-col items-center space-y-3"
          onSubmit={(e) => this.submitForm(e)}
          ref={this.form}
        >
          <div>
            <legend>Create new post</legend>
            <div>
              <label htmlFor="title">Title</label>
              <input
                autoFocus
                type="text"
                placeholder="Input title"
                name="title"
                id=""
                ref={this.textInput}
                className={
                  'border-2 font-bold py-2 px-4 rounded-full focus:outline-none ' +
                  this.borderColor(this.state.errorTextInput)
                }
              />
              <ErrorMessage error={this.state.errorTextInput} />
            </div>
          </div>
          <div className="flex gap-3" ref={this.checkboxField}>
            <div className="tag home">
              <label>
                <input type="checkbox" name="tags" id="" value="home" ref={this.tagHome} />
                <span> #Home</span>
              </label>
            </div>
            <div className="tag home">
              <label>
                <input type="checkbox" name="tags" id="" value="life" ref={this.tagLife} />
                <span> #Life</span>
              </label>
            </div>
            <div className="tag home">
              <label>
                <input type="checkbox" name="tags" id="" value="bussines" ref={this.tagBussines} />
                <span> #Bussines</span>
              </label>
            </div>
            <div className="tag home">
              <label>
                <input type="checkbox" name="tags" id="" value="style" ref={this.tagStyle} />
                <span> #Style</span>
              </label>
            </div>
          </div>

          <div className="switch-field">
            <input
              type="radio"
              id="switch_left"
              name="switchToggle"
              value="men"
              defaultChecked
              ref={this.menCheck}
            />
            <label htmlFor="switch_left">{'men'}</label>

            <input
              type="radio"
              id="switch_right"
              name="switchToggle"
              value={'women'}
              ref={this.womenCheck}
            />
            <label htmlFor="switch_right">{'women'}</label>
          </div>
          <div className="flex flex-col fileInputField gap-1">
            <label
              htmlFor="fileInput"
              className={
                'cursor-pointer border-2 font-bold py-2 px-4 rounded-full focus:outline-none ' +
                this.borderColor(this.state.errorFileInput)
              }
            >
              {this.state.imgName ? this.state.imgName : 'Upload image (PNG, JPG)'}
            </label>
            <input type="file" id="fileInput" accept="image/*" ref={this.fileInput} />
            <ErrorMessage error={this.state.errorFileInput} />
            {/* <img
              src={this.state.img}
              className={this.state.img ? 'w-72 object-contain h-auto max-h-72' : ''}
            /> */}
          </div>
          <div className="flex flex-col">
            <label htmlFor="date">Выберите дату</label>
            <input
              ref={this.datePicker}
              type="date"
              name=""
              id="date"
              className={
                'border-2 rounded-full cursor-pointer p-1 ' +
                this.borderColor(this.state.errorDatePicker)
              }
            />
            <ErrorMessage error={this.state.errorDatePicker} />
          </div>
          <div>
            <label htmlFor="select">Выберите ваш любимый вкус:</label>
            <select
              defaultValue={''}
              id="select"
              ref={this.select}
              className={
                'cursor-pointer border-blue-500 border-2 font-bold py-1 px-4 rounded-full focus:outline-none ' +
                this.borderColor(this.state.errorSelect)
              }
            >
              <option value="" disabled hidden>
                Choose here
              </option>
              <option value="grapefruit">Грейпфрут</option>
              <option value="lime">Лайм</option>
              <option value="coconut">Кокос</option>
              <option value="mango">Манго</option>
            </select>
            <ErrorMessage error={this.state.errorSelect} />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded-full"
          >
            Фокус
          </button>
        </form>
        <CardsList items={this.state.items} />
      </div>
    );
  }
}
