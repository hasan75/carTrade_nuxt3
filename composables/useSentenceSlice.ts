export const useSentenceSlice = () => {
    function sliceSentence(text:string, maxLength:number):string {
        if (text.length <= maxLength) {
            return text;
        }

        const words = text.split(' ');
        let slicedText = '';
        let wordCount = 0;

        for (const word of words) {
            if ((slicedText + word).length <= maxLength) {
                slicedText += word + ' ';
                wordCount++;
            } else {
                break;
            }
  }

  return slicedText.trim() + (wordCount < words.length ? ' ...' : '');
}

    return {
        sliceSentence,
    }
}