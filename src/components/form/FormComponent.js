import React from 'react';
import { validFileType, borderColor } from '../../utils';
import ErrorMessage from '../ErrorMessage';
import RadioBtns from './RadioBtns';
import MySelect from './Select';
import Tags from './Tags';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { addItem } from '@/store/formSlice';
import { useAppDispatch } from '../../store/hook';
const tagsArr = ['home', 'life', 'bussines', 'style'];
const radioArr = ['men', 'women'];
const selectArr = ['Grapefruit', 'Lime', 'Coconut', 'Mango'];
export default function FormComponent() {
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: { rating: '' },
    });
    const dispatch = useAppDispatch();
    const onSubmit = (data) => {
        dispatch(addItem({
            ...data,
            image: window.URL.createObjectURL(data.image[0]),
            id: Date.now().toString(),
        }));
        reset();
    };
    const watchFileUpload = watch('image');
    return (React.createElement("form", { noValidate: true, className: "col-span-1 min-w-300 flex flex-col items-center space-y-3", onSubmit: handleSubmit(onSubmit) },
        React.createElement("div", null,
            React.createElement("legend", null, "Create new post"),
            React.createElement("div", { className: "flex flex-col items-start" },
                React.createElement("label", { htmlFor: "title" }, "Title"),
                React.createElement("input", { autoFocus: true, type: "text", placeholder: "Input title", ...register('title', { required: 'Title is required' }), className: `border-2 font-bold py-2 px-4 rounded-full focus:outline-none
                ${borderColor(!!errors.title)}` }),
                React.createElement(ErrorMessage, { error: !!errors.title }, errors.title?.message))),
        React.createElement(Tags, { values: tagsArr, register: register, error: errors.category }),
        React.createElement(RadioBtns, { values: radioArr, register: register, error: errors.gender }),
        React.createElement("div", { className: "flex flex-col fileInputField gap-1" },
            React.createElement("label", { htmlFor: "fileInput", className: `cursor-pointer border-2 font-bold
           py-2 px-4 rounded-full focus:outline-none ${borderColor(!!errors.image)}` }, watchFileUpload && watchFileUpload[0]
                ? watchFileUpload[0].name
                : 'Upload image (PNG, JPG)'),
            React.createElement("input", { type: "file", id: "fileInput", accept: "image/*", ...register('image', {
                    required: true,
                    validate: {
                        lessThan5MB: (files) => files[0]?.size < 1048576 || 'Max 1MB',
                        acceptedFormats: (files) => validFileType(files[0]) || 'required PNG or JPEG',
                    },
                }) }),
            React.createElement(ErrorMessage, { error: !!errors.image }, errors.image?.message),
            watchFileUpload && watchFileUpload[0] ? (React.createElement("img", { src: window.URL.createObjectURL(watchFileUpload[0]), className: 'w-72 object-contain h-auto max-h-72' })) : null),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "date" }, "Choose the date"),
            React.createElement("input", { ...register('date', { required: 'Choose correct date' }), type: "date", id: "date", className: `border-2 rounded-full cursor-pointer p-1 
            ${borderColor(!!errors.date)}` }),
            React.createElement(ErrorMessage, { error: !!errors.date }, errors.date?.message)),
        React.createElement(MySelect, { register: register, error: errors.rating, values: selectArr }),
        React.createElement("button", { type: "submit", className: "bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded-full" }, "Create")));
}
