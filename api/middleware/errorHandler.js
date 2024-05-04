const ErrorHander = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const mesage = error.message || "Internal server error";
    return res.status(statusCode).json({ success: false, statusCode, mesage });
};

export default ErrorHander;
