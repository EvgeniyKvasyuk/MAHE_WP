export const handleError = (error: Error, info: { componentStack: string }) => {
  console.log(error, info, 'Message');
};
