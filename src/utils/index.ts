const textSlicer = (txt: string, len: number) => {
  if (txt.length > len) {
    return `${txt.slice(0, len)}...`;
  } else return txt;
};

export { textSlicer };
