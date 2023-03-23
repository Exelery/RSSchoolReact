import React, { FormEvent, Ref, RefAttributes } from 'react';
import Header from '../components/Header';
import '../styles/forms.scss';
import { validFileType } from '../utils';
import ErrorMessage from '../components/ErrorMessage';
import { IItem, Itags } from '../utils/types';
import CardsList from '../components/CardsList';
import Tags from '../components/form/Tags';
import MySelect from '../components/form/Select';

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
    errorTags: boolean;
    items: IItem[];
    id: number;
  }
> {
  textInput: React.RefObject<HTMLInputElement>;
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
      errorTags: false,
      id: 0,
    };
    this.textInput = React.createRef();
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
        if (this.fileInput.current.files[0] && validFileType(this.fileInput.current.files[0])) {
          const objectURL = window.URL.createObjectURL(this.fileInput.current.files[0]);
          this.setState({ img: objectURL, imgName: this.fileInput.current.files[0].name });
        } else {
          this.setState({ errorFileInput: true });
        }
      }
      console.log('tags', this.getTags());
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
        this.setState((prev) => ({ id: prev.id + 1 }));
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
      this.setState({ errorTags: tags.length === 0 });
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
          noValidate
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
                className={`border-2 font-bold py-2 px-4 rounded-full focus:outline-none
                  ${this.borderColor(this.state.errorTextInput)}`}
              />
              <ErrorMessage error={this.state.errorTextInput} />
            </div>
          </div>

          <Tags
            isError={this.state.errorTags}
            style={this.borderColor(this.state.errorTags)}
            ref={
              {
                tagStyle: this.tagStyle,
                tagBussines: this.tagBussines,
                tagLife: this.tagLife,
                tagHome: this.tagHome,
              } as unknown as Ref<Itags>
            }
          />

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
              className={`cursor-pointer border-2 font-bold py-2 px-4 rounded-full focus:outline-none ${this.borderColor(
                this.state.errorFileInput
              )}`}
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
              className={`border-2 rounded-full cursor-pointer p-1 
              ${this.borderColor(this.state.errorDatePicker)}`}
            />
            <ErrorMessage error={this.state.errorDatePicker} />
          </div>
          <MySelect
            ref={this.select}
            style={this.borderColor(this.state.errorSelect)}
            isError={this.state.errorSelect}
          />
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
