const fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png'];

export function validFileType(file: File) {
  for (const el of fileTypes) {
    if (file.type.startsWith('image')) {
      return true;
    }
  }

  return false;
}
