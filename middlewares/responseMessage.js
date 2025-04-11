


export const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
}

export const errorResponse = (res, statusCode, message, error) => {
    return res.status(statusCode || 500).json({
        success: false,
        message: message || "internal server error",
        error,
    });
}


export const validationError = (res, statusCode, message,) => {
    return res.status(statusCode || 400).json({
        success: false,
        message,
    });
}