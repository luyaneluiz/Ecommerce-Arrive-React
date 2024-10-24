export const errorHandler = (err: any, req: any, res: any, next: any) => {
    res.status(err.statusCode || 500).send({
        error: err.message || "Internal Server Error",
    })
}
