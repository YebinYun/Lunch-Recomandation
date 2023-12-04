const ApiErrorHandling = (error) => {
    let message = "알 수 없는 오류";
    if (error instanceof Error) message = error.message;
    console.log(message);
    throw error;
};

export default ApiErrorHandling;
