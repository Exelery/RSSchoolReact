const fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png', 'image/jpeg'];

export function validFileType(file: File) {
  return fileTypes.includes(file.type);
}

export function borderColor(bool: boolean) {
  return bool ? 'border-red-600 hover:border-red-700' : 'border-blue-500 hover:border-blue-700';
}
