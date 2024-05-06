const ErrorHander = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal server error";
    return res.status(statusCode).json({ success: false, message, statusCode });
};

export default ErrorHander;
