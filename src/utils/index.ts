// const fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];

export function validFileType(file: File) {
  if (file.type.startsWith('image')) {
    return true;
  }

  return false;
}
