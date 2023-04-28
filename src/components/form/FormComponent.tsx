import React from 'react';
import { validFileType, borderColor } from '../../utils';
import { IFormInput } from '../../utils/types';
import ErrorMessage from '../ErrorMessage';
import RadioBtns from './RadioBtns';
import MySelect from './Select';
import Tags from './Tags';
import { useForm, SubmitHandler } from 'react-hook-form';

import { addItem } from '@/store/formSlice';
import { useAppDispatch } from '../../store/hook';

const tagsArr = ['home', 'life', 'bussines', 'style'];
const radioArr = ['men', 'women'];
const selectArr = ['Grapefruit', 'Lime', 'Coconut', 'Mango'];

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { rating: '' },
  });
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(
      addItem({
        ...data,
        image: window.URL.createObjectURL(data.image[0]),
        id: Date.now().toString(),
      })
    );
    reset();
  };

  const watchFileUpload = watch('image');

  return (
    <form
      noValidate
      className="col-span-1 min-w-300 flex flex-col items-center space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <legend>Create new post</legend>
        <div className="flex flex-col items-start">
          <label htmlFor="title">Title</label>
          <input
            data-test="input-title"
            autoFocus
            type="text"
            placeholder="Input title"
            {...register('title', { required: 'Title is required' })}
            className={`border-2 font-bold py-2 px-4 rounded-full focus:outline-none
                ${borderColor(!!errors.title)}`}
          />
          <ErrorMessage error={!!errors.title}>{errors.title?.message}</ErrorMessage>
        </div>
      </div>
      <Tags values={tagsArr} register={register} error={errors.category} />
      <RadioBtns values={radioArr} register={register} error={errors.gender} />
      <div className="flex flex-col fileInputField gap-1">
        <label
          htmlFor="fileInput"
          className={`cursor-pointer border-2 font-bold
           py-2 px-4 rounded-full focus:outline-none ${borderColor(!!errors.image)}`}
        >
          {watchFileUpload && watchFileUpload[0]
            ? watchFileUpload[0].name
            : 'Upload image (PNG, JPG)'}
        </label>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          {...register('image', {
            required: true,
            validate: {
              lessThan5MB: (files) => files[0]?.size < 1048576 || 'Max 1MB',
              acceptedFormats: (files) => validFileType(files[0]) || 'required PNG or JPEG',
            },
          })}
        />
        <ErrorMessage error={!!errors.image}>{errors.image?.message}</ErrorMessage>
        {watchFileUpload && watchFileUpload[0] ? (
          <img
            src={window.URL.createObjectURL(watchFileUpload[0])}
            className={'w-72 object-contain h-auto max-h-72'}
          />
        ) : null}
      </div>
      <div className="flex flex-col">
        <label htmlFor="date">Choose the date</label>
        <input
          {...register('date', { required: 'Choose correct date' })}
          type="date"
          id="date"
          className={`border-2 rounded-full cursor-pointer p-1 
            ${borderColor(!!errors.date)}`}
        />
        <ErrorMessage error={!!errors.date}>{errors.date?.message}</ErrorMessage>
      </div>
      <MySelect register={register} error={errors.rating} values={selectArr} />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded-full"
      >
        Create
      </button>
    </form>
  );
}
