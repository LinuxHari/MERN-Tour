export const getFormErrorMessages = (
  errors: object,
  messages: string[] = [],
  refs: HTMLElement[] = [],
) => {
  for (const error of Object.values(errors)) {
    if (typeof error.message !== "string") {
      getFormErrorMessages(error, messages, refs);
      continue;
    }
    messages.push(error.message);
    refs.push(error.ref);
  }

  return {errorMessages: messages, refs};
};
