import React, { ChangeEventHandler, FormEvent, Ref } from 'react';
import { validFileType } from '../../utils';
import { IItem, Itags } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';
import RadioBtns from './RadioBtns';
import MySelect from './Select';
import Tags from './Tags';

export default class FormComponent extends React.Component<
  { addCard: (item: IItem) => void },
  {
    img: string;
    imgName: string;
    errorSelect: boolean;
    errorTextInput: boolean;
    errorCheckboxField: boolean;
    errorFileInput: boolean;
    errorDatePicker: boolean;
    errorTags: boolean;
    errorRadio: boolean;
  }
> {
  textInput: React.RefObject<HTMLInputElement>;
  radioBtns: React.RefObject<RadioBtns>;
  tags: React.RefObject<HTMLInputElement>[];
  fileInput: React.RefObject<HTMLInputElement>;
  select: React.RefObject<HTMLSelectElement>;
  datePicker: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;
  addCard: (item: IItem) => void;
  id: number;
  tagsArr: string[];

  constructor(props: { addCard: (item: IItem) => void }) {
    super(props);
    this.addCard = props.addCard;
    this.state = {
      img: '',
      imgName: 'Upload image (PNG, JPG)',
      errorSelect: false,
      errorTextInput: false,
      errorCheckboxField: false,
      errorFileInput: false,
      errorDatePicker: false,
      errorTags: false,
      errorRadio: false,
    };
    this.tagsArr = ['home', 'life', 'bussines', 'style'];
    this.textInput = React.createRef();
    this.radioBtns = React.createRef();
    this.tags = this.tagsArr.map(() => React.createRef());
    this.fileInput = React.createRef();
    this.datePicker = React.createRef();
    this.select = React.createRef();
    this.form = React.createRef();
    this.id = 0;
  }

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      if (this.fileInput.current && this.fileInput.current.files) {
        const objectURL = window.URL.createObjectURL(this.fileInput.current.files[0]);
        this.setState({ img: objectURL, imgName: this.fileInput.current.files[0].name });
      }
    }
  };

  borderColor(bool: boolean) {
    return bool ? 'border-red-600 hover:border-red-700' : 'border-blue-500 hover:border-blue-700';
  }
  submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      this.textInput.current &&
      this.select.current &&
      this.datePicker.current &&
      this.fileInput.current
    ) {
      this.setState({ errorTextInput: !this.textInput.current.value });
      this.setState({ errorSelect: !this.select.current.value });
      this.setState({ errorDatePicker: !this.datePicker.current.value });
      this.setState({ errorFileInput: !this.fileInput.current.value });
      this.setState({ errorRadio: !this.radioBtns.current?.getValue() });
      this.setState({ errorTags: this.getTags().length === 0 });

      if (
        !this.fileInput.current.files ||
        !this.fileInput.current.files[0] ||
        !validFileType(this.fileInput.current.files[0])
      ) {
        this.setState({ errorFileInput: true });
      }

      if (
        !(
          !this.textInput.current.value ||
          !this.select.current.value ||
          !this.datePicker.current.value ||
          !this.fileInput.current.value ||
          !this.radioBtns.current?.getValue() ||
          this.getTags().length === 0
        ) &&
        this.fileInput.current.files
      ) {
        const item = {
          id: this.id++,
          date: this.datePicker.current.value,
          gender: this.radioBtns.current?.getValue() || '',
          title: this.textInput.current.value,
          rating: this.select.current.value,
          category: this.getTags() || [],
          image: window.URL.createObjectURL(this.fileInput.current.files[0]),
        };
        this.addCard(item);
        this.cleanForm();
      }
    }
  }

  cleanForm() {
    if (this.form.current) {
      this.form.current.reset();
      this.setState({ img: '', imgName: 'Upload image (PNG, JPG)' });
    }
  }

  getTags() {
    return this.tags
      .map((el) => {
        return el.current?.checked ? el.current?.value : '';
      })
      .filter((el) => !!el);
  }

  render() {
    return (
      <form
        noValidate
        className="col-span-1 min-w-300 flex flex-col items-center space-y-3"
        ref={this.form}
        onSubmit={(e) => {
          this.submitForm(e);
        }}
      >
        <div>
          <legend>Create new post</legend>
          <div className="flex flex-col items-start">
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
          tagsArr={this.tagsArr}
          ref={
            {
              tags: this.tags,
            } as unknown as Ref<Itags> | undefined
          }
        />
        <RadioBtns
          names={['men', 'women']}
          style={this.borderColor(this.state.errorRadio)}
          isError={this.state.errorRadio}
          ref={this.radioBtns}
        />
        <div className="flex flex-col fileInputField gap-1">
          <label
            htmlFor="fileInput"
            className={`cursor-pointer border-2 font-bold py-2 px-4 rounded-full focus:outline-none ${this.borderColor(
              this.state.errorFileInput
            )}`}
          >
            {this.state.imgName}
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            ref={this.fileInput}
            onChange={this.handleFileChange}
          />
          <ErrorMessage error={this.state.errorFileInput} />
          <img
            src={this.state.img}
            className={this.state.img ? 'w-72 object-contain h-auto max-h-72' : ''}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date">Choose the date</label>
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
          Create
        </button>
      </form>
    );
  }
}
